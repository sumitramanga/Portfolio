var navIcon = document.getElementById("navIcon");

$(".projMenuItem").click(function(){
	$(".dropDownProjects").toggle();
});

$(".navIcon").click(function(){
	$(".menuWrapper").toggle();
});

$(".navIcon").click(function(){
	navIcon.classList.toggle("change");
});
