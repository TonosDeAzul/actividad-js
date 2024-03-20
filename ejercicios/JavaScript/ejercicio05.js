/*
5. Para tributar un determinado impuesto se debe ser mayor de 16 años y tener unos
ingresos iguales o superiores a 1000 mensuales, escribir un programa que pregunte
al usuario su edad e ingresos mensuales y muestre por pantalla si el usuario debe
tributar o no.
*/

let edad = parseInt(prompt("Ingrese su edad"));
let ingreso = parseFloat(prompt("Ingrese sus ingresos"));

if (edad < 0 || ingreso < 0) {
  alert("Valores inválidos");
} else {
  if (edad > 16 && ingreso >= 1000) {
    alert("Debe de tributar");
  } else {
    alert("No debe de tributar");
  }
}
