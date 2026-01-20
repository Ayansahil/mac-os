import React from "react";
import "./dock.scss";

const Dock = () => {
  return (
    <footer className="dock">
      <div className="icon finder">
        <img src="/doc-icons/finder.svg" alt="finder" />
      </div>
      <div className="icon mail">
        <img src="doc-icons/mail.svg" alt="mail" />
      </div>
      <div className="icon notes">
        <img src="doc-icons/notes.svg" alt="notes" />
      </div>
      <div className="icon pdf">
        <img src="doc-icons/pdf.svg" alt="pdf" />
      </div>
      <div className="icon settings">
        <img src="doc-icons/settings.svg" alt="settings" />
      </div>
      <div className="icon spotify">
        <img src="doc-icons/spotify.svg" alt="spotify" />
      </div>
      <div className="icon calendar">
        <img src="doc-icons/calendar.svg" alt="calendar" />
      </div>
      <div className="icon github">
        <img src="doc-icons/github.svg" alt="github" />
      </div>
      <div className="icon terminal">
        <img src="doc-icons/terminal.svg" alt="terminal" />
      </div>
    </footer>
  );
};

export default Dock;
