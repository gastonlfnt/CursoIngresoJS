/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{   
    var dividendo;
    var divisor;
    var resto;
    dividendo=document.getElementById("dividendo").value;
    divisor=document.getElementById("divisor").value;
    dividendo=parseInt(dividendo);
    divisor=parseInt(divisor);
    resto= diviendo % divisor;
    alert ("el resto de la división es " + resto);
	
}
