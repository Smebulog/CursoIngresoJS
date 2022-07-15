//Nombre Victor Bautista Plaza
function mostrar() //else 
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if (edad > 17)

	 {
	 	alert("es mayor de edad");

	 }
	 else
	 {
	 		if (edad > 12) 
	 		{

	 			alert("Es adolecente");
	 		}
	 		else
	 			{
	 				alert(" Es un niño");

	 			}



	 }


}//FIN DE LA FUNCIÓN