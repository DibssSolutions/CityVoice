import Inputmask from 'inputmask';

Inputmask({placeholder: ''}).mask(document.querySelectorAll('input'));

const control = $('input, textarea');
const filled = 'is-filled';
const checkInputValue = (that) => {
  const value = that.val();
  const parent = that.parent('.js-form-control');
  if (value) {
    parent.addClass(filled);
  } else {
    parent.removeClass(filled);
  }
};
control
  .each(function() {
    const that = $(this);
    checkInputValue(that);
  })
  .on('focus', function() {
    const that = $(this);
    const value = that.val();
    const parent = that.parent('.js-form-control');
    parent.addClass(filled);
  })
  .on('blur', function() {
    const that = $(this);
    setTimeout(() => {
      checkInputValue(that);
    }, 100);
  });

const inputTime = $('input[name="time"]');
inputTime.on('keyup', function() {
  var value = $(this).val();
  var re = /[0-9][0-9]:[0-9][0-9]/; // 0-9 + - nbsp () 
  if (re.test(value)) {
    console.log('ddd');
    value = value.replace(re, '');
    $(this).val(value);
  }
});
