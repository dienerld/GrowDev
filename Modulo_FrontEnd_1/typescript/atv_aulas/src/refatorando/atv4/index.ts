// 4. Escrever um algoritmo que calcule e mostre a média aritmética dos
// números lidos entre 13 e 73.

const init: number = 13;
const final: number = 73;

let sum: number = 0;

for (let i = init; i <= final; i++) {
  sum += i;
}

console.log((sum / (final - init)).toFixed(2));
