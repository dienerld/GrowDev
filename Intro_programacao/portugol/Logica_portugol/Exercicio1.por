programa {
  funcao inicio() {
    real a,b

    escreva("Digite a: ")
    leia(a)

    escreva("Digite b: ")
    leia(b)

    se (a==b){
        escreva("N�meros iguais")
        retorne
    }
    se(a>b){
        escreva("O primeiro � maior")
        retorne
    }
    escreva("O segundo � maior")
  }
}
