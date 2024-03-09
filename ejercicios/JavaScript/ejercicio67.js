/*
Escribir un programa que pida al usuario un número entero y muestre por pantalla un triángulo
rectángulo como el de más abajo, de altura el número introducido.
*
**
*
**
***
*/

let alturaTriangulo = parseInt(prompt("Ingrese la altura para el triángulo")),
  estrella = "*",
  agregar = "";

for (let i = 0; i < alturaTriangulo; i++) {
  agregar += estrella;
  console.log(agregar);
}
