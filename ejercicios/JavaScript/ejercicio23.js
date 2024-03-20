/*
23. Realice un algoritmo que, a partir de proporcionarle la velocidad de un automóvil
expresada en kilómetros por hora, proporcione la velocidad en metros por
segundo.
*/

let vKmh = parseFloat(prompt("Ingrese la velocidad en KmH"));

function convertirVelocidad(velocidadKmH) {
  let velocidadMs = velocidadKmH / 3.6;
  alert(`La velocidad es: ${velocidadMs}m/s`);
}

convertirVelocidad(vKmh);
