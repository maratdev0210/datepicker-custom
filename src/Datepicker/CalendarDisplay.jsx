export default function CalendarDisplay({ CalendarData }) {
  const weeks = ["M", "T", "W", "T", "F", "S", "S"];
  const weeksRow = [];
  weeks.forEach((week) => {
    weeksRow.push(
      <div className="week text-2xl w-6 flex justify-center">{week}</div>
    );
  });

  const daysRow = [];
  for (let i = 0; i < 7; i++) {
    const currentWeekDayArray = [];
    let currentDay = i + 1;
    while (currentDay <= 31) {
      currentWeekDayArray.push(
        <div
          className={`Day${currentDay} text-gray-500  hover:bg-sky-500/50 hover:cursor-pointer hover:text-white`}
        >
          {currentDay}
        </div>
      );
      currentDay += 7;
    }
    const currentWeekDay = (
      <div className={`WeekDay${i} w-6  text-center text-xl `}>
        {currentWeekDayArray}
      </div>
    );
    daysRow.push(currentWeekDay);
  }

  return (
    <div className="calendar w-1/4 mx-auto">
      <div className="weeksRow flex gap-3">{weeksRow}</div>
      <div className="days flex gap-3">{daysRow}</div>
    </div>
  );
}
