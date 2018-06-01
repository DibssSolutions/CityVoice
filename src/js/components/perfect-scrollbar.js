import PerfectScrollbar from 'perfect-scrollbar';
import { WIN, DOC } from '../constants'; 

let ps;
const initPS = () => {
  const scrollBar = document.querySelector('.js-scroll-bar');
  if (!scrollBar) return;
  if (WIN.width() >= 1023) {
    ps = new PerfectScrollbar(scrollBar, {
      useBothWheelAxes: true,
    });

  } else {
  	const tumb = document.querySelector('.js-scroll-bar [class*="ps__thumb"]');
  	if (tumb) {
  		ps.destroy();
  	};
  }
};
initPS();
let timeOut;

WIN.on('resize', () => {
  clearTimeout(timeOut);
  timeOut = setTimeout(() => {
    initPS();
  }, 100);
});

DOC.ready(() => {
  const containers = document.querySelectorAll('.js-scroll-wrap');

  if (!containers) return;
  for (var i = 0; i <= containers.length - 1; i++) {
    containers[i].perfectScrollbar = new PerfectScrollbar(containers[i], {
      minScrollbarLength: 40,
      useBothWheelAxes: true
    });
  }
});

