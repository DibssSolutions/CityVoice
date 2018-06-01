import vide from 'vide';
import {DOC, BODY, NO_TOUCH} from './constants';

DOC.ready(() => {
  !('ontouchstart' in window) && BODY.addClass(NO_TOUCH);
  require('./components');
});
