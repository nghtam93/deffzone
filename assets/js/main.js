$("body").addClass("modal-open");
$(document).ready(function () {
  $(".loading-page__logo").fadeOut();
  $(".loading-page").delay(350).fadeOut("slow");
  $("body").removeClass("modal-open");

  if ($("body").hasClass("home")) {
    setTimeout(function () {
      new WOW().init();
    }, 400);

    $(".home-new .el__slider").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
    $(".slider-nav").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      centerMode: true,
      variableWidth: true,
      asNavFor: ".slider-for",
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1599,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 575,
          settings: {
            centerMode: false,
            variableWidth: false,
            slidesToShow: 1,
          },
        },
      ],
    });

    $(".slider-for").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      adaptiveHeight: true,
      asNavFor: ".slider-nav",
    });
  }

  if ($("body").hasClass("landing-page")) {
    setTimeout(function () {
      new WOW().init();
    }, 400);

    $(".landing-happy__slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      autoplay: true,
    });
    $(".landing-work .-main__slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      autoplay: true,
    });
  }

  if ($("body").hasClass("rekt-database")) {
    $(".chart-report__slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      autoplay: true,
      autoplaySpeed: 5000,
      vertical: true,
      infinite: false,
      verticalSwiping: true,
    });
  }

  /*----Get Header Stick ---*/
  var header_sticky = $("header.-fix");
  $(window).scroll(function () {
    $(this).scrollTop() > 5
      ? header_sticky.addClass("is-active")
      : header_sticky.removeClass("is-active");
  });

  $(window).on("load", function () {
    header_sticky.offset().top > 5
      ? header_sticky.addClass("is-active")
      : header_sticky.removeClass("is-active");
  });

  /*----Languages---*/
  $(".languages__label").click(function () {
    $(this).closest(".languages").toggleClass("is-active");
    $(this).next().toggleClass("dropdown-languages");
  });
  $(".languages").mousedown(function (e) {
    e.stopPropagation();
  });
  $(document).mousedown(function (e) {
    $(".languages__content").removeClass("dropdown-languages");
  });

  /*----Get Header Height ---*/
  function get_header_height() {
    var header_sticky = $("header").outerHeight();
    $("body").css("--header-height", header_sticky + "px");
  }

  setTimeout(function () {
    get_header_height();
  }, 500);
  $(window).resize(function () {
    get_header_height();
  });

  /*----Menu---*/
  $(".nav__mobile--close").click(function (e) {
    $(".nav__mobile").removeClass("active");
    $("body").removeClass("modal-open");
  });
  $(".menu-mb__btn").click(function (e) {
    e.preventDefault();
    if ($("body").hasClass("modal-open")) {
      $(".menu-mb__btn").removeClass("active");
      $(".nav__mobile").removeClass("active");
      $("body").removeClass("modal-open");
    } else {
      $(".menu-mb__btn").addClass("active");
      $("body").addClass("modal-open");
      $(".nav__mobile").addClass("active");
    }
  });

  // check checkbox checked enable button
  function checkDisableButton() {
    $(".js-attr-disable").each(function () {
      let checkBox = $(this).find(".js-attr-checkbox");
      let btn = $(this).find(".js-attr-button");
      checkBox.on("click", function () {
        if ($(this).is(":checked")) {
          $(btn).removeAttr("disabled").removeClass("-disabled");
        } else {
          $(btn).attr("disabled", "disabled").addClass("-disabled");
        }
      });
    });
  }
  checkDisableButton();

  // js custom dropdown
  $(".js-dropdown .js-dropdown-selected").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("is-show");
    $(this)
      .parents(".js-dropdown")
      .find(".js-dropdown-list")
      .toggleClass("is-show");
  });
  $(".js-dropdown .js-dropdown-list li a").click(function (e) {
    // e.preventDefault();
    let text = "",
      isCheckItem = false;
    if ($(this).hasClass("checkbox__item")) {
      isCheckItem = true;
    } else {
      isCheckItem = false;
    }
    if (isCheckItem) {
      text = $(this).children("label").html();
      $(this).children("input").is(":checked")
        ? $(this).children("input").prop("checked", false)
        : $(this).children("input").prop("checked", true);
    } else {
      text = $(this).html();
    }
    $(this)
      .parents(".js-dropdown")
      .find(".js-dropdown-selected a span:not(.numb)")
      .html(text);
    $(this).parents(".js-dropdown-list").removeClass("is-show");
    $(this)
      .parents(".js-dropdown")
      .children(".js-dropdown-selected")
      .removeClass("is-show");
    return false;
  });
  $(document).bind("click", function (e) {
    var $clicked = $(e.target);
    if (!$clicked.parents().hasClass("js-dropdown"))
      $(
        ".js-dropdown .js-dropdown-selected, .js-dropdown .js-dropdown-list"
      ).removeClass("is-show");
  });

  // js checkbox all
  $(".js-checkbox-all").click(function () {
    let checkName = $(this).attr("name");
    $(`.js-checkbox-item[name=${checkName}]`).prop("checked", this.checked);
    let checkLength = $(`.js-checkbox-item[name=${checkName}]`).filter(
      ":checked"
    ).length;
    addNumbAudit(
      checkLength,
      $(this).closest($(".js-dropdown")),
      $(".js-dropdown-selected .numb")
    );
  });

  $(".js-checkbox-item").change(function () {
    let checkName = $(this).attr("name"),
      checkLength = $(`.js-checkbox-item[name=${checkName}]`).filter(
        ":checked"
      ).length;
    addNumbAudit(
      checkLength,
      $(this).closest($(".js-dropdown")),
      $(".js-dropdown-selected .numb")
    );
    var check =
      $(`.js-checkbox-item[name=${checkName}]`).filter(":checked").length ==
      $(`.js-checkbox-item[name=${checkName}]`).length;
    $(`.js-checkbox-all[name=${checkName}]`).prop("checked", check);
  });

  function addNumbAudit(checkLength, parentCheckList, numbAppend) {
    if (checkLength > 1) {
      parentCheckList.find(numbAppend).html("+ " + (checkLength - 1));
    } else {
      parentCheckList.find(numbAppend).html("");
    }
  }

  // js custom toggle
  $(".js-toggle-btn").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("is-active");
    $(this)
      .closest(".js-toggle")
      .children(".js-toggle-show")
      .slideToggle()
      .toggleClass("is-active");
  });

  // js remove box
  $(".js-remove-btn").on("click", function (e) {
    $(this).closest(".js-remove").remove();
  });

  // js focus
  $(".js-focus").each(function () {
    $(this).on("click", function () {
      let dataFocus = $(this).attr("data-focus");
      let dataModal = $(this).attr("data-modal");
      if (dataModal != "undefined") {
        $(`#${dataModal}`).on("shown.bs.modal", function () {
          $(`#${dataFocus}`).focus();
        });
      } else {
        $(`#${dataFocus}`).trigger("focus");
      }
    });
  });

  // anchor link
  var jump = function (e) {
    $(document).off("scroll");
    if (e) {
      var url = $(this).attr("href");
      var id = url.substring(url.lastIndexOf("/") + 1);
      target = id;
    } else {
      var target = location.hash;
    }

    if ($(target).offset() != undefined) {
      // e.preventDefault();
      $("html, body")
        .stop()
        .animate({
          scrollTop: $(target).offset().top,
        });

      location.hash = target;
    }
  };

  jump();

  $(document).on("click", 'a[href^="#"]', function (event) {
    $('a[href^="#"]').parent().removeClass("active");
    $(this).parent().addClass("active");
    $(".menu-mb__btn").removeClass("active");
    $(".nav__mobile").removeClass("active");
    $("body").removeClass("modal-open");
  });

  $(window).on("load resize", function () {
    var currentPath = window.location.hash;
    $('a[href^="#"]').each(function () {
      var attrHref = $(this).attr("href");
      if (attrHref === currentPath) {
        $(this).parent().addClass("active");
      } else {
        $(this).parent().removeClass("active");
      }
    });
  });

  var popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]')
  );
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });
});

function matchHeight($o, m) {
  $o.css("height", "auto");
  var foo_length = $o.length;

  for (var i = 0; i < Math.ceil(foo_length / m); i++) {
    var maxHeight = 0;
    for (var j = 0; j < m; j++) {
      if ($o.eq(i * m + j).height() > maxHeight) {
        maxHeight = $o.eq(i * m + j).height();
      }
    }
    for (var k = 0; k < m; k++) {
      $o.eq(i * m + k).height(maxHeight);
    }
  }
}

$(function () {
  var $match = $(".js-max-height");
  $(window).bind("load resize", function () {
    matchHeight($match, 2);
  });
  if ($(".js-date").length) {
    mobiscroll.setOptions({
      theme: "ios",
      themeVariant: "dark",
    });
    $(".js-date")
      .mobiscroll()
      .datepicker({
        controls: ["date"],
        display: "anchored",
      });
  }

  if ($("#progress-chart").length) {
    // Set up pie chart and add data.
    var config = {
      type: "pie",
      options: {
        legend: {
          display: false,
        },
        cutoutPercentage: 0.1,
        animation: {
          animateScale: true,
        },
      },
      data: {
        labels: "",
        machineLabels: "",
        datasets: [
          {
            borderWidth: 0,
            backgroundColor: [
              "#F1E20C",
              "#FFA630",
              "#F3511D",
              "#E31341",
              "#8C2039",
              "#6341BD",
              "#284397",
              "#0A88C9",
              "#34A538",
              "#95C61D",
            ],
            data: [2, 7, 5, 1.5, 38, 15, 6, 4, 10, 3],
          },
        ],
      },
    };

    // Instantiate the pie chart in the canvas element.
    var myPie = new Chart(document.getElementById("progress-chart"), config);

    // Register click event to log the clicked label (machine name).
    document.getElementById("progress-chart").onclick = function (evt) {
      var activePoints = myPie.getElementAtEvent(evt);
      var firstPoint = activePoints[0];
      if (firstPoint !== undefined) {
        var clickedItem = config.data.machineLabels[firstPoint._index];
        console.log(clickedItem);
      }
    };
  }
});
if ($(".-date__slider").length) {
  const slider = document.querySelector(".-date__slider");
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
  });
  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
  });
  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk);
  });
}

// modal show popup connect important
if($('body').find('#connectWalletImportant')) {
  var myModal = new bootstrap.Modal(document.getElementById('connectWalletImportant'), {
    keyboard: false
  })
  $(window).on('load resize', function() {
    let windowWidth = $(window).width();
    console.log(windowWidth);
    if(windowWidth < 1280) {
      myModal.show()
      console.log('true');
    } else {
      myModal.hide()
    }
  })
}
