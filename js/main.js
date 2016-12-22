;(function($) {
	"use strict";

	$(function(event){
		$('.ba-slider').slick(
		{
			slidesToShow: 1,
			slidesToScroll: 1,
			slide: '.ba-slider__item',
			prevArrow: '.ba-slider__prev',
			nextArrow: '.ba-slider__next',
			asNavFor: '.ba-slider-thumb'
		}
		);
		$('.ba-slider-thumb').slick(
		{
			infinite: true,
			arrows: false,
			dots:false,
			asNavFor: '.ba-slider',
			slidesToShow: 3,
			slidesToScroll: 1,
			centerMode: true,
			focusOnSelect: true
		}
		);
		// var sliderItems = $('.slick-slide');
		// sliderItems.on('click', function(){
		// 	sliderItems.removeClass('ba-slider--active')
		// 	$(this).addClass('ba-slider--active');
		// });
	});

})(jQuery);
