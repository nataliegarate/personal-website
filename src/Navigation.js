import React from 'react';
import './App.css';

function Navigation (){
  return (
    <div className='nav'>
    <div className='nav-header'> <div id='nav-header-text'>Natalie Garate</div></div>
      <ul className='nav-list'>

        <li> <a href='https://documentcloud.adobe.com/link/track?uri=urn%3Aaaid%3Ascds%3AUS%3Ac2800129-9e37-4064-9854-2c475a054737' target="_blank">Resume </a></li>

        <li><a href='#footer-container'>Contact</a></li>
      </ul>
    </div>
  );
}

export default Navigation;
