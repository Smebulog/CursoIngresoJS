/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

	let largoTerreno;
	let anchoTerreno;
	let cantidadAlambre;
	let perimetro;

	largoTerreno = document.getElementById("txtIdLargo").value;

	largoTerreno = parseInt(largoTerreno);

	anchoTerreno = document.getElementById("txtIdAncho").value;

	anchoTerreno = parseInt(anchoTerreno);


	perimetro = (largoTerreno * 2) + (anchoTerreno * 2);

	cantidadAlambre = perimetro * 3;

	alert("cantidad de alambre a comprar es " + cantidadAlambre);




	




}
function Circulo () 
{

	let cantidadAlambre;
	let radio;
	let pi;
	let diametro;

	radio = document.getElementById("txtIdRadio").value;
	radio = parseInt(radio);

	 	pi = Math.PI;

	 	diametro = 2 * pi * radio;

	 	cantidadAlambre = diametro * 3;

	 alert("la cantidad de alambre es " + cantidadAlambre);




	
}
function Materiales () 
{
	let largoTerreno;
	let anchoTerreno;
	let cemento;
	let cal;
	let terrenoRectangular;


			largoTerreno = document.getElementById("txtIdLargo").value;
			largoTerreno = parseInt(largoTerreno);
			anchoTerreno = document.getElementById("txtIdAncho").value;
			anchoTerreno = parseInt(anchoTerreno);

			terrenoRectangular = largoTerreno * anchoTerreno;

			cemento = terrenoRectangular *2;
			cal = terrenoRectangular *3;

			alert("Se necesitan " + cemento "bolsas de cemento y " + cal "bolsas de cal");

}