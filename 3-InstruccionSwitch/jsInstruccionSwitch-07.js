function mostrar()
{
	let puntoCardinal;
	let tex;

	puntoCardinal = document.getElementById("txtIdDestino").value;

	switch(puntoCardinal)
	{
		case "Bariloche":
		tex = "Bariloche se encuentra al oeste"
		break;
		case "Cataratas":
		tex = "Cataratas se encuentra al"
		break;
		case "Mar del Plata":
		tex ="Mar del PLata se encuentra al"
		break;
		case "Ushuaia":
		tex = "Ushuaia se encuentra al"


	}
	alert(tex);
}//FIN DE LA FUNCIÓN