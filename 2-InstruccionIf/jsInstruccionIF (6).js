function Mostrar()

{   
    var edad=document.getElementById("edad").value;
    if (edad>17)

{
    alert       ("Usted es mayor de edad");
}   
    else if (edad>12 && edad<17)
    {
        alert ("Usted es adolescente");
    }
    else
    { alert ("Usted es un niño"); }
}
 //||º