const parcelas = 14;
const valor = 100;
let valorFinal = valor;

if (parcelas === 1) {
  valorFinal -= (valor * 2.5) / 100;
} else if (parcelas >= 2 && parcelas <= 5) {
  valorFinal = valor;
} else if (parcelas >= 6 && parcelas <= 10) {
  valorFinal += (valor * 6) / 100;
} else if (parcelas >= 11 && parcelas <= 15) {
  valorFinal += (valor * 13) / 100;
} else {
  console.log(`Valor não definido para ${parcelas} parcelas`);
}
console.log(`Valor final: ${valorFinal}
Valor parcelado: ${valorFinal / parcelas}`);
