import datepicker from 'bootstrap-datepicker';
!function(a) {a.fn.datepicker.dates.ru={days:['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],daysShort:['Вск','Пнд','Втр','Срд','Чтв','Птн','Суб'],daysMin:['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],months:['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],monthsShort:['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],today:'Сегодня',clear:'Очистить',format:'dd.mm.yyyy',weekStart:1};}(jQuery);

if ($('#datepicker').length) { 
  $('#datepicker').datepicker({
    calendarWeeks: false,
    language: 'ru',
    format: 'dd/mm/yyyy'
  });
  $('#datepicker').on('changeDate', function() {
    $(this).parent('.js-form-control').removeClass('is-filled');
    $('#datepicker-input').val(
      $('#datepicker').datepicker('getFormattedDate')
    );
  });
};

if ($('#datepicker-karaoke').length) { 
  $('#datepicker-karaoke').datepicker({
    calendarWeeks: false,
    language: 'ru',
    format: 'dd/mm/yyyy'
  });
  $('#datepicker-karaoke').on('changeDate', function() {
    $(this).parent('.js-form-control').removeClass('is-filled');
    $('#datepicker-input-karaoke').val(
      $('#datepicker-karaoke').datepicker('getFormattedDate')
    );
  });
};
