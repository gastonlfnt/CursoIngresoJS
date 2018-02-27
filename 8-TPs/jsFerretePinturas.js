/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var Fahrenheit=document.getElementById("Temperatura").value;
	Fahrenheit=parseInt(Fahrenheit);

	var Traspaso= (Fahrenheit-32)/1.8;
	alert(Fahrenheit + " Fahrenheit son " + Traspaso + " centígrados");
	
}

function CentigradosFahrenheit () 
{
    var Fahrenheit=document.getElementById("Temperatura").value;
	Fahrenheit=parseInt(Fahrenheit);

	var Traspaso=(Fahrenheit*1.8)+32;
	alert(Fahrenheit + " centigrados son "+ Traspaso+" Fahrenheit ");

	
}

