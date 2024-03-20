/*
18. Escribir un programa que evalúe la siguiente expresión (a+7*c) / (b+2-a) + 2*b
*/

let num1 = parseFloat(prompt("Valor de 'a'"));
let num2 = parseFloat(prompt("Valor de 'b'"));
let num3 = parseFloat(prompt("Valor de 'c'"));

function evaluarExpresion(a, b, c) {
  let resultado = (a + 7 * c) / (b + 2 - a) + 2 * b;
  alert(`( ${a} + 7 * ${c} ) / ( ${b} + 2 - ${a} ) + 2 * ${b} = ${resultado}`);
}

evaluarExpresion(num1, num2, num3);
