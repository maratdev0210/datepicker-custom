export default function MonthDisplay({ year, month }) {
  return (
    <div className="mx-auto py-5 w-1/4 flex gap-2 monthYear">
      <span className="font-bold text-2xl">{month}</span>
      <span className="font-bold text-2xl">{year}</span>
    </div>
  );
}
