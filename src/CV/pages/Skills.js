import React, { useEffect } from "react";
import 'animate.css';
import WOW from 'wowjs';
import ScrollReveal from "scrollreveal";

const Skills = () => {

  useEffect(() => {
    const wow = new WOW.WOW({ scrollContainer: 'skills_container', mobile: true });
    wow.init();
    ScrollReveal().reveal('.skillsbar_container', {
      reset: true,
      duration: 2000,
      origin: "bottom",
      distance: "200px",
      easing: "cubic-bezier(0.3, 0, 0, 1)",
    });
  }, []);

  return (
    <div className="skills_container" id="Skills">
      <h1 className="skills_title">Skills</h1>
      <div className="skillsbar_container">
        <div className="skills_bar">
          <div className="bar">
            <div className="bar_info">
              <span>HTML</span>
            </div>
            <div className="wow progress_line animat_shadow html">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <div className="bar_info">
              <span>SCSS</span>
            </div>
            <div className="wow progress_line animat_shadow scss">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <div className="bar_info">
              <span>JavaScript</span>
            </div>
            <div className="wow progress_line animat_shadow javascript">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <div className="bar_info">
              <span>React</span>
            </div>
            <div className="wow progress_line animat_shadow react">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <div className="bar_info">
              <span>Git</span>
            </div>
            <div className="wow progress_line animat_shadow git">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <div className="bar_info">
              <span>C#</span>
            </div>
            <div className="wow progress_line animat_shadow Csharp">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <div className="bar_info">
              <span>.Net core</span>
            </div>
            <div className="wow progress_line animat_shadow dotNet">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <div className="bar_info">
              <span>MS SQL</span>
            </div>
            <div className="wow progress_line animat_shadow msSQL">
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
