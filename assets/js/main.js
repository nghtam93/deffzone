$('body').addClass('modal-open')
$(document).ready(function(){

    $('.loading-page__logo').fadeOut();
    $('.loading-page').delay(350).fadeOut('slow');
    $('body').removeClass('modal-open')


    if($('body').hasClass('home')){

        setTimeout(function(){ new WOW().init(); }, 400);


        $('.home-new .el__slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            responsive: [
                {
                  breakpoint: 1199,
                  settings: {
                    slidesToShow: 2,
                  }
                },
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 1,
                  }
                }
            ]
        });
        $('.slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            centerMode: true,
            variableWidth: true,
            asNavFor: '.slider-for',
            focusOnSelect: true,
            responsive: [
                {
                  breakpoint: 1599,
                  settings: {
                    slidesToShow: 3,
                  }
                },
                {
                  breakpoint: 575,
                  settings: {
                    centerMode: false,
                    variableWidth: false,
                    slidesToShow: 1,
                  }
                }
            ]
        });

        $('.slider-for').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          adaptiveHeight: true,
          asNavFor: '.slider-nav'
        });

    }

    /*----Get Header Stick ---*/
    var header_sticky=$("header.-fix")
    $(window).scroll(function(){
        $(this).scrollTop()>5?header_sticky.addClass("is-active"):header_sticky.removeClass("is-active")
    })

    $( window ).on( "load", function() {
        (header_sticky.offset().top >5) ? header_sticky.addClass("is-active"):header_sticky.removeClass("is-active")
    });


    /*----Languages---*/
    $('.languages__label').click(function() {
        $(this).closest('.languages').toggleClass('is-active');
        $(this).next().toggleClass('dropdown-languages');
    });
    $('.languages').mousedown(function(e){ e.stopPropagation(); });
    $(document).mousedown(function(e){ $('.languages__content').removeClass('dropdown-languages'); });

    /*----Get Header Height ---*/
    function get_header_height() {
        var header_sticky=$("header").outerHeight()
        $('body').css("--header-height",header_sticky+'px')
    }

    setTimeout(function(){ get_header_height() }, 500);
    $( window ).resize(function() { get_header_height() });

    /*----Menu---*/
    $('.nav__mobile--close').click(function(e){
        $('.nav__mobile').removeClass('active')
        $('body').removeClass('modal-open')
    });
    $('.menu-mb__btn').click(function(e){
        e.preventDefault()
        if($('body').hasClass('modal-open')){
            $('.menu-mb__btn').removeClass('active')
            $('.nav__mobile').removeClass('active')
            $('body').removeClass('modal-open')
        }else{
            $('.menu-mb__btn').addClass('active')
            $('body').addClass('modal-open')
            $('.nav__mobile').addClass('active')
        }
    });

});


