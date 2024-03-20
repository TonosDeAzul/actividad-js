/*
24. Escriba una expresión regular que reconozca los números en punto flotante (por
ejemplo -2.3e-1, -3e2, 23, 3.2).
*/

const regex = /^-?\d+(\.\d+)(e-?\d+)?$/;

let numFlotante = prompt("Ingrese un número");
console.log(numFlotante);

if (regex.test(numFlotante) === true) {
  alert(`El número contiene un punto flotante`);
} else {
  alert(`El número no contiene un punto flotante`);
}
