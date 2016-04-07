$(document).on("ready",function(){
	//variables
	var mitiempo,t,menu,dirvideo,mivideo,p;

	//definir referencias
	mivideo=$("#mivideo").get(0);
	mitiempo=$(".tiempo");
	menu=$(".menu");
	p=$(".pregunta");
	t=6;
	//ejecución de funciones
	//si presionan el primer boton
	menu.on("click","#pre1",function(){
		actualizarvideo("videos/romantica1.mp4");
	});
	menu.on("click","#pre2",function(){
		actualizarvideo("videos/regueton3.mp4");
	});

	function actualizarvideo(ruta){
		//alert("Eres muy romantico :) ");
		p.hide();
		menu.hide();
		dirvideo=ruta;
		$("#mivideo source").attr("src",dirvideo);
		$("#mivideo").load();
		mivideo.play();
	};

	// ejecutar el tiempo
	var intervalotiempo=setInterval(function(){
		mitiempo.text(t);
		t--;
		if (t<=3) {
			mitiempo.css("color","red");
		};
		if (t<=0){
			clearInterval(intervalotiempo);
			$(".tiempo").hide();
			mostrarbotones(1);
		};
	},1000);
	// function mostrar botones
	function mostrarbotones(opcion){
		var resultado,pregunta;
		
		if (opcion==1){
			pregunta="Pediste permiso a papas de novia?";
			p.html(pregunta).fadeIn("fast");
			resultado="<li id='pre1'>Si</li><li id='pre2'>No</li>";
			$(".menu").html(resultado);
		};
	}
});