import React, { useRef, useEffect } from "react";
import "./wallpaperSwitcher.scss";

const WallpaperSwitcher = ({
  isOpen,
  onClose,
  wallpapers,
  currentWallpaper,
  onSelectWallpaper,
}) => {
  const panelRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e) => {
      if (overlayRef.current === e.target) {
        onClose();
      }
    };

    const handleEscapeKey = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    setTimeout(() => {
      overlayRef.current?.addEventListener("click", handleClickOutside);
      document.addEventListener("keydown", handleEscapeKey);
    }, 0);

    return () => {
      overlayRef.current?.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div ref={overlayRef} className="wallpaper-switcher-overlay">
      <div ref={panelRef} className="wallpaper-switcher-panel">
        <div className="wallpaper-switcher-header">
          <h2>Wallpapers</h2>
        </div>

        <div className="wallpaper-grid">
          {wallpapers && wallpapers.length > 0 ? (
            wallpapers.map((wallpaper) => (
              <button
                key={wallpaper.id}
                className={`wallpaper-thumbnail ${
                  currentWallpaper === wallpaper.id ? "active" : ""
                }`}
                onClick={() => {
                  onSelectWallpaper(wallpaper.id);
                  onClose();
                }}
                title={wallpaper.name}
              >
                <img src={wallpaper.src} alt={wallpaper.name} />
                {currentWallpaper === wallpaper.id && (
                  <div className="checkmark">✓</div>
                )}
              </button>
            ))
          ) : (
            <p className="no-wallpapers">No wallpapers available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WallpaperSwitcher;
