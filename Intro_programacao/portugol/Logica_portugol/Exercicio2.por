programa {
  funcao inicio() {
    inteiro quantidade
    real total, valorUnitario

    escreva("Digite a quantidade de ma��s: ")
    leia(quantidade)

    se(quantidade > 12){
        valorUnitario = 0.25
    }
    senao{
        valorUnitario = 0.30
    }

    total = quantidade * valorUnitario

    escreva("Total da compra: ", total)
  }
}
