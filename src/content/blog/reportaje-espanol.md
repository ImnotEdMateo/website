---
title: 'La "Dark Web": ¿Es realmente peligroso entrar?'
author: 'Mateo'
description: 'Para la clase de humanidades, se me encomendó hacer un reportaje sobre cualquier basura...'
pubDate: 2024-09-09T11:30:00-05:00
---
# Introduccion

A lo largo de los años, con el aumento en el acceso común a internet, se ha popularizado el concepto de la **Deep Web** y la **Dark Web**, a menudo presentados de manera exagerada como una red secreta y exclusiva, accesible solo para los *hackers* más experimentados. Sin embargo, más allá de estas nociones erróneas, ¿realmente sabemos qué hay en este tipo de sitios?

# Deep Web y Dark Web

Primero, es importante distinguir entre la **Deep Web** y la **Dark Web**. La **Deep Web** se refiere a todos aquellos sitios que no están indexados por los motores de búsqueda convencionales (Google, Bing, DuckDuckGo, entre otros). Esto significa que no son fácilmente accesibles a través de una búsqueda común. Entender esto nos permite visualizar la magnitud de la **Deep Web**, que alberga un contenido vasto, aunque no existe un estimado preciso de cuán grande es. Por tanto, esas "famosas imágenes del iceberg" que probablemente hayas visto, que pretenden representar el contenido de la web, son bastante engañosas.

![Famosa Imágen del Iceberg](https://edmateo.neocities.org/assets/iceberg-famoso.webp)

En 2023, se estimó que había unos *5.400 millones* de personas conectadas a internet. La mayoría de estas personas utilizan al menos una cuenta en plataformas populares como Facebook, YouTube, entre otras. Resulta difícil imaginar que todos estos servicios, que dan soporte a más de la mitad de la población mundial, sean "solo la punta del iceberg". Dejaré que ustedes juzguen la validez de esta idea.

Además, es importante destacar que, cuando un usuario crea una cuenta en un servicio de internet, a menudo existen páginas no indexadas a las que solo pueden acceder los propietarios del contenido, porque tienen valor solo para ellos y no para el resto de los usuarios. La mayoría de los motores de búsqueda respetan un archivo llamado "[robots.txt](https://developers.google.com/search/docs/crawling-indexing/robots/intro)", que indica qué páginas pueden o no ser indexadas. Esto ayuda a controlar qué contenido está disponible públicamente y qué no.

Por otro lado, el término **Dark Web** se refiere a cualquier espacio que está protegido por una red privada o, en su defecto, un protocolo específico que impide el acceso convencional. Estos contenidos, por supuesto, no están indexados por los motores de búsqueda comunes, ya que operan bajo sus propios sistemas. Uno de los ejemplos más conocidos de la **Dark Web** es el proyecto **Tor**.

## Acerca de la Red Tor

Originalmente iniciado como un proyecto de la Marina de los Estados Unidos, Tor se ha transformado en una ONG sin fines de lucro, cuyo principal objetivo es proteger el derecho a la privacidad en línea y permitir la libre navegación por internet. No obstante, la red suele ser vista como un refugio para ciberdelincuentes que la utilizan para realizar actividades ilícitas sin temor a ser descubiertos. Si bien es cierto que algunas personas aprovechan el anonimato que ofrece Tor para este tipo de acciones, es importante reconocer que la red no está dominada exclusivamente por el crimen.

Un análisis de los servicios **onion** en la Dark Web muestra una variedad de contenidos, muchos de los cuales no están relacionados con actividades ilegales:

| Category              | % of total | % of active |
|-----------------------|------------|-------------|
| Violence              | 0.3        | 0.6         |
| Arms                  | 0.8        | 1.5         |
| Illicit Social        | 1.2        | 2.4         |
| Hacking               | 1.8        | 3.5         |
| Illicit links         | 2.3        | 4.5         |
| Illicit pornography   | 2.3        | 4.5         |
| Extremism             | 1.8        | 3.6         |
| Illicit Other         | 3.8        | 7.2         |
| Illicit Finance       | 6.3        | 12.0        |
| Illicit Drugs         | 8.1        | 15.5        |
| Non-Illicit+Unknown   | 22.6       | 43.2        |
| Illicit total         | 29.7       | 56.8        |
| Inactive              | 47.7       | -           |
| Active                | 52.3       | -           |

Si bien un porcentaje de los sitios está dedicado a actividades ilícitas, también hay una parte significativa que se enfoca en el anonimato y la libertad de expresión. La red Tor es utilizada por **periodistas**, **activistas** y personas que viven bajo regímenes opresivos para proteger su identidad y compartir información de manera segura, sin temor a represalias. Para estas personas, Tor es una herramienta invaluable que les permite mantenerse a salvo y ejercer sus derechoa a la privacidad sin muchos rodeos.

## ¿Cómo funciona la red Tor?

La red Tor opera bajo un protocolo conocido como **The Onion Router**, compuesto por una serie de servidores distribuidos globalmente llamados *Relays*. Estos *Relays* se encargan de enrutar la comunicación de los usuarios de forma anónima, dividiendo las rutas en varias capas de cifrado, como las capas de una cebolla. A continuación, explicamos los tipos de *Relays* y sus funciones:

- **Guard Relay:** Son los encargados de recibir la conexión inicial del usuario. El *Guard Relay* actúa como el primer punto de contacto de la red Tor, recibiendo la solicitud del usuario. Una vez que recibe la petición, la encripta y la envía a un *Middle Relay*. Aunque suelen ser configurados igual, los *Guard Relays* deben tener un ancho de banda mayor, ya que se encargan de recibir la solicitud directa del usuario.

- **Middle Relay:** Son nodos intermedios que reciben la solicitud cifrada de un *Guard Relay* y la vuelven a cifrar para transmitirla a otro nodo, que puede ser otro *Middle Relay* o un *Exit Relay*. Estos *Middle Relays* aseguran que el tráfico siga siendo indetectable en su camino hacia el destino final.

- **Bridge Relay:** Un tipo especial de nodo que no aparece en la lista pública de *Relays*, los *Bridge Relays* son utilizados para evadir bloqueos en países donde el acceso a Tor está restringido o censurado. Funcionan de manera similar a los *Guard Relays*, pero están diseñados para ocultar que el usuario está utilizando Tor.

- **Exit Relay:** Es el encargado de enviar la solicitud descifrada del usuario al destino final en la Internet abierta. Dado que el tráfico sale a Internet sin cifrado desde este nodo, el administrador de un *Exit Relay* puede estar expuesto a ciertos riesgos legales o técnicos. Sin embargo, estos nodos son esenciales para que el usuario pueda acceder a cualquier servicio en la red de forma anónima. 

Estos *Relays* son gestionados por voluntarios de todo el mundo, y cualquier persona que disponga de un servidor funcionando las 24 horas del día puede configurarlo como un nodo de la red Tor. Tor facilita el proceso de creación y mantenimiento de estos nodos, garantizando la privacidad de las comunicaciones a través de múltiples capas de cifrado.

![DIAGRAMA](https://edmateo.neocities.org/assets/relays.webp)


El funcionamiento de la red asegura que, incluso si un nodo intermedio o final es comprometido, la información original no puede ser rastreada fácilmente hasta el usuario. Ya que la información de la orden del usuario es protegida por el nodo anterior. De ahí el nombre **The Onion Router**, ya que los Relays se podrían asemejar a una capa de una cebolla.

## ¿Cómo accedo a la red Tor?

A pesar de que el funcionamiento de la red Tor es muy interesante, no es algo que le interese al usuario común, ¿de que sirve saber como manejar esta red si no podré usarla? Afortunadamente, Tor tiene un método muy sencillo de acceder.

Simplemente tendras que [Descargar Tor Browser](https://www.torproject.org/download/), que permite la navegación a tus sitios web del día a día y acceder a los propios sitios de la Red tor.

## Conclusion

La Dark Web, específicamente a través de redes como Tor, no es inherentemente peligrosa como muchas veces se percibe. Si bien existe un porcentaje de contenido ilícito, gran parte de esta red se utiliza para proteger la privacidad y garantizar la libertad de expresión en entornos hostiles. La misma tecnología que permite a delincuentes operar de manera anónima también proporciona una herramienta vital para activistas, periodistas y personas que buscan navegar de manera segura en internet. Por lo tanto, el verdadero riesgo al explorar la Dark Web depende de cómo se utilice esta herramienta poderosa, que en sí misma no es ni buena ni mala, sino una vía de acceso que puede ser aprovechada de múltiples formas.

## Fuentes

1. **Nuxoid**. [Explicando qué es y cómo funciona la Deep Web](https://youtu.be/ASqdAvuBykA?si=U2N3m8NybW8Pj3Zb). YouTube, 11 de noviembre de 2022.

2. **Tor Project**. [Relay Operations](https://community.torproject.org/relay/). Proyecto Tor, artículo acerca del funcionamiento de los relays.

3. **bad robot**. [Red Tor - Closed Shell System](https://bad-robot.blogspot.com/2014/04/red-tor-closed-shell-system.html). Blog *Bad Robot*, 2014.

4. **Wikipedia**. [Tor (network)](https://en.wikipedia.org/wiki/Tor_(network)). Versión en inglés.

5. **Wikipedia**. [Tor (Red de anonimato)](https://es.wikipedia.org/wiki/Tor_(red_de_anonimato)). Versión en español.
