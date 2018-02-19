/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo=document.getElementById("Largo").value;
	var ancho=document.getElementById("Ancho").value;

	largo=parseInt(largo);
	ancho=parseInt(ancho);

	var resultado=(largo*2+ancho*2)*3;
	alert("Se necesita " + resultado + " metros de alambre para rodear el perimetro 3 veces ");

}
function Circulo () 
{
	var radio=document.getElementById("Radio").value;

	radio=parseInt(radio);

	var resultado=2*3.14*radio;
	var resultado=resultado*3;
	alert("Se necesita "+ resultado + " metros de alambre para rodear 3 veces la circunferencia ");
	
}
function Materiales () 
{

	var largo=document.getElementById("Largo").value;
	var ancho=document.getElementById("Ancho").value;

	largo=parseInt(largo);
	ancho=parseInt(ancho);

	var resultado1=(largo*ancho)*2;
	var resultado2=(largo*ancho)*3;

	alert("Se necesita "+resultado1+" bolsas de cemento y "+resultado2+" bolsas de cal para hacer un contrapiso");
	
}