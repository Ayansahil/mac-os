import React from "react";
import "./nav.scss";
import DateTime from "./DateTime"

const Nav = () => {
  return (
    <nav>
      {/* LEFT SIDE */}
      <div className="left">
        <img src="./navbar-icons/apple.svg" alt="apple" />

        <div className="nav-item">
          <p>Ayan </p>
        </div>

        <div className="nav-item">
          <p>File</p>
        </div>
        <div className="nav-item">
          <p>Edit</p>
        </div>
        <div className="nav-item">
          <p>View</p>
        </div>
        <div className="nav-item">
          <p>History</p>
        </div>
        <div className="nav-item">
          <p>Bookmarks</p>
        </div>
        <div className="nav-item">
          <p>Profiles</p>
        </div>
        <div className="nav-item">
          <p>Tab</p>
        </div>
        <div className="nav-item">
          <p>Window</p>
        </div>
        <div className="nav-item">
          <p>Help</p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="right">
        <img src="./navbar-icons/wifi.svg" alt="wifi" />
        <img src="./navbar-icons/bluetooth.svg" alt="bluetooth" />
        <img src="./navbar-icons/search.svg" alt="search" />

        <div className="nav-item">
          <p>98%</p>
        </div>
 <img src="./navbar-icons/battery.svg" alt="battery" />
        <div className="nav-item">
          <DateTime />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
