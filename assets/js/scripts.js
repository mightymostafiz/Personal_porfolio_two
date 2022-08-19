$(document).ready(function(){

  $(".toggle").click(function(){
    $(".menu ul").toggleClass("right");
    return false;
  })



  
  // ========= sticky header
  // window.addEventListener("scroll", function(){
  //   var header = this.document.querySelector("header");
  //   header.classList.toggle("sticky", this.window.scrollY > 150);
  // })

  //Sticky Header 
    $(window).scroll(function(){
      if ($(document).scrollTop () < 1){
          $(".header-area").removeClass("fixed");
          $(".header-area").removeClass("active-bg");
      }
      else if ($(document).scrollTop () > 300){
          $(".header-area").removeClass("fixed");
          $(".header-area").addClass("active-bg");
      }
      else{
          $(".header-area").addClass("fixed");
      }
  });
  // ========= wow js
  new WOW().init();

    // counter 
    // $('.counter-1').countUp();
    $('.counter').countUp({
      time: 3000,
      delay: 8,
    });
// =============================
  $(".progress-bar").ProgressBar();

    
	// ==> testimonials slider
    $('.owl-carousel').owlCarousel({
        loop:true,
        items:1,
        autoplay:true,
        autoplayTimeout: 7000,
        smartSpeed: 500,
        dots: false,
        nav: true
    })

    // scroll top main 
    $(window).scroll(function() {
        let scrollValue = $(window).scrollTop();

        if(scrollValue >100){
          $('.scroll-top').show();
        }
        else{
          $('.scroll-top').hide();
        }
      });
      // top scroll btn
      $(".scroll-top").click(function() {
        $("html, body").animate({ scrollTop: 0 }, 2000);
        return false;
      });

      // ======> mixit up gallery
      var mixer = mixitup('.gellary-wrraper', {
        load: {
            filter : '.all'
        }
    });

    // ===========================
    /* scroll menu  */

    window.addEventListener('scroll', function(){
      var header = document.querySelector('.header2');
      header.classList.toggle("sticky", window.scrollY > 0);
    })
    // annimation
    AOS.init({
      duration: 2000,
    });



});

