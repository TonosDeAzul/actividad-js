/*
13. Escribir un programa que lea 4 números y calcule la media.
*/

function mediaNumeros(...numeros) {
  let sum = 0;
  for (let num of numeros) {
    sum += num;
  }
  let media = sum / numeros.length;
  alert(`La media es: ${media}`);
}

let numeros = [];

for (let i = 1; i <= 4; i++) {
  let nums = parseFloat(prompt(`Número #${i}`));
  numeros.push(nums);
}

mediaNumeros(...numeros);
