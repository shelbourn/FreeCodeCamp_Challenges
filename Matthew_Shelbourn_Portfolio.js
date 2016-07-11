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

//Animate on Hover

/*$(document).ready(function(){
    $('#logo').each(function() {
        animationHover(this, 'bounce');
    });
});

function animationHover(element, animation){
    element = $(element);
    element.hover(
        function() {
            element.addClass('animated ' + animation);        
        },
        function(){
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, 2000);         
        });
}

End Animate on Hover */