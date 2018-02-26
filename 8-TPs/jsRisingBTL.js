/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
    var edad = document.getElementById("Edad").value;
    var sexo = document.getElementById("Sexo").value;
    var estadoCivil = document.getElementById("EstadoCivil").value;
    var sueldoBruto = document.getElementById("Sueldo").value
    var numeroDeLegajo;
    var nacionalidad;
  {  edad= prompt ("Ingrese su edad " )
  //INGRESO DE EDAD// 
     
     do 
      {
         console.log (edad)
         alert ("Su edad es " + edad)

         break;
         //SI CUMPLE LOS REQUISITOS, SIGUE.//

     }
     
     while (edad>=18&&edad<=90)
//SI ESTÀ ENTRE 18 Y 90 AÑOS//
    

      if (edad>90)  // SI LA EDAD ES MAYOR A 90...//
     {
         alert ("Usted sobrepaso la edad");
         
     }

     else if   (edad<17) 
     //SI LA EDAD ES MENOR A 18...//    
     {
         alert ("Usted es menor de edad")
     }
}

    
  {  while (sexo!="f" && sexo!="m") //Si es F = FEMENINO M Para MASCULINO//

    {   sexo =  prompt ("Ingrese 'M' para masculino ó 'F' para femenino")

        if (sexo=="m")
       { alert ("Su sexo es 'Masculino'")
       console.log (sexo)
       break; //Si cumple se corta y pasamos al siguiente//
    }
        

        else  (sexo=="f")
   alert ("Su sexo es 'Femenino'");
   break;
}}

     {
        
{
    var estadoCivil=document.getElementById("EstadoCivil").value; 
    console.log (estadoCivil)
    estadoCivil= prompt ("ESTADO CIVIL 1-SOLTERO, 2- CASADO, 3-DIVORCIADO, 4-VIUDO."); 
    switch (estadoCivil) 
   {   

       case "1":
       alert ("Su Estado Civil : SOLTERO");
       break;

       case "2":
       alert ("Su Estado Civil : CASADO");
       break;

       case "3":
       alert ("Su Estado Civil : DIVORCIADO");
       break;

       case "4":
       alert ("Su Estado Civil : VIUDO");
       break;
   }
    

  {     
      sueldoBruto = prompt ("Ingrese Su Sueldo Bruto");
        
        while (sueldoBruto>8000)
        console.log (sueldoBruto);{
            
        if (sueldoBruto>=8000)

        {
            alert ("Su sueldo es. " + sueldoBruto)
        }

        else
        {
         alert ("Su sueldo es menor al permitido.")   
        }

    
}
}

}
    

    


    
 
}
}