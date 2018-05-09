$(document).ready(function() {
  $('select').niceSelect();

  $('.stepts-bottles').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow:'.stepts-bottles-next',
    prevArrow:'.stepts-bottles-prev'
  });
  
  $('.stepts-prize').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical:true,
    verticalSwiping:true,
    nextArrow:'.stepts-bottles-top',
    prevArrow:'.stepts-bottles-bottom'
  });

  $('#loginPhone').mask('+7 (000) 000-000-0');

  $('#regPhone').mask('+7 (000) 000-000-0');

  $('#loginDropdown').click(function() {
    $('#dropdown').toggleClass('__active');
  });

  // $('.js-modal-container').addClass('_active')
  // $(document.body).addClass('_active');
  $('.js-ok').click(function($event) {
    $event.preventDefault();
   $('.js-modal-container').fadeOut(300);
   window.setTimeout(function() {
   $('.js-modal-container').removeClass('_active');
  }, 250);
    $(document.body).removeClass('_active');
  }); 

  $('.js-no').click(function($event) {
    $event.preventDefault();
    $('.modal-error').fadeIn(300);
  });

  $('.js-error-ok').click(function($event) {
    $event.preventDefault();
    $('.modal-error').fadeOut(300);
  });

  $('.js-reg-btn').click(function($event) {
    $event.preventDefault();
    $('.js-reg').fadeIn(300);
    $('#dropdown').removeClass('__active');
  });

  $('.js-reg-close').click(function($event) {
    $event.preventDefault();
    $('.js-reg').fadeOut(300);
  });

  $('.js-burger').click(function() {
    $('.js-mobile-menu').fadeIn(500);
    $(document.body).addClass('_active');
    window.setTimeout(function() {
      $('.js-burger-close').addClass('is-active');
    }, 500);
  });

  $('.js-burger-close').click(function() {
    $('.js-mobile-menu').fadeOut(300);
    $(document.body).removeClass('_active');
    $('.js-burger-close').removeClass('is-active');
  });

  $(document).mousedown(function(e) {
    var menuContainer = $('.js-mobile-menu');
    if (menuContainer.length && menuContainer.has(e.target).length === 0) {
      $('.js-mobile-menu').fadeOut(300);
      $(document.body).removeClass('_active');
    }
  });
});
