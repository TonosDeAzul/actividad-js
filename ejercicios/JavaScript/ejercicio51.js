/*
51. Calcular todos los pagos hechos de un restaurante y que si el consumo ingresado excede
los $130.000 el descuento será del 15%, de lo contrario no hay descuento.
*/

let consumo = parseFloat(prompt("¿Cuánto fue el total de todos los pagos del restaurante?"));
const descuento = 0.15;

if(consumo > 130_000){
    consumo = consumo - (consumo * descuento);
    alert(`El total es de: ${consumo.toLocaleString()} (hubo descuento)`)
}
else{
    alert(`El total es de: ${consumo.toLocaleString()} (no hubo descuento)`)
}