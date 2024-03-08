/*
7. los tramos impositivos para la declaración de la renta en un determinado país son:
a. entre 10000 y 20000 ---- 5%
b. entre 20000 y 35000 ---- 10%
c. entre 35000 y 60000 ---- 20%
d. más de 60000 ---- 45%
escribir un programa que pregunte al usuario su renta anual y muestre por pantalla
el tipo de impositivo que le corresponde
*/

let rentaAnual = parseFloat(prompt("Ingrese su valor de renta anual"));

if (rentaAnual < 0) {
  alert("Valor inválido");
} else {
  if (rentaAnual > 0 && rentaAnual < 10_000) {
    alert("No tendrá impositivo");
  } else if (rentaAnual >= 10_000 && rentaAnual < 20_000) {
    alert(`El impositivo es del 5% (${rentaAnual.toFixed(2) * 0.05})`);
  } else if (rentaAnual >= 20_000 && rentaAnual < 35_000) {
    alert(`El impositivo es del 10% (${rentaAnual.toFixed(2) * 0.1})`);
  } else if (rentaAnual >= 35_000 && rentaAnual < 60_000) {
    alert(`El impositivo es del 20% (${rentaAnual.toFixed(2) * 0.2})`);
  } else {
    alert(`El impositivo es del 45% (${rentaAnual.toFixed(2) * 0.45})`);
  }
}
