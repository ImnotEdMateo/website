---
layout: ../../layouts/PostLayout.astro
title: 'El "Hackeo"'
pubDate: 05-28-2024
description: 'Hablo acerca de un correo que me llegó de un "pentesting"'
author: 'Mateo'
---

Bien, hace casi un mes, cuando estaba pasando este sitio al FrameWork de AstroJS, había recibido un correo muy curioso precisamente la primera vez que desplegué el sitio a mi servidor, aún no estoy seguro si fue una coincidencia o algo por el estilo. De todos modos, hice mi "inteligencia" acerca de ciberseguridad para evitar decir la mayor cantidad de burradas posible. 

## El Correo

El correo era jodidamente largo, tenía el asunto de "SEGURIDAD DE (edmateo.site)" y provenía de un tal D3V1L. En resumen, el correo decía que a D3V1L le había gustado mi sitio, que le "llamó la atención mi manera de pensar" y mas lamidas de cola, esta persona; como un "buen samaritano", asumió que sería buenísima idea hacerle un pentesting al sitio. D3V1L llegó a la conclusión de que mi sitio tenía una "seguridad estandar". Pero que convenientemente había olvidado 3 vulnerabilidades que **OOOOOOH, podría hacer que pongan cosas en mi servidor!!1!121!!** Para los curiosos, las vulnerabilidades eran las siguientes (según ChatGPT):

1.  **IDOR (Insecure Direct Object Reference):** Referencia directa insegura a objetos (IDOR) es una vulnerabilidad que ocurre cuando una aplicación expone una referencia a un objeto interno de manera que los usuarios pueden manipular. Esto permite que los atacantes accedan a recursos o datos de otros usuarios simplemente cambiando el valor de un parámetro. Por ejemplo, si un sistema usa un ID de usuario en la URL para acceder a los perfiles, un atacante podría modificar este ID para ver los datos de otros usuarios.

2. **LFI (Local File Inclusion):** Inclusión de Archivos Locales (LFI) es una vulnerabilidad que permite a un atacante incluir archivos del sistema local del servidor en la aplicación. Esto suele ocurrir debido a la falta de validación adecuada de los parámetros que especifican los nombres de archivo en las aplicaciones. Los atacantes pueden usar esta vulnerabilidad para leer archivos sensibles del sistema, como archivos de configuración, o incluso ejecutar scripts locales si pueden controlar el contenido del archivo.

3. **Inclusión de Archivos Remotos (RFI):** es una vulnerabilidad que permite a un atacante incluir archivos alojados en servidores remotos en una aplicación. Similar al LFI, esta vulnerabilidad es explotada a través de la manipulación de los parámetros que especifican los nombres de archivo, pero en este caso, los archivos pueden estar en servidores externos. Esto puede llevar a la ejecución remota de código si el atacante logra incluir scripts maliciosos.

¿Y cuál era su increible prueba de que mi sitio tenía estas vulnerabilidades? **UNA PUTA SCREENSHOT** que solo mostraba su entorno de mierda de Kali Linux, una terminal y la página abierta.

<img src="/img/EVIDENCIA_ULTRA_EVIDENTE.png" alt="Una screenshot">

## Explicación

Ahora, la razón por la que el sitio se mostraba así era por un error en la configuración de Apache y AstroJS. Para enviar un sitio a producción, lo recomendable es compilar el sitio, y eso es lo que hacía, el problema es que Apache lee los archivos directamente y no sabe leer la estructura de un sitio compilado con AstroJS. Lo que se ve en la captura es eso, la estructura del sitio compilado con Astro, por ende, esta persona no está accediendo a ningún archivo privado. Cualquier persona puede clonar el repositorio del sitio, compilarlo y verá lo mismo. Además, sería muy idiota si guardo archivos personales en un servidor que está al otro lado del globo de mí.

Para solucionar que la estructura no se viera, fue muy facil, solo tocaba enseñarle a Apache a leer los archivos del sitio compilado. Esta es la configuración que tengo para ello:

~~~
<VirtualHost *:443>
    ServerName edmateo.site
    DocumentRoot /var/www/website/dist

    Options +MultiViews
    RewriteEngine On
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^([^\.]+)$ $1/index.html [NC,L]
</VirtualHost>
~~~

Y con esta configuración, ya se arregló todo esto. Apache ya mostraba el sitio compilado, y supuestamente resolví 3 vulnerabilidades de seguridad

## "Moraleja"

Investiguen. No crean todo lo que les dicen las personas de su entorno. De todos modos, recuerden que aquellos que están satisfechos son ignorantes.

## Para D3V1L

Bueno, si no tienes la desdicha de haber olvidado mi sitio, quisiera agradecerte por nada. De todos modos, entiendo que tus intenciones fueron buenas, pero realmente solo me hiciste pasar un mal rato. :)
