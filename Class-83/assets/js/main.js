(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $("#web-designprogressbar").circleProgress({
            startAngle: -2/4*3,
            value: 0.90,
            size: 200,
            fill: '#22bbc0',
            thickness: 2,
            emptyFill: '#fff',
        }).on('circle-animation-progress', function(event, progress) {
        $(this).find('.progressbar-percentage').html(Math.round(90 * progress) + '<i>%</i>');
            
        });
        $("#graphic-designprogressbar").circleProgress({
            startAngle: -1/4*3,
            value: 0.95,
            size: 200,
            fill: '#22bbc0',
            thickness: 2,
            emptyFill: '#fff',
        }).on('circle-animation-progress', function(event, progress) {
        $(this).find('.progressbar-percentage').html(Math.round(95 * progress) + '<i>%</i>');
            
        });
        $("#digital-marketingprogressbar").circleProgress({
            startAngle: -1/4*3,
            value: 0.84,
            size: 200,
            fill: '#22bbc0',
            thickness: 2,
            emptyFill: '#fff',
        }).on('circle-animation-progress', function(event, progress) {
        $(this).find('.progressbar-percentage').html(Math.round(84 * progress) + '<i>%</i>');
            
        });

        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	