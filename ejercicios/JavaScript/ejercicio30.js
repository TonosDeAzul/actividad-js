/*
30. Comprobar la fortaleza de una contraseña teniendo en cuenta que debe tener
entre 8 y 12 caracteres, y al menos una mayúscula, una minúscula, y un dígito.
*/

const contrasena = prompt("Cree una contraseña");

function verificarFortalezaContraseña(contrasena) {
  const regexLongitud = /^.{8,12}$/;
  const regexMayuscula = /[A-Z]/;
  const regexMinuscula = /[a-z]/;
  const regexDigito = /\d/;

  if (
    regexLongitud.test(contrasena) &&
    regexMayuscula.test(contrasena) &&
    regexMinuscula.test(contrasena) &&
    regexDigito.test(contrasena)
  ) {
    alert(`La contraseña es fuerte, cumple con todos los requisitos`);
  } else {
    alert(`La contraseña no cumple con los requisitos de fortaleza`);
  }
}

console.log(verificarFortalezaContraseña(contrasena));
