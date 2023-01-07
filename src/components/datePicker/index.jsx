import React from "react";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
const DatePicker = () => {
  const dateValue = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    14
  );
  const startDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    10
  );
  const enddate = new Date(new Date().getFullYear(), new Date().getMonth(), 20);

  return (
    <div>
      <DatePickerComponent
        placeholder="Enter Date"
        value={dateValue}
        min={startDate}
        max={enddate}
        format="dd-MMM-yy"
        // Uncomment below properties to show month picker. Note that, range restiction (min and max properties) should be removed for this case.
        // start="Year"
        // depth="Year"
      ></DatePickerComponent>
    </div>
  );
};

export default DatePicker;
