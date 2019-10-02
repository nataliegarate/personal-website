import React from 'react';


function App() {
  return (
    <div className='about-page'>
      <div className='about-item-container-photo'>
        <img src="./Natalie.jpeg" id='about-photo' />
      </div>
      <div className='about-item-container-paragraph'>
        <div id='about-paragraph-header'>
          About
        </div>
        <div id='about-paragraph'>
          Hello World! I am a fullstack developer living in New York City and a recent graduate of the Grace Hopper Program at Fullstack Academy. Before coding, my background was in solving people problems- I studied psychology and worked in employee engagenment at a tech company. I'm really excited to be transitioning into the world of tech.
      </div>
      </div>
    </div>
  );
}

export default App;
