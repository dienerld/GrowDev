programa {
    funcao mostrarMenu() {
        escreva("Escolha uma opção abaixo \n")
        escreva("1 - Visualizar o saldo em conta \n")
        escreva("2 - Depositar GrowCoins \n")
        escreva("3 - Sacar GrowCoins \n")
        escreva("4 - Transferir GrowCoins \n")
        escreva("5 - Sair do sistema \n")
    }

    funcao mostrarSaldo(real saldo) {
        escreva("Saldo disponível: G$", saldo, "\n")
    }

    funcao real depositar() {
    	   real valorDeposito
        escreva("Digite o valor a ser depositado: ")
        leia(valorDeposito)
        retorne valorDeposito
    }

  funcao inicio() {
    inteiro opcao
    real saldo = 0.0
    real aux
    logico continuar = verdadeiro

    enquanto (continuar) {
        mostrarMenu()
        escreva("Digite a opção: ")
        leia(opcao)

        escolha(opcao) {
            caso 1:
                mostrarSaldo(saldo)
                pare
            caso 2: 
                saldo = saldo + depositar()
                mostrarSaldo(saldo)
                pare
            caso 3:
                escreva("Valor: ")
            	 leia(aux)
            	 se((aux + 2.50) > (saldo + 500)){
            	 	escreva("Saldo insuficiente...\n")
            	 }senao{
               	escreva("Sacando \n")
               	saldo = saldo - (aux + 2.50)
                }
                mostrarSaldo(saldo)
                pare
            caso 4:
            	 escreva("Valor: ")
            	 leia(aux)
            	 se (saldo < aux + 4.50){
            	 	escreva("Saldo insuficiente...\n")	
            	 }senao{
            	 	escreva("Transferindo \n")
            	 	saldo = saldo - (aux + 4.50)
            	 }
            	 mostrarSaldo(saldo)
                pare
            caso 5: 
                escreva("Saindo... \n")
                continuar = falso
                pare
            caso contrario: 
                escreva("Opção inválida, tente novamente \n")
        }
    }
  }
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1680; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */