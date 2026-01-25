import React from "react";
import "./dock.scss";
import Spotify from "./windows/Spotify";

const Dock = ({ setWindowsState, onWallpaperClick }) => {
  return (
    <footer className="dock">
      <div
        onClick={() => {window.open("https://www.linkedin.com/in/ayan-sahil-81aa04249/","_blank",
          );
        }}
        className="icon finder"
      >
        <img src="/doc-icons/finder.svg" alt="finder" />
      </div>

      <div
        onClick={() => {
          window.open("mailto:ayan@example.com", "_blank");
        }}
        className="icon mail"
      >
        <img src="doc-icons/mail.svg" alt="mail" />
      </div>

      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, note: true }));
        }}
        className="icon notes"
      >
        <img src="doc-icons/notes.svg" alt="notes" />
      </div>

      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, resume: true }));
        }}
        className="icon pdf"
      >
        <img src="doc-icons/pdf.svg" alt="pdf" />
      </div>

      <div onClick={onWallpaperClick} className="icon settings">
        <img src="doc-icons/settings.svg" alt="settings" />
      </div>

      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, spotify: true }));
        }}
        className="icon spotify"
      >
        <img src="doc-icons/spotify.svg" alt="spotify" />
      </div>

      <div
        onClick={() => {
          window.open("https://calendar.google.com/", "_blank");
        }}
        className="icon calendar"
      >
        <img src="doc-icons/calendar.svg" alt="calendar" />
      </div>

      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, github: true }));
        }}
        className="icon github"
      >
        <img src="doc-icons/github.svg" alt="github" />
      </div>

      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, cli: true }));
        }}
        className="icon terminal"
      >
        <img src="doc-icons/terminal.svg" alt="terminal" />
      </div>
    </footer>
  );
};

export default Dock;
