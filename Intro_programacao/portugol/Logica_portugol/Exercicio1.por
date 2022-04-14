programa {
  funcao inicio() {
    real a,b

    escreva("Digite a: ")
    leia(a)

    escreva("Digite b: ")
    leia(b)

    se (a==b){
        escreva("Números iguais")
        retorne
    }
    se(a>b){
        escreva("O primeiro é maior")
        retorne
    }
    escreva("O segundo é maior")
  }
}
