programa {
  funcao inicio() {
    real saldo, valorDesejado, saque, taxa

    taxa = 4.5
    saldo = 500

    escreva("Digite o valor que deseja sacar: ")
    leia(valorDesejado)

    se (valorDesejado < 0){
        escreva("O valor deve ser positivo")
        retorne
    }
    se (valorDesejado % 5 != 0) {
        escreva("O valor deve ser múltiplo de 5")
        retorne
    }
    saque = valorDesejado + taxa

    se(saque > saldo) {
        escreva("Você não tem saldo suficiente para o saque")
        retorne
    }

    saldo = saldo - saque
    escreva("Saque realizado com sucesso. Novo saldo = ", saldo)   

  }
}
