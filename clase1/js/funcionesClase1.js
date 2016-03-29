$(document).on("ready",function(){
	// defino variables
	var miboton1,miboton2,miboton3,miboton4,miboton5,contenido;
	// hago referencias

	miboton1=$(".miboton1");
	miboton2=$(".miboton2");
	miboton3=$(".miboton3");
	miboton4=$(".miboton4");
	miboton5=$(".miboton5");

	contenido=$(".micontenido");
	//defino  eventos
	miboton1.on("click",mostrarTexto);
	miboton2.on("dblclick",cambiarCSS);
	miboton3.on("mouseover",cambiarCSS2);
	miboton4.on("click",cambiarInfo);
	miboton5.on("click",reseteo);

	/********************************
	cuerpo de las funciones
	********************************/
	// resetear
	function reseteo(){
		$("body").css("background","white");
		contenido.removeClass("fadp");
		contenido.css("background","white");
		contenido.html("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
		contenido.show();
	}
	// cambiar el contenido 
	function cambiarInfo(){
		contenido.html("<hr> Superman vs Batman <hr>"); // text()
	}
	// cambiar el css segunda parte
	function cambiarCSS2(){
		contenido.toggleClass("fadp"); // addClass removeClass

	}
	// cambiar los estilos primera parte
	function cambiarCSS(){
		contenido.css("background","chocolate").css("font-family","verdana");
		$("body").css("background","aqua");
	}
	// la funcion para mostrar el contenido
	function mostrarTexto(){
		// contenido.show();
		// contenido.show(3000);
		// contenido.fadeIn("fast");
		// contenido.slideDown("slow");
		// contenido.toggle("slow");
		contenido.slideToggle("slow");
	}
});






