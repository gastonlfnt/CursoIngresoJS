function Mostrar()
{
	var respuesta=true;
	var numero;
	var par=0;
	var prom;
	var suma=0;
	var max;
	var min;
	var flag=0
	var contador=0;

	while(respuesta==true)
	{
		numero=parseInt(prompt("Ingrese numero"));

      while(numero<1)
      {
      	numero=prompt("Ingrese numero");

      }
      if(numero%2==0)
      {
      	par++;
      	

      }
      if(flag==0)
      {
      	min=numero;
      	max=numero;
        flag=1
      }
      if(numero>max)
      {
      	max=numero;
      }
      if(numero<min)
      {
      	min=numero;
      }
      suma=suma+numero;
      contador++;
      respuesta=confirm("Continuar?");
      
    }
    prom=suma/contador;

    document.write("La suma de los numeros es " + suma + "<br>");
    document.write("La cantidad de numeros pares es " + par + "<br>");
    document.write("El promedio es " + prom + "<br>");
    document.write("El num max es " + max + " y el num min es "+ min);



}
