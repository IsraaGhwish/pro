$(document).ready(function () {
  //navbar
  $(window).scroll(function () {
    let wSroll = $(window).scrollTop();
    if (wSroll>=100){
      $("nav").addClass("bgwidth")
    }else{
      $("nav").removeClass("bgwidth")
    }
    
  })
  //slider
    $('.headerslider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
      });
      //countdown
      $('.countdown').dsCountDown({
        endDate: new Date("December 24, 2023 23:59:00")
        });

      //dropdown
      $(".dropdown").hover(function(){
        $(".dropdown-menu").slideToggle (500)
      })
      
})