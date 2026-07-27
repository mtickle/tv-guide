export default function ChannelGrid({ channels }) {
  // Duplicating the list ensures a seamless infinite scroll loop
  const displayChannels = [...channels, ...channels];

  return (
    <div className="relative flex-1 overflow-hidden bg-blue-950 font-mono text-white select-none">
      <div className="animate-scroll-vertical flex flex-col">
        {displayChannels.map((channel, idx) => (
          <div
            key={`${channel.number}-${idx}`}
            className="grid grid-cols-12 border-b border-blue-800 text-sm py-2 px-2 items-center bg-blue-950 hover:bg-blue-900 transition-colors"
          >
            {/* Channel Number */}
            <div className="col-span-1 font-bold text-yellow-400 text-center text-base">
              {channel.number}
            </div>

            {/* Network Call Sign */}
            <div
              className={`col-span-2 text-center font-bold px-1 py-0.5 rounded text-xs ${channel.logoBg}`}
            >
              {channel.name}
            </div>

            {/* Program Listings */}
            <div className="col-span-9 grid grid-cols-9 gap-1 pl-2">
              {channel.shows.map((show, sIdx) => {
                const colSpan = show.span === 2 ? "col-span-6" : "col-span-3";
                return (
                  <div
                    key={sIdx}
                    className={`${colSpan} truncate px-2 py-1 bg-blue-900/60 border border-blue-700/50 rounded-sm text-xs font-medium text-yellow-100`}
                  >
                    {show.title}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
