import { HTMLBODY } from '../constants'; 

const btn = $('.js-btn-scroll');
btn.on('click', function() {
  const that = $(this);
  const parent = that.parent();
  const offset = parent.offset().top + parent.height();
  console.log(offset);
  HTMLBODY.animate({
    scrollTop: offset
  }, 700);
});
