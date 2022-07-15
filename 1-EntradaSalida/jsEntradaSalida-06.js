//Ingresar el valor del dólar oficial y el valor del dólar blue.
//Mostrar la diferencia expresada en porcentaje entre una cotización y otra
function sumar()
{

	let dolarOficial;
	let dolarBLue;
	let porcentaje;
	let diferencia;
	let resultado;

		dolarOficial = document.getElementById("txtIdNumeroUno").value;
		dolarOficial = parseInt(dolarOficial);
		dolarBLue = document.getElementById("txtIdNumeroDos").value;
		dolarBLue = parseInt(dolarBLue);

		diferencia = (dolarBLue / dolarOficial);
		resultado = diferencia - 100;
		

		alert("la diferencia de " + dolarOficial + " y el dolar " + dolarBLue + " es de " + resultado);













}

