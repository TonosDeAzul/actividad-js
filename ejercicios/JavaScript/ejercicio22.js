/*
22. Escribir un programa que muestre el pago de una llamada telefónica sabiendo que
cada minuto cuesta $355 pesos y un IVA 20%.
*/

let mH = parseFloat(prompt("¿Cuántos minutos habló?"));

function calcularPagoLlamada(minutosHablados) {
  const valorMinutos = 355;
  const iva = 0.2;

  let costoTotal =
    minutosHablados * valorMinutos + minutosHablados * valorMinutos * iva;

  alert(`El costo total de la llamada es: ${costoTotal}`);
}

calcularPagoLlamada(mH);
