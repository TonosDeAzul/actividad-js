/*
52. En cierta empresa se les paga a sus trabajadores de la siguiente forma: si el empleado es
de planta, la hora trabajada se le paga a $20000, si el empleado es administrativo, la hora
trabajada se le paga a $10000. Para calcular su pago es necesario conocer el total de
horas trabajadas.
*/

const pagoPlanta = 20_000;
const pagoAdministrativo = 10_000;

let trabajador = parseInt(prompt(`¿El empleado es de?

1) Planta
2) Administrativo`));
let horasTrabajo, pago;

if(trabajador === 1){
    horasTrabajo = parseInt(prompt("¿Cuántas horas trabajó?"));
    pago = pagoPlanta * horasTrabajo;
    alert(`El pago del trabajador de planta será de: $${pago.toLocaleString()}`);
}
else if(trabajador === 2){
    horasTrabajo = parseInt(prompt("¿Cuántas horas trabajó?"));
    pago = pagoAdministrativo * horasTrabajo;
    alert(`El pago del trabajador de administrativo será de: $${pago.toLocaleString()}`);
}
else{
    alert("Ingrese un opción válida");
}