// src/components/VideoPlayer.jsx

export default function VideoPlayer() {
  const videoId = "tgoUa2wWvAQ"; // Replace with your video/playlist ID

  return (
    <div className="relative h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 via-blue-950 to-black p-8 flex items-center justify-center select-none overflow-hidden">
      {/* 1. The exact same visual background overlay used in CommercialWindow */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-black to-blue-950 opacity-80 pointer-events-none" />

      {/* 2. Video Content Box (matches CommercialWindow z-index and max-w-xl) */}
      <div className="relative z-10 w-full max-w-xl aspect-video border-2 border-yellow-400/60 bg-black overflow-hidden flex items-center justify-center shadow-[0_0_15px_rgba(234,179,8,0.2)]">
        <iframe
          className="w-full h-full pointer-events-none scale-105 object-cover"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&playsinline=1`}
          title="Promo Feed"
          allow="autoplay; encrypted-media"
        />
      </div>
    </div>
  );
}
