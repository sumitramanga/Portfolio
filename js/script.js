// $(window).load(function (){
// 	$("#div1").fadeIn();
// 	$("#div2").fadeIn("slow");
// 	$("#div3").fadeIn(3000);
// });


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

// var duration = anime({
//   targets: '#duration .el',
//   translateY: -50,
//   duration: 3000
// });
