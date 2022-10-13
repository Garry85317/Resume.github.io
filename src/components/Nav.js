import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Nav = () => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    }
    else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked)
  }

  return (
    <div className="Navbar">
      <nav>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </nav>
      <div className={menu_class}>
        <div className="logo">
          <Link to="/"><h1>Garry</h1></Link>
        </div>
        <ul className="nav_grid">
          <li className="list">
            <Link to={'CV/about'}><span className="text">About Me</span></Link>
          </li>
          <li className="list">
            <Link to={'CV/Skills'}><span className="text">Skills</span></Link>
          </li>
          <li className="list">
            <div className="nav_project">
              <Link to={'CV/Project'}><span className="text">Project</span></Link>
              <ul className="nav_list">
                <li><NavLink to="/todo-list">Todo</NavLink></li>
                <li><NavLink to="/pexels">Pexels</NavLink></li>
                <li><NavLink to="/colour-generate">Colour</NavLink></li>
                <li><NavLink to="/weather">weather</NavLink></li>
              </ul>
            </div>
          </li>
          <li className="list" onClick={() => { window.scrollTo(0, document.body.scrollHeight); }}>
            <span className="text">Contact</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
