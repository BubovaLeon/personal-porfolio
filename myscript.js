$(document).scroll(function() {
	var y = $(this).scrollTop();
	if (y > 700 && $( window ).width() < 1160){
		$('#extra-header').fadeIn();
	} else {
		$('#extra-header').fadeOut();
	}
	
      });

$(window).resize(function(){
	checkHeaders();
});

$(document).ready(function(){
	checkHeaders();
});

function checkHeaders(){
	var y = $(this).scrollTop();
	if ( $(window).width() >= 1160){
		$('#navigation').css({position:'fixed'});
		$('#extra-header').fadeOut();
	} else {
		$('#navigation').css({position:'absolute'});
		if (y > 700){
			$('#extra-header').fadeIn();
		}
	}
}