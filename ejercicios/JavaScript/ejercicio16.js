/*
16. Escribir un programa que calcule la velocidad de un proyectil que recorre 2km en 5
minutos, exprese el resultado en metros/segundo.
*/

let distanciaKm = parseFloat(prompt("Ingrese la distancia en Km"));
let tiempoMinutos = parseFloat(prompt("Ingrese el tiempo en minutos"));

function calcularVelocidadProyectil(d, t) {
  let distanciaMetros = d * 1000;
  let tiempoSegundos = t * 60;
  let velocidad = distanciaMetros / tiempoSegundos;
  alert(`La velocidad es: ${velocidad}m/s`);
}

calcularVelocidadProyectil(distanciaKm, tiempoMinutos);
