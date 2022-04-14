programa {
  funcao inicio() {
    
    real idade
    real peso


    escreva("Informe sua idade: ")
    leia(idade)

    escreva("Informe seu peso: ")
    leia(peso)


    se (idade == 12) escreva("Categoria infantil")
    senao se (idade > 12 e idade <= 16) {
        se (peso <= 40) {
            escreva("Categoria Juvenil leve")
            retorne
        }
        escreva("Categoria Juvenil pesado")
    }
    
    senao se (idade > 16 e idade <= 24) {
        se (peso <= 45) {
            escreva("Categoria Sênior leve")
            retorne
        }
        senao se (peso > 45 e peso <= 60) {
            escreva("Categoria Sênior médio")
            retorne
        }
        escreva("Categoria Sênior pesado")
    }

    senao se (idade > 24) escreva ("Categoria Veterano")
  }
}
