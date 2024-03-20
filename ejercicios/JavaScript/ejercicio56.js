/*
56. Un banco paga intereses a los depósitos dependiendo del saldo. Si el saldo es menor a
$100.000 se paga un interés anual de 3%, pero si su saldo es mayor a $100.000 se paga
un interés anual de 4%. Al final mostrar el saldo final y el interés pagado.
*/

const interes1 = 0.03,
  interes2 = 0.04;

let saldo = parseFloat(prompt("¿Cuánto es su saldo?"));
let saldoFinal;

if (saldo <= 100_000) {
  saldoFinal = saldo + saldo * interes1;
  alert(`Su interés anual es del 3%
Saldo final: $${saldoFinal.toLocaleString()}`);
} else if (saldo > 100_000) {
  saldoFinal = saldo + saldo * interes2;
  alert(`Su interés anual es del 4%
Saldo final: $${saldoFinal.toLocaleString()}`);
} else {
  alert(`Valor inválido`);
}
