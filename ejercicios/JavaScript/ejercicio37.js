/*
37. Un camión transporta 25 cajas de repuestos de carros. Si cada caja pesa 748 Kg ¿cuántos
Kg transporta?
*/

let cantidadCajas = parseInt(prompt("Ingrese la cantidad de cajas"));
let pesoCajas = parseFloat(prompt("Ingrese el peso de las cajas"));

let pesoTransportado = cantidadCajas * pesoCajas;

alert(`El cambió transporta ${pesoTransportado} Kg`);
