/*
45. Determinar si un número es positivo y menor que 100.
*/

let num = parseFloat(prompt("Ingrese un número"));

if(num < 1 || num > 100){
    alert(`El números ${num}, no cumple los parámetros`);
}
else{
    alert(`El número ${num}, cumple con los parámetros`)
}