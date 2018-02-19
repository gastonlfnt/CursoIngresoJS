function Mostrar()
{

	var contador=0;
	
	var acumulador=0;

	var numero;
	
	document.getElementById('suma').value=acumulador;	
	
	document.getElementById('promedio').value=acumulador/5;
	

	
	while (contador<5)
	{ 	
		
		contador ++;

		
		numero= prompt ("ingrese un numero");
		


		acumulador += numero


		}
		
		
		if (contador==5)





	numero= acumulador/contador;
}