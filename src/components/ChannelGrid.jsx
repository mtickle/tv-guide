function getColSpanClass(spanNeeded) {
  const spans = {
    3: "col-span-3",
    6: "col-span-6",
    9: "col-span-9",
  };
  return spans[spanNeeded] || "col-span-3";
}

// src/components/ChannelGrid.jsx

export default function ChannelGrid({ channels }) {
  const displayChannels = [...channels, ...channels];

  return (
    <div className="relative flex-1 overflow-hidden bg-blue-950 font-mono text-white select-none">
      <div className="animate-scroll-vertical flex flex-col">
        {displayChannels.map((channel, idx) => {
          let totalSpan = 0;

          return (
            <div
              key={`${channel.number}-${idx}`}
              // REMOVE h-10/h-16 and replace with py-3 (or py-4 for even chunkier padding)
              className="grid grid-cols-12 py-3 items-center border-b border-blue-800 shrink-0 bg-blue-950"
            >
              {/* Channel metadata */}
              <div className="col-span-1 text-center font-bold text-yellow-400 text-lg">
                {channel.number}
              </div>
              <div
                className={`col-span-1 text-center text-sm font-bold py-1 px-2 rounded-sm ${channel.logoBg}`}
              >
                {channel.name}
              </div>

              {/* Grid listings */}
              <div className="col-span-10 grid grid-cols-9 gap-1 h-full items-center overflow-hidden pr-2 pl-2">
                {channel.shows.map((show, sIdx) => {
                  const spanNeeded = Math.min(
                    Math.round(show.duration / 10),
                    9 - totalSpan
                  );

                  if (spanNeeded <= 0) return null;

                  totalSpan += spanNeeded;
                  const colClass = getColSpanClass(spanNeeded);

                  return (
                    <div
                      key={sIdx}
                      //Increase inner padding with py-2 and font size with text-sm/text-base
                      className={`${colClass} truncate py-2 px-3 flex items-center justify-between bg-blue-900/60 border border-blue-700/50 rounded-sm text-sm font-medium text-yellow-100`}
                    >
                      <span className="truncate">{show.title}</span>
                      {show.duration > spanNeeded * 10 && (
                        <span className="text-yellow-400 font-bold ml-1">
                          &gt;
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
