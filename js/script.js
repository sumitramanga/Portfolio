(function(){

	$(window).load(function(){
		$(".loader").fadeOut();
  	});

	$(document).ready(function(){

		// Toggling menu via slide method
		$(".navIcon").click(function(){
			navIcon.classList.toggle("change");
			$(".menuWrapper").slideToggle(400);
		});
		$(".projMenuItem").click(function(){
			$(".dropDownProjects").slideToggle(400);
		});

		$('.scrollDownBtn').click(function(){
			$('html, body').animate({
				scrollTop: $(".featured").offset().top
			}, 2500);
		});

		// Fade in landing screen content
		$(".landWrapper").delay(600).fadeIn(2500);

		var mySwiper = new Swiper ('.swiper-container', {
			loop: true,
			autoHeight: true,
			autoplay: true,
			delay: 300,
			effect: 'fade',
			fadeEffect: {
				crossFade: true
			},

			// If we need pagination
			pagination: {
			  el: '.swiper-pagination',
			},

			// Navigation arrows
			navigation: {
			  nextEl: '.swiper-button-next',
			  prevEl: '.swiper-button-prev',
			}
	  	});

	}); // doc ready ends

}()); // IIFE Ends
