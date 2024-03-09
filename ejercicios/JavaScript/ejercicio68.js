/*
68. Escribir un programa que muestre por consola la tabla de multiplicar del 1 al 10.
*/

for (let i = 1; i < 11; i++) {
  for (let j = 1; j < 11; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
  console.log(`\n`);
}
