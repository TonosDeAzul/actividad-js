/*
74. Escribir un programa que muestre el eco de todo lo que el usuario introduzca hasta que el
usuario escriba “salir” que terminará.
*/

let eco,
  ecoArray = [];

while (true) {
  eco = prompt("Escriba algo");
  if (eco.toLowerCase() === "salir") {
    break;
  } else {
    ecoArray.push(eco);
  }
}

console.log(ecoArray);
