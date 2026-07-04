/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

    // Toggle View All Supporters Grid inside the scroller area
    $('#toggleAllPartners').click(function(e) {
        e.preventDefault();
        var $carousel = $('#partnerCarousel');
        var $btn = $(this);
        
        if ($carousel.hasClass('expanded')) {
            $carousel.removeClass('expanded');
            $btn.removeClass('active');
            $btn.text('View all');
            
            // Resume autoplay
            $carousel.carousel({
                interval: 10000
            }).carousel('cycle');
            
            // Smoothly scroll back to the partners section header if scrolled past
            var targetOffset = $('#partners').offset().top;
            if ($(window).scrollTop() > targetOffset) {
                $('html, body').animate({
                    scrollTop: targetOffset
                }, 600, 'easeInOutExpo');
            }
        } else {
            $carousel.addClass('expanded');
            $btn.addClass('active');
            $btn.text('View carousel');
            
            // Pause autoplay when expanded
            $carousel.carousel('pause');
            
            // Smoothly scroll down to make the expanded logos visible
            var carouselOffset = $carousel.offset().top - 100;
            if ($(window).scrollTop() < carouselOffset) {
                $('html, body').animate({
                    scrollTop: carouselOffset
                }, 600, 'easeInOutExpo');
            }
        }
    });

})(jQuery); // End of use strict
