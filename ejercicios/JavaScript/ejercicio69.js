/*
Escribir un programa que pida al usuario un número entero y muestre por pantalla un triángulo
rectángulo como el de más abajo.
1
31
531
7531
97531
*/

let alturaTriangulo = parseInt(prompt("Ingrese la altura para el triángulo")),
  contador = 0;

for (let i = 0; i < alturaTriangulo; i++) {
  let acumulador = "";
  for (let j = i; j >= 0; j--) {
    acumulador += 2 * j + 1;
  }
  console.log(acumulador);
}
