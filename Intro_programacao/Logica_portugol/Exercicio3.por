programa {
  funcao inicio() {
    real altura, peso, imc

    escreva("Digite sua altura: ")
    leia(altura)

    escreva("Digite seu peso: ")
    leia(peso)

    imc = peso/(altura*altura)
    

    se(imc < 18.5){
        escreva("Voc� est� abaixo da faixa de peso ideal")
        retorne
    }
    se(imc < 24.99){
        escreva("Voc� est� dentro da faixa de peso ideal")
    }
    senao{
        escreva("Voc� est� acima da faixa de peso ideal")
    }
  }
}
