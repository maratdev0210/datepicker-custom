import MonthDisplay from "./MonthDisplay";
import CalendarDisplay from "./CalendarDisplay";
import SelectDate from "./SelectDate";
import { useState } from "react";

function getCalendarData(year) {
  return {
    January: 31,
    February: year % 4 == 0 ? 29 : 28,
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31,
  };
}

export default function DatePicker() {
  const [year, setYear] = useState(2025); // SelectDate component state variable
  const [month, setMonth] = useState("January"); // SelectDate componenet state variable

  const CalendarData = getCalendarData(year);

  return (
    <>
      <SelectDate
        year={year}
        month={month}
        setYear={setYear}
        setMonth={setMonth}
      />
      <MonthDisplay year={year} month={month} />
      <CalendarDisplay year={year} month={month} CalendarData={CalendarData} />
    </>
  );
}
