// IE10+
document.getElementsByTagName( "html" )[0].classList.remove( "loading" );

// All browsers
document.getElementsByTagName( "html" )[0].className.replace( /loading/, "" );

// Or with jQuery
$( "html" ).removeClass( "loading" );


$(function(){

	var $slides = $(".slide");			//slides 
	var currentSlide = 0;				//keep track on the current slide
	var stayTime = 3;				//time the slide stays
	var slideTime = 1.3;				//fade in / fade out time

	TweenLite.set($slides.filter(":gt(0)"), {autoAlpha:0});	//we hide all images after the first one
	TweenLite.delayedCall(stayTime, nextSlide);				//start the slideshow

	function nextSlide(){					
			TweenLite.to( $slides.eq(currentSlide), slideTime, {autoAlpha:0} );		//fade out the old slide
			currentSlide = ++currentSlide % $slides.length;							//find out which is the next slide			
			TweenLite.to( $slides.eq(currentSlide), slideTime, {autoAlpha:1} );		//fade in the next slide
			TweenLite.delayedCall(stayTime, nextSlide);								//wait a couple of seconds before next slide
	}

});