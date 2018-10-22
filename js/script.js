(function(){

	$(window).load(function(){

  	});

	$(document).ready(function (){

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
			}, 2500);
		});

		$(".landWrapper").fadeIn(2500);
		console.log('working');

		// var duration = anime({
		//   targets: '#duration .el',
		//   translateY: -50,
		//   duration: 3000
		// });

	});

}());
