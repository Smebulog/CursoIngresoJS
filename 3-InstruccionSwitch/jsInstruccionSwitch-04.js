function mostrar()
{
	let mes;
	let tex;
		mes = document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case "Abril":
		tex = "Tiene 30 dias"
		break;
		case "Junio":
		tex = "Tiene 30 dias"
		break;
		case "Septiembre":
		tex = "Tiene 30 dias"
		break;
		case "Noviembre":
		tex = "Tiene 30 dias"
		break;
		case "Febrero":
		tex = "Tiene 28 dias"
		break;
		default:
		tex = "Tiene 31 dias"

	}
		alert(tex);

}//FIN DE LA FUNCIÓN