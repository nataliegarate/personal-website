import React from 'react';


function App() {
  return (
      <div className='about-page' id='about-page'>
        <div id='about-paragraph-header'> About Me</div>
        <div><img alt='Natalie Garate' src='./circle.png' /></div>
        <br/>

        <div id='hello-world'> Hello, World.</div>
        <br/>

        <div id='about-paragraph'> I am a Fullstack Developer based in Seattle, WA.</div>
        <br/>
        <div id='about-content'>   
    Prior to becoming a Software Engineer, I worked at a tech company in office operations. 
    From that experience I became immersed in the tech culture of Seattle, and became increasingly interested in 
    learning more about how programmers build everything. I learned the basics of programming on my own and found
    that I had a real passion for it. I followed my love of programming and committed to attending a full-time 
    coding bootcamp, Fullstack Academy.
    Now that I have graduated, I am excited to be apart of a team that shares my enthusiasm and curiosity for tech.
    </div>
    <br/>

    <div id='skills'>
         Javascript, HTML, CSS, Node, React, Redux, Express, Sequelize, PostgreSQL, Testing, Heroku, Algorithms, Data Structures
        </div>
    </div>
  );
}

export default App;
