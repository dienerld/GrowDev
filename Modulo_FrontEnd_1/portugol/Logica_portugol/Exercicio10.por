programa {
  funcao inicio() {
    
    escreva("Múltiplos de 3: ")
    para (inteiro i = 1; i <= 250; i++) {  
        se(i % 3 == 0) {
            escreva(i, ",")
        }
    }  

    escreva("\n\n")

    escreva("Múltiplos de 5: ")
    para (inteiro i = 1; i <= 250; i++) {  
        se(i % 5 == 0) {
            escreva(i, ",")
        }
    }  
  }
}
