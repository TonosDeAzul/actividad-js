/*
27. Elaborar un algoritmo para calcular el promedio final de la materia de algoritmos.
dicha calificación se compone de los siguientes porcentajes:
a. 55% del promedio final de sus calificaciones de los tres (3) parciales.
b. 30% de la calificación examen final.
c. 15% de la calificación trabajo final.
*/

let sumParciales = 0,
  parcial = 0.55,
  examenFinal = 0.3,
  trabajoFinal = 0.15,
  notaFinal,
  calificaciones;

function verificarNota(calificaciones) {
  while (true) {
    if (calificaciones < 1 || calificaciones > 10) {
      alert(`Nota inválida, vuelva a ingresarla`);
      calificaciones = parseFloat(prompt("Ingrese una nota válida"));
    } else {
      break;
    }
  }
  return calificaciones;
}

for (let i = 0; i <= 4; i++) {
  let mensaje;
  if (i <= 2) {
    mensaje = "Ingrese la nota de parciales";
    calificaciones = parseFloat(prompt(mensaje));
    calificaciones = verificarNota(calificaciones);
    sumParciales += calificaciones;
  }
  if (i === 3) {
    mensaje = "Ingrese la nota del examen final";
    calificaciones = parseFloat(prompt(mensaje));
    calificaciones = verificarNota(calificaciones);
    examenFinal *= calificaciones;
  }
  if (i === 4) {
    mensaje = "Ingrese la nota del trabajo final";
    calificaciones = parseFloat(prompt(mensaje));
    calificaciones = verificarNota(calificaciones);
    trabajoFinal *= calificaciones;
  }
}

parcial *= sumParciales / 3;
notaFinal = parcial + examenFinal + trabajoFinal;
notaFinal = Math.round(notaFinal * 100) / 100;

alert(`La nota final es: ${notaFinal}`);
