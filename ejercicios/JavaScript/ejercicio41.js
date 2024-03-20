/*
41. Ingrese una frase que lo identifique como programador de Software y luego mostrar esta
frase invertida.
*/

const frase = prompt("Ingrese una frase");
let nuevaFrase = "";

for (let i = 0; i < frase.length; i++) {
  nuevaFrase += frase[frase.length - (i + 1)];
}

console.log(nuevaFrase);
