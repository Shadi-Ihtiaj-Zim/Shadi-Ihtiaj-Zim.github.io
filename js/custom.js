
  $(function () {
    'use strict'

    // MENU
    $('.navbar .nav-link').on('click',function(){
        $(".navbar-collapse").collapse('hide');
    });

    $(window).on('scroll', function() {     
                                
        /*----------------------------------------------------*/
        /*  Navigation Menu Scroll
        /*----------------------------------------------------*/    
        
        var b = $(window).scrollTop();
        
        if( b > 72 ){       
            $(".navbar").addClass("scroll");
        } else {
            $(".navbar").removeClass("scroll");
        }               
    });

    // PUBLICATIONS CAROUSEL
    $('#publications-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            900:{
                items:2,
            },
            1200:{
                items:3,
                loop:true
            }
        }
    })

// CERTIFICATES CAROUSEL
$('#certificates-carousel').owlCarousel({
    loop: true, // Keeps the slider looping
    margin: 10,
    responsiveClass: true,
    autoplay: true, // Enables automatic sliding
    autoplayTimeout: 2500, // Sets the interval to 3 seconds
    autoplayHoverPause: true, // Pauses autoplay on hover
    responsive: {
        0: {
            items: 1,
        },
        900: {
            items: 2,
        },
        1200: {
            items: 3,
            loop: true
        }
    }
});
// CERTIFICATES CAROUSEL
$('#pdf-carousel').owlCarousel({
    loop: true, // Keeps the slider looping
    margin: 10,
    responsiveClass: true,
    autoplay: true, // Enables automatic sliding
    autoplayTimeout: 3500, // Sets the interval to 3 seconds
    autoplayHoverPause: true, // Pauses autoplay on hover
    responsive: {
        0: {
            items: 1,
        },
        900: {
            items: 2,
        },
        1200: {
            items: 3,
            loop: true
        }
    }
});


    // SMOOTHSCROLL
    $(function() {
      $('.navbar .nav-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });   
     
  });
