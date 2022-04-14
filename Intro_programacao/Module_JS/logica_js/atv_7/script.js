// 7. Escreva um algoritmo que armazene o número total de eleitores de
// um município, o número de votos brancos, nulos e válidos. Calcular
// e escrever o percentual que cada um representa em relação ao
// total de eleitores. O algoritmo deve fazer uma validação para que as
// porcentagens dos votos armazenados (brancos, nulos e válidos)
// respeitem o limite do número total de eleitores, ou seja, garantir que
// a soma dos votos brancos, nulos e válidos não seja maior que o
// número total de eleitores.

const totalVoters = 17000;
const totalVotesWhite = 500;
const totalVotesNull = 108;
const totalVotesValid = 16000;

const totalVotes = totalVotesValid + totalVotesWhite + totalVotesNull;

const percentual = totalVotes / totalVoters;

console.log(
  `Percentual de votos em relação a eleitores: ${(percentual * 100).toFixed(
    2
  )}%`
);
