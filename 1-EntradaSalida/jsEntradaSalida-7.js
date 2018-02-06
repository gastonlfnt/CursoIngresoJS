/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()

{	
	var numero1;
    var numero2;
    var suma;
    numero1= document.getElementById("numeroUno").value;
    numero2= document.getElementById("numeroDos").value;
    numero1 =parseInt(numero1);
    numero2 =parseInt(numero2);
    suma= numero1 + numero2;
    alert (" la suma es  "  + suma );
}   

function restar()
{
    var numero1;
    var numero2;
    var resta;
    numero1=    document.getElementById("numeroUno").value;
    numero2=    document.getElementById("numeroDos").value;
    numero1=    parseInt    (numero1);
    numero2=    parseInt    (numero2);
    resta =      numero1 - numero2;
    alert ("la resta es " + resta);

      

	
}

function multiplicar()
{ 
	var numero1;
    var numero2;
    var multiplicar;
    numero1= document.getElementById("numeroUno").value;
    numero2= document.getElementById("numeroDos").value;
    numero1= parseInt(numero1);
    numero2= parseInt(numero2);
    multiplicar= numero1 * numero2;
    alert ("la multiplicación es " + multiplicar);
}

function dividir()
{
    var numero1;
    var numero2;
    var dividir;
    numero1=document.getElementById("numeroUno").value;
    numero2=document.getElementById("numeroDos").value;
    numero1=parseInt(numero1);
    numero2=parseInt(numero2);
    dividir= numero1 / numero2;
    alert ("El resultado de la división es " + dividir );
	
}

