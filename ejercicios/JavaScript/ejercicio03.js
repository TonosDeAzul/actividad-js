/*
3. Escribir un programa que pida al usuario dos números y muestre por pantalla su
división, si el divisor es cero el programa debe mostrar un error, se debe manejar
mediante excepciones y el mensaje debe ser personalizado.
*/

let dividendo, divisor, resultado;

try {
  dividendo = parseFloat(prompt("Ingrese el dividendo"));
  divisor = parseFloat(prompt("Ingrese el divisor"));

  if (divisor === 0) {
    throw new Error(
      `El divisor es ${divisor}, no se puede realizar la división`
    );
  }
  resultado = dividendo / divisor;
  alert(`El resultado de ${dividendo} / ${divisor} = ${resultado}`);
} catch (error) {
  console.log(error.message);
}
