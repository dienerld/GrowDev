programa {
  inclua biblioteca Matematica
  funcao inicio() {
    real altPedro, altLucas
    inteiro cont

    altPedro = 1.5
    altLucas = 1.1

    cont = 0

    enquanto(altLucas <= altPedro) {
        altPedro = Matematica.arredondar(altPedro + 0.02,2)
        altLucas = Matematica.arredondar(altLucas + 0.03,2)
        cont++
    }

    escreva("Atingiram a mesma altura em ",cont-1, " anos\n")
    escreva("Lucas maior que Pedro em ", cont, " anos")


  }
}

