import React from 'react';


function App() {
  return (
    <div className='about-page'>
      <div className='about-item-container-paragraph'>
        <img alt='Natalie Garate' src='./circle.png' />
        <br />
        <div id='about-paragraph-header'>
          About
        </div>
        <div id='about-paragraph'> Hello World! 
        Prior to studying a software engineering, I worked at a tech company in office operations.
While working at that tech company and being immersed in the tech culture of Seattle, I became interested in learning more about how programmers build everything.
I learned the basics of programming on my own and found I had a real passion for it.
I followed my love of programming and committed to attending a full-time coding Bootcamp, Fullstack Academy. 

<br/>
Now that I have graduated, I am interested in working alongside others who share my enthusiasm and curiosity for tech.

        <br />
          <br />
          <div id='skills'>
            Skills: Javascript, HTML, CSS, Node, React, Redux, Express, Sequelize, PostgreSQL, Testing, Heroku
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
