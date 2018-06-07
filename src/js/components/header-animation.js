import { BODY, HIDDEN } from '../constants'; 
import { TimelineMax } from 'gsap';

const btnCloseForm = $('.js-btn-close-form');
const btnOpenForm = $('.js-btn-open-form');

const headerBottom = $('.js-header-bottom');
const headerBottomHeight = $('.js-header-bottom').outerHeight();

const headerStaggers = $('.js-header-bottom [data-stagger-y]');

window.headerTl = new TimelineMax({ paused: true });

headerTl
  .addLabel('start')
  .addLabel('stagger', '+=0')
  .staggerTo(headerStaggers, 0.7, {
    y: 0,
    ease: Expo.easeOut
  }, -0.04, 'stagger')
  .to(headerBottom, 1.2, {
    y: headerBottomHeight,
    ease: Expo.easeOut
  }, 0, 'start')
  .to('.js-btn-open-form .btn-open-form__text', 0.3, {
  	opacity: 0,
  	ease: Expo.easeOut
  }, 0, 'start');

btnOpenForm.on('click', (e) => { 
  window.headerTl.play();
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
