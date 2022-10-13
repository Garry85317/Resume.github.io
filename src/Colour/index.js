import useGenerateRandomColor from "./components/useGenerateRandomColor";
import "./styles/style.css";
import React, { useState, useRef, useEffect } from "react";
import Icon from "./components/Icons";
import Alert from "./components/Alert";
import { Animated } from "react-animated-css";

function ColourGenerate() {
  const [isLocked, setLocked] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  const { colors, generateColor } = useGenerateRandomColor(isLocked);
  const ToggleLocked = (key) => {
    const copyLocked = isLocked;
    copyLocked[key] = !copyLocked[key];

    setLocked({ ...isLocked, copyLocked });
  };

  const [copy, setCopy] = useState({ alert: false, isVisible: false });
  useEffect(() => { button.current.focus(); }, [])

  function copyColour(params) {
    navigator.clipboard.writeText(params);
    setCopy({ alert: true, isVisible: true });
    setTimeout(() => {
      setCopy({ alert: true, isVisible: false });
    }, 1000);
    setTimeout(() => {
      setCopy({ alert: false, isVisible: false });
    }, 1800);
  }

  function Colours() {
    return colors.map((color) => (
      <div
        key={color.id}
        className="colour"
        style={{ backgroundColor: color.name }}
      >
        <button
          className="lock-toggle"
          onClick={() => {
            ToggleLocked(color.id);
            button.current.focus();
          }}
        >
          {!isLocked[color.id] ? (
            <Icon.Unlock className="svg" />
          ) : (
            <Icon.Lock className="svg" />
          )}
        </button>
        <input
          type="text"
          className="colour-input"
          //讓value=color.name 色卡改變顏色時才會跟著改變色號
          value={color.name}
          readOnly
        />
        <button className="copy-hex" onClick={() => copyColour(color.name)}>
          Copy
        </button>
      </div>
    ));
  }
  const button = useRef(null);
  const detectKeyDown = (e) => {
    if (e.code === "NumpadEnter") generateColor(isLocked);
  };

  return (
    <div className="colourGenerate" tabIndex="0" onKeyDown={detectKeyDown}>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
      ></link>
      <div className="container">
        <h1>Colours</h1>
        <p>
          Press[
          {/* 按下button時會執行generateColor */}
          <button className="generator-button" ref={button} onClick={generateColor}>
            Enter
          </button>
          ] to generate a new colour palette.
        </p>

        <h4>Generator</h4>

        {/* 將上方的function引入進來 */}
        <div className="colours">
          <Colours />
        </div>
        {copy.alert && (
          <Animated isVisible={copy.isVisible}>
            <Alert />
          </Animated>
        )}
      </div>
    </div>
  );
}

export default ColourGenerate;
