programa {
  inclua biblioteca Texto --> txt

  funcao inicio() {
    cadeia nome
    inteiro idade

    escreva("Digite o nome: ")
    leia(nome)

    escreva("Digite a idade: ")
    leia(idade)

    escreva("Nome: ", nome, ", ", txt.numero_caracteres(nome), " letras. ")
    escreva("Idade: ", idade, " anos, nasceu em ", 2022 - idade, ".")
  }
}
