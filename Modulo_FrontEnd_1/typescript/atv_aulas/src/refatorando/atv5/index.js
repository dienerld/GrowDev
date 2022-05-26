// 5. Imprima na tela 30(trinta) números ímpares.
const MAX = 30;
let count = 0;
let number = 0;
const arr = [];
while (count < MAX) {
    if (number % 2 != 0) {
        arr.push(number);
        count++;
    }
    number++;
}
console.log(arr);
