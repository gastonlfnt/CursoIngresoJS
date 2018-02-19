function Mostrar()
{
	var edad;
	var estadoCivil;

	edad= document.getElementById("edad").value;
	estadoCivil= document.getElementById("estadoCivil").value;

	if(edad<18 && estadoCivil!="Soltero")
	{
		alert("Es un pequeño para NO ser soltero");
	}
//tomo la edad  

	


}//FIN DE LA FUNCIÓN