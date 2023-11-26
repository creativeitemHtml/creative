


$(document).ready(function () {
    // For Mega Menu 
    $(".main-mega-menu").hover(function () {
        $(this).toggleClass("mega-hover");
        $(this).parents('.have-mega-menu').toggleClass("parent-hover");
     });


    // Search Focus Nav Hide Show 
    $(".nav-search .search-field").focus(function(){
        $(this).parents('.second-b-menu-wrap').addClass('search-focus-active');
    }).blur(function(){
        $(this).parents('.second-b-menu-wrap').removeClass('search-focus-active');
    });
    // Element Search focus
    $(".search-show-btn").click(function () {
        setTimeout(function() {
            $('.menu-search-antry.active .form-control').focus();
          }, 100);
     });


     // Element Select 
     $('.select-item').click(function (e) {
        e.preventDefault();
        var value = $(this).find('.select-title').text();
        var icon = $(this).find('#select-icon').html();
        $('#selected-field').val(value);

        var item = icon + " " + value
        $('#selected-item').empty().append(item);
    });


    // Accordion Image Change 
    $('.course-accordion .accordion-button').click(function(){
        $("#course-banner").attr("src", $(this).attr("data-img-src"));
    });
    // Accordion Image Change 
    $('.organizer-accordion .accordion-button').click(function(){
          $("#organizer-banner").attr("src", $(this).attr("data-img-src"));
    });


    // Main Menu
    $(".mobile-menu-button").click(function () {
        $('.main-mobile-menu').addClass("active");
     });
    $(".mobile-menu-close").click(function () {
        $('.main-mobile-menu').removeClass("active");
     });


    //   Scroll Top 
    $(window).on("scroll", function () {
        var ScrollBarPosition = $(this).scrollTop();
        if (ScrollBarPosition > 200) {
            $(".scroll-top-main").fadeIn();
        } else {
            $(".scroll-top-main").fadeOut();
        }
        });
        $(".scroll-top-main").on("click", function () {
        $("body,html").animate({
            scrollTop: 0,
        });
    });


    //   Element Menu slideToggle
    $(".element-menu-button").click(function(){
        $(".element-menu-area").slideToggle();
    });

    //  Element Filter Web UI Sidebar toggle 
    $(".sidebar-title").on("click", function () {
        $(".filter-items").toggleClass("fShow");
    });


    // Main Menu Language Select 
    $('.dropdown-hover .drop-content .drop-hover li').click(function (e) {
        e.preventDefault();
        var value = $(this).find('.select-lang').text();
        var icon = $(this).find('.select-flug').html();
        $('.selected-language').val(value);
        var item = icon + " " + value
        // Class 
        $('.dropdown-hover .drop-content .drop-hover li').removeClass('d-none');
        var $this = $(this);
        if (!$this.hasClass('d-none')) {
          $this.addClass('d-none');
        }
        // SlideUp 
        $('.selected-show').empty().append(item);
    });
    // Main Menu Language Select for mobile
    $('.dropdown-hover .drop-content-mobile .drop-hover li').click(function (e) {
        e.preventDefault();
        var value = $(this).find('.select-lang').text();
        var icon = $(this).find('.select-flug').html();
        $('.selected-language-mobile').val(value);
        var item = icon + " " + value
        // Class 
        $('.dropdown-hover .drop-content-mobile .drop-hover li').removeClass('d-none');
        var $this = $(this);
        if (!$this.hasClass('d-none')) {
          $this.addClass('d-none');
        }
        // SlideUp 
        $('.selected-show-mobile').empty().append(item);
    });


    // Table of Content
    $('.table-content-wrap .table-content-close').click(function (e) {
        $('.table-of-contents').addClass('d-none');
        $('.table-content-wrap .content-menu').removeClass('d-none');
    });
    $('.table-content-wrap .content-menu').click(function (e) {
        $(this).addClass('d-none');
        $('.table-of-contents').removeClass('d-none');
    });

   

    // Element Details Share show hide
    $(".shareDropdown-button").click(function () {
        event.stopPropagation();
        $(this).parent().find(".shareDropdown-menu").toggle();
    });
    $(document).click(function (event) {
        if (!$(event.target).closest(".shareDropdown-menu").length) {
            if ($(".shareDropdown-menu").is(":visible")) {
            $(".shareDropdown-menu").toggle();
            }
        }
    });


    // Password Toggle 
    $(".toggle-icons .password-icon").click(function() {
        // $(this).toggleClass("fa-eye fa-eye-slash");
        $('.toggle-icons .password-icon').removeClass('d-none');
        var $this = $(this);
        if (!$this.hasClass('d-none')) {
          $this.addClass('d-none');
        }
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });



    // Nice Select 
    $('.menu-search-antry select').niceSelect();
    $('.elementSort select').niceSelect();
    $('.service-select select').niceSelect();
    $('.product-filter-select').niceSelect();
    $('.enForm-nice-select').niceSelect();
});





// Accordion Menu 
function accordion() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        // Variables privadas
        var links = this.el.find('.nav-item-have-sub');
        // Evento
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }
    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el,
            $this = $(this),
            $next = $this.next();
        $next.slideToggle();
        $this.parent().toggleClass('active-submenu');
        if (!e.data.multiple) {
            $el.find('.sideBar-sub').not($next).slideUp().parent().removeClass('active-submenu');
            $el.find('.sideBar-sub').not($next).slideUp();
        };
    }
    var accordion = new Accordion($('.accordion-menu'), false);
}
accordion();
// Accordion Menu 


// Accordion Menu sidebar
function accordionside() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        // Variables privadas
        var links = this.el.find('.doc-badge-outline');
        // Evento
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }
    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el,
            $this = $(this),
            $next = $this.next();
        $next.slideToggle();
        $this.parent().toggleClass('active');
        if (!e.data.multiple) {
            $el.find('.sidebarMenu').not($next).slideUp().parent().removeClass('active');
            $el.find('.sidebarMenu').not($next).slideUp();
        };
    }
    var accordionside = new Accordion($('.accordion-doc-menu'), false);
}
accordionside();
// Accordion Menu sidebar


// Accordion Mobile Menu
function accordionmenu() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        // Variables privadas
        var links = this.el.find('.mobile-sub-btn');
        // Evento
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }
    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el,
            $this = $(this),
            $next = $this.next();
        $next.slideToggle();
        $this.parent().toggleClass('active');

        if (!e.data.multiple) {
            $el.find('.mobile-dropdown').not($next).slideUp().parent().removeClass('active');
            $el.find('.mobile-dropdown').not($next).slideUp();
        };
    }
    var accordionmenu = new Accordion($('.mobile-menu-ul'), false);
}
accordionmenu();
// Accordion Mobile Menu 


// Element Menu 
if (screen.width < 1025) {
    function elaccordion() {
        var Accordion = function(el, multiple) {
            this.el = el || {};
            this.multiple = multiple || false;
            var links = this.el.find('.el-have-sub > a');
            links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
        }
        Accordion.prototype.dropdown = function(e) {
            var $el = e.data.el,
                $this = $(this),
                $next = $this.next();
            $next.slideToggle();
            $this.parent().toggleClass('active-el-submenu');
            if (!e.data.multiple) {
                $el.find('.el-sub-menu').not($next).slideUp().parent().removeClass('active-el-submenu');
                $el.find('.el-sub-menu').not($next).slideUp();
            };
        }
        var elaccordion = new Accordion($('.element-desktop-nav > ul'), false);
    }
    elaccordion();
}


// Tooltip Active 
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


// Element Select class add remove
$(document).ready(function() {
    const menuContainer = $(".element-3-select");
    const menuToggle = $(".selected-item");
    const menu = $(".select-dropdown");

    menuToggle.on("click", function(event) {
        event.stopPropagation();
        menu.toggleClass("active");
        menuToggle.toggleClass("active");
    });

    $(document).on("click", function(event) {
        const target = $(event.target);
        if (!menuToggle.is(target)) {
            menu.removeClass("active");
            menuToggle.removeClass("active");
        }
    });
});

// Element Search class add remove
$(document).ready(function() {
    const menuContainer = $(".el-have-search");
    const menuToggle = $(".search-show-btn");
    const menu = $(".menu-search-antry");
    if (menuToggle.length) {
        menuToggle.on("click", function(event) {
            event.stopPropagation();
            menu.toggleClass("active");
            menuToggle.toggleClass("active");
        });
    }
    $(document).on("click", function(event) {
        const target = $(event.target);
        if (menuContainer.length && !menuContainer.is(target) && !menuContainer.has(target).length) {
            menu.removeClass("active");
            if (menuToggle.length) {
                menuToggle.removeClass("active");
            }
        }
    });
});


// Language Select class add remove
$(document).ready(function() {
    const menuToggle = $(".selected-show");
    const menu = $(".drop-content");

    menuToggle.on("click", function(event) {
        event.stopPropagation();
        menu.toggleClass("active");
        menuToggle.toggleClass("active");
    });

    $(document).on("click", function(event) {
        const target = $(event.target);
        if (!menuToggle.is(target) && !menu.is(target)) {
            menu.removeClass("active");
            menuToggle.removeClass("active");
        }
    });
});
// Language Select class add remove for mobile
$(document).ready(function() {
    const menuToggle = $(".selected-show-mobile");
    const menu = $(".drop-content-mobile");

    menuToggle.on("click", function(event) {
        event.stopPropagation();
        menu.toggleClass("active");
        menuToggle.toggleClass("active");
    });

    $(document).on("click", function(event) {
        const target = $(event.target);
        if (!menuToggle.is(target) && !menu.is(target)) {
            menu.removeClass("active");
            menuToggle.removeClass("active");
        }
    });
});


// Element Details Slider
$(document).ready(function(){
    var swiper = new Swiper(".elSlider-thumb", {
        loop: true,
        spaceBetween: 20,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".elSlider-main", {
        loop: true,
        spaceBetween: 50,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });
});
// Element Details Link Copy
$(document).ready(function() {
    var copyButton = $("#copy-button");
    var linkInput = $("#link-input");
    var copyImage = $("#copy-image");

    copyButton.on("click", function() {
        linkInput.select();
        document.execCommand("copy");
        copyButton.addClass("copied");
        window.getSelection().removeAllRanges();
        setTimeout(function() {
            copyButton.removeClass("copied");
        }, 1000);
    });
});

// Table of Content, Social Share Hide Show 
$(document).ready(function() {
    var blogsection = $('.blog-details-max').height();
    var tablecontent = $('.table-content-wrap').height();
    var blogsectionpos = $('.blog-details-max').position();
    var detailssectionpos = $('.details-table-of-content').position();
    $(window).scroll(function () {
        var scroll = $(this).scrollTop();
        if(scroll >= blogsectionpos.top && scroll <= (blogsection + blogsectionpos.top - tablecontent - 180)){
            $('.blog-socila-share').fadeIn();
        }
        else{
            $('.blog-socila-share').fadeOut();
        }
        if(scroll >= (detailssectionpos.top - 50) && scroll <= (blogsection + blogsectionpos.top - tablecontent - 180)){
            $('.table-content-wrap').fadeIn();
        }
        else{
            $('.table-content-wrap').fadeOut();
        }
    });
});




// Multi Image Video Upload Editor 
$(document).ready(function(){
     // Multi Image Video Upload 
     $(".multiImageUpload").miv({ image: ".cam", video: ".vid" });

     // Editor 
     ClassicEditor
       .create( document.querySelector( '#editor' ) )
       .catch( error => {
         console.error( error );
     } );
});

// LMS Pricing Testimonial Slider
$(document).ready(function(){
    var lmsswiper = new Swiper(".lmsSwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        centeredSlides: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            clickable: true,
        },
        breakpoints: {
            768: {
              slidesPerView: 1.5,
              spaceBetween: 25,
            },
            992: {
              slidesPerView: 2.4,
              spaceBetween: 34,
            },
          },
    });
});

// Checkbox for checkout
$(document).ready(function () {
    $(".checkThis").on("click", function () {
        $(".planCheck-input").prop("checked", false);
        $(this).find(".planCheck-input").prop("checked", true);
      });
  });
// Select2 js for checkout
$(document).ready(function () {
    $(".eChoice-multiple-without-remove").select2({
    //   placeholder: "Select a state",
    });
});

// Country Select for checkout
(function ($) {
    "use strict";
    var Medi = {
      init: function () {
        this.Basic.init();
      },
      Basic: {
        init: function () {
          this.SelectTwoCountry();
          this.GettingFixed();
        },
        SelectTwoCountry: function () {
          // For country select
          function format(item, state) {
            if (!item.id) {
              return item.text;
            }
            var countryUrl = "https://hatscripts.github.io/circle-flags/flags/";
            var stateUrl = "https://oxguy3.github.io/flags/svg/us/";
            var url = state ? stateUrl : countryUrl;
            var img = $("<img>", {
              class: "img-flag",
              width: 26,
              src: url + item.element.value.toLowerCase() + ".svg",
            });
            var span = $("<span>", {
              text: " " + item.text,
            });
            span.prepend(img);
            return span;
          }
  
          $(document).ready(function () {
            $("#countries").select2({
              templateResult: function (item) {
                return format(item, false);
              },
            });
            $("#us-states").select2({
              templateResult: function (item) {
                return format(item, true);
              },
            });
          });
        },
        GettingFixed: function (){
            // Getting Started fixed section
            // $(document).ready(function() {
                
            // });
            var organizeheight = $('.main-organize-details-section').height();
                var organizepos = $('.main-organize-details-section').position();
                var navcontent = $('.organize-fixed-area').height();
                $(window).scroll(function () {
                    var scroll = $(this).scrollTop();
                    if(scroll >= organizepos.top && scroll <= (organizeheight + organizepos.top - navcontent - 135)){
                        $('.organize-fixed-area').fadeIn();
                    }
                    else{
                        $('.organize-fixed-area').fadeOut();
                    }
                });
        },
      },
    };
    jQuery(document).ready(function () {
      Medi.init();
    });
})(jQuery);


// Venobox Active 
new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: false,
    spinner: 'rotating-plane'
});

// Player js 
const player = new Plyr('#player');
const player_2 = new Plyr('#player-2');
const player_3 = new Plyr('#player-3');
const player_4 = new Plyr('#player-4');
const player_5 = new Plyr('#player-5');
const player_6 = new Plyr('#player-6');














 