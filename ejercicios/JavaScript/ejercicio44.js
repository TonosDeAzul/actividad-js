/*
44. Realice el siguiente algoritmo para convertir pesos a dolores y a euros, utilizando como
constante el valor de una moneda.
*/

let peso = parseFloat(prompt("Ingrese la cantidad de dinero (COP)"));

function convertirMoneda(modena){
    const euro = 4_273.10;
    const dolar = 3_904.69;

    valorEuro = peso / euro;
    valorDolar = peso / dolar;

    alert(`${peso.toLocaleString()}$ son:
${valorEuro.toFixed(2).toLocaleString()} euros
${valorDolar.toFixed(2).toLocaleString()} dolares`)

}

convertirMoneda(peso);