function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

	let notaRandom
	notaRandom = Math.floor(Math.random() * 10) + 1;
	notaRandom = parseInt(notaRandom);
	if (notaRandom == 9 || notaRandom == 10) 
	{
		alert("Excelente " + notaRandom);

	}
	else
	{
		if (notaRandom >4)
		 {
		 	alert("Aprobo " + notaRandom);

		 }
		 else
		 {
		 	alert("Vamos, la proxima se puede " +notaRandom);
		 }
	}
}//FIN DE LA FUNCIÓN