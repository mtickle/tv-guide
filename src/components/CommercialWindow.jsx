import { useEffect, useState } from "react";

const LOCAL_ADS = [
  {
    title: "RENT-A-CENTER",
    body: "NO CREDIT CHECK! Rent PCs, TVs & Washers Today!",
    phone: "1-800-555-RENT",
  },
  {
    title: "CRAZY EDDIE",
    body: "OUR PRICES ARE INSANE! Huge savings on VCRs and Hi-Fi stereo gear!",
    phone: "555-0199",
  },
  {
    title: "SLEEP CITY",
    body: "Buy a queen mattress, get a free box spring this weekend only!",
    phone: "555-BEDS",
  },
];

export default function CommercialWindow() {
  const [adIndex, setAdIndex] = useState(0);

  // Rotate text ads every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setAdIndex((prev) => (prev + 1) % LOCAL_ADS.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const currentAd = LOCAL_ADS[adIndex];

  return (
    <div className="relative h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 via-blue-950 to-black p-8 flex items-center justify-center select-none overflow-hidden">
      {/* Visual background effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-black to-blue-950 opacity-80" />

      {/* Ad Content Box */}
      <div className="relative z-10 text-center max-w-xl border-2 border-yellow-400/60 bg-blue-900/40 p-6 rounded shadow-[0_0_15px_rgba(234,179,8,0.2)]">
        <div className="bg-red-700 text-yellow-300 font-bold text-xs uppercase tracking-widest px-3 py-1 inline-block rounded mb-3 animate-pulse">
          Local Sponsor
        </div>
        <h2 className="text-yellow-400 text-2xl font-black tracking-wide mb-2">
          {currentAd.title}
        </h2>
        <p className="text-white text-lg font-medium mb-4">{currentAd.body}</p>
        <p className="text-yellow-300 text-xl font-bold bg-black/50 py-1 px-4 inline-block border border-yellow-500/40">
          CALL NOW: {currentAd.phone}
        </p>
      </div>

      {/* Optional: Video tag for actual video files */}
      {/* 
      <video 
        src="/commercials/rent-a-center.mp4" 
        autoPlay 
        muted 
        loop 
        className="absolute inset-0 w-full h-full object-cover" 
      /> 
      */}
    </div>
  );
}
