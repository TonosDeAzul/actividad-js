/*
19. Escribir un programa que calcule el área y el volumen de un cilindro.
*/

let radio = parseFloat(prompt("Ingrese el radio del cilindro"));
let altura = parseFloat(prompt("Ingrese la aluta del radio"));

function calcularAreaVolumenCilindro(r, h) {
  let area = 2 * Math.PI * r * (r + h);
  let volumen = Math.PI * r ** 2 * h;
  alert(`El area del cilindro es: ${area}
El volumen del cilindro es: ${volumen}`);
}

calcularAreaVolumenCilindro(radio, altura);
