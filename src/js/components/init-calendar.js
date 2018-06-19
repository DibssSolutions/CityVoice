import datepicker from 'bootstrap-datepicker';
import { BODY } from '../constants'; 
!function(a) {a.fn.datepicker.dates.ru={days:['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],daysShort:['Вск','Пнд','Втр','Срд','Чтв','Птн','Суб'],daysMin:['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],months:['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],monthsShort:['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],today:'Сегодня',clear:'Очистить',format:'dd.mm.yyyy',weekStart:1};}(jQuery);

const control = $('#datepicker, #datepicker-karaoke');
const open = 'is-open';

BODY.on('focus', 'input', function() {
  const that = $(this);
  const parent = that.parent('.js-form-control');
  const input = parent.find('input');
  if (that.siblings('#datepicker').length) {
    parent.addClass(open);
  }
});

if ($('body #datepicker').length) { 
  $('body #datepicker').datepicker({
    calendarWeeks: false,
    language: 'ru',
    format: 'dd/mm/yyyy'
  });
  BODY.on('changeDate', '#datepicker', function() {
    $(this).parent('.js-form-control').removeClass('is-open');
    $('body #datepicker-input').val(
      $('body #datepicker').datepicker('getFormattedDate')
    );
  });
};
