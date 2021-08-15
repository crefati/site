(function($) {
    "use strict";


    /*--------------faqsall------------------*/
    function rakon_faqsall() {
        var accordion = {
            init: function() {
                $('dd').filter(':nth-child(n+1)').addClass('hide');
                $('dt').on('click', this.show);
            },
            show: function() {
                var $this = $(this),
                    $ddToShow = $this.next(),
                    $ddToClose = $this.next().siblings('dd');
                $this.addClass('active');
                $this.siblings('dt').removeClass('active');
                $ddToShow.slideDown(200);
                accordion.hide($ddToClose);
            },
            hide: function(elem) {
                elem.slideUp(200);
            }
        };
        accordion.init();
    }

    function rakon_tabone() {
        /*-----------------showcasre Tabs-----------------*/
        if ($('.tabs_all_box_start').length) {
            $('.tabs_all_box_start .showcase_tabs_btns .s_tab_btn').on('click', function(e) {
                e.preventDefault();
                var target = $($(this).attr('data-tab'));

                if ($(target).hasClass('active-tab show')) {
                    return false;
                } else {
                    $('.tabs_all_box_start .showcase_tabs_btns .s_tab_btn').removeClass('active');
                    $(this).addClass('active');
                    $('.tabs_all_box_start .s_tabs_content .s_tab').removeClass('active-tab show');
                    $(target).addClass('active-tab show');
                }
            });
        }
    }


    function rakon_tabtwo() {
        /*-----------------showcasre Tabs-----------------*/
        if ($('.tabs_all_box_two').length) {
            $('.tabs_all_box_two .showcase_tabs_btns .s_tab_btn').on('click', function(e) {
                e.preventDefault();
                var target = $($(this).attr('data-tab'));

                if ($(target).hasClass('active-tab show')) {
                    return false;
                } else {
                    $('.tabs_all_box_two .showcase_tabs_btns .s_tab_btn').removeClass('active');
                    $(this).addClass('active');
                    $('.tabs_all_box_two .s_tabs_content .s_tab').removeClass('active-tab show');
                    $(target).addClass('active-tab show');
                }
            });
        }
    }

    

    function rakon_videotabone() {
        /*-----------------showcasre Tabs-----------------*/
        if ($('.tabs_all_box_four').length) {
            $('.tabs_all_box_four .showcase_tabs_btns .s_tab_btn').on('click', function(e) {
                e.preventDefault();
                var target = $($(this).attr('data-tab'));

                if ($(target).hasClass('active-tab show')) {
                    return false;
                } else {
                    $('.tabs_all_box_four .showcase_tabs_btns .s_tab_btn').removeClass('active');
                    $(this).addClass('active');
                    $('.tabs_all_box_four .s_tabs_content .s_tab').removeClass('active-tab show');
                    $(target).addClass('active-tab show');
                }
            });
        }
    }

    

    function rakon_videotabtwo() {
        /*-----------------showcasre Tabs-----------------*/
        if ($('.tabs_all_box_five').length) {
            $('.tabs_all_box_five .showcase_tabs_btns .s_tab_btn').on('click', function(e) {
                e.preventDefault();
                var target = $($(this).attr('data-tab'));

                if ($(target).hasClass('active-tab show')) {
                    return false;
                } else {
                    $('.tabs_all_box_five .showcase_tabs_btns .s_tab_btn').removeClass('active');
                    $(this).addClass('active');
                    $('.tabs_all_box_five .s_tabs_content .s_tab').removeClass('active-tab show');
                    $(target).addClass('active-tab show');
                }
            });
        }
    }

    
    function rakon_tabthree() {
        /*-----------------showcasre Tabs-----------------*/
        if ($('.tabs_all_box_three').length) {
            $('.tabs_all_box_three .showcase_tabs_btns .s_tab_btn').on('click', function(e) {
                e.preventDefault();
                var target = $($(this).attr('data-tab'));

                if ($(target).hasClass('active-tab show')) {
                    return false;
                } else {
                    $('.tabs_all_box_three .showcase_tabs_btns .s_tab_btn').removeClass('active');
                    $(this).addClass('active');
                    $('.tabs_all_box_three .s_tabs_content .s_tab').removeClass('active-tab show');
                    $(target).addClass('active-tab show');
                }
            });
        }
    }





    function rakon_video_modal() {

        /*-----------------------------
      Video Modal
    -----------------------------*/
        // Gets the video src from the data-src on each button
        var $videoSrc;
        $('.btn_video').on('click', function() {
            $videoSrc = $(this).data("src");
        });

        console.log($videoSrc);

        // when the modal is opened autoplay it
        $('#mdllVideo').on('shown.bs.modal', function(e) {
            // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        // stop playing the youtube video when I close the modal
        $('#mdllVideo').on('hide.bs.modal', function(e) {
            // a poor man's stop video
            $("#video").attr('src', $videoSrc);
        });
    }



    function rakon_banner_timer() {
        $(".countdown").countdown();
    }

    function rakon_price_time_active() {
        /*-----------------------------
      Checkbox Select
    -----------------------------*/
        $('.checkbox-item .item-select').on('click', function() {
            $(this).parent().find('.item-select.active').removeClass('active');
            $(this).addClass('active');
        });
    }

    function rakon_toggler_pricing() {
        /*-----------------------------
    Toggle for Pricing
  -----------------------------*/

        var e = document.getElementById("filt-monthly"),
            d = document.getElementById("filt-yearly"),
            t = document.getElementById("switcher"),
            m = document.getElementById("monthly"),
            y = document.getElementById("yearly");
        if (e != null) {
            e.addEventListener("click", function() {
                t.checked = false;
                e.classList.add("toggler--is-active");
                d.classList.remove("toggler--is-active");
                m.classList.remove("hide");
                y.classList.add("hide");
            });
        }
        if (d != null) {
            d.addEventListener("click", function() {
                t.checked = true;
                d.classList.add("toggler--is-active");
                e.classList.remove("toggler--is-active");
                m.classList.add("hide");
                y.classList.remove("hide");
            });
        }
        if (t != null) {
            t.addEventListener("click", function() {
                d.classList.toggle("toggler--is-active");
                e.classList.toggle("toggler--is-active");
                m.classList.toggle("hide");
                y.classList.toggle("hide");
            });
        }
    }

    function rakon_parallax() {

        /*-----------------------------
    cover-parallax
  -----------------------------*/
        var image = document.getElementsByClassName('cover-parallax');
        new simpleParallax(image, {
            delay: .6,
            transition: 'cubic-bezier(0,0,0,1)'
        });

        var image = document.getElementsByClassName('basic-parallax');
        new simpleParallax(image, {
            delay: .6,
            transition: 'cubic-bezier(0,0,0,1)'
        });

        var image = document.getElementsByClassName('horizontal-parallax');
        new simpleParallax(image, {
            orientation: 'right'
        });

        var image = document.getElementsByClassName('scale-parallax');
        new simpleParallax(image, {
            scale: 1.5
        });

        var image = document.getElementsByClassName('transition-parallax');
        new simpleParallax(image, {
            delay: .6,
            transition: 'cubic-bezier(0,0,0,1)'
        });

        var image = document.getElementsByClassName("overlay_parallax");
        new simpleParallax(image, {
          delay: 0.6,
          transition: "cubic-bezier(0,0,0,1)",
        });

    }

    function rakon_swiper_default() {
        /*-----------------------------
        Slider and Swiper for Testimonial (Interior)
        -----------------------------*/
        var swiper = new Swiper(".swiper_default", {
            pagination: {
                el: ".swiper-pagination",
                dynamicBullets: true,
            },
            autoplay: {
                delay: 2500,
                disableOnInteraction: true,
            },
        });
    }

    function rakon_swipe_circle() {
        /*-----------------------------
      Slider and Swiper for Testimonial
    -----------------------------*/
        var galleryThumbs = new Swiper('.img_persong', {
            spaceBetween: 10,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
        });
        var galleryTop = new Swiper('.content_swiper', {
            spaceBetween: 10,
            autoplay: {
                delay: 2500,
                disableOnInteraction: true,
            },
            thumbs: {
                swiper: galleryThumbs
            }
        });
    }

    function rakon_swipe_circle_two() {
        /*-----------------------------
      Swiper WorkSpace
    -----------------------------*/
        var galleryThumbs = new Swiper('.person_thumbs', {
            spaceBetween: 10,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
        });
        var galleryTop = new Swiper('.swipe_circle', {
            spaceBetween: 10,
            autoplay: {
                delay: 2500,
                disableOnInteraction: true,
            },
            thumbs: {
                swiper: galleryThumbs
            }
        });

    }

    function rakon_swipe_center() {
        /*-----------------------------
          swiper__center
        -----------------------------*/
        var swiper = new Swiper('.swiper__center', {
            slidesPerView: 3,
            centeredSlides: false,
            spaceBetween: 30,
            grabCursor: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: ".swiper-pagination",
                dynamicBullets: true,
            },
            breakpoints: {
                240: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                540: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            }
        });
    }

    function rakon_swipe_normal_two() {
        /*-----------------------------
          swiper__center
        -----------------------------*/
        var swiper = new Swiper('.swipe_normal_two', {
            slidesPerView: 3,
            centeredSlides: false,
            spaceBetween: 30,
            grabCursor: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                240: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
                540: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
            }
        });
    }

    function rakon_theme_btns() {
        /*-----------------------------
          hover Button (letter Effect)
        -----------------------------*/

        document.querySelectorAll('.effect-letter').forEach(button => {

            let div = document.createElement('div'),
                letters = button.textContent.trim().split('');

            function elements(letter, index, array) {

                let element = document.createElement('span'),
                    part = (index >= array.length / 2) ? -1 : 1,
                    position = (index >= array.length / 2) ? array.length / 2 - index + (array.length / 2 - 1) : index,
                    move = position / (array.length / 2),
                    rotate = 1 - move;

                element.innerHTML = !letter.trim() ? '&nbsp;' : letter;
                element.style.setProperty('--move', move);
                element.style.setProperty('--rotate', rotate);
                element.style.setProperty('--part', part);

                div.appendChild(element);

            }

            letters.forEach(elements);

            button.innerHTML = div.outerHTML;

            button.addEventListener('mouseenter', e => {
                if (!button.classList.contains('out')) {
                    button.classList.add('in');
                }
            });

            button.addEventListener('mouseleave', e => {
                if (button.classList.contains('in')) {
                    button.classList.add('out');
                    setTimeout(() => button.classList.remove('in', 'out'), 950);
                }
            });

        });
    }

    function rakon_bx_slider() {
        /*-----------------------------
          bxslider for Logos (animation like news)
        -----------------------------*/
        $('.bxslider').bxSlider({
            minSlides: 1,
            maxSlides: 8,
            slideWidth: 160,
            slideMargin: 0,
            ticker: true,
            speed: 20000
        });
    }

    function rakon_cate_box() {
        /*-----------------------------
          Checkbox Select
        -----------------------------*/
        $('.checkbox-item .item-select').on('click', function() {
            $(this).parent().find('.item-select.active').removeClass('active');
            $(this).addClass('active');
        });
    }


    function rakon_blogcarousel_box() {
        /*-----------------------------
      feature_strories
    -----------------------------*/

        var swiper = new Swiper('.blog_slider_three', {
            slidesPerView: 3,
            spaceBetween: 30,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                240: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                540: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            }
        });
    }

    function rakon_blogcarousel_box_two() {
        /*-----------------------------
      feature_strories
    -----------------------------*/

        var swiper = new Swiper('.blog_slider_two', {
            slidesPerView: 3,
            spaceBetween: 30,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                240: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                540: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
            }
        });
    }

    function rakon_blogcarousel_box_one() {
        /*-----------------------------
      feature_strories
    -----------------------------*/

        var swiper = new Swiper('.blog_slider_one', {
            slidesPerView: 3,
            spaceBetween: 30,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                240: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                540: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
            }
        });
    }

    function rakon_blogcarousel_box_four() {
        /*-----------------------------
      feature_strories
    -----------------------------*/

        var swiper = new Swiper('.blog_slider_four', {
            slidesPerView: 3,
            spaceBetween: 30,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                240: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                540: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            }
        });
    }

    function rakon_cate_carou() {
        /*-----------------------------
          swip__topic
        -----------------------------*/

        var swiper = new Swiper('.swipe_basic_topic', {
            slidesPerView: 4,
            spaceBetween: 30,
            freeMode: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            breakpoints: {
                240: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                540: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            }
        });
    }



    function rakon_projectcaro_one() {
     
      $(function () {
        /*-----------------------------
        Hide header
      -----------------------------*/
        // build scene
        var scene = new ScrollMagic.Scene({
          triggerElement: "#triggerForm",
        })
          // trigger animation by adding a css class
          .setClassToggle("#myNavbar", "hideheader")
          .addIndicators({
            name: "1 - add a class",
          }) // add indicators (requires plugin)
          .addTo(controller);
  
        /*-----------------------------
        Show header
      -----------------------------*/
        // build scene
        var scene = new ScrollMagic.Scene({
          triggerElement: "#triggerTo",
        })
          // trigger animation by adding a css class
          .setClassToggle("#myNavbar", "showheader")
          .addIndicators({
            name: "1 - add a class",
          }) // add indicators (requires plugin)
          .addTo(controller);
      });
  
      /*-----------------------------
      horizontal scroll
    -----------------------------*/
      // init controller
    
      var controller = new ScrollMagic.Controller();
    
      var controller = new ScrollMagic.Controller();
      // define movement of panels
      var wipeAnimation = new TimelineMax().to("#slideContainer", 1, {
        x: "-55%",
      });
  
      // create scene to pin and link animation
      new ScrollMagic.Scene({
        triggerElement: "#pinContainer",
        triggerHook: "onLeave",
        duration: "350%",
      })
        .setPin("#pinContainer")
        .setTween(wipeAnimation)
        .addIndicators()
        .addTo(controller);
  
      var horizontal = new ScrollMagic.Scene({
        offset: 50,
        duration: 300,
        // reverse: false
      })
  
        // .addIndicators()
        .addTo(controller);
  
   
    }

    function rakon_title_scrol() {

        var scene = new ScrollMagic.Scene({
            triggerElement: "#target1",
            duration: 300,
          })
            .setPin("#pin1")
            .addIndicators({
              name: "1 (duration: 300)",
            }) // add indicators (requires plugin)
            .addTo(controller); 
    
    }

    function rakon_image_box_one() {

   
      
        $(function () {
            if ($('#targetRotate').length > 0) {
    var scene = new ScrollMagic.Scene({
        triggerElement: "#targetRotate",
      })
        .setTween("#animateRotate", 0.5, {
          left: 100,
          rotation: 20,
          ease: Circ.easeInOut,
        }) // trigger a TweenMax.to tween
        .addIndicators({
          name: "1 (duration: 0)",
        }) // add indicators (requires plugin)
        .addTo(controller);
    }   });
       

}


function rakon_status_one() {

        var scene = new ScrollMagic.Scene({
            triggerElement: "#triggerBlur",
          })
          // trigger animation by adding a css class
          .setClassToggle("#Statistic", "animetext")
          .addIndicators({
            name: "1 - add a class",
          }) // add indicators (requires plugin)
          .addTo(controller);
  
          /*-----------------------------
          Particles
        -----------------------------*/
          particlesJS("particles-js", {
            particles: {
              number: {
                value: 8,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: ["#165DF5", "#19A389", "#F28E1C", "#F93542"],
              },
              shape: {
                type: ["circle"],
                stroke: {
                  width: 0,
                  color: "#000000",
                },
                polygon: {
                  nb_sides: 5,
                },
              },
              opacity: {
                value: 1,
                random: true,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.6,
                  sync: false,
                },
              },
              size: {
                value: 8,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.3,
                  sync: false,
                },
              },
              line_linked: {
                enable: false,
                distance: 500,
                color: "#ffffff",
                opacity: 1,
                width: 2,
              },
              move: {
                enable: true,
                speed: 0.5,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
          });
  
        }


        function rakon_project_carousel_two() {
  
        $(function() {
          /*-----------------------------
          Hide header
        -----------------------------*/
          // build scene
          var scene = new ScrollMagic.Scene({
              triggerElement: "#triggerForm",
            })
            // trigger animation by adding a css class
            .setClassToggle("#myNavbar", "hideheader")
            .addIndicators({
              name: "1 - add a class",
            }) // add indicators (requires plugin)
            .addTo(controller);
  
          /*-----------------------------
          Show header
        -----------------------------*/
          // build scene
          var scene = new ScrollMagic.Scene({
              triggerElement: "#triggerTo",
            })
            // trigger animation by adding a css class
            .setClassToggle("#myNavbar", "showheader")
            .addIndicators({
              name: "1 - add a class",
            }) // add indicators (requires plugin)
            .addTo(controller);
        });
        /*-----------------------------
          horizontal scroll
        -----------------------------*/
        // init controller
        var controller = new ScrollMagic.Controller();
  
        var controller = new ScrollMagic.Controller();
  
        // define movement of panels
        var wipeAnimation = new TimelineMax().to("#slideContainer", 1, {
          x: "-55%",
        });
  
        // create scene to pin and link animation
        new ScrollMagic.Scene({
            triggerElement: "#pinContainer",
            triggerHook: "onLeave",
            duration: "350%",
          })
          .setPin("#pinContainer")
          .setTween(wipeAnimation)
          .addIndicators()
          .addTo(controller);
  
        var horizontal = new ScrollMagic.Scene({
            offset: 50,
            duration: 300,
            // reverse: false
          })
  
          // .addIndicators()
          .addTo(controller);
  
        /*-----------------------------
        SimpleParallax
        -----------------------------*/
        var image = document.getElementsByClassName("thumbnail");
        new simpleParallax(image, {
          delay: 0.6,
          transition: "cubic-bezier(0,0,0,1)",
        });
  
    }



    function rakon_contat_form_side_scroll() {
        // build scene
        var scene = new ScrollMagic.Scene({
          triggerElement: "#triggerFormside",
        })
          // trigger animation by adding a css class
          .setClassToggle("#animate1", "translat")
          .addIndicators({
            name: "1 - add a class",
          }) // add indicators (requires plugin)
          .addTo(controller);

    }


    function rakon_image_scrooll() {
  
       // ScrollMagic
       $(function() {
     
        var tween = TweenMax.fromTo(
          ".animate",
          3, {
            top: 90,
          }, {
            top: -280,
            repeat: -1,
            yoyo: true,
            ease: Circ.easeInOut,
          }
        );

        if ($('#triggermove').length > 0) {
        var scene = new ScrollMagic.Scene({
            triggerElement: ".triggermove",
            duration: 300,
            offset: 100,
          })
          .setTween(tween)
          .addIndicators({
            name: "loop",
          }) // add indicators (requires plugin)
          .addTo(controller);
        }
      
      });
   
  
        }

        function rakon_image_carousel() {
        var swiper = new Swiper('.swiper_vertical', {
            direction: 'vertical',
            slidesPerView: 1,
            paginationClickable: true,
            spaceBetween: 20,
            loop: true,
            autoplay: {
              delay: 2500,
              disableOnInteraction: false,
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            // mousewheel: {
            //   enable: true
            // },
          });
        }


    //elementor front start
    $(window).on('elementor/frontend/init', function() {

        elementorFrontend.hooks.addAction('frontend/element_ready/rakon-single-banner-v3.default', rakon_video_modal);
        elementorFrontend.hooks.addAction('frontend/element_ready/rakon-single-banner-v4.default', rakon_video_modal);
        elementorFrontend.hooks.addAction('frontend/element_ready/rakon-single-banner-v5.default', rakon_video_modal);
        elementorFrontend.hooks.addAction('frontend/element_ready/rakon-single-banner-v7.default', rakon_banner_timer);
        elementorFrontend.hooks.addAction('frontend/element_ready/rakon-single-banner-v9.default', rakon_video_modal);
        elementorFrontend.hooks.addAction('frontend/element_ready/rakon-faqs-v1.default', rakon_faqsall);
        elementorFrontend.hooks.addAction('frontend/element_ready/rakon-tab-v1.default', rakon_tabone);
        elementorFrontend.hooks.addAction('frontend/element_ready/rakon-tab-v1.default', rakon_tabtwo);
        elementorFrontend.hooks.addAction('frontend/element_ready/rakon-tab-v1.default', rakon_tabthree);
        elementorFrontend.hooks.addAction('frontend/element_ready/rakon-tab-video-v1.default', rakon_videotabone);
        elementorFrontend.hooks.addAction('frontend/element_ready/rakon-tab-video-v1.default', rakon_videotabtwo);
        elementorFrontend.hooks.addAction('frontend/element_ready/rakon-price-v1.default', rakon_price_time_active);
        elementorFrontend.hooks.addAction('frontend/element_ready/rakon-price-v2.default', rakon_toggler_pricing);
        elementorFrontend.hooks.addAction('frontend/element_ready/rakon-parallax-v1.default', rakon_parallax);
        elementorFrontend.hooks.addAction('frontend/element_ready/rakon-mask-parallax-v1.default', rakon_parallax);
        elementorFrontend.hooks.addAction('frontend/element_ready/rakon-testimonial-v1.default', rakon_swiper_default);
        elementorFrontend.hooks.addAction('frontend/element_ready/rakon-testimonial-v1.default', rakon_swipe_circle);
        elementorFrontend.hooks.addAction('frontend/element_ready/rakon-testimonial-v1.default', rakon_swipe_center);
        elementorFrontend.hooks.addAction('frontend/element_ready/rakon-testimonial-v1.default', rakon_swipe_normal_two);
        elementorFrontend.hooks.addAction('frontend/element_ready/rakon-testimonial-v1.default', rakon_swipe_circle_two);
        elementorFrontend.hooks.addAction('frontend/element_ready/rakon-themebtns-v1.default', rakon_theme_btns);
        elementorFrontend.hooks.addAction('frontend/element_ready/rakon-client-brand-v1.default', rakon_bx_slider);
        elementorFrontend.hooks.addAction('frontend/element_ready/rakon-countdown-v1.default', rakon_banner_timer);
        elementorFrontend.hooks.addAction('frontend/element_ready/rakon-category-box-v1.default', rakon_cate_box);
        elementorFrontend.hooks.addAction('frontend/element_ready/rakon-newscarousel-v1.default', rakon_blogcarousel_box);
        elementorFrontend.hooks.addAction('frontend/element_ready/rakon-newscarousel-v1.default', rakon_blogcarousel_box_two);
        elementorFrontend.hooks.addAction('frontend/element_ready/rakon-newscarousel-v1.default', rakon_blogcarousel_box_one);
        elementorFrontend.hooks.addAction('frontend/element_ready/rakon-newscarousel-v1.default', rakon_blogcarousel_box_four);
        elementorFrontend.hooks.addAction('frontend/element_ready/rakon-category-carousel-v1.default', rakon_cate_carou);
        elementorFrontend.hooks.addAction('frontend/element_ready/rakon-project-caro-v1.default', rakon_projectcaro_one);
        elementorFrontend.hooks.addAction('frontend/element_ready/rakon-project-caro-v2.default', rakon_project_carousel_two);
        elementorFrontend.hooks.addAction('frontend/element_ready/rakon-title-v2.default', rakon_title_scrol);
        elementorFrontend.hooks.addAction('frontend/element_ready/rakon-image-box-v1.default', rakon_image_box_one);
        elementorFrontend.hooks.addAction('frontend/element_ready/rakon-fun-status-v1.default', rakon_status_one);
        elementorFrontend.hooks.addAction('frontend/element_ready/rakon-contact-form-v1.default', rakon_contat_form_side_scroll);
        elementorFrontend.hooks.addAction('frontend/element_ready/rakon-image-box-v3.default', rakon_image_scrooll);
        elementorFrontend.hooks.addAction('frontend/element_ready/rakon-image-carousels-v1.default', rakon_image_carousel);
   
    });



    /* ==========================================================================
       When document is Scrollig, do
       ========================================================================== */




})(jQuery);