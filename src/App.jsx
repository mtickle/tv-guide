import ChannelGrid from "./components/ChannelGrid";
import CRTOverlay from "./components/CRTOverlay";
import Header from "./components/Header";
import { CHANNELS, CURRENT_SLOTS } from "./data/scheduleData";

export default function App() {
  return (
    <div className="relative flex flex-col h-screen w-screen bg-black overflow-hidden font-mono">
      <CRTOverlay />

      {/* Top Half: Video Promo / Local Ads Window */}
      <div className="h-1/2 w-full bg-zinc-900 relative border-b-4 border-yellow-500 flex items-center justify-center">
        {/* Replace with your promo video player or loop source */}
        <div className="text-center p-6">
          <p className="text-yellow-400 text-lg font-bold animate-pulse">
            ★ LOCAL ADVERTISING & PROMO FEED ★
          </p>
          <p className="text-zinc-400 text-sm mt-2">
            Piping background audio via HTML5 Audio API
          </p>
        </div>
      </div>

      {/* Bottom Half: Prevue Grid */}
      <div className="h-1/2 flex flex-col w-full bg-blue-950">
        <Header timeSlots={CURRENT_SLOTS} />
        <ChannelGrid channels={CHANNELS} />
      </div>
    </div>
  );
}
