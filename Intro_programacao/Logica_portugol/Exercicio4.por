programa {
  funcao inicio() {
    real a, b, resultado
    caracter op

    escreva("Digite o primeiro numero: ")
    leia(a)

    escreva("Digite o segundo numero: ")
    leia(b)

    escreva("Digite a operação: ")
    leia(op)
    
    escolha(op)
    {
        caso '+':
            resultado = a + b
            pare
        caso '-':
            resultado = a - b
            pare
        caso '*':
            resultado = a * b
            pare
        caso '/':
            se (b == 0){
                escreva("Não existe divisão por zero")
                retorne
            }
            resultado = a / b            
            pare
        caso contrario: 
            escreva("Operação inválida")
    }

    escreva("Resultado = ", resultado)
}
