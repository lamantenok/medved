$(document).ready(function() {
  /*article counter*/

  $('.article-slider-inner').on('init reInit afterChange', function(
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    var index = (currentSlide ? currentSlide : 0) + 1;
    var pr = $('.article-slider-ico.__left');
    var pl = $('.article-slider-ico.__right');
    pr.click(function() {
      slide.bind(this, -1);
    });
    pl.click(function() {
      slide.bind(this, 1);
    });

    function slide(offset) {
      $('.article-slider-number').html(index + ' из ' + slick.slideCount);

      pr.attr('data-state', index === 1 ? 'disabled' : '');
      pl.attr('data-state', index === slick.slideCount ? 'disabled' : '');
    }

    slide(0);
  });

  $('.article-slider-ico.__left').on('click', function() {
    $('.article-slider-inner').slick('slickPrev');
  });

  $('.article-slider-ico.__right').on('click', function() {
    $('.article-slider-inner').slick('slickNext');
  });

  $('.article-slider-inner').slick({
    arrows: true,
    dots: false,
    prevArrow: '.article-slider-prev',
    nextArrow: '.article-slider-next',
    // speed: 500,
    fade: true,
    respondTo: 'slider',
    cssEase: 'linear'
  });
});
