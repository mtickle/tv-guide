export default function VideoPlayer() {
  return (
    <div className="relative h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 via-blue-950 to-black p-8 flex items-center justify-center select-none overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-black to-blue-950 opacity-80 pointer-events-none" />

      {/* Video Box: Identical outer wrapper */}
      <div className="relative z-10 w-full max-w-xl aspect-video border-2 border-yellow-400/60 bg-black overflow-hidden flex items-center justify-center shadow-[0_0_15px_rgba(234,179,8,0.2)]">
        <video
          src={`${import.meta.env.BASE_URL}video/commercials.mp4`}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover pointer-events-none"
        />
      </div>
    </div>
  );
}