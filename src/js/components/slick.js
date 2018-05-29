// function slickSlider() {
import slick from 'slick-carousel';

const sliderWrap = $('.js-slider-wrap');
sliderWrap.each(function() {
  const that = $(this);
  const singleContainer = that.find('.js-slider-single'); 
  const navContainer = that.find('.js-slider-nav');
  
  //debouns
  const initSlider = () => {
    if ($(window).width() >= 1023) {
      if (!singleContainer.hasClass('slick-initialized')) {
        singleContainer.slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          fade: true,
          asNavFor: navContainer.get(0),
          autoplay: false,
          adaptiveHeight: true,
          prevArrow: '<button type="button" class="slider__prev"><img src="img/arrow.svg"></button>',
          nextArrow: '<button type="button" class="slider__next"><img src="img/arrow.svg"></button>',
        });
        navContainer.slick({
          slidesToShow: 7,
          slidesToScroll: 1,
          asNavFor: singleContainer.get(0),
          dots: false,
          focusOnSelect: true,
        });
        
      } 
    } else {
      if(singleContainer.hasClass('slick-initialized')) {
        
        singleContainer.slick('unslick');
      }
    }
  };
 
  initSlider();

  let timeOut;

  $(window).on('resize', () => {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      initSlider();
    }, 100);
  });
});

