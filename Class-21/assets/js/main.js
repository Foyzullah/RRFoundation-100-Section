(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();
        
        $(".homepage-slider").owlCarousel({
            items: 1,
            nav: false,
            dots: true,
            loop: true,
            autoplay: false,
        });


        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	