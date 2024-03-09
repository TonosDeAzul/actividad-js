/*
71. Escribir un programa que pida al usuario un número entero y muestre por pantalla si es un
número primo o no.
*/

let num = parseInt(prompt("Ingrese un número"));

if (num === 2 || num === 3 || num === 5) {
  alert(`El número es primo`);
} else if (num % 2 == 0 || num % 3 == 0 || num % 5 == 0) {
  alert(`El número no es primo`);
} else {
  alert(`El número es primo`);
}
