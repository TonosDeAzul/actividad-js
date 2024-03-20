/*
59. En un colegio, se necesita hacer una selección de basquetbol que represente al colegio,
para lo cual es requisito indispensable que los postulantes sean menores o iguales a 19
años, con una estatura de más de 175 cm y el peso tiene que estar entre los 80 Kg y 75 Kg.
*/

let edad = parseInt(prompt("Ingrese la edad"));
let estatura = parseFloat(prompt("Ingrese la altura"));
let peso = parseFloat(prompt("Ingrese el peso"));

if (edad <= 19 && estatura > 175 && peso >= 75 && peso <= 80) {
  alert(`El estudiante cumple con todos los requisitos
Edad: ${edad} años
Estatura: ${estatura} cm
Peso: ${peso} Kg`);
} else if (edad <= 19 || estatura > 175 || (peso >= 75 && peso <= 80)) {
  alert(`El estudiante no cumple con todos los requisitos
Edad: ${edad} años
Estatura: ${estatura} cm
Peso: ${peso} Kg`);
} else {
  alert(`Algunos datos son inválidos, vuelva a intentar`);
}
