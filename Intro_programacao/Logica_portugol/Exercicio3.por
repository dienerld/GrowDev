programa {
  funcao inicio() {
    real altura, peso, imc

    escreva("Digite sua altura: ")
    leia(altura)

    escreva("Digite seu peso: ")
    leia(peso)

    imc = peso/(altura*altura)
    

    se(imc < 18.5){
        escreva("Você está abaixo da faixa de peso ideal")
        retorne
    }
    se(imc < 24.99){
        escreva("Você está dentro da faixa de peso ideal")
    }
    senao{
        escreva("Você está acima da faixa de peso ideal")
    }
  }
}
