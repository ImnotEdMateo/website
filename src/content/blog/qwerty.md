---
title: 'Repetir Letras de Forma Iterada en C++'
author: 'EdMateo'
description: 'Un ejercicio en C++ que repite letras porque estaba aburrido. Hay arrays, loops y cero utilidad práctica. Pero entretiene.'
pubDate: 2025-07-01T12:03:00-05:00
---

Era un día como hoy, estaba en un completo desparche y sin absolutamente nada que hacer (excepto los 80 trabajos del colegio). Entonces, en ese aburrimiento abrí una pestaña en el navegador y me puse a escribir una `q`, dos `w`'s. Y así por un corto tiempo, al instante pensé: "Ey, esto lo puedo programar". En eso, puse mi editor de código y acabé con esta cagada en C++:

```c++ title="qwerty.cpp"
#include <string>
#include <iostream>

using namespace std;

int 
main()
{
  char letters[] = {'0', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'};

  for (int i = 0; i < sizeof(letters) / sizeof(letters[0]); i++) {
    cout << string(i, letters[i]) << endl;
  } 

  return 0;
}
```
Soy muy vago para comentar código, entonces voy a explicar que hace cada cosa:

- **Importamos la librería "string"** porque es la única forma que conozco para manejar cadenas de texto en C++ sin hacer un espagueti de ciclos anidados.
- **Creamos un arreglo**, en este caso se llama `letters` que guardará las letras de la sucesión *qwerty* más un *0* al inicio para que el ciclo de abajo no inicie desde la w.
- **Hacemos un ciclo** que se iterará hasta que *i* sea de la longitud del arreglo y, de este modo, hacer la misma acción por cada letra.
- **Usamos** `string(i, letters[i])` para que cree un una cadena de texto de cada carácter del arreglo con la longitud de *i*.

Todo esta cháchara para al final del día, tener un output así:

```plaintext title="a.out"
q
ww
eee
rrrr
ttttt
yyyyyy
...
bbbbbbbbbbbbbbbbbbbbbbbb
nnnnnnnnnnnnnnnnnnnnnnnnn
mmmmmmmmmmmmmmmmmmmmmmmmmm
```

Y ya. ¿Sirve para algo? No. ¿Aprendí algo? Tampoco, pero me entretuve. Además, tengo una excusa para no escribir algo para el blog hasta 2026.
