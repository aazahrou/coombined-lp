(function() {
  $(document).ready(function() {
    var $window, isTouch, pxShow, revealOnScroll, scrollSpeed, win_height_padded;
    $(window).on("load", function() {
      $("#status").fadeOut;
      $("#preloader").delay(350).fadeOut("slow");
      return $("body").delay(350).css({
        "overflow": "visible"
      });
    });
    if ($(".nav-burger").length) {
      $(".nav-burger").on("click", function() {
        var menu_id;
        menu_id = $(this).attr("data-target");
        $(this).toggleClass("is-active");
        $("#" + menu_id).toggleClass("is-active");
        return $('.navbar.is-light').toggleClass('is-dark-mobile');
      });
    }
    $('.menu-icon-trigger').click(function(e) {
      e.preventDefault;
      $('.menu-icon-wrapper').toggleClass('open');
      return $('.sidebar').toggleClass('is-active');
    });
    $('.sidebar-close').click(function() {
      $('.sidebar').removeClass('is-active');
      return $('.menu-icon-wrapper').removeClass('open');
    });
    if ($('.sidebar').length) {
      $(".sidebar-menu > li.have-children a").on("click", function(i) {
        i.preventDefault();
        if (!$(this).parent.hasClass("active")) {
          $(".sidebar-menu li ul").slideUp();
          $(this).next().slideToggle();
          $(".sidebar-menu li").removeClass("active");
          return $(this).parent().addClass("active");
        } else {
          $(this).next().slideToggle();
          return $(".sidebar-menu li").removeClass("active");
        }
      });
    }
    if ($('#navbar-clone').length) {
      $(window).scroll(function() {
        var height;
        height = $(window).scrollTop();
        if (height > 50) {
          return $("#navbar-clone").addClass('is-active');
        } else {
          return $("#navbar-clone").removeClass('is-active');
        }
      });
    }
    feather.replace();
    $window = $(window);
    win_height_padded = $window.height() * 1.1;
    isTouch = Modernizr.touch;
    $window.on('scroll', revealOnScroll);
    revealOnScroll = function() {
      var scrolled;
      scrolled = $window.scrollTop();
      return $(".revealOnScroll:not(.animated)").each(function() {
        var $this, offsetTop;
        $this = $(this);
        offsetTop = $this.offset().top;
        if (scrolled + win_height_padded > offsetTop) {
          if ($this.data('timeout')) {
            return window.setTimeout(function() {
              return $this.addClass('animated ' + $this.data('animation'));
            }, parseInt($this.data('timeout'), 10));
          } else {
            return $this.addClass('animated ' + $this.data('animation'));
          }
        }
      });
    };
    pxShow = 600;
    scrollSpeed = 500;
    $(window).scroll(function() {
      if ($(window).scrollTop() >= pxShow) {
        return $("#backtotop").addClass('visible');
      } else {
        return $("#backtotop").removeClass('visible');
      }
    });
    $('#backtotop a').on("click", function() {
      $('html, body').animate({
        scrollTop: 0
      }, scrollSpeed);
      return false;
    });
    $('.modal-trigger').on("click", function() {
      var modalID;
      modalID = $(this).attr('data-modal');
      $('#' + modalID).addClass('is-active');
      return $('.modal-close, .close-modal').on("click", function() {
        return $(this).closest('.modal').removeClass('is-active');
      });
    });
    return $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
      var target;
      if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
        target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          event.preventDefault();
          return $('html, body').animate({
            scrollTop: target.offset().top
          }, 550, function() {
            var $target;
            $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              return false;
            } else {
              $target.attr('tabindex', '-1');
              return $target.focus();
            }
          });
        }
      }
    });
  });

}).call(this);
