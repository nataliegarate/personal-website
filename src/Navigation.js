import React from 'react';
import './App.css';

function Navigation() {
  return (
    <div className='nav'>
      <div className='nav-header'>
        <div id='nav-header-text'>Hi, I'm Natalie.</div>
      </div>
      <ul className='nav-list'>
        <li> <a href='resume.pdf' target="_blank" rel="noopener noreferrer">Resume </a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
    </div>
  );
}

export default Navigation;
