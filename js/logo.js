$(document).ready (function() {
	var $body = $(document.body);
	var bodyHeight = $body.height();

	$('html').hide().fadeIn(1500).delay(6500);

	$(window).scroll(function () {
		$("div.myLogo").css({
			'transform': 'rotate(' + ($body.scrollTop() / bodyHeight * 600) + 'deg)'
		});
	});

	$('.backtotop2').click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 700);
		return false;
	});

	$(function(){
	  $('.content-box').mixItUp();
	});
});
