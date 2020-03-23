$(function(){
 //slick slider

$('.banner-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows:false,
  speed:1500,
  autoplaySpeed: 2000,
});


//service-slider
$('.service-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  arrows:false,
  speed:1500,
  autoplaySpeed: 2000,
 responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      
      }
    },
     {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      
      }
    },
  ]

});

//work slider
$('.work-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  arrows:true,
  nextArrow:'.right',
  prevArrow:'.left',
  speed:1500,
  centerMode:true,
  centerPadding:false,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        centerMode:false,
      
      }
    },
    
  ]




});





//mixitup slider
 var containerEl = document.querySelector('.gal-main');

  var mixer = mixitup(containerEl);

//video
  $('.venobox').venobox(); 

//conterup
 $('.counter').counterUp({
            delay: 10,
            time: 1000
   });

//animation scroll js
var html_body = $('html, body');
$('.navbar a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 130
            }, 1000);
            return false;
        }
    }
});


//back-to-top
$('.back-to-top').click(function(){
   $('html,body').animate({scrollTop:0},1500);
});

$(window).scroll(function(){
 var scroll=$(this).scrollTop();
  if(scroll>200){
	$('.back-to-top').fadeIn();
}
else{
	$('.back-to-top').fadeOut();

}
if(scroll>50){
	$('.navbar').addClass('bg');
}
else{
   $('.navbar').removeClass('bg');
}
});

    
//  ytplayer  
    
    

      jQuery('.player').YTPlayer();
   
    
    
    
    
    
    
    





});