// 10. Utilizando do…while, imprima na tela a soma de todos os números
// entre 10 e 100.

let soma: number = 0;
let index: number = 10;
const MAX: number = 100;

while (index < MAX) {
  soma += index;
  index++;
}

console.log(soma);
