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

    // check checkbox checked enable button
    function checkDisableButton() {
      $('.js-attr-disable').each(function() {
        let checkBox = $(this).find('.js-attr-checkbox')
        let btn = $(this).find('.js-attr-button')
        checkBox.on('click', function() {
          if ($(this).is(":checked")) {
              $(btn).removeAttr("disabled").removeClass("-disabled");
          } else {
              $(btn).attr("disabled", "disabled").addClass("-disabled");
          }
        });
      })
    }
    checkDisableButton()

    // js custom dropdown
    $(".js-dropdown .js-dropdown-selected a").click(function(e) {
      e.preventDefault();
      $(".js-dropdown .js-dropdown-list").toggleClass('is-show');
    });
    $(".js-dropdown .js-dropdown-list li a").click(function(e) {
      e.preventDefault();
      var text = $(this).html();
      $(".js-dropdown .js-dropdown-selected a span").html(text);
      $(".js-dropdown .js-dropdown-list").removeClass('is-show');
    });
    $(document).bind('click', function(e) {
      var $clicked = $(e.target);
      if (! $clicked.parents().hasClass("js-dropdown"))
          $(".js-dropdown .js-dropdown-list").removeClass('is-show');
    });

    // js custom toggle
    $('.js-toggle').each(function() {
      let jsBtn = $(this).find('.js-toggle-btn')
      let jsShow = $(this).find('.js-toggle-show')
      jsBtn.on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('is-active')
        jsShow.slideToggle();
      })
    })

});

function matchHeight($o,m) {
  $o.css('height','auto')
  var foo_length = $o.length;

  for(var i = 0 ; i < Math.ceil(foo_length / m) ; i++) {
      var maxHeight = 0;
      for(var j = 0; j < m; j++){
          if ($o.eq(i * m + j).height() > maxHeight) {
              maxHeight = $o.eq(i * m + j).height();
          }
      }
      for(var k = 0; k < m; k++){
          $o.eq(i * m + k).height(maxHeight);
      }
  }
}

$(function(){
  var $match = $('.js-max-height');
  $(window).bind('load resize',function(){
      matchHeight($match, 2);
  })
  if($('.js-date').length) {
    mobiscroll.setOptions({
      theme: 'ios',
      themeVariant: 'dark'
    });
    $('.js-date').mobiscroll().datepicker({
        controls: ['date'],
        display: 'anchored'
    });
  }
});
