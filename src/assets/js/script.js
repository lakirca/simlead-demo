$(document).ready(function() {
  function setHeight() {
    var $window = $(window);
    windowHeight = $(window).innerHeight();
    if ($window.width() >= 320 && $window.width() <= 767) {
      $("#header").css("min-height", windowHeight);
    } else if ($window.width() >= 768 && $window.width() <= 992) {
      $("#header").css("min-height", 0);
    } else if ($window.height() >= 1080 && $window.height() <= 1500) {
      $("#header").css("min-height", windowHeight);
      $(".big_screen")
        .css("display", "flex")
        .css("align-items", "center");
    } else if ($window.height() >= 1501 && $window.height() <= 1950) {
      $("#header").css("min-height", windowHeight);
      $(".big_screen")
        .css("display", "flex")
        .css("align-items", "center");
      $(".single_snap").css("top", "360px");
    } else {
      $("#header").css("min-height", windowHeight);
    }
  }
  setHeight();

  $(window).resize(function() {
    setHeight();
  });

  // Typing js starts
  $(".element").each(function() {
    var $this = $(this);
    $this.typed({
      strings: $this.attr("data-elements").split(","),
      typeSpeed: 100, // typing speed
      backDelay: 3000 // pause before backspacing
    });
  });

  // Typing js ends

  // Pre-loader js starts
  $(window).load(function() {
    $("#main_loader").fadeOut("slow");

    /*Scroll Animations Starts*/
    if (Modernizr.csstransforms3d) {
      window.sr = ScrollReveal();

      sr.reveal(".snap_middle", {
        origin: "bottom",
        distance: "100px",
        duration: 1300,
        delay: 400,
        opacity: 1,
        scale: 0,
        easing: "ease-in",
        reset: true
      });
      sr.reveal(".snap_left_2", {
        origin: "right",
        distance: "100px",
        duration: 1300,
        delay: 600,
        rotate: { x: 0, y: 0, z: 15 },
        opacity: 0,
        scale: 0,
        easing: "ease-in",
        reset: true
      });
      sr.reveal(".snap_left_3", {
        origin: "right",
        distance: "100px",
        duration: 1300,
        delay: 800,
        rotate: { x: 0, y: 0, b: 25 },
        opacity: 0,
        scale: 0,
        easing: "ease-in",
        reset: true
      });
      sr.reveal(".snap_left_4", {
        origin: "left",
        distance: "100px",
        duration: 1300,
        delay: 600,
        rotate: { x: 0, y: 0, a: 15 },
        opacity: 0,
        scale: 0,
        easing: "ease-in",
        reset: true
      });

      sr.reveal(".snap_left_5", {
        origin: "left",
        distance: "100px",
        duration: 1300,
        delay: 800,
        rotate: { x: 0, y: 0, c: 25 },
        opacity: 0,
        scale: 0,
        easing: "ease-in",
        reset: true
      });
      sr.reveal(".home_slide1", {
        origin: "right",
        distance: "50px",
        duration: 1300,
        delay: 600,
        opacity: 0.6,
        scale: 0,
        easing: "linear",
        reset: true
      });
      sr.reveal(".home_slide2", {
        origin: "right",
        distance: "50px",
        duration: 1300,
        delay: 1800,
        opacity: 0,
        scale: 0,
        easing: "linear",
        reset: true
      });
      sr.reveal(".home_slide3", {
        origin: "right",
        distance: "50px",
        duration: 1300,
        delay: 3000,
        opacity: 0,
        scale: 0,
        easing: "linear",
        reset: true
      });
      sr.reveal(".animate_left_40", {
        origin: "left",
        distance: "40px",
        duration: 800,
        delay: 400,
        opacity: 0,
        scale: 0,
        easing: "linear",
        reset: true
      });
      sr.reveal(".animate_top_60", {
        origin: "top",
        distance: "60px",
        duration: 800,
        delay: 400,
        opacity: 0,
        scale: 0,
        easing: "linear",
        reset: true
      });
      sr.reveal(".animate_bottom_60", {
        origin: "bottom",
        distance: "60px",
        duration: 800,
        delay: 400,
        opacity: 0,
        scale: 0,
        easing: "linear",
        reset: true
      });
      sr.reveal(".animate_fade_in", {
        duration: 800,
        delay: 400,
        opacity: 0,
        scale: 0,
        easing: "linear",
        reset: true
      });
    }
    /*Scroll Animations Ends*/
  });
  // Pre-loader js ends
  // Add smooth scrolling on all links inside the navbar
  $("#myNavbar a").on("click", function(event) {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    if (hash.length) {
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    }
  });

  /*------------------------------------------
    Scroll Up Button 
    ------------------------------------------*/
  $(window).scroll(function() {
    if ($(this).scrollTop() > 600) {
      $(".scrollup").fadeIn();
    } else {
      $(".scrollup").fadeOut();
    }
  });

  $(".scrollup").click(function() {
    $("html, body").animate(
      {
        scrollTop: 0
      },
      600
    );
    return false;
  });

  /* Menu hide/show on scroll */
  var ost = 0;
  $(window).scroll(function() {
    var cOst = $(this).scrollTop();
    if (cOst == 0) {
      $(".navbar").addClass("top-nav-collapse");
      $(".navbar").removeClass("scroll_menu");
    } else if (cOst > ost) {
      $(".navbar")
        .addClass("top-nav-collapse")
        .removeClass("default");
      $(".navbar").removeClass("scroll_menu");
    } else {
      $(".navbar")
        .addClass("default")
        .removeClass("top-nav-collapse");
      $(".navbar")
        .addClass("scroll_menu")
        .removeClass("top-nav-collapse");
    }
    ost = cOst;
  });
  /*This is ScrollSpy */

  $("body").scrollspy({ target: ".navbar", offset: 50 });

  // Amazing_features slider starts
  $(".review").owlCarousel({
    dots: true,
    autoplay: false,
    mouseDrag: true,
    nav: false,
    loop: true,
    margin: 20,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      768: {
        items: 2
      },
      1000: {
        items: 2
      }
    }
  });

  $("#amazing_img").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    draggable: true,
    fade: true,
    asNavFor: "#amazing_cont"
  });
  // Testimonial carousel
  $("#amazing_cont").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: "#amazing_img",
    dots: false,
    arrows: true,
    autoplay: false,
    focusOnSelect: true
  });
  // Amazing_features slider ends

  // Screenshots js starts
  var swiper = new Swiper(".swiper-container", {
    // Navigation arrows
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
    spaceBetween: 0,
    loop: true,
    initialSlide: 1,
    preloadImages: true,
    autoplayDisableOnInteraction: false,
    autoplay: false,
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: 3,
    coverflow: {
      rotate: 0,
      stretch: 100,
      depth: 100,
      modifier: 1,
      slideShadows: false
    },
    breakpoints: {
      // when window width is <= 768px
      480: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      992: {
        slidesPerView: 3
      }
    }
  });

  // Screenshots js ends

  // Team js starts
  var $sync1 = $("#sync1"),
    $sync2 = $("#sync2"),
    $sync3 = $(".sync3"),
    flag = false,
    duration = 300;

  $sync1
    .owlCarousel({
      items: 1,
      autoplay: false,
      margin: 10,
      nav: false,
      dots: false
    })
    .on("changed.owl.carousel", function(e) {
      if (!flag) {
        flag = true;
        var a = e.property.value++;
        $(".team-images").removeClass("current_dot");
        $(".team-images")
          .eq(a)
          .addClass("current_dot");
        $sync3.trigger("to.owl.carousel", [e.item.index, duration, true]);
        $sync2.trigger("to.owl.carousel", [e.item.index, duration, true]);
        flag = false;
      }
    });

  $sync2
    .owlCarousel({
      margin: 20,
      items: 1,
      nav: false,
      autoplay: false,
      center: false,
      dotsEach: false,
      dots: true,
      dotsContainer: "#carousel-custom-dots"
    })
    .on("click", ".owl-item", function() {
      $sync1.trigger("to.owl.carousel", [$(this).index(), duration, true]);
      $sync3.trigger("to.owl.carousel", [$(this).index(), duration, true]);
    })
    .on("changed.owl.carousel", function(e) {
      if (!flag) {
        flag = true;
        var a = e.property.value++;
        $(".team-images").removeClass("current_dot");
        $(".team-images")
          .eq(a)
          .addClass("current_dot");
        $sync3.trigger("to.owl.carousel", [e.item.index, duration, true]);
        $sync1.trigger("to.owl.carousel", [e.item.index, duration, true]);
        flag = false;
      }
    });

  $(".team-images")
    .eq(0)
    .addClass("current_dot");
  $(".team-images").click(function(e) {
    $(".team-images").removeClass("current_dot");
    $(this).addClass("current_dot");
    $sync2.trigger("to.owl.carousel", [$(this).index(), duration, true]);
    $sync1.trigger("to.owl.carousel", [$(this).index(), duration, true]);
  });

  // Team js ends

  /*Counter Js Starts*/

  $(".counter").counterUp({
    delay: 10, // the delay time in ms
    time: 900 // the speed time in ms
  });
  /*Counter Js Ends*/

  /*Client Owl Starts*/
  $(".client-owl").owlCarousel({
    dots: true,
    autoplay: true,
    nav: false,
    autoplayTimeout: 2000,
    smartSpeed: 1000,
    loop: true,
    margin: 20,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      700: {
        items: 4
      },
      1000: {
        items: 6,
        loop: true
      }
    }
  });
  /*Client Owl Ends*/
});
