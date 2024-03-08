/*
14. Escribir un programa que calcule el área de un triángulo
*/

let base = parseFloat(prompt("Ingrese la base del triángulo"));
let altura = parseFloat(prompt("Ingrese la altura del triángulo"));

function calcularAreaTriangulo(b, h) {
  let areaTriangulo = (b * h) / 2;
  alert(`El área del triángulo es: ${areaTriangulo}`);
}

calcularAreaTriangulo(base, altura);
