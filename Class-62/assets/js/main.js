(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        
        $(".jquery-filter li").on('click', function(){
            
            $(".jquery-filter li").removeClass("active")
            $(this).addClass("active");
            var selector = $(this).attr("data-filter"); 
            
            $(".project-list").isotope({
                filter:selector, 
            });
        });
        
        

       $(".project-list").isotope();



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	