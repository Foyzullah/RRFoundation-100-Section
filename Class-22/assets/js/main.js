(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

        $(".faculties-member").owlCarousel({
            items: 4,
            loop: true,
            autoplay: false,
            nav: false,
            dots: true,
            margin:30,
        });

        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	