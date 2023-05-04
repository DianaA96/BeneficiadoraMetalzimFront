import React, { useState } from "react"; // The useState Hook is required for the DatePicker performance

// Importing elements from react-dates library
import {
  isInclusivelyBeforeDay,
  SingleDatePicker
} from "react-dates";

// Importing moment library to parse dates
import moment, { Moment } from "moment";

// Initialising react-dates library and importing the stylesheet that personalises look and feel
import "react-dates/initialize";
import 'moment/locale/es';
import "react-dates/lib/css/_datepicker.css";
import "../styles/react_dates_overrides.css";
import "../styles/botonesDatePicker.css";

// CALENDAR DATE PICKER COMPONENT-------------------------------------------
function CalendarDatePicker(props) {
  
  const [ date, setDate ] = useState(moment())
  const [ focused, setFocused ] = useState(false)
  
  const [ antier, setAntier ] = useState(false)
  const [ ayer, setAyer ] = useState(false)
  const [ hoy, setHoy ] = useState(false)
  const [ datePickerSelection, setDatePickerSelection ] = useState(null)
  
  function renderDatePresets() {
      return (
        <div className="botonesDatePicker">
          <div>
            <button className="botonDatePicker" name="Antier" onClick={handleDateChanges}>Antier</button>
          </div>
          <div>
            <button className="botonDatePicker" name="Ayer" onClick={handleDateChanges}>Ayer</button>
          </div>
          <div>
            <button className="botonDatePicker" name="Hoy" onClick={handleDateChanges}>Hoy</button>
          </div>
        </div>
      )
  }

  function handleDateChanges (event) {
    event.preventDefault();
    if(event.target.name === 'Antier') {
      setDatePickerSelection(moment().subtract(2, "days").format("YYYY-MM-DD"))
      setDate(moment().subtract(2, "days"))
      setAntier(true)
      setAyer(false)
      setHoy(false)
      setFocused(false)
      props.setFecha(moment().subtract(2, "days").format("YYYY-MM-DD"))
    }
    else if(event.target.name === 'Ayer') {
      setDatePickerSelection(moment().subtract(1, "days").format("YYYY-MM-DD"))
      setDate(moment().subtract(1, "days"))
      setAyer(true)
      setAntier(false)
      setHoy(false)
      setFocused(false)
      props.setFecha(moment().subtract(1, "days").format("YYYY-MM-DD"))
    }
    else if(event.target.name === 'Hoy') {
      setDatePickerSelection(moment().format("YYYY-MM-DD"))
      setDate(moment())
      setHoy(true)
      setAyer(false)
      setAntier(false)
      setFocused(false)
      props.setFecha(moment().format("YYYY-MM-DD"))
    }
  }

    return (
        <div className="App">
            <SingleDatePicker
                numberOfMonths={1}
                date={date}
                onDateChange={event => {setDate(event); setDatePickerSelection(event.format("YYYY-MM-DD")); props.setFecha(event.format("YYYY-MM-DD"))}}
                focused={focused}
                focusedInput={focused}
                onFocusChange={(focusedInput) => {setFocused(focusedInput.focused)}}
                id={props.idCalendario}
                renderMonthText={month => {
                    month.locale()
                    return(
                      moment(month).format('MMMM YYYY')
                    )
                  }}
                  renderDayContents={day => {
                    day.local()
                    return(
                      moment(day).format('D')
                    )
                }}
                required={true}
                displayFormat={`[${props.tipoDeCalendario}]LL`}
                renderCalendarInfo={renderDatePresets}
                isOutsideRange={day => !isInclusivelyBeforeDay(day, moment())}
            />
        </div>
    );
}

export default CalendarDatePicker