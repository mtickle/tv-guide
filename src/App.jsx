import ChannelGrid from "./components/ChannelGrid";
import CommercialWindow from "./components/CommercialWindow";
import CRTOverlay from "./components/CRTOverlay";
import Header from "./components/Header";
import WeatherTicker from "./components/WeatherTicker";
import { CHANNELS, CURRENT_SLOTS } from "./data/scheduleData";

export default function App() {
  return (
    <div className="relative flex flex-col h-screen w-screen bg-black overflow-hidden font-mono">
      <CRTOverlay />

      {/* Top Half: Commercials / Local Ads */}
      <CommercialWindow />

      {/* Bottom Half: Prevue Grid + Weather Ticker */}
      <div className="h-1/2 flex flex-col w-full bg-blue-950">
        <Header timeSlots={CURRENT_SLOTS} />
        <ChannelGrid channels={CHANNELS} />
        <WeatherTicker />
      </div>
    </div>
  );
}
