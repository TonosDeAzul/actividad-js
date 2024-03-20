/*
43. Escriba una expresión regular que reconozca las cadenas de doble comillas. Debe permitir
la presencia de comillas y caracteres escapados.
*/

const regex = /"(?:\\.|[^"\\])*"/;
const cadena = `"Xde, no entiendo las expresiones regulares"`;
alert(regex.test(cadena));
