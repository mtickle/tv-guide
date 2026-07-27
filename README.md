# 📺 1990s Cable Channel Guide (Prevue Guide Clone)

A high-fidelity web recreation of the classic 1990s electronic program guide (Prevue Guide / Sneak Prevue). Built with React, Tailwind CSS, and Vite, this project captures the iconic CRT aesthetic, split-screen layouts, local cable advertisements, and background music loops of 90s television.

---

## 🌟 Features

*   **Split-Screen Visual Parity:** Perfectly matched 16:9 ratio containers for local sponsor ads and rolling commercial video loops.
*   **Dynamic Local Advertisements:** Rotating regional sponsor text ads complete with era-appropriate humor and 919 Triangle area details.
*   **Retro Aesthetics:** Styled with scanline overlays, CRT-inspired radial gradients, and classic typography.
*   **Background Audio Player:** Built-in audio controller designed to navigate browser autoplay policies and loop authentic channel guide tunes.
*   **Optimized Static Assets:** Compressed low-bitrate media tailored for fast web streaming and low-fi nostalgia.

---

## 🛠️ Tech Stack

*   **Framework:** [React](https://react.dev/) + [Vite](https://vitejs.dev/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Deployment:** GitHub Pages
*   **Asset Pipeline:** Handbrake / `ffmpeg` low-bitrate encoding for 90s CRT video fidelity

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18+) and **npm** installed on your system.

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/mtickle/tv-guide.git](https://github.com/mtickle/tv-guide.git)
   cd tv-guide
2. **Install dependencies:**
   ```bash
   npm install
3. **Start the development server:**
   ```bash
   npm run dev
4. Open your browser and navigate to http://localhost:5173.

---

## 📁 Project Structure
  ```bash
    tv-guide/
    ├── public/
    │   ├── audio/          # Background audio files (.mp3)
    │   └── video/          # Local commercial video loops (.mp4)
    ├── src/
    │   ├── components/
    │   │   ├── BackgroundAudio.jsx   # Autoplay-safe audio player
    │   │   ├── CommercialWindow.jsx  # Rotating text ad component
    │   │   └── VideoPlayer.jsx       # Synchronized commercial video frame
    │   ├── App.jsx
    │   └── main.jsx
    ├── package.json
    └── vite.config.js

