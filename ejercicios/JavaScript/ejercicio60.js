/*
60. Hacer un programa que permita ingresar n cantidad de cursos, si la cantidad de cursos que
lleva el alumno es menor que 6 el pago será $2.000.000 por cada curso, pero si la cantidad
de cursos es mayor que 6 el pago será únicamente de $1.200.000.
*/

let curso,
  cursos = [],
  cantidadCursos = parseInt(prompt("¿A cuántos cursos esta inscrito?")),
  total;
const precio1 = 2_000_000,
  precio2 = 1_200_000;

for (let i = 0; i < cantidadCursos; i++) {
  let curso = prompt(`Nombre del curso #${i + 1}`);
  cursos.push(curso);
}

if (cantidadCursos <= 6) {
  total = precio1 * cantidadCursos;
  alert(`El costo de cada curso es de: 2'000.000
En total: $${total.toLocaleString()}
Cursos inscritos: ${cursos}`);
} else if (cantidadCursos >= 7) {
  total = precio2 * cantidadCursos;
  alert(`El costo de cada curso es de: 1'200.000
En total: $${total.toLocaleString()}
Cursos inscritos: ${cursos}`);
} else {
  alert(`Valores inválidos`);
}
