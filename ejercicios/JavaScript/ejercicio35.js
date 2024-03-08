/*
35. Un jefe de obra con el dinero que tiene compra cinco juegos de llaves hexagonales cada
uno por $11500. Una bomba en $1168000 y tres cajas de pernos cada uno por $87000.
Después de pagar le sobran $91000. ¿Cuánto dinero tenía?
*/

const precioLlaveHexagonal = 11_500;
const precioBomba = 1_168_000;
const precioCajaPernos = 87_000;

const cambio = 91_000;

function calcularDinero(
  precioLlaveHexagonal,
  precioBomba,
  precioCajaPernos,
  cambio
) {
  let totalLlaves = precioLlaveHexagonal * 5;
  let totalCajas = precioCajaPernos * 3;
  console.log(totalCajas);
  console.log(totalLlaves);
  console.log(precioBomba);
  console.log(cambio);

  let dinero = totalLlaves + precioBomba + totalCajas + cambio;

  alert(`El jefe tenía: $${dinero}`);
}

calcularDinero(precioLlaveHexagonal, precioBomba, precioCajaPernos, cambio);
