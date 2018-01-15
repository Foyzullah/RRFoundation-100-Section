(function ($) {
	"use strict";

    jQuery(document).ready(function($){


      var center = [22.8454448, 89.4624607];
    $('.map')
      .gmap3({
        center: center,
        zoom: 8,
        mapTypeId : google.maps.MapTypeId.ROADMAP
      })
      .marker({
        position: center
      })
      .overlay({
        position: center,
        content:  '<div style="color:#000000; border:1px solid #FF0000;background-color: #00FF00; width:100px; line-height:20px; height: 20px; text-align:center">' +
          'Hi!' +
        '</div>',
        x:12,
        y:-32
      })
      .on({
        mouseover: function (overlay) {
          overlay.$.find(">*").css({backgroundColor: "#CCCCCC"})
        },
        mouseout: function (overlay) {
          overlay.$.find(">*").css({backgroundColor: "#00FF00"})
        }
      });



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	