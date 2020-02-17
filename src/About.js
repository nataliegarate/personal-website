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
        <div id='about-paragraph'> Hello World! Prior to becoming a Software Engineer, I worked at a tech company in office operations. 
        From that experience I became immersed in the tech culture of Seattle, and became increasingly interested in learning more 
        about how programmers build everything. I learned the basics of programming on my own and found that I had a real passion for it. 
        I followed my love of programming and committed to attending a full-time coding bootcamp, Fullstack Academy.
        <br />
Now that I have graduated, I am excited to be apart of a team that shares my enthusiasm and curiosity for tech.

<br/>

        <br />
          <br />
          <div id='skills'>
            Skills: Javascript, HTML, CSS, Node, React, Redux, Express, Sequelize, PostgreSQL, Testing, Heroku, Algorithms, Data Structures
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
