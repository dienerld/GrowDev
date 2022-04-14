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
        inteiro valor 
        
        escreva("Digite um valor: ")
        leia(valor)
        
        logico eNumPerfeito = ePerfeito(valor)
    
        se(eNumPerfeito){
        	escreva("O número é perfeito")
        } senao {
        	escreva("O número não é perfeito")
        }
    }
}