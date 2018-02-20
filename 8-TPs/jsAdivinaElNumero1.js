/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;

function comenzar()
{ 
  
  var numeroSecreto= Math.floor(Math.random()* 101 - 1) +1;    
  var contadorIntentos= 0;
  }

function verificar()
{   
    var ganador;

    ganador=document.getElementById("numero").value;

    contadorIntentos= document.getElementById("intentos").value ;

    contadorIntentos = contadorIntentos+1;

    if (ganador == numeroSecreto)
       {
      alert ("GANÓ!! " + "y en solo " + contadorIntentos + " intentos");
    }
    else if (ganador > numeroSecreto)
    {
      alert ("Se pasó.")
    }
    else if (ganador < numeroSecreto)
    {
      alert ("Falta...")
    }

    if (contadorIntentos > 10)
    {
      contadorIntentos = 1;
    }

    if (numeroSecreto = ganador)
  {
    numeroSecreto +1;
  }
  else if (numeroSecreto >100)
  {
    numeroSecreto -1;
  }

    
}
                                                                                                                                                    