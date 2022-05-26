programa {
  funcao inicio() {
    inteiro n, i, cont

    escreva("Digite o multiplicando: ")
    leia(n)

    escreva("Digite a quantidade de iteracoes: ")
    leia(i)

    cont=1

    enquanto (cont <= i) {  
        escreva(cont, " * ", n, " = ", cont*n, "\n")
        cont++
    } 

  }
}
