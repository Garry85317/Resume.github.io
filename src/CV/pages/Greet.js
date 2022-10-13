import React from "react";

const Greet = () => {
  const scrollTo = (anchorName, smooth) => {
    if (anchorName) {
      const anchorElement = document.getElementById(anchorName);
      if (anchorElement) {
        anchorElement.scrollIntoView({ block: 'start', behavior: smooth ? 'smooth' : 'auto' });
      }
    }
  }
  return (
    <div className="greet_container" id="Greet" style={{
      backgroundImage: `url(${process.env.PUBLIC_URL + '/IMG/background.jpg'})`
    }}>
      <div className="greet_text">
        <p>Garry's</p>
        <p>portfolio</p>
        <h3>Software Engineer</h3>
      </div>
      <div className="greet_pic">
        {/* <img src={process.env.PUBLIC_URL + "/IMG/Garry_3.jpg"} alt="" /> */}
      </div>
      <div className="nextpart">
        <a className="scrollto" onClick={() => scrollTo("about", true)}>
          <p>SEE MORE</p>
          <p className="scrollto-arrow"><img src={process.env.PUBLIC_URL + "/IMG/scroll-down.png"} width="56" alt="scroll down arrow"></img></p>
        </a>
      </div>
    </div>
  );
};

export default Greet;
