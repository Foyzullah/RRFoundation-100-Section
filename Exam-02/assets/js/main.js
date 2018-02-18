(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".video-play-btn").magnificPopup({
            type: 'video',
        });
        
        $(".testimonial-carousel").owlCarousel({
            items: 1,
            nav: false,
            dots: true,
            autoplay: false,
            loop: true,
        });


        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	