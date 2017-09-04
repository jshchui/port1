$(document).ready ( function() {

	
	var sdegree = 0,
		$body = $(document.body),
		bodyHeight = $body.height();

	
	$('html').hide().fadeIn(1500).delay(6500);
	 console.log("loaded");

	var black = 0;

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

/*
  $('#filterOptions li a').click(function() {
    // fetch the class of the clicked item
    var ourClass = $(this).attr('class');

    // reset the active class on all the buttons
    $('#filterOptions li').removeClass('active');
    // update the active state on our clicked button
    $(this).parent().addClass('active');

    if(ourClass == 'all') {
      // show all our items
      $('.content-box').children('li.container').show();
    }
    else {
      // hide all elements that don't share ourClass
      $('.content-box').children('li:not(.' + ourClass + ')').hide();
      // show all elements that do share ourClass
      $('.content-box').children('li.' + ourClass).show();
    }
    return false;
  });
*/


$(function(){
  $('.content-box').mixItUp();
});



 




	/*$("div.myLogo").click( function(e) {
		e.preventDefault();

		if(black == 0){
			$(document).css.find("#FFFFFF")({
				$(this).replace('#FFFFFF', '#000000')
			
			});
			black = 1;
		} else if

		(black == 1){
			$("div").css({

				'background-color' : '#000000'
			
			});
			black = 0;
			
		};
		

		
		for(var i = 0; i < divs.length; i++){
  		//do something to each div like
  		divs[i].replace("#000000", "#FFFFFF");
  		

	
	});*/

});