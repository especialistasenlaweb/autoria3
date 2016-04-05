$(document).on("ready", function(){
	$(".boton").on("click", function(){
		$(".fondomodal,.mensaje").fadeIn("slow");
	});
	$(".mensaje h1").on("click", function(){
		$(".fondomodal,.mensaje").fadeOut("slow");
	});	
});