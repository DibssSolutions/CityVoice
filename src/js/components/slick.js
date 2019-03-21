import slick from 'slick-carousel';

const sliderWrap = $('.js-slider-wrap');
sliderWrap.each(function() {
  const that = $(this);
  const singleContainer = that.find('.js-slider-single'); 
  const navContainer = that.find('.js-slider-nav');
  
  //debouns
  // const initSlider = () => {
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
    arrows: false,
    asNavFor: singleContainer.get(0),
    dots: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  });
});
