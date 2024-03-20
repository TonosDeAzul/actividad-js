/*
73. Escribir un programa en el que se pregunte al usuario por una frase y una letra, y muestre
por pantalla el número de veces que aparece la letra en la frase.
*/

let frase = prompt("Ingrese una frase");
const letra = prompt("Ingrese una letra");

let coincidencias = frase.split(letra).length - 1;

alert(`La letra '${letra}' concidio ${coincidencias} veces`);
