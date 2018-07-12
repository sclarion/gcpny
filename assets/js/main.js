( function($) {
  'use strict';


    /************* Start code for carousel swipe ************/
    $('#banner-carousel').slick({
          autoplay: false,
          autoplaySpeed:800,
          dots: true,
          prevArrow: false,
          nextArrow: false
    });
    
// Thumbnail hover effect
  $('.thumbnail').hover(
        function(){
            $(this).find('.overlay-caption').slideDown(250); //.fadeIn(250)
            $(this).find('.overlay-caption').fadeIn(250); 
        },
        function(){
            $(this).find('.overlay-caption').slideUp(250); //.fadeOut(205)
        }
    ); 



//Testimonial slider
    $('.gcpny-slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000
    });



// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         document.getElementById("topScroll").style.display = "block";
//     } else {
//         document.getElementById("topScroll").style.display = "none";
//     }
// }



 // executes when HTML-Document is loaded and DOM is ready

// breakpoint and up  
$(window).resize(function(){
	if ($(window).width() >= 980){	

      // when you hover a toggle show its dropdown menu
    //   $(".navbar .dropdown-toggle").hover(function () {
    //      $(this).parent().toggleClass("show");
    //      $(this).parent().find(".dropdown-menu").toggleClass("show"); 
    //    });

        // hide the menu when the mouse leaves the dropdown
    //   $( ".navbar .dropdown-menu" ).mouseleave(function() {
    //     $(this).removeClass("show");  
    //   });
  
		// do something here
	}	
});  

var heroHeight = $('.hero-section').outerHeight();


$(window).scroll(function(){

    var wScroll = $(this).scrollTop();


    // Promoscope
//  if(wScroll > $('.large-window').offset().top - $(window).height()){

//     $('.large-window').css({'background-position':'center '+ (wScroll - $('.large-window').offset().top) +'px'});

//     var opacity = (wScroll - $('.large-window').offset().top + 400) / (wScroll / 5);

//     $('.window-tint').css({'opacity': opacity});

//   }



    if(wScroll > heroHeight- 140) {
        $('.child-nav').addClass('show');
    } else{
        $('.child-nav').removeClass('show');
    }

});





//Check to see if the window is top if not then display button
$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('.scrollToTop').fadeIn();
    } else {
        $('.scrollToTop').fadeOut();
    }
});


//Click event to scroll to top
$('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop: 0},800);
    return false;
});



 
  
  





})(jQuery);

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
     $('html, body').animate({scrollTop:0}, 'slow');
    //document.body.scrollTop = 0;
    //document.documentElement.scrollTop = 0;
}