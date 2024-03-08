/*
12. Escribir un programa que calcule el área de un rectángulo.
*/

let base = parseFloat(prompt("Ingrese la base del rectángulo"));
let altura = parseFloat(prompt("Ingrese la altura del rectángulo"));

function calcularAreaRectangulo(b, h) {
  let areaRectangulo = b * h;
  alert(`El área del rectángulo es: ${areaRectangulo}`);
}

calcularAreaRectangulo(base, altura);
