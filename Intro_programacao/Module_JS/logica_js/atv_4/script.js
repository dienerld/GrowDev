// 4- Escreva um algoritmo que armazene o ano atual e o ano de
// nascimento de uma pessoa. Escrever uma mensagem no console
// que diga se ela poderá ou não votar este ano (não é necessário
// considerar o mês em que a pessoa nasceu).

const currentYear = new Date().getFullYear();
const birthYear = 2007;

if (currentYear - birthYear < 16) {
  console.log('Não poderá votar!');
} else {
  console.log('Poderá votar!');
}
