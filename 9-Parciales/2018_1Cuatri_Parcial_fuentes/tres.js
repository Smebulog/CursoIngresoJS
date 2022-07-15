
//Nombre Victor Bautista Plaza
//Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.
function mostrar()
{

	let precio;
	let porcentaje;
	let precioFinal;

		precio = prompt("ingresar precio");
		precio = parseInt(precio);

		porcentaje = prompt("ingresar porcentaje");
		porcentaje = parseInt(porcentaje);

		precioFinal= (precio * porcentaje) / 100;

		document.getElementById("elPrecioFinal").value = precioFinal;
		

}
