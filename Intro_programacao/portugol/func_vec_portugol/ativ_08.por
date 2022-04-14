programa {
   funcao logico ePerfeito(inteiro val) {
    inteiro soma = 0

        para(inteiro i = 1; i < val; i++) {
            inteiro resto = val % i

            se (resto == 0) {
                soma = soma + i
            }
        }
        se (soma == val) {
            retorne verdadeiro
        }
        retorne falso
   }

  funcao inicio() {
    inteiro 
    numerosPerfeitos[4],
    qtdNumeros = 0,
    index = 1

    enquanto (qtdNumeros != 4) {
        se (ePerfeito(index)) {
            numerosPerfeitos[qtdNumeros] = index
            qtdNumeros++
        }
        index++
    }

    para(inteiro i = 0; i < 4; i++){
        escreva(numerosPerfeitos[i], ", ")
    }
  }
}