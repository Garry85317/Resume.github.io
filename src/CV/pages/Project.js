import React from "react";
import { NavLink, Link } from "react-router-dom";

const Project = () => {
  return (
    <div className="project_container" id="Project">
      <h1 className="project_title">Project</h1>
      <ul className="row">
        <div className="project_grid">
          <NavLink to="/pexels">
            <li className="work_card ">
              <div className="work_list_img">
                <img
                  src={process.env.PUBLIC_URL + "/IMG/photo-website.jpg"}
                  alt=""
                />
              </div>
              <h4>Photo Website</h4>
            </li>
          </NavLink>
          <NavLink to="/todo-list">
            <li className="work_card ">
              <div className="work_list_img">
                <img
                  src={process.env.PUBLIC_URL + "/IMG/Todo.jpg"}
                  alt=""
                />
              </div>
              <h4>Garry's Todolist</h4>
            </li>
          </NavLink>
          <li className="work_card">
            <a href="https://witega.com.tw/" target="_blank" rel="noopener noreferrer">
              <div className="work_list_img">
                <img src={process.env.PUBLIC_URL + "/IMG/witega.jpg"} alt="" />
              </div>
            </a>
            <h4>Witega 威特嘉科技開發股份有限公司</h4>
          </li>
          <NavLink to="/colour-generate">
            <li className="work_card ">
              <div className="work_list_img">
                <img src={process.env.PUBLIC_URL + "/IMG/colour.jpg"} alt="" />
              </div>
              <h4>Colour Generator</h4>
            </li>
          </NavLink>
          <NavLink to="/weather">
            <li className="work_card">
              <div className="work_list_img">
                <img src={process.env.PUBLIC_URL + "/IMG/weather.jpg"} alt="" />
              </div>
              <h4>Weather Tool</h4>
            </li>
          </NavLink>
          <NavLink to="/*">
            <li className="work_card ">
              <div className="work_list_img">
                <img src={process.env.PUBLIC_URL + "/IMG/shop.jpg"} alt="" />
              </div>
              <h4>Web Shop by dotNet Core MVC</h4>
            </li>
          </NavLink>
        </div>
      </ul>
    </div>
  );
};

export default Project;
