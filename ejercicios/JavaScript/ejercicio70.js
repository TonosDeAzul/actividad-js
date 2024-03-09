/*
70. Escribir un programa que almacene la cadena de caracteres contraseña en una variable,
pregunte al usuario por la contraseña hasta que introduzca la contraseña correcta.
*/

const contrasena = "contrasena1234";
let verificarContrasena,
  cont = 1;

while (true) {
  verificarContrasena = prompt("Ingrese la contraseña");
  if (verificarContrasena != contrasena) {
    alert(`Las contraseñas no coinciden, vuelva a intentarlo`);
    cont += 1;
  } else {
    alert(`Las contraseñas coinciden
    
# intentos ${cont}`);
    break;
  }
}
