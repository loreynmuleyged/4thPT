$(document).ready(function(){
	$("#na").click(function(){
		$("#main").animate({left:"22.5%"},400);
		$("#main").animate({left:"30%"},500);
		$("#loginform").css("visibility","hidden");
		$("#loginform").animate({left:"25%"},400);

		$("#signupform").animate({left:"17%"},400);
		$("#signupform").animate({left:"30%"},500);
		$("#signupform").css("visibility","visible");

	});

	$("#kapoy").click(function(){
		$("#main").animate({left:"70%"},400);
		$("#main").animate({right:"77.5%"},300);
		$("#signupform").css("visibility","hidden");
		$("#signupform").animate({left:"75%"},400);


		$("#loginform").animate({left:"83.5%"},370);
		$("#loginform").animate({left:"70%"},500);
		$("#loginform").css("visibility","visible");

});
	
});