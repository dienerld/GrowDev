// #9
programa {
     funcao logico contemNumero(inteiro vetor[], inteiro numero) {
        para (inteiro i = 0; i < 5; i++) {
            se (vetor[i] == numero) {
                retorne verdadeiro
            }
        }
        retorne falso
    }

    funcao inicio() {
        inteiro vetor[] = { 1, 2, 3, 4, 5}
        
        escreva(contemNumero(vetor, 5))
    }
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 36; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */