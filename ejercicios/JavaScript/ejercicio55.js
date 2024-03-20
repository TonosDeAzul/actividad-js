/*
55. En una tienda de HELADO da un descuento por compra a sus clientes con membresía
dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los
descuentos son los siguientes: Tipo A 10% de descuento Tipo B 15% de descuento Tipo C
20% de descuento.
*/

let tipoMembresia = parseInt(
  prompt(`Ingrese su tipo de membresía
1) Tipo A
2) Tipo B
3) Tipo C`)
);
let costoHelado;
const descuentoA = 0.1,
  descuentoB = 0.15,
  descuentoC = 0.2;

if (tipoMembresia === 1) {
  costoHelado = parseFloat(prompt("Ingrese el costo del helado"));
  costoHelado = costoHelado - costoHelado * descuentoA;
  alert(`Membresía tipo A (10% descuento)
Costo final: ${costoHelado.toLocaleString()}`);
} else if (tipoMembresia === 2) {
  costoHelado = parseFloat(prompt("Ingrese el costo del helado"));
  costoHelado = costoHelado - costoHelado * descuentoB;
  alert(`Membresía tipo B (15% descuento)
Costo final: ${costoHelado.toLocaleString()}`);
} else if (tipoMembresia === 3) {
  costoHelado = parseFloat(prompt("Ingrese el costo del helado"));
  costoHelado = costoHelado - costoHelado * descuentoC;
  alert(`Membresía tipo C (20% descuento)
Costo final: ${costoHelado.toLocaleString()}`);
} else {
  alert(`Ingrese una opción válida`);
}
