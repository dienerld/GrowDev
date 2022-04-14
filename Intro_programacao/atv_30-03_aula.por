programa {
  funcao inicio() {
    inteiro saque, gc50, gc10, gc5, gc1

    gc50 = 0 
    gc10 = 0
    gc5 = 0
    gc1 = 0

    escreva("Digite o valor que deseja retirar: ")
    leia(saque)

    enquanto(saque > 0) {
        se(saque - 50 >= 0) {
            saque = saque - 50
            gc50++
        }
        senao se(saque - 10 >= 0) {
            saque = saque - 10
            gc10++
        }
        senao se(saque - 5 >= 0) {
            saque = saque - 5
            gc5++
        }
        senao {
            saque = saque - 1
            gc1++
        }
    }

    escreva("GC$ 50,00 -> ", gc50, "\nGC$ 10,00 -> ", gc10, "\nGC$ 5,00 -> ", gc5, "\nGC$ 1,00 -> ", gc1)
  }
}
