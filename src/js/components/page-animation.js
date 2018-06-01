import { DOC, BODY, ANIMATED } from '../constants';
import { TimelineMax } from 'gsap';

DOC.ready(() => { 

  BODY.addClass(ANIMATED);
	
  const header = $('[header-anim-y="top"]');
  const smallFooter = $('[footer-small-anim-y="bottom"]');
  const pages = $('.js-pages');
  const homeInfo = $('.js-home-info');

  const page = $('[page-anim-y="bottom"]');
  const pageLine = $('[line-anim-y="top"]');

  const pageTl = new TimelineMax({ paused: true });

  pageTl
	  .addLabel('start')
	  .to([pages, header, smallFooter, page, pageLine], 0.8, {
	  	alpha: 1,
	  	y: 0,
	  	ease: Power2.easeOut
	  }, 0, 'start')
	  .to(homeInfo, 2, {
	  	alpha: 1,
	  	ease: Power1.easeOut
	  }, 0, 'start');
  setTimeout(() => {
    pageTl.play();
  }, 500);
});
