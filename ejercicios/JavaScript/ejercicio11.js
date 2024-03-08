/*
11. Escribir un programa que sume, resta, multiplique y divida dos números.
*/

let num1 = parseFloat(prompt("Ingrese el primer número"));
let num2 = parseFloat(prompt("Ingrese el segundo número"));

function calcular(a, b) {
  let sum = a + b;
  let res = a - b;
  let mult = a * b;
  let div;
  if (b === 0) {
    console.log("No se puede divir por 0");
    div = 0;
  } else {
    div = a / b;
  }

  alert(`Suma = ${sum}
Resta = ${res}
Multiplicación = ${mult}
División = ${div}`);
}

calcular(num1, num2);
