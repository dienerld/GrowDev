programa
{
	funcao inicio(){
		cadeia vec_nome[5];
		cadeia temp_nome
		para(inteiro i = 0; i < 5; i++){
			escreva("Digite um nome: ")
			leia(temp_nome)
			vec_nome[i] = temp_nome
		}
		escreva("Entrada: ")
		para(inteiro i = 0; i < 5; i++){
		escreva(vec_nome[i], ", ")
		}
		
		escreva("\nSaida: ")
		para(inteiro i = 4; i >= 0; i--){
		escreva(vec_nome[i], ", ")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 328; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */