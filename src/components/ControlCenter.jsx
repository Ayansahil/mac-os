import React, { useState, useRef, useEffect } from "react";
import "./controlCenter.scss";

const ControlCenter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [brightness, setBrightness] = useState(100);
  const [volume, setVolume] = useState(80);
  const panelRef = useRef(null);

  const handleBrightnessChange = (e) => {
    const value = e.target.value;
    setBrightness(value);
    document.documentElement.style.filter = `brightness(${value}%)`;
  };

  const handleVolumeChange = (e) => {
    const value = e.target.value;
    setVolume(value);
    
    // Apply volume to all audio elements
    const volumeDecimal = value / 100;
    const audioElements = document.querySelectorAll('audio');
    
    audioElements.forEach(audio => {
      audio.volume = volumeDecimal;
    });
    
    // Log for debugging
    console.log(`Volume set to ${value}%, Audio elements found: ${audioElements.length}`);
  };

  const toggleControlCenter = () => {
    setIsOpen(!isOpen);
  };

  // Close panel when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="control-center-wrapper" ref={panelRef}>
      {/* Control Center Icon Button */}
      <button
        className={`control-center-icon ${isOpen ? "active" : ""}`}
        onClick={toggleControlCenter}
        title="Control Center"
      >
        <img src="./navbar-icons/control-center.svg" alt="control center" />
      </button>

      {/* Dropdown Panel */}
      {isOpen && (
        <div className="control-center-panel">
          <div className="control-item">
            <img src="./navbar-icons/brightness_low.svg" alt="brightness" className="control-icon" />
            <input
              type="range"
              min="30"
              max="150"
              value={brightness}
              onChange={handleBrightnessChange}
              className="control-slider"
            />
            <img src="./navbar-icons/brightness_high.svg" alt="brightness high" className="control-icon" />
          </div>

          <div className="control-item">
            <img src="./navbar-icons/sound_low.svg" alt="volume" className="control-icon" />
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={handleVolumeChange}
              className="control-slider"
            />
            <img src="./navbar-icons/sound_high.svg" alt="volume high" className="control-icon" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ControlCenter;

