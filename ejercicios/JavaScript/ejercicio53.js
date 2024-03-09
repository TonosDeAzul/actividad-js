/*
53. Calcular el valor total del valor de 5 productos, el IVA y el subtotal, visualizar los resultados
de: Iva, Subtotal y Total de la compra de los artículos.
*/

const iva = 0.19;
let productos = [], producto, sumProductos = 0;

for(let i = 0; i < 5; i++){
    producto = parseFloat(prompt(`Ingrese el costo del producto #${i + 1}`));
    sumProductos += producto;
    productos.push(producto);
};

alert(`Subtotal: $${sumProductos}
IVA: 19%
Total: $${sumProductos + (sumProductos * iva)}`);