/*
36. En el programa de cocina de “Doña Anita” han dado la receta para la preparación de
bizcocho especial de chocolate. Por cada 100 gramos de harina hay que añadir 10 gramos
de cacao y un puñado de nueces. Si quiero prepararlos con 20 gramos de cacao. ¿La
cantidad de gramos de harina para hacer el bizcocho es?
*/

// INICIALIZAMOS VARIABLES
let agregar, gramosHarina, gramosCacao, cantidadTotal;

// INGRESAR OPCIÓN
while (true) {
  agregar = parseInt(
    prompt(`¿Qué desea agregar?
1) + gr de harina
2) + gr de cacao`)
  );
  if (agregar < 0 || agregar > 2) {
    alert(`Ingrese una opción válida`);
  } else {
    break;
  }
}

// FUNCIÓN PARA OBTENER LA CANTIDAD DE GRAMOS DE HARINA
function cantidadHarina(gramosHarina) {
  cantidadTotal = gramosHarina / 10;
  return cantidadTotal;
}

// FUNCIÓN PARA OBTENER LA CANTIDAD DE GRAMOS DE CACAO
function cantidadCacao(gramosCacao) {
  cantidadTotal = gramosCacao * 10;
  return cantidadTotal;
}

// SI LA OPCIÓN ES 1
if (agregar === 1) {
  // INGRESAR GRAMOS DE HARINA
  while (true) {
    let ultimosNumeros = [];
    gramosHarina = prompt(`Por cada 100gr de harina se agrega 10gr de cacao

¿Cuántos gramos de harina desea agregar? (Ingrese cantidades exactas)`);

    // LA CANTIDAD DE GRAMOS RECORRERLA E INSERTARLA EN UN ARRAY
    for (let num of gramosHarina) {
      ultimosNumeros.push(num);
    }
    if (
      gramosHarina < 0 ||
      (ultimosNumeros[ultimosNumeros.length - 1] &&
        ultimosNumeros[ultimosNumeros.length - 2]) != 0
    ) {
      alert(`Agregue una cantidad válida`);
    } else {
      gramosHarina = cantidadHarina(gramosHarina);
      alert(
        `La cantidad de gramos de cacao a agregar son de: ${gramosHarina}gr y ${
          gramosHarina / 10
        } puñados de nueces`
      );
      break;
    }
  }
}

// SI LA OPCIÓN ES 2
if (agregar === 2) {
  // INGRESAR GRAMOS DE CACAO
  while (true) {
    let ultimosNumeros = [];
    gramosCacao = prompt(`Por cada 100gr de harina se agrega 10gr de cacao

¿Cuántos gramos de cacao desea agregar? (Ingrese cantidades exactas)`);

    // LA CANTIDAD DE GRAMOS RECORRERLA E INSERTARLA EN UN ARRAY
    for (let num of gramosCacao) {
      ultimosNumeros.push(num);
    }
    if (gramosCacao < 0 || ultimosNumeros[ultimosNumeros.length - 1] != 0) {
      alert(`Agregue una cantidad válida`);
    } else {
      gramosCacao = cantidadCacao(gramosCacao);
      alert(
        `La cantidad de gramos de harina a agregar son de: ${gramosCacao}gr y ${
          gramosCacao / 100
        } puñados de nueces`
      );
      break;
    }
  }
}
