---
title: Solucionar el problema del cierre de tapa en Linux con SystemD
author: 'EdMateo'
description: Aprende a evitar que tu sistema Linux con SystemD se congele al cerrar la tapa del portátil modificando logind.conf de manera sencilla.
pubDate: 2024-12-09
---

## ¿Por qué SystemD es tan controversial?

Actualmente, **SystemD** se ha consolidado como el *init system* predominante en el ecosistema de Linux. Esto se debe a que la mayoría de las distribuciones han optado por adoptarlo como su sistema de inicio predeterminado o como una opción plenamente compatible[^1]. Sin embargo, aunque su popularidad es innegable, no todos coinciden en que sea la mejor opción disponible. Una de las razones más recurrentes, destaca el hecho de que **SystemD** tiende a abarcar múltiples funciones (en su mayoría, innecesarias o que ya las hacen otros programas), lo que lo aleja de los principios de la *Filosofía Unix*, que abogan por desarrollar **software que cumpla una sola función, pero que la haga bien**[^2]. 

Personalmente, como usuario de Linux (y de una distro con SystemD), solo quiero un sistema que funcione, no deseo meterme en conflictos ideológicos por lo que tengo o no en **mi propia máquina**. Por eso mismo, en lugar de tirar la toalla al darme cuenta de que no podía cerrar la tapa de mi laptop, investigué, y les compartiré cómo solucionar esta problemática sin mucho problema. Afortunadamente, la solución es realmente simple y puede tomar menos de 5 minutos (si eres mongólico como yo).

## Ahora sí, la solución

En tu sistema Linux con SystemD (ya sea Debian, Arch, Fedora, AmongOS...) tienes que abrir una terminal y modificar el archivo de configuración encargado del manejo del cierre de la tapa y otras cosas (como el botón de apagado). Esto lo haces con un archivo llamado `logind.conf`. Para este ejemplo usaré **VIM**, pero puedes usar el editor que quieras.

~~~bash
sudo vim /etc/systemd/logind.conf
~~~

Ahora, tu objetivo será localizar estas líneas de "código" en el archivo:

~~~plaintext
#HandleLidSwitch=
#HandleLidSwitchExternalPower=
#HandleLidSwitchDocked=
~~~

En tu sistema, estas líneas saldrán comentadas (con el "#" al inicio) y con algún parámetro que realmente no me acuerdo (posiblemente `suspend`, pero no importa, eso lo cambiaremos). Entonces, descomentarás las líneas de código y pondrás el parámetro `ignore` en todas. Te debería quedar algo así:

~~~plaintext
HandleLidSwitch=ignore
HandleLidSwitchExternalPower=ignore
HandleLidSwitchDocked=ignore
~~~

Esto hace que el sistema no haga nada al cerrar la tapa, incluso si está conectado o si tiene un **Dock**, como el de los ThinkPads viejitos :)[^3]. También puedes cambiar a `suspend` si quieres suspender al cerrar la tapa o `shutdown` si eres un psicópata.

Ahora, guarda el archivo con `:wq` (o de la forma que sea en tu editor), cierra sesión en tu sistema y... **¡voilà!**, tu PC se mantendrá en la sesión incluso luego de cerrar la tapa.

[^1]: https://en.wikipedia.org/wiki/Systemd#Adoption Wikipedia: SystemD (Adoption)
[^2]: https://es.wikipedia.org/wiki/Filosofía_de_Unix#Haz_una_cosa_y_hazla_bien Wikipedia: Filosofía de Unix (Haz una cosa y hazla bien)
[^3]: https://support.lenovo.com/us/en/solutions/pd010992-thinkpad-ultrabase-series-3-overview Lenovo Support: ThinkPad Ultrabase Series 3 - Overview
