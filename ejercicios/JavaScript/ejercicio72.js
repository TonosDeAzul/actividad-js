/*
72. Escribir un programa que pida al usuario una palabra y luego muestre por pantalla una a
una las letras de la palabra introducida empezando por la última.
*/

const palabra = prompt("Ingrese una palabra");

for (let i = 0; i < palabra.length; i++) {
  console.log(palabra[palabra.length - (i + 1)]);
}
