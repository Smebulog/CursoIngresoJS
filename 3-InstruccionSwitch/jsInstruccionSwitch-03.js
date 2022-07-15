function mostrar()
{
	let mes;
	let tex;
	
	mes = document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case "Febrero":
		tex = "No tiene mas de 29 dias"
		break;
		default:
		tex = "Este mes tiene 30 o mas dias"
	}
		alert(tex);
}//FIN DE LA FUNCIÓN