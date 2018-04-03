(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
        
        //SKILLS PROGRESSBAR//
        
        $("#html-progress").circleProgress({
            value: 0.75,
            size: 200,
            fill: '#4286f4',
            thickness: 2,
            emptyFill: '#fff',
            startAngle: 300,
        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('.progressbar-percentage').html(Math.round(75 * progress) + '<i>%</i>');
        });
        $("#css-progress").circleProgress({
            value: 0.75,
            size: 200,
            fill: '#4286f4',
            thickness: 2,
            emptyFill: '#fff',
            startAngle: 300,
        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('.progressbar-percentage').html(Math.round(75 * progress) + '<i>%</i>');
        });
        $("#js-progress").circleProgress({
            value: 0.75,
            size: 200,
            fill: '#4286f4',
            thickness: 2,
            emptyFill: '#fff',
            startAngle: 300,
        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('.progressbar-percentage').html(Math.round(75 * progress) + '<i>%</i>');
        });
        $("#wordpress-progress").circleProgress({
            value: 0.75,
            size: 200,
            fill: '#4286f4',
            thickness: 2,
            emptyFill: '#fff',
            startAngle: 300,
        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('.progressbar-percentage').html(Math.round(75 * progress) + '<i>%</i>');
        });
        $("#php-progress").circleProgress({
            value: 0.75,
            size: 200,
            fill: '#4286f4',
            thickness: 2,
            emptyFill: '#fff',
            startAngle: 300,
        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('.progressbar-percentage').html(Math.round(75 * progress) + '<i>%</i>');
        });
        
        
        // MASONRY PORTFOLIO//
        
        $(".project-list").masonry();
        
        // WOW.JS //
        
        new WOW().init();
        
        // gmap3
        
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
        content:  '<div style="color:#000000; border:1px solid #FF0000;background-color: #00FF00; width:100px; line-height:20px; height: 20px; text-align:center; border-radius: 2px">' +
          'Khulna, Bangladesh' +
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
        
        
        // STICKY NAVBAR
        
        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();    
            if (scroll >0) {
                $('.navbar').addClass("is-sticky");
            } else {
                $('.navbar').removeClass("is-sticky")
            }
        });
        
        
        //PRALLAX ANIMATION//
        
       /* var s = skrollr.init({
            render: function(data){
                
            }
        });
        */
    $(function () {
  // initialize skrollr if the window width is large enough
  if ($(window).width() > 767) {
    skrollr.init({
        render: function(data){
            
        }
    });
  }

  // disable skrollr if the window is resized below 768px wide
  $(window).on('resize', function () {
    if ($(window).width() <= 767) {
      skrollr.init().destroy(); // skrollr.init() returns the singleton created above
    }
  });
});
        
        // TYPED.JS
        
        if ($('.element').length) {
        $('.element').each(function () {
            $(this).typed({
                strings: [$(this).data('text1'), $(this).data('text2')],
                loop: $(this).data('loop') ? $(this).data('loop') : false ,
                backDelay: $(this).data('backdelay') ? $(this).data('backdelay') : 2000 ,                
                typeSpeed: 5,
            });
        });
    }
        
        //SMOOTH SCROLL
    $(document).on("scroll", onScroll);
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
             if ($(window).width() < 768) {
                 $('.nav-menu').slideUp();
             }
        });
            
        $(this).addClass('active');
      
        var target = this.hash,
        menu = target;
        target = $(target);
        $('html, body').stop().animate({
            'scrollTop': target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target.selector;
            $(document).on("scroll", onScroll);
        });
    });
    
        
        function onScroll(event){
          if ($('#home').length) {     
    var scrollPos = $(document).scrollTop();
    $('nav ul li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('nav ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
   }              
}
        
        
        // owl-carousel//
        
        $(".carousel-item").owlCarousel({
            items: 3,
            autoplay: true,
            navText: false,
            nav: false,
            dots: true,
            margin: 30,
            smartSpeed: 1000,
        });
        
        
        
        
        
        
    });


    jQuery(window).load(function(){
        
        
        
        
        

        
    });


}(jQuery));	