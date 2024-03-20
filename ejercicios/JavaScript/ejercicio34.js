/*
34. Generar el algoritmo que dé como resultado el tiempo estimado para el llenado de un
depósito.
a. Q = V/t, siendo Q (caudal), V (volumen) y t (tiempo).
b. Volumen = PI *(radio^2)* H (altura del depósito).
El tiempo se encuentra en minutos. Normalmente se mide el volumen en litros y el tiempo
en segundos.
*/

let radio = parseFloat(prompt("Ingrese el radio del depósito"));
let altura = parseFloat(prompt("Ingrese la altura del depósito"));
let caudal = parseFloat(prompt("Ingrese el caudal del agua"));

function calcularTiempo(radio, altura, caudal) {
  const litros = 1_000;
  const segundos = 60;
  let volumen = Math.PI * radio ** 2 * altura * litros;
  let tiempoSegundos = volumen / caudal;
  let tiempoMinutos = tiempoSegundos / segundos;

  alert(
    `El tiempo estimado para llenar el depósito es: ${tiempoMinutos.toFixed(
      2
    )} minutos.`
  );
}

calcularTiempo(radio, altura, caudal);
