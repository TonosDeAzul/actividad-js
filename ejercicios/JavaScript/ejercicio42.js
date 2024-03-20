/*
42. Una papelería vende libros a $10.000, cuadernos $ 7.550, y lapiceros a $5.550. Calcular el
monto total de la venta, según la cantidad de artículos solicitados durante el día.
*/

const precioLibro = 10_000;
const precioCuaderno = 7_550;
const precioLapicero = 5_550;

let cantidadLibros = parseInt(prompt("¿Cuántos libros se vendieron?"));
let cantidadCuadernos = parseInt(prompt("¿Cuántos cuadernos se vendieron?"));
let cantidadLapiceros = parseInt(prompt("¿Cuántos lapiceros se vendieron?"));

let totalLibros = precioLibro * cantidadLibros;
let totalCuadernos = precioCuaderno * cantidadCuadernos;
let totalLapiceros = precioLapicero * cantidadLapiceros;
let total = totalLibros + totalCuadernos + totalLapiceros;

alert(`Se vendieron:
${totalLibros.toLocaleString()}$ en libros
${totalCuadernos.toLocaleString()}$ en cuadernos
${totalLapiceros.toLocaleString()}$ en lapiceros

En total: ${total.toLocaleString()}$`)