'use strict';

$(document).ready(function() {
    new WOW().init();
    // $('header').scrollToFixed({
    //     zIndex: 100,
    // });
    // $('.topbar').scrollToFixed({
    //     marginTop: 129,
    //     zIndex: 50
    // });
    // $('.parallax-window').parallax({
    //     speed: 0.5
    // });
    $('[data-toggle="tooltip"]').tooltip();
    $('.btn-comment').click(function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top - 150
        }, 700);
        // $('.nav-tabs li').removeClass('active');
        // $(this).parent('li').addClass('active');
        return false;
    });
    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > 100) {
            $('header').addClass('minimal');
        } else {
            $('header').removeClass('minimal');
        }
    });
    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > 300) {
            $('.up').addClass('active');
        } else {
            $('.up').removeClass('active');
        }
    });
    $('.up').click(function() {
        $('body').animate({
            scrollTop: 0
        }, 500);
    });
    $(".counter").countimator({
        duration: 1000
    });
    $(".pagename").append($('.breadcrumb li a').eq(1).find('span').html());
    // $('.btn-closesearch').click(function() {
    //     $('.search').slideToggle(300);
    // });

    // MENU
    $('.btn-showmenu').click(function() {
        $('.menu').toggleClass('open');
        $('.overlay').fadeIn(500);
        $('.search').removeClass('open');
        // $('html').css('overflow', 'hidden');
    });
    $('.overlay').click(function() {
        $(this).fadeOut(500);
        $('.menu').removeClass('open');
        // $('html').css('overflow', 'auto');
    });
    $('.btn-showsub').click(function() {
        $(this).toggleClass('active');
        $(this).siblings('.sub').slideToggle(300);
    });

    $('.searchtoggle').click(function() {
        $('.search').slideToggle(300);
    });
    $('.btn-closesearch').click(function() {
        $('.search').slideUp(300);
    });

    // END-MENU

    $('#map').click(function() {
        $(this).find('iframe').addClass('active');
    }).mouseleave(function() {
        $(this).find('iframe').removeClass('active');
    });

    // $('.btn-spin').click(function() {

    //     var $button = $(this);
    //     var oldValue = $button.parent().find('input').val();

    //     if ($button.text() == '+') {
    //         var newVal = parseFloat(oldValue) + 1;
    //     } else {
    //         // Don't allow decrementing below zero
    //         if (oldValue > 0) {
    //             var newVal = parseFloat(oldValue) - 1;
    //         } else {
    //             newVal = 0;
    //         }
    //     }

    //     $button.parent().find('input').val(newVal);

    // });

    $('.hotnews').owlCarousel({
        loop: false,
        margin: 30,
        nav: false,
        items: 1,
        dots: true
    });

    $('.client-list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        fade: true,
        autoplay: false,
        dots: true,
        arrows: false
    });
    $('.product-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        dots: false,
        asNavFor: '.product-nav'
    });
    $('.product-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.product-slide',
        dots: false,
        arrows: false,
        focusOnSelect: true
    });

    $('.solution-slide1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        speed: 1000,
        fade: true
    });
    $('.solution-slide2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        speed: 1000,
        fade: true
    });
    $('.headnews-slide , .contact-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        speed: 1000,
        fade: true,
        prevArrow: $('#prev'),
        nextArrow: $('#next')
    });
    $('.headnews-slide .custom , .contact-slide .custom').append($('.control'));

    $('.slide-top').slick({
        arrows: false,
        asNavFor: '.nav-top',
        fade: true
    });
    $('.nav-top').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slide-top',
        focusOnSelect: true,
        arrows: false
    });
    $('.slide-related').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        focusOnSelect: true
    });
    $('.slide-other').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        focusOnSelect: true
    });
});

// REVOLUTION SLIDER
var tpj = jQuery;

var banner001;
tpj(document).ready(function() {
    if (tpj("#banner001").revolution == undefined) {
        revslider_showDoubleJqueryError("#banner001");
    } else {
        banner001 = tpj("#banner001").show().revolution({
            sliderType: "standard",
            sliderLayout: 'auto',
            dottedOverlay: "none",
            delay: 5000,
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                onHoverStop: "off",
                touch: {
                    touchenabled: "on",
                    swipe_threshold: 75,
                    swipe_min_touches: 50,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                },
                arrows: {
                    enable: true,
                    style: 'uranus',
                    tmp: '',
                    rtl: false,
                    hide_onleave: true,
                    hide_onmobile: true,
                    hide_under: 0,
                    hide_over: 9999,
                    hide_delay: 300,
                    hide_delay_mobile: 1200,
                    left: {
                        container: 'slider',
                        h_align: 'left',
                        v_align: 'center',
                        h_offset: 20,
                        v_offset: 0
                    },

                    right: {
                        container: 'slider',
                        h_align: 'right',
                        v_align: 'center',
                        h_offset: 20,
                        v_offset: 0
                    }
                }
            },
            responsiveLevels: [1024, 991, 767, 543],
            visibilityLevels: [1024, 991, 767, 543],
            gridwidth: [1440, 1440, 1440, 1440],
            gridheight: [770, 770, 770, 770],
            lazyType: "none",
            // parallax: {
            //     type: "scroll",
            //     origo: "slidercenter",
            //     speed: 50,
            //     levels: [5000]
            // },
            shadow: 0,
            spinner: "off",
            stopLoop: "off",
            shuffle: "off",
            autoHeight: "off",
            fullScreenAutoWidth: "off",
            fullScreenAlignForce: "off",
            fullScreenOffsetContainer: "",
            fullScreenOffset: "",
            disableProgressBar: "on",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false
            }
        });
    }
});
//# sourceMappingURL=main.js.map