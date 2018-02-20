function Mostrar()
{
	var random = 1
	random=Math.floor(Math.random() * 11 - 10 )+10;
	if (random==9&&10)

	

	{
		alert ("Su nota es excelente.")
	}
	else if (random>=4)
	{
		alert ("Su nota mayor a 4, aprobó")

}	
	else if (random<=3)
{
	alert ("Usted está desaprobado.")
}


}
