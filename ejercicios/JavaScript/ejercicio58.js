/*
58. Se desea realizar una aplicación que ingrese el nombre del mes y mostrar que signo
zodiacal pertenece, para ello usar if_else anidados.
*/

let nombreMes = prompt("Ingrese el nombre del mes");

function obtenerSignoZodiacal(mes) {
  mes = mes.toLowerCase();
  if (mes === "enero") {
    signo = "Capricornio";
  } else if (mes === "febrero") {
    signo = "Acuario";
  } else if (mes === "marzo") {
    signo = "Piscis";
  } else if (mes === "abril") {
    signo = "Aries";
  } else if (mes === "mayo") {
    signo = "Tauro";
  } else if (mes === "junio") {
    signo = "Géminis";
  } else if (mes === "julio") {
    signo = "Cáncer";
  } else if (mes === "agosto") {
    signo = "Leo";
  } else if (mes === "septiembre") {
    signo = "Virgo";
  } else if (mes === "octubre") {
    signo = "Libra";
  } else if (mes === "noviembre") {
    signo = "Escorpio";
  } else if (mes === "diciembre") {
    signo = "Sagitario";
  } else {
    signo = "Mes no válido";
  }
  alert(`Su signo zodiacal es: ${signo}`);
}

obtenerSignoZodiacal(nombreMes);
