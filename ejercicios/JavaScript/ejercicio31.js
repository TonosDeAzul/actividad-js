/*
31. Se requiere calcular la distancia entre dos puntos, realizar el código que permita
hallar la solución, por favor utilizar funciones matemáticas para ello.:
a. rc((x2-x1)^2 + (y2-y1)^2).
*/

let coordenadasA = [];
let coordenadasB = [];

for (let i = 0; i < 4; i++) {
  if (i < 2) {
    A = parseFloat(prompt("Punto A"));
    coordenadasA.push(A);
  }
  if (i >= 2 && i < 4) {
    B = parseFloat(prompt("Punto B"));
    coordenadasB.push(B);
  }
}

function calcularDistancia(coorA, coorB) {
  let x1 = coorA[0];
  let y1 = coorA[1];
  let x2 = coorB[0];
  let y2 = coorB[1];
  let distancia = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  alert(`La distancia es: ${distancia.toFixed(2)}`);
}

calcularDistancia(coordenadasA, coordenadasB);
