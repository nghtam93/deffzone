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
    $(".js-dropdown .js-dropdown-selected").click(function(e) {
      e.preventDefault();
      $(this).toggleClass('is-show')
      $(this).parents('.js-dropdown').find('.js-dropdown-list').toggleClass('is-show');
    });
    $(".js-dropdown .js-dropdown-list li a").click(function(e) {
      e.preventDefault();
      var text = $(this).html();
      $(this).parents('.js-dropdown').find('.js-dropdown-selected a span').html(text);
      $(this).parents('.js-dropdown-list').removeClass('is-show');
    });
    $(document).bind('click', function(e) {
      var $clicked = $(e.target);
      if (! $clicked.parents().hasClass("js-dropdown"))
          $(".js-dropdown .js-dropdown-selected, .js-dropdown .js-dropdown-list").removeClass('is-show');
    });

    // js custom toggle
    $('.js-toggle').each(function() {
      let jsBtn = $(this).find('.js-toggle-btn')
      let jsShow = $(this).find('.js-toggle-show')
      jsBtn.on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('is-active')
        jsShow.slideToggle().toggleClass('is-active');
      })
    })

    // js focus
    $('.js-focus').each(function() {
      $(this).on('click', function() {
        let dataFocus = $(this).attr('data-focus');
        let dataModal = $(this).attr('data-modal');
        if(dataModal != 'undefined') {
          $(`#${dataModal}`).on('shown.bs.modal', function () {
            $(`#${dataFocus}`).focus();
          })
        } else {
          $(`#${dataFocus}`).trigger('focus')
        }
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

if($('body').hasClass('dashboard')){
  var options1 = {
    type: 'doughnut',
    data: {
      labels: ["your stake", "total stake"],
      datasets: [
        {
          label: '# of Stakes',
          data: [80, 20],
          backgroundColor: [
            '#FB741D',
            '#31415B',
          ],
          borderColor: [
            '#FB741D',
            '#31415B',
          ],
          borderWidth: 5
        }
      ]
    },
    options: {
    rotation: 1 * Math.PI,
      circumference: 1 * Math.PI,
      legend: {
        display: false
      },
      tooltip: {
        enabled: false
      },
      cutoutPercentage: 95
    }
  }

  var ctx1 = document.getElementById('chartJSContainer').getContext('2d');
  new Chart(ctx1, options1);
}
if($('.-date__slider').length){
  const slider = document.querySelector('.-date__slider');
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk);
  });
}
