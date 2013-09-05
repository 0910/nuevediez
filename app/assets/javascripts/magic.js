$(function(){
	$('.work .ph').css('opacity', 0.3);
	windowHeight = $(window).height();
	workHeight = windowHeight/2;
	workHeight2 = windowHeight - windowHeight*0.15;
	$('.logo').css('height', windowHeight);
	$('.work .ph').css('height', workHeight);
	$('.work .ph:first' ).css('height', workHeight).css('opacity', 1);

	brand = $('.brand');
	setInterval(function(){
		brand.css('background-position', '-47px 0px');
		setTimeout(function(){
			brand.css('background-position', '0px 0px');
		}, 500);
	}, 60000);

	$('.work').hover(
    function(){

      $(this).find('.ph').animate({
		    opacity: 1,
		    height: workHeight2
		  }, 200);
    },
    function(){
      $(this).find('.ph').animate({
		    opacity: 0.3,
		    height: workHeight
		  }, 600
    )}
  );
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