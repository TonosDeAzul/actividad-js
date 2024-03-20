/*
15. Escribir un programa que calcule la longitud y el área de una circunferencia.
*/

let radio = parseFloat(prompt("Ingrese el radio de la circunferencia"));

function calcularCircunferencia(r) {
  let longitud = 2 * Math.PI * r;
  let area = Math.PI * r ** 2;
  alert(`La longitud es: ${longitud}
El área es: ${area}`);
}

calcularCircunferencia(radio);
