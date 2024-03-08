/*
32. Pablo compro 5 productos los dos primeros con un 5% de descuento y los 2 últimos con un
2% de descuento, realice un algoritmo que indique cuanto fue el valor a pagar por cada
producto y el total de la compra.
*/

let productos = [];
let sumCosto = 0;

for (let i = 0; i < 5; i++) {
  costo = parseFloat(prompt(`Ingrese el costo del producto #${i + 1}`));
  if (i < 2) {
    costo = costo - costo * 0.05;
    sumCosto += costo;
  } else if (i === 2) {
    sumCosto += costo;
    console.log("Xde3");
  } else if (i > 2) {
    costo = costo - costo * 0.02;
    sumCosto += costo;
  }
  productos.push(costo);
}

alert(`Costos individuales: 
Producto #1: ${productos[0]}
Producto #2: ${productos[1]}
Producto #3: ${productos[2]}
Producto #4: ${productos[3]}
Producto #5: ${productos[4]}

Costo Total: ${sumCosto.toFixed(2)}`);
