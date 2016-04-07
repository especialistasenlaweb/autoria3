$(document).on("ready", function(){
	//las variables
	var duracion, videomk, actual, btn1, btn2;
	var btn3, btn4, btn5;

	//referencias obtener video
	btn1=$("#inicio");
	btn2=$("#detener");
	btn3=$("#rapido");
	btn4=$("#lento");
	btn5=$("#restaurar");
	videomk=$("#videomk").get(0);
	duracion="";
	actual="";
	//restaurar el rate
	btn5.on("click", function(){
		videomk.playbackRate=1;
		$(".mensaje .rate").text(videomk.playbackRate);
	});
	//acelerar video
	btn3.on("click",function(){
		videomk.playbackRate+=0.1;
		
		$(".mensaje .rate").text(videomk.playbackRate);
	});
	//video lento
	btn4.on("click",function(){
		
		videomk.playbackRate-=0.1;
		$(".mensaje .rate").text(videomk.playbackRate);
	});
	//para el video
	btn2.on("click",function(){
		videomk.pause();
	});
	//ejecutar la funcion para ese boton
	btn1.on("click", function(){
		videomk.play();
		});
	
	//mostrar duracion
	videomk.addEventListener("loadedmetadata", function(){
		duracion=videomk.duration;
		$(".mensaje .total").text(duracion);
	});
	//mostrar segundo actual y siempre ejecucion
	//mientras se reproduce el video
	videomk.addEventListener("timeupdate",function(){
		actual=videomk.currentTime;
		//aplicar filtro entre 5 y 10
		if (actual>=5 && actual<=10) {
			$("#videomk").addClass("mariofiltro");
		}else{
			$("#videomk").removeClass("mariofiltro");
		}
		// cuando llegue al 12 salte a un randomico >30
		//if (actual>=12 && actual<=15) {
			//crear el numero aleatoreo
			// aleatorio entre el 0  y el 134
			// + 30 por si cae 0
			//var suerte=parseInt(Math.random()*135)+30;
			//alert(suerte);
			//videomk.currentTime=suerte;
			//videomk.play();
		//}
		//mostrar el segundo actual
		$(".mensaje .actual").text(actual);	
		//sacar el porcentaje
		var por=parseInt((actual/duracion)*100);
			$(".mensaje .porcentaje").text(por+"%");
			$("progress").val(por);
	});


});


//https://github.com/especialistasenlaweb/autoria3