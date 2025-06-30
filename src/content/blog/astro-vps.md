---
title: 'Desplegando un Sitio hecho con Astro usando Apache (como cavernícolas)'
author: 'EdMateo'
description: 'Guía paso a paso para desplegar un sitio web hecho con Astro en tu propio VPS usando Apache, con y sin SSR. Sin usar vercel, docker u otro shitware'
pubDate: 2025-01-24T19:00:00-05:00
---

[Astro](https://astro.build) es un framework excelente para desarrollar sitios estáticos (Blogs de mierda), ya sea por su soporte a archivos de *markdown*, *server islands*, *server side rendering*, que todo se compile a *HTML* puro, etc.

Pero, hay un problema muy gordo que hasta la fecha no ha sido arreglado en la documentación de Astro, en la [guía de despliegue](https://docs.astro.build/es/guides/deploy/) solo salen los servicios de hosting sidosos que usan los soydevs, ¿qué hay de los que tenemos un VPS y queremos desplegar, acaso no se puede? Bueno, la verdad es que sí es posible, y realmente es muy sencillo. El día de hoy, les voy a compartir **2 maneras** para desplegar su sitio de Astro. Acá te dejo el link de cada opción

- [Opción 1: Sin SSR](#opcion-1)
- [Opción 2: Con SSR](#opcion-2)

<h2 id="opcion-1">Opción 1: Sin SSR</h2>

En el caso de que solo queramos crear un blog simple, que no use *server side rendering* y cosas que solo los soydevs aprovecharemos, puedes usar esto, lo bueno de esta configuración es que no tendrás que cambiar **NADA** del código fuente de tu sitio, es muy útil para los vagos como yo.

1. Clona el repositorio del código fuente de tu sitio en tu VPS y ve al directorio donde se generó el sitio:

    ~~~bash
    git clone https://codeberg.com/niggablox/astro-shitty-site.git
    cd astro-shitty-site/
    ~~~

2. Instala dependencias de tu sitio y compílalo
    
    ~~~bash
    npm install
    npm run build
    ~~~

3. Activa los siguientes módulos de apache

    ~~~bash
    sudo a2enmod rewrite
    sudo a2enmod ssl
    sudo a2enmod headers
    sudo a2enmod actions
    ~~~
   
4. Crea un fichero `.conf` en `/etc/apache2/sites-avaiable/` y usa esta configuración:

    ~~~apache title="website.conf"
    # Esto muestra el sitio en HTTPS, ejemplo: http://tudominio.org, no redirecciona
    <VirtualHost *:80>
      ServerName tudominio.org
      DocumentRoot /var/www/website/dist

      ErrorDocument 404 /404.html

      <Directory /var/www/website/dist>
          Options +MultiViews
          AllowOverride All
          Require all granted
      </Directory>

      RewriteEngine On
      RewriteCond %{REQUEST_FILENAME} !-d
      RewriteCond %{REQUEST_FILENAME} !-f
      RewriteRule ^([^\.]+)$ $1/index.html [NC,L]
    </VirtualHost>

    # Esto es para tener tu sitio en HTTPS
    <VirtualHost *:443>
      ServerName tudominio.org
      DocumentRoot /var/www/website/dist

      ErrorDocument 404 /404.html

      Options +MultiViews
      RewriteEngine On
      RewriteCond %{REQUEST_FILENAME} !-d
      RewriteCond %{REQUEST_FILENAME} !-f
      RewriteRule ^([^\.]+)$ $1/index.html [NC,L]

      SSLEngine on
      SSLCertificateFile /etc/letsencrypt/live/tudominio.org/fullchain.pem
      SSLCertificateKeyFile /etc/letsencrypt/live/tudominio.org/privkey.pem
      SSLCertificateChainFile /etc/letsencrypt/live/tudominio.org/chain.pem
    </VirtualHost>
    ~~~

   **NOTA:** Recuerda cambiar `tudominio.org` por el dominio que vas a usar para alojar el sitio, puedes cambiarlo rápidamente usando **VIM**:

     ~~~diff
     :%s/tudominio.org/[acá debe ir tu dominio]/g
     ~~~

   Cuando ya hayas hecho esto, guarda el archivo con `:wqa`.

5. Pide el certificado SSL con certbot:

    ~~~bash
    sudo systemctl stop apache2
    sudo certbot certonly -d tudominio.org
    sudo systemctl start apache2
    ~~~

6. **FINALMENTE**, al entrar a `http://tudominio.com` deberías ver tu sitio hecho con Astro

<h2 id="opcion-2">Opción 2: Con SSR</h2>

Para poder tener *server side rendering*, *server islands* y toda la mierda que usamos los soydevs. Correremos un servidor con *node.js* y usaremos *Apache* como **Proxy Inverso**. Para ello, debes de hacer unos cuantos cambios en tu código fuente de tu sitio:

1. Cambia tu archivo `astro.config.mjs` para que utilice el adaptador de *node.js*, algo así:

    ~~~javascript title="astro.config.mjs" ins={5-8}
    import { defineConfig } from 'astro/config';
    import node from '@astrojs/node';

    export default defineConfig({
      output: 'server',
      adapter: node({
        mode: 'standalone',
      }),
    });
    ~~~

2. Guarda y verifica si el servidor de *node.js* funciona correctamente

    ~~~bash
    npm run build
    node dist/server/entry.mjs
    ~~~

    El resultado debería ser tu sitio corriendo en `http://localhost:4321`.

3. Si todo funciona, clona el repo como en el paso 1 de la primera Opción y compílalo. 

4. Instala [pm2](https://pm2.keymetrics.io/) para mantener el servidor corriendo en segundo plano:

    ~~~bash
    npm install pm2 -g && pm2 install pm2-logrotate
    ~~~

5. Configura pm2 para que inicie tu servidor:

    ~~~bash
    pm2 start dist/server/entry.mjs --name [el-sapo-perro-nombre-que-le-de-la-hpta-gana-OwO]
    ~~~

6. Activa los módulos necesarios para hacer **proxy inverso** en Apache:
    ~~~bash
    sudo a2enmod proxy
    sudo a2enmod proxy_http
    sudo a2enmod headers
    ~~~

7. Crea un fichero `.conf` en `/etc/apache2/sites-avaiable/` y usa esta configuración:

    ~~~apache title="website.conf"
    <VirtualHost *:80>
      ServerName tudominio.org
      ProxyPreserveHost On

      ProxyPass / http://127.0.0.1:4321/
      ProxyPassReverse / http://127.0.0.1:4321/

      ErrorLog /dev/null
      CustomLog /dev/null
    </VirtualHost>

    <VirtualHost *:443>
      ServerName tudominio.org
      ProxyPreserveHost On

      ProxyPass / http://127.0.0.1:4321/
      ProxyPassReverse / http://127.0.0.1:4321/

      SSLEngine on
      SSLCertificateFile /etc/letsencrypt/live/tudominio.org/fullchain.pem
      SSLCertificateKeyFile /etc/letsencrypt/live/tudominio.org/privkey.pem
      SSLCertificateChainFile /etc/letsencrypt/live/tudominio.org/chain.pem

      ErrorLog /dev/null
      CustomLog /dev/null
    </VirtualHost>
    ~~~

    **NOTA:** Recuerda cambiar el dominio `tudominio.org` por el dominio o subdominio que vayas a usar. Con **VIM**, es muy facil cambiar esto:

    ~~~diff
    :%s/tudominio.org/[acá debe ir tu dominio]/g
    ~~~

8. Pide el certificado SSL con certbot:

    ~~~bash
    sudo systemctl stop apache2
    sudo certbot certonly -d tudominio.org
    sudo systemctl start apache2
    ~~~

9. **FINALMENTE**, deberías ver tu sitio corriendo en `https://tudominio.org`

Bueno, espero que se esta guía haya sido útil para alguno de ustedes, creo que se hizo algo larga XD. Si tienen problemas, pueden escribirme directamente a [mi XMPP](xmpp:edmateo@edmateo.site).
