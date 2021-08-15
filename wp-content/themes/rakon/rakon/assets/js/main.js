

(function($) {
    "use strict";

    jQuery(document).on('ready', function() {
        /*-----------------------------
          Fixed Navigation
        -----------------------------*/
        $(window).scroll(function() {
            if ($(this).scrollTop() > 150) {
                $('body.header_sticky').addClass('fixed-header');
            } else {
                $('body.header_sticky').removeClass('fixed-header');
            }
        });

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

        /*-----------------------------
          Effect on Menu for Mobile
        -----------------------------*/
        document.querySelectorAll('.menu').forEach(btn => {
            btn.addEventListener('click', e => {
                btn.classList.toggle('active');
            });
        });

        /*-----------------------------
          Smooth Scrollspy to (For Navbar)
        -----------------------------*/

        // Add scrollspy to <body>
        $('body').scrollspy({ target: ".navbar", offset: 50 });

        // Add smooth scrolling on all links inside the navbar
        $("#myNavbar a").on('click', function(event) {
            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();

                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function() {

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            } // End if
        });


        /*-----------------------------
          Collapse - icon in Collapse
        -----------------------------*/
        $('.collapse').on('show.bs.collapse', function() {
            $(this).siblings('.card-header').addClass('active');
        });

        $('.collapse').on('hide.bs.collapse', function() {
            $(this).siblings('.card-header').removeClass('active');
        });

        /*-----------------------------
          Dropdown Select for Language
        -----------------------------*/
        $('select[data-menu]').each(function() {

            let select = $(this),
                options = select.find('option'),
                menu = $('<div />').addClass('select-menu'),
                button = $('<div />').addClass('button'),
                list = $('<ul />'),
                arrow = $('<em />').prependTo(button);

            options.each(function(i) {
                let option = $(this);
                list.append($('<li />').text(option.text()));
            });

            menu.css('--t', select.find(':selected').index() * -41 + 'px');

            select.wrap(menu);

            button.append(list).insertAfter(select);

            list.clone().insertAfter(button);

        });

        $(document).on('click', '.select-menu', function(e) {

            let menu = $(this);

            if (!menu.hasClass('open')) {
                menu.addClass('open');
            }

        });

        $(document).on('click', '.select-menu > ul > li', function(e) {

            let li = $(this),
                menu = li.parent().parent(),
                select = menu.children('select'),
                selected = select.find('option:selected'),
                index = li.index();

            menu.css('--t', index * -41 + 'px');
            selected.attr('selected', false);
            select.find('option').eq(index).attr('selected', true);

            menu.addClass(index > selected.index() ? 'tilt-down' : 'tilt-up');

            setTimeout(() => {
                menu.removeClass('open tilt-up tilt-down');
            }, 500);

        });

        $(document).on('click', e => {
            e.stopPropagation();
            if ($('.select-menu').has(e.target).length === 0) {
                $('.select-menu').removeClass('open');
            }
        });

        /*-----------------------------
          Hide and Show Password
        -----------------------------*/
        $("#show_hide_password").on('click', 'a', function(event) {
            event.preventDefault();
            if ($('#show_hide_password input').attr("type") == "text") {
                $('#show_hide_password input').attr('type', 'password');
                $('#show_hide_password .hide_show span').addClass("hidden_outlined");
                $('#show_hide_password .hide_show span').removeClass("visible_outlined");
            } else if ($('#show_hide_password input').attr("type") == "password") {
                $('#show_hide_password input').attr('type', 'text');
                $('#show_hide_password .hide_show span').removeClass("hidden_outlined");
                $('#show_hide_password .hide_show span').addClass("visible_outlined");
            }
        });


        /*-----------------------------
          loading before open page
        -----------------------------*/
        // Fakes the loading setting a timeout
        setTimeout(function() {
            $('body').addClass('loaded_page');
        }, 1000);


        

        /*-----------------------------
          Back to top with progress indicator
        -----------------------------*/

        function preloader() {
            if ($('.prgoress_indicator path').length) {

                var progressPath = document.querySelector('.prgoress_indicator path');
                var pathLength = progressPath.getTotalLength();

                progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
                progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
                progressPath.style.strokeDashoffset = pathLength;
                progressPath.getBoundingClientRect();
                progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

                var scroll = $(window).scrollTop();
                var height = $(document).height() - $(window).height();
                var progress = pathLength - (scroll * pathLength / height);
                progressPath.style.strokeDashoffset = progress;
            }
        }
        preloader();


        $(window).on('scroll', preloader);

        var offset = 250;
        var duration = 550;
        jQuery(window).on('scroll', function() {
            if (jQuery(this).scrollTop() > offset) {
                jQuery('.prgoress_indicator').addClass('active-progress');
            } else {
                jQuery('.prgoress_indicator').removeClass('active-progress');
            }
        });
        jQuery('.prgoress_indicator').on('click', function(event) {
            event.preventDefault();
            jQuery('html, body').animate({ scrollTop: 0 }, duration);
            return false;
        });

   

   

        /*-----------------------------
          swip__topic
        -----------------------------*/

        var swiper = new Swiper('.swiperelated', {
            slidesPerView: 3,
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

      

        /*-----------------------------
          countdown Timer
        -----------------------------*/
        $(".countdown").countdown();

        /*-----------------------------
          progress-bar
        -----------------------------*/
        var delay = 400;
        $(".progress-bar").each(function(i) {
            $(this).delay(delay * i).animate({
                width: $(this).attr('aria-valuenow') + '%'
            }, delay);
        });

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


        /*-----------------------------
          COUNTER-UP JQUERY PLUGIN
        -----------------------------*/

        function faqsalls() {
            var accordion = {
                init: function() {
                    $('dd').filter(':nth-child(n+4)').addClass('hide');
                    $('dt:first-child').addClass('active');
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




        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
        // Dom Ready Function
        jQuery(document).on('ready', function() {
            (function($) {

                faqsalls();
            })(jQuery);
        });


     

        /*-----------------------------
          Mousehover for dropdown
        -----------------------------*/


        $('.dropdown.dropdown-hover').hover(
            function() {
                $(this).addClass('show')
            },
            function() {
                $(this).removeClass('show')
            });


        $(function() {

            $('li.dropdown > span').on('click', function(event) {

                event.preventDefault();
                $(this).toggleClass('selected');
                $(this).parent().find('ul').first().toggle(300);

                $(this).parent().siblings().find('ul').hide(200);

                //Hide menu when clicked outside
                $(this).parent().find('ul').parent().mouseleave(function() {
                    var thisUI = $(this);
                    $('html').click(function() {
                        thisUI.children(".dropdown-menu").hide();
                        thisUI.children("span").removeClass('selected');

                        $('html').unbind('click');
                    });
                });


            });
        });

        /*-----------------------------
    Dropdown menu for mobile
  -----------------------------*/
        var coll = document.getElementsByClassName("dropdown_menu");
        var i;

        for (i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var content = this.nextElementSibling;
                if (content.style.height) {
                    content.style.height = null;
                } else {
                    content.style.height = content.scrollHeight + "px";
                }
            });
        };

        // End.

    });


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

    /*-----------------------------
      show Toast after (8000)
    -----------------------------*/
    setTimeout(() => {
        $("#myTost").toast('show')
    }, 8000);



   



    function lightbox() {
        /*-----------------LightBox-----------------*/
        //LightBox / Fancybox
        if ($('.lightbox-image').length) {
            $('.lightbox-image').fancybox({
                openEffect: 'fade',
                closeEffect: 'fade',
                helpers: {
                    media: {}
                }
            });
        }
        }
            // Dom Ready Function
    jQuery(document).on('ready', function() {
        (function($) {
            lightbox();
        })(jQuery);
    });

    /*-----------------------------
      Checkbox Select
    -----------------------------*/
    $('.checkbox-item .item-select').on('click', function() {
        $(this).parent().find('.item-select.active').removeClass('active');
        $(this).addClass('active');
    });




    /*-----------------------------
       tooltip
     -----------------------------*/
    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    });

    /*-----------------------------
   fixSide_scroll
 -----------------------------*/
    var sticky = new Sticky('.fixSide_scroll');



    $(document).ready(function() {

        var CurrentUrl = document.URL;
        var CurrentUrlEnd = CurrentUrl.split('/').filter(Boolean).pop();
        console.log(CurrentUrlEnd);
        $("#myNavbar .nav_item a").each(function() {
            var ThisUrl = $(this).attr('href');
            var ThisUrlEnd = ThisUrl.split('/').filter(Boolean).pop();

            if (ThisUrlEnd == CurrentUrlEnd) {
                $(this).closest('.nav_item').addClass('active')
            }
        });

    });
  

}(jQuery));


/*-----------------------------
  ScrollMagic (init controller)
-----------------------------*/
var controller = new ScrollMagic.Controller();