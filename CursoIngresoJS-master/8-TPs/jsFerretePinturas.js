/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temp=document.getElementById("Temperatura").value;
	temp=parseInt(temp);

	var resultado= (temp-32)/1.8;
	alert(temp + " Fahrenheit "+ " son " + resultado + " centígrados");
	
}

function CentigradosFahrenheit () 
{
	var temp=document.getElementById("Temperatura").value;
	temp=parseInt(temp);

	var resultado=(temp*1.8)+32;
	alert(temp + " centigrados " +" son "+ resultado+" Fahrenheit ");

	
}
