/*
49. Escriba un algoritmo que calcule el área de un rectángulo siempre y cuando los lados sean
positivos: área rectángulo = lado * lado
*/

let lado = parseFloat(prompt("Ingrese el lado del rectángulo"));

while(true){
    if(lado < 0){
        lado = parseFloat(prompt("Ingrese un valor positivo"));
    }
    else{
        break;
    }
}

function areaRectangulo(lado){
    let area = lado * lado;

    alert(`El áres del rectángulo es: ${area}`);
}

areaRectangulo(lado);