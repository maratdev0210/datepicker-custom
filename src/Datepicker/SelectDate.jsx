export default function SelectDate({ year, month, setYear, setMonth }) {
  const years = [];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthsOption = [];
  months.forEach((month) => {
    monthsOption.push(<option value={month}>{month}</option>);
  });

  for (let i = 2025; i <= 2100; i++) {
    years.push(
      <option className="bg-sky-300/50 text-2xl text-gray-700 " value={i}>
        {i}
      </option>
    );
  }
  return (
    <div className="selectDate flex justify-center gap-5">
      <div className="selectYear ">
        <select
          name="year"
          id="year"
          onChange={(e) => setYear(e.target.value)}
          className="text-2xl hover:cursor-pointer hover:bg-sky-500/50 px-5 py-1 my-5 bg-sky-300/25 text-gray-700 font-bold"
        >
          {years}
        </select>
      </div>
      <div className="selectMonth ">
        <select
          name="month"
          id="month"
          onChange={(e) => setMonth(e.target.value)}
          className="text-2xl my-5 hover:cursor-pointer px-4 py-1 bg-black text-white text-center"
        >
          {monthsOption}
        </select>
      </div>
    </div>
  );
}
