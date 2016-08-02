// jQuery Smooth Scrolling Function

$(document).ready(function() {
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top-50
            }, 1000);
            return false;
          }
        }
      });
    });
});

// Change "active class while navigating

$(document).ready(function() {
$(".nav a").on("click", function() {
	$(".nav").find(".active").removeClass("active");
	$(this).parent().addClass("active");
});
});

// Auto navbar on click

$(document).ready(function () {
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
});