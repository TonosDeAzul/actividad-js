/*
61. Hacer un programa que permita ingresar n Notas de alumnos (100 – 1), y que imprima cual
fue la nota alta, la nota baja y cuantos alumnos obtuvieron la máxima nota de 100, cuantos
obtuvieron las siguientes calificaciones:
a. «a» = menor que 100 y mayor igual que 90
b. «b» = menor que 90 y mayor igual que 80
c. «c» = menor que 80 y mayor igual que 70
d. «d» = menor que 70 y mayor igual que 60
*/

let cantidadNotas = parseInt(prompt(`Ingrese la cantidad de notas`)),
  nota,
  notas = [],
  contador100 = 0,
  contadorA = 0,
  contadorB = 0,
  contadorC = 0,
  contadorD = 0,
  contadorF = 0;

for (let i = 0; i < cantidadNotas; i++) {
  nota = parseFloat(prompt(`Ingrese la nota #${i + 1}`));
  while (true) {
    if (nota < 1 || nota > 100) {
      nota = parseFloat(prompt("Ingrese una nota válida (100 - 1)"));
    } else {
      if (nota === 100) {
        contador100 += 1;
      }
      if (nota <= 100 && nota >= 90) {
        contadorA += 1;
      }
      if (nota < 90 && nota >= 80) {
        contadorB += 1;
      }
      if (nota < 80 && nota >= 70) {
        contadorC += 1;
      }
      if (nota < 70 && nota >= 60) {
        contadorD += 1;
      }
      if (nota < 60) {
        contadorF += 1;
      }
      notas.push(nota);
      break;
    }
  }
}

// NOTA MÁXIMA Y MÍNIMA
let maximo = notas[0];
let minimo = notas[0];
for (let i = 1; i < notas.length; i++) {
  if (maximo < notas[i]) {
    maximo = notas[i];
  }
  if (minimo > notas[i]) {
    minimo = notas[i];
  }
}

alert(`La nota máxima fue: ${maximo}
La nota mínima fue: ${minimo}

${contador100} obtuvieron 100
${contadorA} obtuvieron A
${contadorB} obtuvieron B
${contadorC} obtuvieron C
${contadorD} obtuvieron D
${contadorF} obtuvieron F`);
