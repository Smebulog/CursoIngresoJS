//Nombre Victor Bautista Plaza
/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precioA;
	let precioB;
	let precioC;
	let precioFInal;

	precioA = document.getElementById("txtIdPrecioUno").value;
	precioA = parseInt(precioA);
	precioB = document.getElementById("txtIdPrecioDos").value;
	precioB = parseInt(precioB);
	precioC = document.getElementById("txtIdPrecioTres").value;
	precioC = parseInt(precioC);

	precioFInal=precioA + precioB + precioC;

	alert("precio final " + precioFInal)

}
function Promedio () 
{
	let numeroUno;
	let numeroDos;
	let numeroTres;
	let promedio;
	let suma;

		numeroUno = document.getElementById("txtIdPrecioUno").value;
		numeroUno = parseInt(numeroUno);
		numeroDos = document.getElementById("txtIdPrecioDos").value;
		numeroDos = parseInt(numeroDos);
		numeroTres =document.getElementById("txtIdPrecioTres").value;
		numeroTres = parseInt(numeroTres);


		suma = numeroUno + numeroDos + numeroTres;

		promedio = suma /3;

		alert("el resultado es " + promedio );



}
function PrecioFinal () 
{

	let primerNumero;
	let segundoNumero;
	let tercerNumero;
	let porcentaje;
	let suma;
	let precioFInal;


	primerNumero = document.getElementById("txtIdPrecioUno").value;
	primerNumero = parseInt(primerNumero); 
	segundoNumero = document.getElementById("txtIdPrecioDos").value;
	segundoNumero = parseInt(segundoNumero);
	tercerNumero = document.getElementById("txtIdPrecioTres").value;
	tercerNumero = parseInt(tercerNumero);

	porcentaje = 21

	suma = primerNumero + segundoNumero + tercerNumero;

	precioFInal = suma * porcentaje /100	
	

	alert("el resultado es " + precioFInal);

	
}