/*
10. La pizzería Bella Napoli ofrece pizzas vegetarianas y no vegetarianas a sus clientes.
Los ingredientes para cada tipo de pizza aparecen a continuación.
a. Ingredientes vegetarianos: Pimiento y tofu.
b. Ingredientes no vegetarianos: Pepperoni, Jamón y Salmón.
Escribir un programa que pregunte al usuario si quiere una pizza vegetariana o no,
y en función de su respuesta le muestre un menú con los ingredientes disponibles
para que elija. Solo se puede elegir un ingrediente además de la mozzarella y el
tomate que están en todas las pizzas. Al final se debe mostrar por pantalla si la
pizza elegida es vegetariana o no y todos los ingredientes que lleva.
*/

let pizza = parseInt(
  prompt(`1. Pizza vegetariana
2. Pizza no vegetariana

Ingrese su opción (número)`)
);

let ingrediente,
  ingredienteExtra,
  comprobarEleccion = true,
  tipoPizza;

if (pizza <= 0 || pizza >= 3) {
  alert("Valor inválido");
} else {
  if (pizza === 1) {
    tipoPizza = "vegetariana";
    while (comprobarEleccion) {
      ingrediente = parseInt(
        prompt(
          `1. Pimiento
2. Tofu

Ingrese su opción (número)`
        )
      );

      if (ingrediente !== 1 && ingrediente !== 2) {
        alert("No eligió ningún ingrediente");
      } else {
        if (ingrediente === 1) {
          ingredienteExtra = "Pimienta";
          comprobarEleccion = false;
        } else {
          ingredienteExtra = "Tofu";
          comprobarEleccion = false;
        }
      }
    }
  } else if (pizza === 2) {
    tipoPizza = "no vegetariana";
    while (comprobarEleccion) {
      ingrediente = parseInt(
        prompt(
          `1. Pepperoni
2. Jamón
3. Salmón

Ingrese su opción (número)`
        )
      );

      if (ingrediente !== 1 && ingrediente !== 2 && ingrediente !== 3) {
        alert("No eligió ningún ingrediente");
      } else {
        if (ingrediente === 1) {
          ingredienteExtra = "Pepperoni";
          comprobarEleccion = false;
        } else if (ingrediente === 2) {
          ingredienteExtra = "Jamón";
          comprobarEleccion = false;
        } else {
          ingredienteExtra = "Salmón";
          comprobarEleccion = false;
        }
      }
    }
  }

  alert(`Pizza ${tipoPizza} con:
- Mozarrella
- Tomate
- ${ingredienteExtra}`);
}
