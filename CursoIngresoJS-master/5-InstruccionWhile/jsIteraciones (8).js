function Mostrar()
{

	
    var positivo=0;
	var negativo=1;
	var numero;
	var respuesta='si';
	
	while(respuesta=="si")
	{   
        numero=prompt("Ingrese numero");
        if(numero>=0)
		{
			numero=parseInt(numero);
			positivo=positivo + numero;
		}
		else
		{
		}

		respuesta=prompt("Continuar: SI O NO");	
			negativo=negativo*numero;


	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN