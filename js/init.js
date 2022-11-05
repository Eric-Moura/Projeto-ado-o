(function($){
  $(function(){

    $('.sidenav').sidenav();

    $('.slider').slider({
      indicators: false,
      height: 500
    });

    $('.parallax').parallax();

    $('.carousel.carousel-slider').carousel({full_width: true});

  }); // end of document ready
})(jQuery); // end of jQuery name space
