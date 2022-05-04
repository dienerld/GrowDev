// a. Para verificar se os lados fornecidos formam um triângulo: A <
// B + C e B < A + C e C < A + B.
// b. Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou
// B=C);
// c. Triângulo escaleno: possui todos os lados diferentes (A<>B e
// B<>C e A<>C);
// d. Triângulo equilátero: possui todos os lados iguais (A=B e
// B=C);

const value_a = 11,
  value_b = 12,
  value_c = 10;

//a
const isTriangle =
  value_a < value_b + value_c &&
  value_b < value_a + value_c &&
  value_c < value_a + value_b;

//b
const isIsosceles =
  value_a === value_b || value_a === value_c || value_b === value_c;

//c
const isScalene =
  value_a !== value_b && value_a !== value_c && value_b !== value_c;

//d
const isEquilateral = value_a === value_a && value_a === value_c;

if (!isTriangle) console.log('Não é um Triangulo');
else {
  if (isEquilateral) console.log('É um triangulo Equilátero ');
  else if (isIsosceles) console.log('É um triangulo Isósceles');
  else if (isScalene) console.log('É um triangulo Escaleno');
}
