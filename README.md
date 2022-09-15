# PrebaPlaywright
En esta sección se encuentran pequeños proyectos de prueba para Playwright lo cual se pueden ejecutar pruebas mediante los navegadores Chromium, Firefox y webkit.

¿QUE ES PLAY WRIGHT?

Permite pruebas confiables de extremo a extremo para aplicaciones web.

Playwright es compatible con los navegadores Chromium, Firefox y Webkit. Se pueden realizar pruebas en windows, linux y MacOS.
se creó específicamente para adaptarse a las necesidades de las pruebas de extremo a extremo.

COMANDOS DE INSTALACION.

*Escribir en la terminal de VS code o Git Bash:
npm init playwright@latest 

*Elija entre TypeScript o JavaScript (el valor predeterminado es TypeScript).

*Nombre de su carpeta de Pruebas (el valor predeterminado es pruebas o e2e).

*Agregue un flujo de trabajo de GitHub Actions.

Seguido de esto solo tendra que esperar que los navegadores Chromium, Firefox y Webkit se instalen y se guarden en una carpeta junto con los demas archivos que
instalara playwright.

playwright.config.ts

package.json

package-lock.json

tests/example.spec.ts

tests-examples/ demo-todo-app.spec.ts

Para hacer la ejecucion de prueba se debe usar el comando:
npx playwright test.

Y para ver si hubo algun problema o ver el segimiento de la prueba se usara el comando:
npx playwright show-report


**CONTENIDO DE LOS ARCHIVOS DEL REPOSITORIO**

openEATest.js: Codigo para tomar captura en Youtube.

screenshot.js: Codigo para tomar capturas de pantalla al ejecutar la prueba de la pagina Netflix en los 3 navegadores (Chromium, Firefox y Webkit).

waittest.js: Codigo para tomar captura de pantalla al ejecutar la prueba en la pagina Google en el navegador webkit (se puede modificar en cualquiera
de los 3 navegadores).

video.js: Hace seguimiento automaticamente de la pagina http://the-internet.herokuapp.com/dynamic_loading/1. 

video2.js: Hace reproduccion automatica de pruevas de video y seleccion de Clixies.

CAPTURAS DE PANTALLA RESULTADOS:

ea- function now() { [native code] }.png

example-chromium.png

example-firefox.png

example-webkit.png

hotstar- function now() { [native code] }.png

netflix- function now() { [native code] }.png
