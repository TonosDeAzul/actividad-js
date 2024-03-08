/*
28. Calcular el sueldo de un empleado dados como datos de entrada:
a. Nombre.
b. horas de trabajo.
c. pago en hora.
*/

let nombre = prompt("Nombre del trabajador");
let horasTrabajo = parseFloat(prompt("Horas trabajadas"));

const trabajor = {
  nombre: nombre,
  horasTrabajo: horasTrabajo,
  pagoTotal: horasTrabajo * 5_000,
};

for (let values in trabajor) {
  alert(`${values}: ${trabajor[values]}`);
}
