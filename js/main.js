$(function () {
  // Variables
  var header = $(".navHeader"),
    win = $(window),
    sliderContent = $(".sliderContaienr"),
    imageShuffle = $(".shuffleImages div"),
    arr = $(".arrow"),
    bars = $(".bars"),
    navLink = $(".navLinks"),
    borderArrow = $(".bars span");

  // Responsive Nav Links
  bars.on("click", function () {
    borderArrow.fadeToggle();
    navLink.fadeToggle();
  });

  // Smooth Scrolling On Go To Top Arrow
  arr.on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  // When To Show Arrow
  win.on("scroll", function () {
    if (win.scrollTop() >= $("#services").offset().top) {
      arr.fadeIn(500);
    } else {
      arr.fadeOut(500);
    }
  });

  // Set Header Height To Window Height
  header.height(win.height());

  // Add Class Active To Navbar Links
  $(".navLinks .navLink a").on("click", function () {
    $(this).parent().addClass("active").siblings().removeClass("active");
  });

  // Set Slider To Center Vertically
  sliderContent.css("marginTop", win.height() / 2 - 75);

  // Preserve Dimensions  On Window Resizing
  win.on("resize", function () {
    header.height(win.height());
    sliderContent.css("marginTop", win.height() / 3 - 75);
  });

  // Trigger bxSlider
  $(".slider").bxSlider({
    pager: false,
    auto: true,
    keyboardEnabled: true,
    pause: 3500,
  });

  // Smooth Scrolling On Navbar Links
  $(".navLinks .navLink a").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $("#" + $(this).data("value")).offset().top,
      },
      1000
    );
  });

  // Fade Team Member Image Overlay
  $(".member").hover(
    function () {
      $(this).find(".overlay").fadeIn(400);
    },
    function () {
      $(this).find(".overlay").fadeOut(400);
    }
  );

  // Testimonial Slider
  (function clientsSlider() {
    $(".clientsSlider .active").each(function () {
      if (!$(this).is(":last-child")) {
        $(this)
          .delay(3000)
          .fadeOut(1000, function () {
            $(this)
              .removeClass("active")
              .next()
              .fadeIn(1000)
              .addClass("active");
            clientsSlider();
          });
      } else {
        $(this)
          .delay(3000)
          .fadeOut(1000, function () {
            $(this).removeClass("active");
            $(".clientsSlider div").eq(0).fadeIn(1000).addClass("active");
            clientsSlider();
          });
      }
    });
  })();

  // Fade Project Image Overlay
  imageShuffle.hover(
    function () {
      $(this).find(".overlay").fadeIn(400);
    },
    function () {
      $(this).find(".overlay").fadeOut(400);
    }
  );

  // Generate Shuffler For Projects
  $(".shuffleList .shuffleItem").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
    imageShuffle.css("display", "block");
    $(".shuffleImages div .overlay").css("display", "none");
    imageShuffle.not("." + $(this).attr("id") + "").hide(500);
  });

  // Trigger Nice Scroll
  $("body").niceScroll({
    cursorcolor: "#1abc9c",
    cursorborder: "0",
  });
});
