/*
39. Pinturas “La brocha gorda” requiere determinar cuánto cobrar por trabajos de pintura
Considere que se cobra por m2 y realice el código que representen el algoritmo que le
permita ir generando presupuestos para cada cliente.
*/

const valorM2 = 10_000;
let cantidadM2 = parseInt(prompt("¿Cuántos M2 hay que pintar?"));
let costoFinal = valorM2 * cantidadM2;
alert(`El costo por pintar ${cantidadM2} m2, es de: $${costoFinal}`);
