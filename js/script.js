$(".projMenuItem").click(function(){
	$(".dropDownProjects").toggle();
});

$(".navIcon").click(function(){
	$(".menuWrapper").toggle();
});

$(".navIcon").click(function(){
	navIcon.classList.toggle("change");
});

$('.scrollDownBtn').click(function(){
	$('html, body').animate({
		scrollTop: $(".featured").offset().top
	}, 3000);
});
