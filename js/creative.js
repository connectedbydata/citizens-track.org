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

    // AJAX Google Form Submission Handler
    $('#subscribeForm').submit(function(e) {
        e.preventDefault();
        
        var $form = $(this);
        var $submitBtn = $form.find('.btn-submit');
        var $btnText = $submitBtn.find('.btn-text');
        var $btnSpinner = $submitBtn.find('.btn-spinner');
        var formUrl = $form.attr('action');
        
        // Show loading state
        $submitBtn.prop('disabled', true);
        $btnText.css('opacity', '0.2');
        $btnSpinner.fadeIn(200);
        
        // Copy visible email value to the hidden manual entry input
        $form.find('#sub-email-hidden').val($form.find('#sub-email').val());

        // Serialize the form data
        var formData = $form.serialize();
        
        // Send the post request
        $.ajax({
            url: formUrl,
            type: 'POST',
            data: formData,
            dataType: 'xml', // Expecting XML allows us to intercept the no-CORS response cleanly
            crossDomain: true,
            statusCode: {
                0: function() {
                    // Google Forms return 0 or CORS errors when they succeed because of lack of Access-Control-Allow-Origin headers.
                    // This is a known behavior. A status code of 0 usually indicates that the request was sent and browser blocked the response,
                    // which means it succeeded.
                    showSuccess();
                },
                200: function() {
                    showSuccess();
                }
            },
            error: function(xhr, status, error) {
                // If status code is 0 (or error is thrown due to CORS), it actually submitted successfully.
                if (xhr.status === 0) {
                    showSuccess();
                } else {
                    showError();
                }
            }
        });
        
        function showSuccess() {
            $form.fadeOut(400, function() {
                $('#subscribeSuccess').fadeIn(400);
                // Auto close modal after 3.5 seconds
                setTimeout(function() {
                    $('#subscribeModal').modal('hide');
                }, 3500);
            });
        }
        
        function showError() {
            // Restore button state
            $submitBtn.prop('disabled', false);
            $btnText.css('opacity', '1');
            $btnSpinner.hide();
            
            // Show error message instead of form
            $form.fadeOut(400, function() {
                $('#subscribeError').fadeIn(400);
            });
        }
    });

    // Reset subscription modal state when hidden so it can be reused
    $('#subscribeModal').on('hidden.bs.modal', function () {
        var $form = $('#subscribeForm');
        $form[0].reset();
        $form.show();
        $('#subscribeSuccess, #subscribeError').hide();
        
        var $submitBtn = $form.find('.btn-submit');
        $submitBtn.prop('disabled', false);
        $submitBtn.find('.btn-text').css('opacity', '1');
        $submitBtn.find('.btn-spinner').hide();

        // Clear hash from URL if it is '#subscribe' to keep URL clean
        if (window.location.hash === '#subscribe') {
            if (history.replaceState) {
                history.replaceState("", document.title, window.location.pathname + window.location.search);
            } else {
                window.location.hash = "";
            }
        }

        // Hide and reset keyboard extension
        $('#keyboardExtension').hide();
        $('#toggleKeyboardTray').removeClass('active');
    });

    // Check hash on page load and hash change to trigger modal opening
    function checkHashAndOpenModal() {
        if (window.location.hash === '#subscribe') {
            $('#subscribeModal').modal('show');
        }
    }

    $(window).on('load hashchange', function() {
        checkHashAndOpenModal();
    });

    // Kiosk Mode & On-Demand Virtual Keyboard Logic
    var keyboardInstance = null;
    var activeInputId = null;
    var isKioskMode = window.location.search.indexOf('kiosk') !== -1;

    function loadVirtualKeyboard(callback) {
        if (window.SimpleKeyboard) {
            if (callback) callback();
            return;
        }

        // Dynamically load simple-keyboard CSS
        $('<link>', {
            rel: 'stylesheet',
            type: 'text/css',
            href: 'https://cdn.jsdelivr.net/npm/simple-keyboard@latest/build/css/index.css'
        }).appendTo('head');

        // Dynamically load simple-keyboard JS
        $.getScript('https://cdn.jsdelivr.net/npm/simple-keyboard@latest/build/index.js')
            .done(function() {
                if (callback) callback();
            })
            .fail(function() {
                console.error("Failed to load SimpleKeyboard library from CDN.");
            });
    }

    function initKeyboard() {
        if (keyboardInstance) return;

        var Keyboard = window.SimpleKeyboard.default;
        keyboardInstance = new Keyboard({
            onChange: function(input) {
                if (activeInputId) {
                    var $input = $('#' + activeInputId);
                    $input.val(input);
                    $input.trigger('input'); // Sync manual email hidden field etc.
                }
            },
            onKeyPress: function(button) {
                if (button === "{shift}" || button === "{lock}") {
                    handleShift();
                }
            }
        });

        // Set initial active input to first text input
        activeInputId = 'sub-name';
        keyboardInstance.setOptions({
            inputName: activeInputId
        });

        // Track focus on text inputs to redirect virtual keyboard keys
        $('#subscribeForm input[type="text"], #subscribeForm input[type="email"]').on('focus', function() {
            activeInputId = $(this).attr('id');
            keyboardInstance.setOptions({
                inputName: activeInputId
            });
            keyboardInstance.setInput($(this).val(), activeInputId);
        });

        // Update keyboard input value when user types manually
        $('#subscribeForm input[type="text"], #subscribeForm input[type="email"]').on('input', function() {
            if (keyboardInstance) {
                keyboardInstance.setInput($(this).val(), $(this).attr('id'));
            }
        });
    }

    function handleShift() {
        var currentLayout = keyboardInstance.options.layoutName;
        var shiftToggle = currentLayout === "default" ? "shift" : "default";

        keyboardInstance.setOptions({
            layoutName: shiftToggle
        });
    }

    function toggleKeyboard(show) {
        var $ext = $('#keyboardExtension');
        if (show === undefined) {
            show = $ext.is(':hidden');
        }

        if (show) {
            loadVirtualKeyboard(function() {
                initKeyboard();
                $ext.fadeIn(300);
                $('#toggleKeyboardTray').addClass('active');
            });
        } else {
            $ext.fadeOut(300);
            $('#toggleKeyboardTray').removeClass('active');
        }
    }

    // Toggle virtual keyboard on tray toggle button click
    $('#toggleKeyboardTray').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleKeyboard();
    });

    // Auto-trigger keyboard if kiosk mode is active
    $('#subscribeModal').on('shown.bs.modal', function() {
        if (isKioskMode) {
            toggleKeyboard(true);
            setTimeout(function() {
                $('#sub-name').focus();
            }, 100);
        }
    });

})(jQuery); // End of use strict

