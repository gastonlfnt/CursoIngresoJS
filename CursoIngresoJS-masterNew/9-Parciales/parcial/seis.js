function Mostrar()
{ var importe=0;
  var dia=0;
  var maximo;
  var minimo;
  var flag=0;

   while(dia<2)
   { 
    importe=parseInt(prompt("Ingrese el numero"));
   	while(importe<=0)
    {
     importe=parseInt(prompt("Ingrese el numero"));}
     

	if(flag==0 || importe>maximo)
	{
		maximo=importe;
		document.write("El importe maximo es " + maximo + "<br>");
	}
	if(flag==0 || importe<minimo)
	{
		minimo=importe;
		flag=1;
		document.write("El importe minimo es " + minimo + "<br>");

	}
    
   dia++;
   }
  

   
  


	
      
    
}
