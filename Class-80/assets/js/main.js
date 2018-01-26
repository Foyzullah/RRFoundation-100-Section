(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();


        $(".portfolio-list").masonry({
            itemSelector: '.single-featured-item',
            columnWidth: 56%
        });
        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	