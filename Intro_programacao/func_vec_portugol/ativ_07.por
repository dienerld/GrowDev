programa {
	inclua biblioteca Util --> u
    
	funcao inicio() {
	    
		inteiro vet[] = { 4, 13, 2, 101, 122, 19, 21, 41, 51, 9, 3, 8, 11, 21, 44, 1, 33, 25, 21, 7 }
		

		inteiro soma = 0
		
		para (inteiro i = 0; i < 20; i++) {
			soma = soma + vet[i] 
		}
		
		escreva(soma)

	}
}
