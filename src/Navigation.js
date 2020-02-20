import React from "react";
import "./App.css";
import { useEffect } from "react";

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
          <a href="/n_garate_resume.pdf">Resume</a>{" "}
        </li>
      </div>
      <div className="nav-header">
        <div id="nav-header-text">
          Hi, I'm <span id="name">Natalie</span>.
        </div>
        <div id="nav-header-subtext">I write code.</div>
      </div>
    </div>
  );
}

export default Navigation;
