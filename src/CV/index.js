import React, { useEffect } from "react";
import About from "./pages/About";
import Greet from "./pages/Greet";
import Skills from "./pages/Skills";
import Project from "./pages/Project";
import "./styles/cv_style.scss";
import { useParams } from "react-router-dom";

function MyCV() {
  const { position } = useParams();

  useEffect(() => {
    if (position) {
      let anchorElement = document.getElementById(position);
      if (anchorElement) { anchorElement.scrollIntoView(); }
    }
  }, [position])

  return (
    <div className="myCV">
      <Greet />
      <About />
      <Skills />
      <Project />
    </div>
  );
}

export default MyCV;
