// src/components/BackgroundAudio.jsx
import { useRef, useState } from "react";

export default function BackgroundAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Handle browser autoplay policies smoothly
  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.log("Autoplay blocked, user interaction required:", err);
        });
    }
  };

  return (
    <div className="fixed bottom-2 right-2 z-50">
      <audio
        ref={audioRef}
        src={`${import.meta.env.BASE_URL}audio/audio.mp3`}
        loop
        preload="auto"
      />

      <button
        onClick={toggleAudio}
        className="bg-blue-950/80 hover:bg-blue-900 border border-yellow-400/60 text-yellow-300 font-mono text-xs px-2 py-1 rounded shadow-md uppercase tracking-wider transition-colors"
      >
        {isPlaying ? "🔊 Music: ON" : "🔇 Music: OFF"}
      </button>
    </div>
  );
}
