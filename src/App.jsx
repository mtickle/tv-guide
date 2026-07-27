import BackgroundAudio from "./components/BackgroundAudio";
import ChannelGrid from "./components/ChannelGrid";
import CommercialWindow from "./components/CommercialWindow";
import CRTOverlay from "./components/CRTOverlay";
import Header from "./components/Header";
import VideoPlayer from "./components/VideoPlayer";
import WeatherTicker from "./components/WeatherTicker";
import { CHANNELS, CURRENT_SLOTS } from "./data/scheduleData";

export default function App() {
  return (
    <div className="relative flex flex-col h-screen w-screen bg-black overflow-hidden font-mono">
      <CRTOverlay />
      <BackgroundAudio />
      {/* Top Half: Exactly 50% height */}
      <div className="grid grid-cols-12 gap-2 w-full h-1/2 p-2 bg-blue-950 border-b-2 border-blue-800 shrink-0">
        {/* Left: Commercial Window */}
        <div className="col-span-6 h-full overflow-hidden border-2 border-yellow-400 bg-blue-950 p-4 flex flex-col justify-center items-center text-center">
          <CommercialWindow />
        </div>

        {/* Right: Video Player */}
        <div className="col-span-6 h-full overflow-hidden border-2 border-yellow-400 bg-blue-950 p-4 flex flex-col justify-center items-center text-center">
          <VideoPlayer />
        </div>
      </div>

      {/* Bottom Half: Fills the remaining 50% */}
      <div className="flex-1 flex flex-col w-full bg-blue-950 min-h-0">
        <Header timeSlots={CURRENT_SLOTS} />
        <ChannelGrid channels={CHANNELS} />
        <WeatherTicker />
      </div>
    </div>
  );
}
