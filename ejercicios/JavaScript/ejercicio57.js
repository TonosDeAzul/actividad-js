/*
Consideramos la asignación de una calificación literal a un rango dado de calificaciones
numéricas de la siguiente manera:
Rango de calificaciones:
• 9.1 a 10 Asignar la calificación de Excelente
• 8.1 a 9 Asignar la calificación de Muy bien
• 7.5 a 8 Asignar la calificación de Bien
• Menor a 7.5 asignar la calificación de No Aprobado
*/

let nota = parseFloat(prompt("Ingrese la nota obtenida"));

if (nota <= 10 && nota > 9) {
  alert(`Nota: ${nota}, excelente`);
} else if (nota <= 9 && nota > 8) {
  alert(`Nota: ${nota}, muy bien`);
} else if (nota <= 8 && nota >= 7.5) {
  alert(`Nota: ${nota}, bien`);
} else if (nota < 7.5 && nota >= 1) {
  alert(`Nota: ${nota}, no aprobado`);
} else {
  alert(`Ingrese una nota válida`);
}
