// 5. Imprima na tela 30(trinta) números ímpares.

const MAX: number = 30;
let count: number = 0;
let number: number = 0;
const arr: number[] = [];

while (count < MAX) {
  if (number % 2 != 0) {
    arr.push(number);
    count++;
  }
  number++;
}


console.log(arr);
