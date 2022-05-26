// #10
programa {

	funcao unirVetores(inteiro vetor1[], inteiro vetor2[]) {
        inteiro vetor_uniao[20]

        para (inteiro i = 0; i < 10; i++) {
            vetor_uniao[i] = vetor1[i]
        }
        
        para (inteiro j = 0; j < 10; j++) {
            vetor_uniao[10 + j] = vetor2[j]
        }

        para (inteiro x = 0; x < 20; x++) {
           	escreva(vetor_uniao[x], " ")
        }
    }
	
    funcao inicio() {
        inteiro 
        vetor1[] = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10}, 
        vetor2[] = { 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 }

        unirVetores(vetor1, vetor2)
    }
    
}
