import MonthDisplay from "./MonthDisplay";
import CalendarDisplay from "./CalendarDisplay";
import SelectDate from "./SelectDate";
import { useState } from "react";

export default function DatePicker() {
  const [year, setYear] = useState(2025); // SelectDate component state variable
  const [month, setMonth] = useState("January"); // SelectDate componenet state variable

  const CalendarData = [
    {
      weekDay: 0,
    },
    {
      weekDay: 1,
    },
    {
      weekDay: 2,
    },
    { weekDay: 3 },
    { weekDay: 4 },
    { weekDay: 5 },
    { weekDay: 6 },
    {
      weekDay: 0,
    },
    {
      weekDay: 1,
    },
    {
      weekDay: 2,
    },
    { weekDay: 3 },
    { weekDay: 4 },
    { weekDay: 5 },
    { weekDay: 6 },
    {
      weekDay: 0,
    },
    {
      weekDay: 1,
    },
    {
      weekDay: 2,
    },
    { weekDay: 3 },
    { weekDay: 4 },
    { weekDay: 5 },
    { weekDay: 6 },
    {
      weekDay: 0,
    },
    {
      weekDay: 1,
    },
    {
      weekDay: 2,
    },
    { weekDay: 3 },
    { weekDay: 4 },
    { weekDay: 5 },
    { weekDay: 6 },
  ];

  return (
    <>
      <SelectDate
        year={year}
        month={month}
        setYear={setYear}
        setMonth={setMonth}
      />
      <MonthDisplay year={year} month={month} />
      <CalendarDisplay CalendarData={CalendarData} />
    </>
  );
}
