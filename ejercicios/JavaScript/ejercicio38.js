/*
38. Tres estudiantes reunieron tapas de gaseosas para repartirlas y venderlas al final del año.
Martín toma 2/3 del total, Jairo un cuarto del total, y Lorena se queda con el resto. ¿Qué
parte le corresponde a Lorena?
*/

let cantidadTapas = parseInt(prompt("¿Cuántas tapas reunieron?"));
let tapasMartin = (cantidadTapas * 2) / 3;
let tapasJairo = (cantidadTapas * 1) / 4;
let tapasLorena = cantidadTapas - tapasJairo - tapasMartin;

alert(`La tapas reunidas fueron ${cantidadTapas}

Martin: ${Math.floor(tapasMartin)} tapas
Jairo: ${Math.ceil(tapasJairo)} tapas
Lorena: ${Math.ceil(tapasLorena)} tapas`);
