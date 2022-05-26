// 2. Escreva um algoritmo que armazene o número total de eleitores de um
// município, o número de votos brancos, nulos e válidos.Calcular e escrever
// o percentual que cada um representa em relação ao total de eleitores.O
// algoritmo deve fazer uma validação para que as porcentagens dos votos
// armazenados(brancos, nulos e válidos) respeitem o limite do número
// total de eleitores, ou seja, garantir que a soma dos votos brancos, nulos e
// válidos não seja maior que o número total de eleitores


const totalEleitores: number = 1000;
const brancos: number = 200;
const nulos: number = 100;

console.log(`Total de eleitores: ${totalEleitores}
Percentual de votos brancos: ${(brancos / totalEleitores) * 100}%
Percentual de votos nulos: ${(nulos / totalEleitores) * 100}%
Percentual de votos validos: ${(totalEleitores - (brancos + nulos)) / totalEleitores * 100}%`);
