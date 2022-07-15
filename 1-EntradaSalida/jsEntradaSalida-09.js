/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	//variables
	let sueldoingresado;
	let porcentaje;
	let aumento;
	let resultado;
 	//Asignacion del porcentaje
	porcentaje = 10;
	sueldoingresado=document.getElementById("txtIdSueldo").value;
	sueldoingresado=parseInt(sueldoingresado);
	//Logica
	aumento= (sueldoingresado * porcentaje) / 100
 	
 	resultado= sueldoingresado + aumento
 	//Salida
 	document.getElementById("txtIdResultado").value=resultado


	



}
