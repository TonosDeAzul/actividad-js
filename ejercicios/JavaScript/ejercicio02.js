/*
2. escribir un programa que almacene la cadena de caracteres contraseña de una
variable, pregunte al usuario por la contraseña e imprima por pantalla si la
contraseña introducida por el usuario coincide con la guardada en la variable sin
tener en cuenta mayúsculas y minúsculas, se debe validar que solo se pueda
ingresar valores alfanuméricos.
*/

let contraseñaGuardada = "contrasena1234";

while (true) {
  let contraseñaIngresada = prompt("Ingrese la contraseña:");
  if (/^[a-zA-Z0-9]+$/.test(contraseñaIngresada)) {
    if (
      contraseñaIngresada.toLowerCase() === contraseñaGuardada.toLowerCase()
    ) {
      console.log("¡Contraseña correcta!");
      break;
    } else {
      console.log("Contraseña incorrecta. Inténtelo de nuevo.");
    }
  } else {
    console.log("Por favor, ingrese solo valores alfanuméricos.");
  }
}
