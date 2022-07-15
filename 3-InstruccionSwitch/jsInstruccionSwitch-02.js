function mostrar()
{

	let mes;
	let tex;

	mes = document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case "Julio":
		tex = "Abrigate que hace frio"
		break;
		case "Agosto":
		tex = "Abrigate que hace frio"
		break;
		case "Septiembre":
		tex = "Ya pasamos el frio"
		break;
		case "Octubre":
		tex = "Ya pasamos el frio"
		break;
		case "Noviembre":
		tex = "Ya pasamos el frio"
		break;
		case "Diciembre":
		tex = "Ya pasamos el frio"
		break;
		default:
		tex = "Falta para el invierno"

	}
		alert(tex);

}//FIN DE LA FUNCIÓN