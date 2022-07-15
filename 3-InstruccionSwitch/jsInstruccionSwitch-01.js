function mostrar()
{
	let mes;
	let tex;
	mes = document.getElementById("txtIdMes").value;
	switch (mes)
	{
		case "Enero":
		tex = "que comiences bien el año"
		break;
		case "Marzo":
		tex = "a clases!!!"
		break;
		case "Julio":
		tex = "Se vienen las vacaciones"
		break;
		case "Diciembre":
		tex = "Felices fiestas"		
		break;
		default:
		tex = "Ingrese un mes correcto"
	}
		alert(tex);
}//FIN DE LA FUNCIÓN
//switch(expression) {
 //case x:
   // code block
    //break;
  //case y:
    // code block
    //break;
  //default:
    // code block}