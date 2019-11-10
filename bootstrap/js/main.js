$(function() {
	$('.slider_inner').slick({
		prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
		infinite: false
	});

	$('.header_btn-nav').on('click', function(){
		 $('.header_ul').slideToggle();
	});

});