$(document).on("ready",function(){
	// pregunta 1
	$(".f3").on("click",correcta);
	$(".f1,.f2").on("click",incorrecta);

	function correcta(){
		$(".cara").html("<img src='css/images/feliz.jpg'>")
	}
	function incorrecta(){
		$(".cara").html("<img src='css/images/triste.jpg'>")
	}
	// pregunta 2
	$("#lafoto").on("dblclick",function(){
		$(this).toggleClass("filtro");
	})
	//pregunta3
	$("#tufoto").on("click",function(){
		cambio(2);
	});
	$("#tufoto").on("dblclick",function(){
		cambio(3);
	});
	$("#tufoto").on("mouseover",function(){
		cambio(5);
	});
	$("#tufoto").on("mouseout",function(){
		cambio(6);
	});

	$(document).keypress(function(tecla){
		//alert(tecla.which);
		if (tecla.which==13) {
			alert("la m");
			//cambio(4);
		};
		
	});
	function cambio(x){
		$("#tufoto").attr("src","css/images/paisaje"+x+".jpg")
	}

});