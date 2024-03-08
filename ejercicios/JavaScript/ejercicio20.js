/*
20. Escriba un algoritmo que permita obtener las raíces reales de la ecuación de
segundo grado: a * x2 + b + x + c, siendo X un valor constante.
*/

let num1 = parseFloat(prompt("Valor 'a'"));
let num2 = parseFloat(prompt("Valor 'b'"));
let num3 = parseFloat(prompt("Valor 'c'"));

function calcularRaices(a, b, c) {
  let discriminante = b ** 2 - 4 * a * c;

  if (discriminante > 0) {
    let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
    alert(`Solución 1: ${x1} \nSolución 2: ${x2}`);
  } else if (discriminante === 0) {
    let x = -b / (2 * a);
    alert(`Solución: ${x}`);
  } else {
    alert(`No tiene solución, el discriminante es negativo (${discriminante})`);
  }
}

calcularRaices(num1, num2, num3);
