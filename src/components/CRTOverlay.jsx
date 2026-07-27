export default function CRTOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* 1A: Scanline pattern – reduce opacity from 0.4 to 0.1 */}
      <div
        className="absolute inset-0 bg-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.1) 50%)`,
          backgroundSize: "100% 4px",
        }}
      />
      {/* 1B: Radial vignette glow – reduce shadow opacity from 0.8 to 0.4 */}
      <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.4)]" />
    </div>
  );
}
