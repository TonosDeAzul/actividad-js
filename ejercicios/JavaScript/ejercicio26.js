/*
26. Hacer un diagrama para convertir de grados centígrados a grados Fahrenheit.
*/

let gradosC = parseFloat(prompt("Ingrese grados centígrados"));

function convetirGrados(gradosC) {
  gradosF = (gradosC * 9) / 5 + 32;
  alert(`${gradosF} Grados Fahrenheit`);
}

convetirGrados(gradosC);
