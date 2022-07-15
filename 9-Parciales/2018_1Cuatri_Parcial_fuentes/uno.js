//Nombre Victor Bautista Plaza
function mostrar()
{

	let ancho;
	let largo;
	let perimetro;

		ancho = prompt("ingrese el dato");
		ancho = parseInt(ancho);
		largo = prompt("ingrese el dato");
		largo = parseInt(largo);
		perimetro = (ancho * 2) + (largo * 2);

		alert(perimetro);

}
