(function ($) {
	"use strict";

    jQuery(document).ready(function($){


          var center = [22.8454448, 89.4624607];
    $(".map")
      .gmap3({
        center: center,
        zoom: 8,
        mapTypeId : google.maps.MapTypeId.ROADMAP
      });
      


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	