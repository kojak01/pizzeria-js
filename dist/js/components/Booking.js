import {select, settings, templates} from '../settings.js';
import {utils} from '../utils.js';
import AmountWidget from '../components/AmountWidget.js';
import DatePicker from '../components/DatePicker.js';
import HourPicker from '../components/HourPicker.js';
class Booking{
  constructor(element){
    const thisBooking = this;

    thisBooking.render(element);
    thisBooking.initWidgets();
    thisBooking.getData();
  }
  getData(){
    const thisBooking = this;

    const params = {
      booking: [
        settings.db.dateStartParamKey + '=' + utils.dateToStr(thisBooking.datePicker.minDate),
        settings.db.dateEndParamKey + '=' + utils.dateToStr(thisBooking.datePicker.maxDate),
      ],
      eventsCurrent: [
        settings.db.dateStartParamKey + '=' + utils.dateToStr(thisBooking.datePicker.minDate),
        settings.db.dateEndParamKey + '=' + utils.dateToStr(thisBooking.datePicker.maxDate),
      ],
      eventsRepeat: [
        settings.db.dateEndParamKey + '=' + utils.dateToStr(thisBooking.datePicker.maxDate),
      ],
    };
    console.log('getData paramms', params);
    const urls = {
      booking:        settings.db.url + '/' + settings.db.booking
                                      + '?' + params.booking.join('&') ,
      eventsCurrent:  settings.db.url + '/' + settings.db.event
                                      + '?' + params.eventsCurrent.join('&') ,
      eventsRepeat:   settings.db.url + '/' + settings.db.event
                                      + '?' + params.eventsRepeat.join('&') ,
    };
    console.log('getData', urls);
  }
  render(element){
    const thisBooking = this;
    const generatedHTML = templates.bookingWidget();
    
    thisBooking.dom = {};
    thisBooking.dom.wrapper = element;
    thisBooking.dom.wrapper.innerHTML = generatedHTML;
    thisBooking.dom.peopleAmount = thisBooking.dom.wrapper.querySelector(select.booking.peopleAmount);
    thisBooking.dom.hoursAmount = thisBooking.dom.wrapper.querySelector(select.booking.hoursAmount);
    thisBooking.dom.datePickerInput = thisBooking.dom.wrapper.querySelector(select.widgets.datePicker.wrapper);
    thisBooking.dom.hourPickerInput = thisBooking.dom.wrapper.querySelector(select.widgets.hourPicker.wrapper);
  }
  initWidgets(){
    const thisBooking = this;
    thisBooking.peopleAmount = new AmountWidget(thisBooking.dom.peopleAmount);
    thisBooking.dom.peopleAmount.addEventListener('updated', function(){
      
    }); 
    thisBooking.hoursAmount = new AmountWidget(thisBooking.dom.hoursAmount);
    thisBooking.dom.hoursAmount.addEventListener('updated', function(){
      
    });
    
    thisBooking.datePicker = new DatePicker(thisBooking.dom.datePickerInput);
    thisBooking.hourPicker = new HourPicker(thisBooking.dom.hourPickerInput);
  }
}

export default Booking;