import React from "react";
import notes from "../assets/doc-icons/notes.svg";
import pdf from "../assets/doc-icons/pdf.svg";
import settings from "../assets/doc-icons/settings.svg";
import spotify from "../assets/doc-icons/spotify.svg";
import terminal from "../assets/doc-icons/terminal.svg";
import finder from "../assets/doc-icons/finder.svg";
import calendar from "../assets/doc-icons/calendar.svg";
import github from "../assets/doc-icons/github.svg";
import mail from "../assets/doc-icons/mail.svg";
import "./dock.scss"

const Dock = () => {
  return (
    <footer className="dock">
       <div className="icon finder">
        <img src={finder} alt="finder" />
      </div>
      <div className="icon mail">
        <img src={mail} alt="mail" />
      </div>
      <div className="icon notes">
        <img src={notes} alt="notes" />
      </div>
      <div className="icon pdf">
        <img src={pdf} alt="pdf" />
      </div>
      <div className="icon settings">
        <img src={settings} alt="settings" />
      </div>
      <div className="icon spotify">
        <img src={spotify} alt="spotify" />
      </div>
     <div className="icon calendar">
        <img src={calendar} alt="calendar" />
      </div>
      <div className="icon github">
        <img src={github} alt="github" />
      </div>
       <div className="icon terminal">
        <img src={terminal} alt="terminal" />
      </div>
      
    </footer>
  );
};

export default Dock;
