function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;
	while(respuesta=="si")
	{
		numero=parseInt(prompt("Ingrese numero"));
		acumulador=acumulador+numero;
        respuesta=prompt("Continuar: SI O NO");
        contador++;
		
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN