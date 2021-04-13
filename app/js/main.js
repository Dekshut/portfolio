$(function () {

  $('.header__menu-btn').on('click', function(){
    $('.header__menu-btn').toggleClass('header__menu-btn--active');
    $('.header__menu-list').toggleClass('header__menu-list--active');
    $('.header__top').toggleClass('header__top--active');
  });
  
  $(window).scroll(function(){ 
   if ( $(window).scrollTop() >= 1 ){                   
      $('.header__top').css('background-color','#fff');
      $('.header__top').css('opacity','100%');   
   }
   else {
     $('.header__top').css('opacity','75%');
   }
  });
  
  $(".header__menu-link, .header__scroll").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top-60}, 1500);
	});

})