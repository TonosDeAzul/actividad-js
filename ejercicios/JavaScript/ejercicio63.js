/*
63. Escribir un programa que pregunte al usuario su edad y muestre por pantalla todos los
años que ha cumplido (desde 1 hasta su edad).
*/

let edad = parseInt(prompt("Ingrese su edad"));

for (let i = 1; i < edad; i++) {
  if (i === 1) {
    console.log(`Ya ha cumplido ${i} año`);
  } else {
    console.log(`Ya ha cumplido ${i} años`);
  }
}
