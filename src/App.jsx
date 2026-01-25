import React, { useState } from "react";
import "./app.scss";
import Dock from "./components/Dock.jsx";
import Nav from "./components/Nav.jsx";
import Github from "./components/windows/Github.jsx";
import Note from "./components/windows/Note.jsx";
import Resume from "./components/windows/Resume.jsx";
import Spotify from "./components/windows/Spotify.jsx";
import Cli from "./components/windows/Cli.jsx";
import WallpaperSwitcher from "./components/WallpaperSwitcher.jsx";

const WALLPAPERS = [
  {
    id: "wallpaper-0",
    name: "Wallpaper 0",
    src: "/wallpapers/wallpaper-0.webp",
  },

  {
    id: "wallpaper-1",
    name: "Wallpaper 1",
    src: "/wallpapers/wallpaper-1.webp",
  },
  {
    id: "wallpaper-2",
    name: "Wallpaper 2",
    src: "/wallpapers/wallpaper-2.webp",
  },
  {
    id: "wallpaper-3",
    name: "Wallpaper 3",
    src: "/wallpapers/wallpaper-3.webp",
  },
  {
    id: "wallpaper-4",
    name: "Wallpaper 4",
    src: "/wallpapers/wallpaper-4.webp",
  },
  {
    id: "wallpaper-5",
    name: "Wallpaper 5",
    src: "/wallpapers/wallpaper-5.webp",
  },
  {
    id: "wallpaper-6",
    name: "Wallpaper 6",
    src: "/wallpapers/wallpaper-6.webp",
  },
  {
    id: "wallpaper-7",
    name: "Wallpaper 7",
    src: "/wallpapers/wallpaper-7.webp",
  },
];

const App = () => {
  const [windowsState, setWindowsState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false,
  });

  const [wallpaperSwitcherOpen, setWallpaperSwitcherOpen] = useState(false);
  const [currentWallpaper, setCurrentWallpaper] = useState("default");

  const handleSelectWallpaper = (wallpaperId) => {
    setCurrentWallpaper(wallpaperId);
  };

  const currentWallpaperObj =
    WALLPAPERS.find((w) => w.id === currentWallpaper) || WALLPAPERS[0];
  const backgroundStyle = {
    backgroundImage: `url("${currentWallpaperObj.src}")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  };

  return (
    <main style={backgroundStyle}>
      <Nav />
      <Dock
        windowsState={windowsState}
        setWindowsState={setWindowsState}
        onWallpaperClick={() => setWallpaperSwitcherOpen(true)}
      />

      {windowsState.github && (
        <Github windowName="github" setWindowsState={setWindowsState} />
      )}
      {windowsState.note && (
        <Note windowName="note" setWindowsState={setWindowsState} />
      )}

      {windowsState.resume && (
        <Resume windowName="resume" setWindowsState={setWindowsState} />
      )}
      {windowsState.spotify && (
        <Spotify windowName="spotify" setWindowsState={setWindowsState} />
      )}
      {windowsState.cli && (
        <Cli windowName="cli" setWindowsState={setWindowsState} />
      )}

      <WallpaperSwitcher
        isOpen={wallpaperSwitcherOpen}
        onClose={() => setWallpaperSwitcherOpen(false)}
        wallpapers={WALLPAPERS}
        currentWallpaper={currentWallpaper}
        onSelectWallpaper={handleSelectWallpaper}
      />
    </main>
  );
};

export default App;
