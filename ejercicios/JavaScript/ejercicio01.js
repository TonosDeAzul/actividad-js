/*
1. Escribir un programa que pregunte al usuario su edad y muestre por pantalla si es
mayor o menor de edad, el programa debe validar que solo se puedan ingresar
números positivos. 
*/

let edad = parseInt(prompt("Ingrese su edad"));

if (edad < 0) {
  alert("Valor inválido");
} else {
  if (edad >= 18) {
    alert("Es mayor de edad");
  } else {
    alert("Es menor de edad");
  }
}
