/*
64. Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla
todos los números impares desde 1 hasta ese número separados por coma.
*/

let num = parseInt(prompt("Ingrese un número entero positivo")),
  nums = [];
for (let i = 0; i <= num; i++) {
  if (i % 2 == 0) {
    continue;
  } else {
    nums.push(i);
  }
}

console.log(nums);
