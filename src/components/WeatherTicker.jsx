import { useState } from "react";

export default function WeatherTicker() {
  const [tickerText, setTickerText] = useState(
    "LOCAL WEATHER: CURRENTLY 72°F — HUMIDITY 65% — TONIGHT: CLEAR, LOW 58°F — TOMORROW: SUNNY, HIGH 78°F — TUNE TO CHANNEL 3 FOR PAY-PER-VIEW MOVIES —"
  );

  return (
    <div className="bg-red-950 border-t-2 border-yellow-500 text-yellow-300 font-mono text-sm py-1 overflow-hidden whitespace-nowrap flex items-center select-none">
      <div className="bg-red-800 text-white font-bold px-3 py-0.5 text-xs mr-2 border-r border-yellow-500 shrink-0 z-10">
        WEATHER & INFO
      </div>

      {/* Smooth Horizontal Ticker */}
      <div className="inline-block animate-marquee uppercase tracking-wider font-semibold">
        <span className="mx-4">{tickerText}</span>
        <span className="mx-4">{tickerText}</span>
      </div>
    </div>
  );
}
