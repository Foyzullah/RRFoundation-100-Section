(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

        $('#bar1').barfiller({
            barColor:'#fff',
        });
        $('#bar2').barfiller({
            barColor:'#fff',
        });
        $('#bar3').barfiller({
            barColor:'#fff',
        });
        $('#bar4').barfiller({
            barColor:'#fff',
        });

        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	