import { BODY, HIDDEN, WIN } from '../constants'; 
import { TimelineMax, TweenMax } from 'gsap';

const btnCloseForm = $('.js-btn-close-form');
const btnOpenForm = $('.js-btn-open-form');

const headerBottom = $('.js-header-bottom');
let headerBottomHeight = $('.js-header-bottom').outerHeight();

WIN.on('resize', () => {
  if (WIN.width() <= 767) {
    headerBottomHeight = WIN.height();
  }
  else {
    headerBottomHeight = headerBottom.outerHeight();
  }
});

const headerStaggers = $('.js-header-bottom [data-stagger-y]');

window.headerTl = new TimelineMax({ paused: true });

btnOpenForm.on('click', (e) => { 
  window.headerTl
    .addLabel('start')
    .addLabel('stagger', '+=0.1')
    .staggerTo(headerStaggers, 0.7, {
      y: 0,
      ease: Expo.easeOut
    }, -0.04, 'stagger')
    .to(headerBottom, 0.5, {
      y: headerBottomHeight,
      ease: Power0.easeNone
    }, 0, 'start')
    .to('.js-btn-open-form .btn-open-form__text', 0.3, {
      opacity: 0,
      ease: Expo.easeOut
    }, 0, 'start')
    .eventCallback('onReverseComplete', () => {
      TweenMax.set([headerBottom, headerStaggers, '.js-btn-open-form .btn-open-form__text'], { clearProps:'all' });
    }).play();
  BODY.addClass(HIDDEN);
  e.preventDefault();
});
btnCloseForm.on('click', (e) => { 
  e.preventDefault();
  window.headerTl.reverse();
  BODY.removeClass(HIDDEN);
});


const btnOpenMenu = $('.js-nav-btn');
const header = $('.js-header');

btnOpenMenu.on('click', () => {
  header.toggleClass('is-open-menu');
  BODY.toggleClass(HIDDEN);
});
