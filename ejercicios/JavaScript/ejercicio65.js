/*
65. Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla
la cuenta atrás desde ese número hasta cero separados por comas.
*/

let num = parseInt(prompt("Ingrese un número entero positivo")),
  nums = [];
for (let i = 0; i <= num; i++) {
  nums.push(num - i);
}

console.log(nums);
