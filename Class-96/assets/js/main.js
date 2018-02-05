(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".homepage-slide").owlCarousel({
            items: 1,
            nav: false,
            dots: true,
            loop: true,
            autoplay: false
        });
        $(".logo-carousel").owlCarousel({
            items: 5,
            nav: false,
            dots: false,
            loop: true,
            autoplay: false,
            margin: 30,
        });

        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	