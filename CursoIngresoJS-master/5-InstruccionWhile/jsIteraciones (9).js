function Mostrar()
{

	var minimo;
	var maximo;
	var numero;
	var respuesta= true;
	var flag=0

	while(respuesta==true)
	{
		numero=parseInt(prompt("Ingrese numero"));
		
	    if(flag==0 || numero>maximo)
		{
			//maximo=numero;
			//document.getElementById("maximo").value=maximo;
		}
		else(flag==0 || numero>minimo)
		{
			minimo=numero;
			flag=1;
			document.getElementById("minimo").value=minimo;
		}
		respuesta= confirm("Desea continuar?");
		



			
			
		

	
	}




}//FIN DE LA FUNCIÓN