/*
48. Escriba un algoritmo que permita calcular el área, debe preguntar que figura geométrica
desea calcular "Triángulo y Círculo: (Escriba T o C):
a. Triangulo = base * altura / 2
b. Circulo = PI * radio* radio
*/

let opcion = prompt(`¿Qué figura desea calcular?

T. Triángulo
C. Círculo`);

function areaTriangulo(){
    let base = parseFloat(prompt("Ingrese la base"));
    let altura = parseFloat(prompt("Ingrese la altura"));
    let area = (base * altura) / 2;
    alert(`El área del triángulo es: ${area.toFixed(2)}`);
}

function areaCirculo(){
    let radio = parseFloat(prompt("Ingrese el radio"));
    let area = Math.PI * radio * radio;
    alert(`El área del círculo es: ${area.toFixed(2)}`)
}

if(opcion.toLowerCase() === "t"){
    areaTriangulo();
}
else if(opcion.toLowerCase() === "c"){
    areaCirculo();
}
else{
    alert(`Ingrese una opción válida`);
}