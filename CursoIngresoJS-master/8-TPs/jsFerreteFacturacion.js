/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var numero1=document.getElementById("PrecioUno").value;
	var numero2=document.getElementById("PrecioDos").value;
	var numero3=document.getElementById("PrecioTres").value;

    numero1=parseInt(numero1);
	numero2=parseInt(numero2);
	numero3=parseInt(numero3);

	var resultado= numero1 + numero2 + numero3;
	alert("La suma es: " + resultado);


}
function Promedio () 
{
	var numero1=document.getElementById("PrecioUno").value;
	var numero2=document.getElementById("PrecioDos").value;
	var numero3=document.getElementById("PrecioTres").value;

    numero1=parseInt(numero1);
	numero2=parseInt(numero2);
	numero3=parseInt(numero3);

	var resultado=(numero1+numero2+numero3)/3;
	alert("El promedio es: " + resultado);

	
}
function PrecioFinal () 
{
	var numero1=document.getElementById("PrecioUno").value;
	var numero2=document.getElementById("PrecioDos").value;
	var numero3=document.getElementById("PrecioTres").value;

	numero1=parseInt(numero1);
	numero2=parseInt(numero2);
	numero3=parseInt(numero3);

	var resultado=(numero1+numero2+numero3);
	var resultado=resultado*1.21;
	alert("El precio final es: "+ resultado);

	
}