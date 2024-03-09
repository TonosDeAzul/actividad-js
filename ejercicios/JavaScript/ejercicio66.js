/*
66. Escribir un programa que pregunte al usuario una cantidad a invertir, el interés anual y el
número de años, y muestre por pantalla el capital obtenido en la inversión cada año que
dura la inversión.
*/

let cantidadInvertir = parseFloat(
    prompt("¿Qué cantidad dinero desea invertir?")
  ),
  interesAnual = parseFloat(prompt("¿De cuánto es el interés anual (%)?")),
  numYears = parseInt(prompt("¿Cuántos años serán?")),
  ganaciaAnual,
  sumGanaciaAnual = 0,
  sumGanaciaTotal = 0;

if (cantidadInvertir < 0 || interesAnual < 0 || numYears < 0) {
  alert(`Has ingresado algunos valores inválidos`);
} else {
  for (let i = 0; i < numYears; i++) {
    ganaciaAnual = cantidadInvertir * (interesAnual * 0.01);
    sumGanaciaAnual += ganaciaAnual;
    sumGanaciaTotal = sumGanaciaAnual + cantidadInvertir;
    alert(`Año #${i + 1}
Ganancia interés: $${sumGanaciaAnual}
Ganancia total: ${sumGanaciaTotal}`);
  }
}
