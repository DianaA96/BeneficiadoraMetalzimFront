import React, { useState } from "react"; // The useState Hook is required for the DatePicker performance

// Importing elements from react-dates library
import {
  DateRangePicker,
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

// CALENDAR DATE PICKER COMPONENT-------------------------------------------
function CalendarDatePicker(props) {

    const [ date, setDate ] = useState(moment())
    const [ focused, setFocused ] = useState(null)

    return (
        <div className="App">
            <SingleDatePicker
                numberOfMonths={1}
                date={date}
                onDateChange={date => setDate({ date })}
                focused={focused}
                focusedInput={focused}
                onFocusChange={(focusedInput)=> setFocused(focusedInput.focused)}
                id="your_unique_id"
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
            />
        </div>
    );
}

export default CalendarDatePicker