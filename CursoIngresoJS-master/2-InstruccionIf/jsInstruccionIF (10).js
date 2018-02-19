function Mostrar()
{
	 var valor;
    valor = Math.floor(Math.random() * 10) + 1;
     alert(valor);
    if(valor>=9)
    {
    	alert("Excelente");

    }
    else
    {
    	if(valor>=4)
    	{
    		alert("Aprobo");
    	}
    	else
    	{
    		alert("Vamos, la proxima se puede");
    	}
    }
	//Genero el número RANDOM entre 1 y 10 
	

}//FIN DE LA FUNCIÓN