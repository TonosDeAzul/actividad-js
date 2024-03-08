/*
40. Una empresa que contrata personal requiere determinar la edad de las personas que
solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que
nacieron. Realice el código que representen el algoritmo para solucionar este problema.
*/

const yearActual = 2024;
let yearNacimiento = parseInt(prompt("¿En qué año nació?"));

let edad = yearActual - yearNacimiento;

if (yearNacimiento >= 2024) {
  alert(`Año inválido`);
} else {
  alert(`La persona tiene un aproximado de ${edad} años`);
}
