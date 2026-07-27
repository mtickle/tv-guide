import { useEffect, useState } from "react";

const LOCAL_ADS = [
  {
    title: "CHRISTMAS AT CRABTREE",
    body: "Come see the holiday magic at Crabtree Mall! Santa, lights, and festive cheer await!",
    phone: "919-555-CRABTREE",
  },
  {
    title: "ANGUS BARN",
    body: "Experience the finest steaks and southern hospitality at the Angus Barn. Reserve your table today!",
    phone: "919-CHOCOLATE-CHESS-PIE",
  },
  {
    title: "RENT-A-CENTER",
    body: "NO CREDIT CHECK! Rent PCs, TVs & Washers Today! Come on in and find out how a $300 TV can be yours for just $2,500 of total payments!",
    phone: "1-800-RIP-OFFF",
  },
  {
    title: "GARNER TV AND APPLIANCE",
    body: "OUR PRICES ARE INSANE! Huge savings on VCRs and Hi-Fi stereo gear! Also, free car alarm installation with any purchase over $199.99!",
    phone: "919-555-0199",
  },
  {
    title: "MATTRESS FIRM",
    body: "Buy a queen mattress, get a free box spring this weekend only! No, we're not a money laundering operation, just a mattress store with great deals! Come see us today!",
    phone: "919-RICO-LAWS",
  },
];

export default function CommercialWindow() {
  const [adIndex, setAdIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAdIndex((prev) => (prev + 1) % LOCAL_ADS.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const currentAd = LOCAL_ADS[adIndex];

  return (
    <div className="relative h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 via-blue-950 to-black p-8 flex items-center justify-center select-none overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-black to-blue-950 opacity-80 pointer-events-none" />

      {/* Ad Box: Fixed aspect-video & w-full max-w-xl */}
      <div className="relative z-10 w-full max-w-xl aspect-video border-2 border-yellow-400/60 bg-blue-900/40 p-6 rounded shadow-[0_0_15px_rgba(234,179,8,0.2)] flex flex-col justify-between items-center text-center">
        <div>
          <div className="bg-red-700 text-yellow-300 font-bold text-xs uppercase tracking-widest px-3 py-1 inline-block rounded mb-2 animate-pulse">
            Local Sponsor
          </div>
          <h2 className="text-yellow-400 text-xl md:text-2xl font-black tracking-wide uppercase">
            {currentAd.title}
          </h2>
        </div>

        <p className="text-white text-sm md:text-base font-medium my-auto leading-tight max-w-md">
          {currentAd.body}
        </p>

        <p className="text-yellow-300 text-base md:text-lg font-bold bg-black/60 py-1 px-4 inline-block border border-yellow-500/40 tracking-wider">
          CALL NOW: {currentAd.phone}
        </p>
      </div>
    </div>
  );
}