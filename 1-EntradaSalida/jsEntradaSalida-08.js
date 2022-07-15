/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	
	let dividendo;
	let divisor;
	let resto;

	dividendo=document.getElementById("txtIdNumeroDividendo").value;
	dividendo=parseInt(dividendo);
	divisor=document.getElementById("txtIdNumeroDivisor").value;
	dividendo=parseInt(divisor);
	resto= dividendo % divisor;

	alert("resto es" + resto);

	resto= 10%2;
	resto= 2%10;
	resto= 3%9;
	resto= 3%10;
	resto= 3%11;
	resto= 9%3;
	resto= 10%3;


}
