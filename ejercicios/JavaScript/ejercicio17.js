/*
17. Escribir un programa que calcule el volumen de una esfera.
*/

let radio = parseFloat(prompt("Ingrese el radio de la esfera"));

function calcularVolumenEsfera(r) {
  let volumen = (4 / 3) * Math.PI * r ** 3;
  alert(`El volumen de la esfera es: ${volumen}`);
}

calcularVolumenEsfera(radio);
