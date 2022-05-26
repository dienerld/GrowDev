programa {
    inclua biblioteca Matematica --> mat

	funcao converteSegundos(inteiro seg) {
		inteiro hora = seg / 3600
		inteiro resto = seg % 3600
		inteiro minutos = resto / 60
		inteiro segundos = resto % 60
		escreva(mat.arredondar(hora, 0),':', mat.arredondar(minutos, 0),':', mat.arredondar(segundos, 0))
	}
	
	funcao inicio() {
		inteiro seg 
		
		escreva("Digite total em segundos: ")
		leia(seg)
		
		converteSegundos(seg)
	}
	
	
}