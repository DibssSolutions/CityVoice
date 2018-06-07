import { DOC, SHOW, TOUCH, ACTIVE, HIDDEN } from '../constants'; 

DOC.ready(() => {
  const container = $('.js-bg-video video').get(0);
  const off = 'is-off';
  const triggerVoise = $('.js-btn-voise');
  const btnPlay = $('.js-bg-video-btn');
  
  if (container && container.paused) {
    container.play();
  }

  triggerVoise.on('click', function() {
    const that = $(this);
    if (!that.hasClass(off)) {
      that.addClass(off);
      container.muted = true;
    }
    else {
      that.removeClass(off);
      container.muted = false;
    }
  });
  const showVoiseTigger = () => { 
    if (!container) return;
  	if (!container.paused) triggerVoise.addClass(SHOW);
  	if (container.muted) triggerVoise.addClass(off);
  };
  setTimeout(showVoiseTigger, 700);

  const detectPlay = () => { 
    if (TOUCH() && container) { 
      btnPlay.addClass(ACTIVE); 
      container.pause();
      container.muted = false;
      container.volume = 1;
    } 
  };
  detectPlay();

  btnPlay.on('click', () => {
    if (container.paused) {
    	container.play();
    	btnPlay.addClass(HIDDEN);
    }
    else {
    	container.pause();
    	btnPlay.removeClass(HIDDEN);
    }
  });
  if (!container) return;
  container.onpause = function() {
    btnPlay.removeClass(HIDDEN);
  };
  
});
