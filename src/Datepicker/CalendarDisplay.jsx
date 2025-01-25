function firstDay(year, month, CalendarData) {
  let leapYears = Math.floor((year - 2024) / 4);
  console.log(`leap years: ${leapYears}`);
  let daysPassed = 365 * (year - 2025) + leapYears + 2;
  if (year % 4 == 0) {
    daysPassed -= 1;
  }
  for (const [key, value] of Object.entries(CalendarData)) {
    if (key == month) {
      break;
    } else {
      daysPassed += value;
    }
  }
  daysPassed %= 7;
  return daysPassed;
}

export default function CalendarDisplay({ year, month, CalendarData }) {
  const weeks = ["M", "T", "W", "T", "F", "S", "S"];
  const weeksRow = [];
  weeks.forEach((week, index) => {
    if (index < 5) {
      weeksRow.push(
        <div className="week text-2xl w-6 flex justify-center">{week}</div>
      );
    } else {
      weeksRow.push(
        <div className="week text-2xl text-red-700 font-bold w-6 flex justify-center">
          {week}
        </div>
      );
    }
  });

  const daysRow = [];

  let firstWeekDay = firstDay(year, month, CalendarData);
  let firstWeekDays = [0, 0, 0, 0, 0, 0, 0];
  let currentDay = 1;
  console.log(`firstWeekDay: ${firstWeekDay}`);
  for (let i = firstWeekDay; i < 7; i++) {
    firstWeekDays[i] = currentDay;
    currentDay += 1;
  }
  for (let i = 0; i < firstWeekDay; i++) {
    firstWeekDays[i] = currentDay;
    currentDay += 1;
  }

  console.log(firstWeekDays);

  for (let i = 0; i < 7; i++) {
    const currentWeekDayArray = [];
    let currentDay = firstWeekDays[i];

    if (currentDay > i + 1) {
      currentWeekDayArray.push(
        <div className={`DayEmpty invisible`}>{"day"}</div>
      );
    }
    while (currentDay <= CalendarData[month]) {
      if (i < 5) {
        currentWeekDayArray.push(
          <div
            className={`Day${currentDay} text-gray-500 hover:bg-sky-500/50 hover:cursor-pointer hover:text-white`}
          >
            {currentDay}
          </div>
        );
      } else {
        currentWeekDayArray.push(
          <div
            className={`Day${currentDay} text-red-700 hover:bg-sky-500/50 hover:cursor-pointer hover:text-white`}
          >
            {currentDay}
          </div>
        );
      }
      currentDay += 7;
    }
    const currentWeekDay = (
      <div className={`WeekDay${i} w-6  text-center text-xl `}>
        {currentWeekDayArray}
      </div>
    );
    daysRow.push(currentWeekDay);
  }
  /*
  for (let i = 0; i < 7; i++) {
    const currentWeekDayArray = [];
    let currentDay = i + 1;
    while (currentDay <= 31) {
      if (i < 5) {
        currentWeekDayArray.push(
          <div
            className={`Day${currentDay} text-gray-500  hover:bg-sky-500/50 hover:cursor-pointer hover:text-white`}
          >
            {currentDay}
          </div>
        );
      } else {
        currentWeekDayArray.push(
          <div
            className={`Day${currentDay}  text-red-700  hover:bg-sky-500/50 hover:cursor-pointer hover:text-white`}
          >
            {currentDay}
          </div>
        );
      }

      currentDay += 7;
    }
    const currentWeekDay = (
      <div className={`WeekDay${i} w-6  text-center text-xl `}>
        {currentWeekDayArray}
      </div>
    );
    daysRow.push(currentWeekDay);
  }
*/
  return (
    <div className="calendar w-1/4 mx-auto">
      <div className="weeksRow flex gap-3">{weeksRow}</div>
      <div className="days flex gap-3">{daysRow}</div>
    </div>
  );
}
