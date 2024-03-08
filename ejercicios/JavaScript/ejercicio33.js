/*
33. Calcular la edad de una madre en el momento que dio a luz a alguno de sus hijos.
*/

// INGRESAMOS LA EDAD DE LA MADRE
let edadMadre = parseInt(prompt("Ingrese la edad de la madre"));
// VERIFICAMOS LA EDAD DE LA MADRE
function verificarEdadMadre(edadMadre) {
  while (true) {
    if (edadMadre < 0) {
      edadMadre = parseInt(prompt("Ingrese una edad válida para la madre"));
    } else {
      break;
    }
  }
  return edadMadre;
}
// INVOCAMOS LA FUNCIÓN Y LA ASIGNAMOS NUEVAMENTE A LA VARIBLE
edadMadre = verificarEdadMadre(edadMadre);

// INGRESAMOS LA EDAD DEL HIJO
let edadHijo = parseInt(prompt("Ingrese la edad del hijo"));
// VERIFICAMOS LA EDAD DE LA MADRE
function verificarEdadHijo(edadHijo, edadMadre) {
  while (true) {
    if (edadHijo < 0 || edadHijo >= edadMadre) {
      edadHijo = parseInt(prompt("Ingrese una edad válida para el hijo"));
    } else {
      break;
    }
  }
  return edadHijo;
}
// INVOCAMOS LA FUNCIÓN Y LA ASIGNAMOS NUEVAMENTE A LA VARIBLE
edadHijo = verificarEdadHijo(edadHijo, edadMadre);

alert(
  `La madre tenía ${edadMadre - edadHijo} años, cuando dio a luz a su hijo`
);
