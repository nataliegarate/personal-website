import React from 'react'

function Projects() {
  return (
    <div className='projects-page'>
      <div className='projects-title'>
        Projects
      </div>
      <div className='all-project-items-container'>
        <div className='project-item'>
          <div className='single-sub-item'>
          <a href= 'http://cupcake-shop-app.herokuapp.com/' target="_blank" rel="noopener noreferrer">
            <img alt='project photo'src="./BestCupcakes.png" className='project-photo' />
            </a>
          </div>
          <div className='single-text-item'>
            <div className='project-title'>Best Cupcakes</div>
            <div className='project-description'>
            E-Commerce website with a store inventory, shopping cart, and checkout
            </div>
            <div className='project-tech'>
            Technologies: JavaScript, Node, React, Redux, Express, and Sequelize with PostgreSQL
            </div>
          </div>
        </div>
        <div className='project-item'>
          <div className='single-sub-item'>
            <a href ='https://spotify-music-mapper.herokuapp.com/app' target="_blank" rel="noopener noreferrer">
            <img alt='project photo' src="./MusicMapper.png" className='project-photo' />
            </a>
          </div>
          <div className='single-text-item'>
            <div className='project-title'>Music Mapper</div>
            <div className='project-description'>
              Data visualization website that displays a Spotify user’s musical preferences with various colorful graphs
              </div>
              <div className='project-tech'>
              Technologies: Javascript, Node, d3, React, Redux, Express, Spotify API, and Musixmatch API
            </div>
          </div>
        </div>
        <div className='project-item'>
          <div className='single-sub-item'>
            <a href='http://dogapp.nataliegarate.com/#/' target="_blank" rel="noopener noreferrer">
            <img alt='project photo' src="./NameThatDog.png" className='project-photo' />
            </a>
          </div>
          <div className='single-text-item'>
            <div className='project-title'> Name That Dog</div>
            <div className='project-description'>
              Matching Game for learning dog breeds
              </div>
              <div className='project-tech'>
              Technologies:  Javascript, Node, Vue, and Firebase
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
