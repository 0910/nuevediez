$(function(){
	// Cambiar el logo una vez por minuto
	windowHeight = $(window).height();
	logoHeight = windowHeight - 66;
	$('.logo').css('height', logoHeight)

	brand = $('.brand');
	setInterval(function(){
		brand.css('background-position', '-47px 0px');
		setTimeout(function(){
			brand.css('background-position', '0px 0px');
		}, 500);
	}, 60000);
});
$(window).scroll(function(){
  aboveHeight = $('.logo').outerHeight();
  if ($(window).scrollTop() > aboveHeight){
    $('.navbar').addClass('navbar-fixed-top');
    //$('#content').css('margin-top','80px');
    } else {
    $('.navbar').removeClass('navbar-fixed-top');
    //$('#content').css('margin-top','0px');
    }
});