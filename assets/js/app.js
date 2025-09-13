// --------------------------- StellarNav -----------------------------
  jQuery(document).ready(function($) {
        jQuery('.stellarnav').stellarNav({
            // theme: 'dark', // adds default color to nav. (light, dark)
            breakpoint: 768, // number in pixels to determine when the nav should turn mobile friendly
            menuLabel: '&nbsp', // label for the mobile nav
            sticky: false, // makes nav sticky on scroll (desktop only)
            position: 'static', // 'static', 'top', 'left', 'right'
            openingSpeed: 250, // how fast the dropdown should open in milliseconds
            closingDelay: 250, // controls how long the dropdowns stay open for in milliseconds
            showArrows: true, // shows dropdown arrows next to the items that have sub menus
            phoneBtn: '', // adds a click-to-call phone link
            phoneLabel: 'Call Us', // label for the phone button
            locationBtn: '', // adds a location link
            locationLabel: 'Location', // label for the location button
            closeBtn: false, // adds a close button to the end of nav
            closeLabel: 'Close', // label for the close button
            mobileMode: false,
            scrollbarFix: false // fixes horizontal scrollbar issue on very long navs
        });
    });


// Banner Video ------------
const btn = document.getElementById("playBtn");
  const video = document.getElementById("myVideo");

  // initial Button textContent
  window.addEventListener("load", () => {
    video.play();
    btn.innerHTML = '<i class="bi bi-play-fill"></i>'; 
  });

  
  btn.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      btn.innerHTML = '<i class="bi bi-play-fill"></i>'; 
    } else {
      video.pause();
      btn.innerHTML = '<i class="bi bi-pause"></i>';
    }
  });



// -------------------- Sher Bengal beach  Resort -------------------
    jQuery('.sher-bengal-beach-resort-wrapper .slide-image-block').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><i class="bi bi-arrow-left-circle"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="bi bi-arrow-right-circle"></i></button>',
        autoplay: true,
        responsive: [
            {
            breakpoint: 999,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 660,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false

            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 500
                
            }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });


// --------------------------- Amenities && Facilities Block ---------------------
    jQuery('.facilites-block-slide').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><i class="bi bi-arrow-left-circle"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="bi bi-arrow-right-circle"></i></button>',
        // autoplay: true,
        // autoplaySpeed: 2000,

        responsive: [
            {
            breakpoint: 999,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                autoplay: true,
                autoplaySpeed: 1000,
                
            }
            },
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 500
            }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
// --------------------------- Our Room Slide All ---------------------
jQuery('.our-room-slide-all-wrapper .slide-image-block').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><i class="bi bi-arrow-left-circle"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="bi bi-arrow-right-circle"></i></button>',
        autoplay: true,
        autoplaySpeed: 1000,

        responsive: [
            {
            breakpoint: 999,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                autoplay: true,
                autoplaySpeed: 1000,
                
            }
            },
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 1000
            }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });









