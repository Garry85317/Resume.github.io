import React from "react";
import Icons from "./Icons";
import Contactform from "./Contactform";
import "../styles/style.scss"

const Contact = () => {
  return (
    <div className="contact_container">
      <h1 className="contact_ctitle">Contact</h1>
      <div className="grid-container">
        <div className="grid-itemLeft">
          <ul className="content_info">
            <li className="col">
              <Icons.Location className="svg" />
              <p>Taichung City,Taiwan</p>
            </li>
            <li className="col">
              <Icons.Phone className="svg" />
              <p>0975-152951</p>
            </li>
            <li className="col">
              <Icons.Mail className="svg" />
              <p>garry85317@gmail.com</p>
            </li>
          </ul>
          <ul className="content_link">
            <li>
              <a href="https://www.linkedin.com/in/yu-wei-hsu-60134422b/">
                <Icons.Linkedin />
              </a>
            </li>
            <li>
              <a href="#">
                <Icons.Github />
              </a>
            </li>
            <li>
              <a href="#">
                <Icons.Instagram />
              </a>
            </li>
          </ul>
        </div>

        <div className="grid-itemRight">
          <Contactform />
        </div>
      </div>
    </div>
  );
};

export default Contact;
