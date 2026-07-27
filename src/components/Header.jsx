import { useEffect, useState } from "react";

export default function Header({ timeSlots }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="bg-blue-950 text-yellow-400 border-b-4 border-yellow-500 font-mono select-none">
      <div className="flex items-center justify-between px-4 py-2 text-xl font-bold tracking-wider uppercase">
        <span className="text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
          YOUR LOCAL TV GUIDE - RALEIGH, NC
        </span>
        <span className="text-yellow-300">{time.toLocaleTimeString()}</span>
      </div>

      {/* Grid Headers */}
      <div className="grid grid-cols-12 bg-blue-900 text-white font-bold text-sm border-t-2 border-blue-700 py-1 px-2">
        <div className="col-span-1 text-center">CH</div>
        <div className="col-span-1 text-center">NETWORK</div>
        <div className="col-span-3 text-center">{timeSlots[0]}</div>
        <div className="col-span-3 text-center">{timeSlots[1]}</div>
        <div className="col-span-4 text-center">{timeSlots[2]}</div>
      </div>
    </header>
  );
}
