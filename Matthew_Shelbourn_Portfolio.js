// Changes "active" class while navigating

$(".nav a").on("click", function() {
	$(".nav").find(".active").removeClass("active");
	$(this).parent().addClass("active");
});

//Collapsible Navbar

/*
$('.collapse').collapse()

$('.navbar-collapse ul li a').click(function() {
  $(".navbar-collapse").collapse('hide');});
	*/