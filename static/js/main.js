(function(){
      if(!this.init){
            this.init = function() {
                  "use strict";
                  
                  $(".navbar-nav li a").on("click", function() { 
                        $(this).parent("li").find(".dropdown-menu").slideToggle();
                        //jQuery(this).find("i").toggleClass("fa-angle-down fa-angle-up");
                  });
                  
                  /* Counter UP */
                  $(".counter").counterUp({
                        delay: 10,
                        time: 2000
                  });
                  
                  
                  /* Back to top */
                  $(window).scroll(function () {
                        if ($(this).scrollTop()) {
                        $('.back-to-top button').fadeIn();
                        } else {
                        $('.back-to-top button').fadeOut();
                        }
                  });
                  $(".back-to-top button").on('click', function () {
                        $("html, body").animate({
                        scrollTop: 0
                        }, 1000);
                  });
                  
                  /* Video Popup */
                  if ($('.video-popup').length > 0) {
                        $('.video-popup').magnificPopup({
                        disableOn: 700,
                        type: 'iframe',
                        mainClass: 'mfp-fade',
                        removalDelay: 160,
                        preloader: false,
                        fixedContentPos: false
                        });
                  };
                  
                  /* Map */
                  
                  /* Contact Form 
                  $('#contact-form').submit(function () {
                  
                        var $form = $(this),
                        $error = $form.find('.error-container'),
                        action = $form.attr('action');
                  
                        $error.slideUp(750, function () {
                        $error.hide();
                  
                        var $name = $form.find('.form-name'),
                              $phone = $form.find('.form-phone'),
                              $email = $form.find('.form-email'),
                              $subject = $form.find('.form-subject'),
                              $message = $form.find('.form-message');
                  
                        $.post(action, {
                              name: $name.val(),
                              phone: $phone.val(),
                              email: $email.val(),
                              subject: $subject.val(),
                              message: $message.val()
                              },
                              function (data) {
                              $error.html(data);
                              $error.slideDown('slow');
                  
                              if (data.match('success') != null) {
                                    $name.val('');
                                    $phone.val('');
                                    $email.val('');
                                    $subject.val('');
                                    $message.val('');
                              }
                              }
                        );
                  
                        });
                  
                        return false;
                  
                  });*/
            
                  
                  /* On Hover Timeline Active Changed */
                  $(".timeline-wrapper .row").hover(function () {
                        $(".timeline-item").find(".timeline-badge").removeClass("active");
                        $(this).find(".timeline-badge").addClass("active");
                  });
                  $(".timeline-wrapper .row").hover(function () {
                        $(".timeline-item").find(".timeline-date").removeClass("active");
                        $(this).find(".timeline-date").addClass("active");
                  });
                  
                  /* On Click search bar */
                  $(".tw-search i, .tw-offcanvas-menu i").on('click', function () {
                        $(".search-bar").addClass('active');
                  });
                  $(".search-bar i.fa-close").on('click', function () {
                        $(".search-bar").removeClass('active');
                  });
                  
                  /* Onclick offcanvas menu visible */
                  $(".tw-menu-bar").on("click", function () {
                        $(".offcanvas-wrapper").addClass('active');
                        $(".offcanvas-menu-overlay").addClass('menu-show');
                  });
                  $(".menu-close-btn, .offcanvas-menu-overlay").on("click", function () {
                        $(".offcanvas-wrapper").removeClass('active');
                        $(".offcanvas-menu-overlay").removeClass('menu-show');
                  });
                  
                  /* Wow Initialize */
                  new WOW().init();
                  
                  /* Accordion */
                  function toggleIcon(e) {
                        $(e.target)
                        .prev('.card-header')
                        .find(".faq-indicator")
                        .toggleClass('fa-minus fa-plus');
                  }
                  $('#accordion').on('hidden.bs.collapse', toggleIcon);
                  $('#accordion').on('shown.bs.collapse', toggleIcon);
                  
                  /* Navbar fixed */
                  $(window).on('scroll', function () {
                        if ($(window).scrollTop() > 400) {
                        $('.tw-head, .tw-header').addClass('navbar-fixed');
                        } else {
                        $('.tw-head, .tw-header').removeClass('navbar-fixed');
                        }
                        if ($(window).scrollTop() < 400) {
                        setTimeout(() => {
                              $('header').removeClass('off-canvas');
                        }, 0);
                        } else {
                        setTimeout(() => {
                              $('header').addClass('off-canvas');
                        }, 0);
                        }
                  });
            
            };
      }
      
      var interval = setInterval(() => {
            if(window.$){
                  this.init();
                  clearInterval(interval);
            }
      }, 200);
})();

