import React from "react";
import "./App.css";

function Navigation() {
  return (
    <div className="nav" id="nav">
      <div className="nav-list">
        <li>
          {" "}
          <a href="#about-page">About</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#projects-page">Projects</a>{" "}
        </li>
        <li>
          {" "}
          <a href="/Natalie_Garate_Resume.pdf">Resume</a>{" "}
        </li>
      </div>
      <div className="nav-header">
        <div id="nav-header-text">
          Hi, I'm <span id="name">Natalie</span>.
        </div>
        <div id="nav-header-subtext">I write code.</div>

        <div className="nav-contact-container">
          <div className="footer-item" id="email">
            <a href="mailto: natalieegarate@gmail.com">
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </a>
          </div>
          <a href="https://www.linkedin.com/in/natalie-garate/" target="_blank">
            <div className="footer-item">
              <i class="fa fa-linkedin-square" aria-hidden="true"></i>
            </div>
          </a>
          <a href="https://github.com/nataliegarate" target="_blank">
            <div className="footer-item">
              <i class="fa fa-github-square" aria-hidden="true"></i>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
