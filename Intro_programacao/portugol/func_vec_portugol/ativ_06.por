programa {
	inclua biblioteca Util --> u
    
	funcao inicio() {
	    
		inteiro vet[] = { 4, 13, 2, 101, 122, 19, 21, 41, 51, 9, 3, 8, 11, 21, 44 }
		
		para (inteiro i = 0; i < 15; i++) {
			se(vet[i] % 2 == 0) {
			    escreva(vet[i]," ")
			}
		}
	}
}