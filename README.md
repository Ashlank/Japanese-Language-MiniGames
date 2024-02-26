# App de minijuegos para aprender Japonés

Proyecto creado con [Create React App](https://github.com/facebook/create-react-app).

## Descripción

En la ruta principal se muestran 3 opciones para acceder a 3 minijuegos distintos:
- Guess Game: Juego para seleccionar la sílaba que corresponde al katakana mostrado en pantalla
- Write Game: Juego para ingresar en un input de tipo texto la sílaba correspondiente al katakana mostrado
- Memory Game: Juego tradicional de memoria donde se muestran cartas duplicadas y se debe seleccionar los pares

### Características

- Diseño responsivo
- Se utiliza la librería de npm de react-router para brindar un client-side navigation
- El memory game cuenta con 3 niveles de dificultad donde se añaden mas cartas
- Al terminar los minijuegos se brinda la posibilidad de volver a jugar o volver a la ruta principal
- App fácilmente adaptable al alfabeto o silabario de otros idiomas, como ruso, griego o coreano. Cambiar el archivo data.json de la carpeta "mock"

### Deploy

Puede verse el deploy [acá](https://japanese-language-mini-games.vercel.app/)
