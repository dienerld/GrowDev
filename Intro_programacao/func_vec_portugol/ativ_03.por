programa {

	funcao logico ePrimo(inteiro numero){
		se(numero == 0){
			retorne falso
		}

		se(numero == 1){
			retorne falso
		}

		inteiro metade = (numero / 2)

		para(inteiro i = 2; i <= metade; i++){
			se (numero % i == 0){
				retorne falso
			}
		}

		retorne verdadeiro
	}
	
	funcao inicio() {
		inteiro num
		
		escreva("Digite um valor: ")
		leia(num)

		logico primo = ePrimo(num)

		escreva(primo)
	}
}