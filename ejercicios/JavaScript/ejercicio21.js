/*
21. Escribir un programa que calcule el volumen de un elipsoide.
*/

let num1 = parseFloat(prompt("Valor 'a'"));
let num2 = parseFloat(prompt("Valor 'b'"));
let num3 = parseFloat(prompt("Valor 'c'"));

function calcularVolumenElipsoide(a, b, c) {
  let volumen = (4 / 3) * Math.PI * a * b * c;
  alert(`El volumen del elipsoide es: ${volumen}`);
}

calcularVolumenElipsoide(num1, num2, num3);
