import React from "react";
import { Rnd } from "react-rnd";
import "./window.scss";

const MacWindow = ({ children, width = "40vw", height = "50vh",windowName,setWindowsState }) => {

  function handleClick() {
  setWindowsState(function (state) {
    return {
      ...state,
      [windowName]: false
    };
  });
}

  return (
    <Rnd
      default={{
        width: width,
        height: height,
        x: 300,
        y: 200,
      }}
    >

      
      <div className="window">
        <div className="nav">
          <div className="dots">
            <div onClick={handleClick} className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <div className="title">
            <p>apple@Ayans-MacBook-Air - zsh</p>
          </div>
        </div>
        <div className="main-content">{children}</div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
