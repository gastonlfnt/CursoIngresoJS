function Mostrar()
{


    var numero;
	var positivo=0;  
	var negativo=0;
	var ProPos 
	var ProNeg;
	var cantP=0 
	var cantN=0;
	var cantCero=0;
	var diferencia;
	var respuesta=true;
	var pares=0;

	while(respuesta==true)
	{
		numero=parseInt(prompt("Ingrese numero"));
		if(numero>0)
		{
			positivo+=numero;
			cantP++;
			ProPos=positivo/cantP;

        }
		else
		{
			if(numero<0)
			{
				negativo+=numero;
				cantN++;
				ProNeg=negativo/cantN;
            }
            else
            {
            	cantCero++;
            }
		}
		
		if((numero%2)==0)
		{
			pares++;

		}

		respuesta= confirm("Desea continuar?");
	    
		
	}
	

	document.write("La suma de los positivos es " + positivo + "<br>");
	document.write("La cantidad de N positivos es " + cantP + "<br>");
	document.write("El pomedio de N positivos es " + ProPos + "<br>");
	document.write("La suma de los negativos es " + negativo + "<br>");
	document.write("La cantidad de N negativos es "+ cantN + "<br>");
	document.write("El promedio de N negativos es " + ProNeg + "<br>");
	document.write("La cantidad de ceros es "+ cantCero + "<br>");
	document.write("La cantidad de N pares es " + pares + "<br>");
	document.write("La diferencia entre positivos y negativos es " + diferencia + "<br>");
	




}//FIN DE LA FUNCIÓN