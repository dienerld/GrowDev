// 4. Escrever um algoritmo que calcule e mostre a média aritmética dos
// números lidos entre 13 e 73.
const init = 13;
const final = 73;
let sum = 0;
for (let i = init; i <= final; i++) {
    sum += i;
}
console.log((sum / (final - init)).toFixed(2));
