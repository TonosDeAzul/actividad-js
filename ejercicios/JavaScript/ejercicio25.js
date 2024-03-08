/*
25. Una farmacia aplica el precio de los remedios el 10% de descuento, hacer un
programa que ingresando el costo de los medicamentos calcule el descuento y el
precio final.
*/

let valor = parseFloat(prompt("Ingrese el precio del medicamento"));

function precioFinal(costoMedicamento) {
  const descuento = 0.1;
  costoMedicamento = costoMedicamento - costoMedicamento * descuento;
  alert(`El costo final del medicamento es: $${costoMedicamento}`);
}

precioFinal(valor);
