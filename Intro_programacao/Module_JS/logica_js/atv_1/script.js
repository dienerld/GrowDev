const value_a = 31,
  value_b = 32,
  value_c = 33;

console.log(`Soma: ${value_a + value_b + value_c}`);
console.log('Média:', ((value_a + value_b + value_c) / 3).toFixed(2));
console.log('Produto:', value_a * value_b * value_c);

if (value_a === value_b || value_a === value_c || value_c === value_b) {
  alert('Valores Igual');
} else if (value_a > value_b) {
  if (value_c > value_a) {
    console.log(`Maior: ${value_c}\nMenor: ${value_b}`);
  } else {
    console.log(
      `Maior: ${value_a}\nMenor: ${value_b < value_c ? value_b : value_c}`
    );
  }
} else {
  if (value_b > value_c) {
    console.log(
      `Maior: ${value_b}\nMenor: ${value_a < value_c ? value_a : value_c}`
    );
  } else {
    console.log(`Maior: ${value_c}\nMenor: ${value_a}`);
  }
}
