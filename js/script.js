function myFunction(x) {
	x.classList.toggle("change");
}

$(".projMenuItem").click(function(){
	$(".dropDownProjects").toggle();
});

$(".navIcon").click(function(){
	$(".menuWrapper").toggle();
});
