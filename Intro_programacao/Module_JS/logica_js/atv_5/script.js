// 5- Escreva um algoritmo que armazene o valor 10 em uma variável A e
// o valor 20 em uma variável B. A seguir (utilizando apenas atribuições
// entre variáveis) troque os seus conteúdos fazendo com que o valor
// que está em A passe para B e vice-versa. Ao final, mostre no console
// os valores que ficaram armazenados nas variáveis após
// modificadas.

let value_a = 34;
let value_b = 45;
console.log(`Variável A: ${value_a}\nVariável B: ${value_b} `);

value_a = value_a + value_b;
value_b = value_a - value_b;
value_a = value_a - value_b;

console.log('Após troca de valores');
console.log(`Variável A: ${value_a}\nVariável B: ${value_b} `);
