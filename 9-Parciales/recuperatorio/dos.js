function Mostrar()
{  
    var importe;
    var importefinal;
    importe=document.getElementById("importeFinal").value;
    importe=parseInt(importe);
    importefinal= importe * 0.25 - importe;
    alert ("el importe final del producto es... " + importefinal);
  
}
