export default function CRTOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Scanline pattern */}
      <div
        className="absolute inset-0 bg-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.4) 50%)`,
          backgroundSize: "100% 4px",
        }}
      />
      {/* Radial vignette / CRT curvature glow */}
      <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]" />
    </div>
  );
}
