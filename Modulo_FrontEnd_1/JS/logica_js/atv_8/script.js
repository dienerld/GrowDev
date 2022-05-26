const priceTable = 2500;

const methodPayment = 15;

if (methodPayment === 1) {
  console.log(`Total: R$${(priceTable - (priceTable * 2.5) / 100).toFixed(2)}`);
} else if (methodPayment <= 5) {
  console.log(`Total: R$${priceTable.toFixed(2)}`);
} else if (methodPayment <= 10) {
  console.log(`Total: R$${(priceTable + (priceTable * 6) / 100).toFixed(2)}`);
} else if (methodPayment <= 15) {
  console.log(`Total: R$${(priceTable + (priceTable * 13) / 100).toFixed(2)}`);
} else {
  console.log('Total de parcelas inválido!!');
}
