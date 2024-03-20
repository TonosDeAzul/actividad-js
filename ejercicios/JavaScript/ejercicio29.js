/*
29. Un estudiante realiza cuatro exámenes. Realizar un algoritmo correspondiente para
obtener el promedio de las calificaciones obtenidas. Las calificaciones van 1 a 5
puntos.
*/

let sumNotas = 0,
  promedioNotas = 0,
  nota;

function verificarNota(nota) {
  while (true) {
    if (nota < 1 || nota > 5) {
      alert(`Nota inválida, vuelva a ingresarla`);
      nota = parseFloat(prompt("Ingrese una nota válida"));
    } else {
      break;
    }
  }
  return nota;
}

for (let i = 0; i <= 4; i++) {
  nota = parseFloat(prompt(`Ingrese la nota #${i + 1}`));
  nota = verificarNota(nota);
  sumNotas += nota;
}

promedioNotas = sumNotas / 5;
alert(`El promedio de las notas es: ${promedioNotas}`);
