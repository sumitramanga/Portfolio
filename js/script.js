(function(){

	var tcsContent = document.getElementById("tcsContent");
	var wbsContent = document.getElementById("wbsContent");
	var fhContent = document.getElementById("fhContent");
	var projLi = document.getElementById("projLi");


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
			// projLi.style.display = 'block';
			// projLi.style.paddingRight = '1em';
			$(".dropDownProjects").slideToggle(300);
			$(".projLi").toggleClass("styleSecMenu");
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

		$(".tcsTitle").click(function() {
			$(".tcsContent").slideToggle(400);
			tcsContent.style.display = "flex";
			wbsContent.style.display = "none";
			fhContent.style.display = "none";
		});

		$(".wbsTitle").click(function() {
			$(".wbsContent").slideToggle(400);
			wbsContent.style.display = "flex";
			tcsContent.style.display = "none";
			fhContent.style.display = "none";
		});

		$(".fhTitle").click(function() {
			$(".fhContent").slideToggle(400);
			fhContent.style.display = "flex";
			wbsContent.style.display = "none";
			tcsContent.style.display = "none";
		});

	}); // doc ready ends
}()); // IIFE Ends
