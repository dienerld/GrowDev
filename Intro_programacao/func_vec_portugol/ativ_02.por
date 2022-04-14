programa {


	funcao logico verificaImparPar(inteiro numero){
		se(numero % 2 == 1){
			retorne verdadeiro
		}
		retorne falso
	}

	
	funcao inicio() {
		
		inteiro num
		
		escreva("Digite um número inteiro: ")
		leia(num)

		logico eImpar = verificaImparPar(num)

		se(eImpar){
			escreva("O número digitado é impar")
		} senao {
			escreva("O número digitado não par")
		}
		
		
	}
}