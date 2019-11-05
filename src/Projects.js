import React from 'react'

function Projects() {
  let projects = [ {name: 'Best Cupcakes', description:'E-Commerce website with a store inventory, shopping cart, and checkout feature', technologies: 'JavaScript, Node, React, Redux, Express, and Sequelize with PostgreSQL', imageUrl:"./BestCupcakes.png", imageAlt: 'photo of cupcake website', link: 'http://cupcake-shop-app.herokuapp.com/'},
  {name: 'Music Mapper', description: 'Data visualization website that displays a Spotify user’s musical preferences with various colorful graphs', technologies: 'Javascript, Node, d3, React, Redux, Express, Spotify API, and Musixmatch API', imageUrl: './MusicMapper.png', imageAlt: 'Photo of music website', link: 'https://spotify-music-mapper.herokuapp.com'},
  {name: 'Name That Dog', description: 'A drag and drop matching game for learning dog breeds', technologies: 'Javascript, Node, Vue, and Firebase', imageUrl: './NameThatDog.png', imageAlt: 'Photo of dog website', link: 'http://dogapp.nataliegarate.com/#/' }
 ]
  return (
    <div className='projects-page'>
      <div className='projects-title'>
        Projects
      </div>
      <div className='all-project-items-container'>
       {projects.map(project => (
          <div className='project-item'>
           <div className='single-sub-item'>
             <a href= {project.link} target="_blank" rel="noopener noreferrer">
               <img alt={project.imageAlt} src={project.imageUrl} className='project-photo' />
             </a>
           </div>
           <div className='single-text-item'>
             <div className='project-title'>{project.name}</div>
             <div className='project-description'>
              {project.description}
             </div>
             <div className='project-tech'>
               Technologies: {project.technologies}
             </div>
           </div>
         </div>
      ))}
      </div>
    </div>
  );
}

export default Projects;
