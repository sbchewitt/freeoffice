$(document).ready(function(){

	
	// bxslider loading
	var slider = $('.bxslider').bxSlider({
		autoStart: false,
		controls: false
	});

	// work-bxslider loading
	var workSlider = $('.work-bxslider').bxSlider({
		mode: 'fade',
		autoStart: false,
		controls: false
	});

	// Start the bxslider transitions when page is reached
	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
    	var vimeoPosition = $('.vimeo').offset().top;
		var workPosition = $('.work').offset().top;
    	if (scroll >= vimeoPosition){
    		slider.startAuto();
    	}
		if (scroll >= workPosition){
			workSlider.startAuto();
		}
    	//console.log(scroll);
	});
	//console.log('OFFSET OF WORK: ' + $('.work').offset().top);


	// Animated anchor links
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
	
});