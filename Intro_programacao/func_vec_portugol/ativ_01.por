programa 
{

	funcao calculaMedia(real n1, real n2, real n3, caracter tipoMedia) {
			real media = 0.0
			
			se (tipoMedia == 'A') {
				media = (n1 + n2 + n3) / 3
			}
			
			se (tipoMedia == 'P') {
				real soma = (n1 * 5) + (n2 * 3) + (n3 * 2)
				
				
				media = soma /  (5 + 3 + 2)
			}
			escreva ("Sua média foi de ", media)
	}
	
	funcao inicio() 
	{
	   real nota1, nota2, nota3
	   caracter tipoMedia
	   
	   escreva ("Digite sua nota 1: ")
	   leia (nota1)
	   
	   escreva ("Digite sua nota 2: ")
	   leia (nota2)
	   
	   escreva ("Digite sua nota 3: ")
	   leia (nota3)
	
	   escreva("Digite a forma de cálculo de sua média ('A' ou 'P'): ")
	   leia (tipoMedia)

	   calculaMedia(nota1, nota2, nota3, tipoMedia)
	
	  
	}
}
