programa {


	funcao logico verificaImparPar(inteiro numero){
		se(numero % 2 == 1){
			retorne verdadeiro
		}
		retorne falso
	}

	
	funcao inicio() {
		
		inteiro num
		
		escreva("Digite um n�mero inteiro: ")
		leia(num)

		logico eImpar = verificaImparPar(num)

		se(eImpar){
			escreva("O n�mero digitado � impar")
		} senao {
			escreva("O n�mero digitado n�o par")
		}
		
		
	}
}