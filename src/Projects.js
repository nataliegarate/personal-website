import React from "react";

function Projects() {
  let projects = [
    {
      id: "gratitude",
      status: "Sole Developer",
      name: "Gratitude Master",
      description:
        "An  online journal space that encourages users to track what makes them happy. Users can create, read, update, and delete their entries which are stored in the database.",
      technologies:
        "JavaScript, Node, React, Redux, Express, and Sequelize with PostgreSQL",
      imageUrl: "./GratitudeMaster.png",
      imageAlt: "Photo of Gratitude Master website",
      link: "https://github.com/nataliegarate/gratitude-tracker"
    },
    {
      id: "music",
      status: "Group Project",
      name: "Music Mapper",
      description:
        "A data visualization website that displays a Spotify user’s musical library with various colorful graphs.",
      technologies:
        "Javascript, Node, d3, React, Redux, Express, Spotify API, and Musixmatch API",
      imageUrl: "./MusicMapper.png",
      imageAlt: "Photo of music website",
      link: "https://github.com/music-mapper/music-mapper"
    },
    {
      id: "cupcake",
      status: "Group Project",
      name: "Best Cupcakes",
      description:
        "An E-Commerce that sells delicious cupcakes. It has a store inventory, shopping cart, and checkout feature. It supports logged in users via database and guests via local storage. ",
      technologies:
        "JavaScript, Node, React, Redux, Express, and Sequelize with PostgreSQL",
      imageUrl: "./BestCupcakes.png",
      imageAlt: "photo of cupcake website",
      link: "https://github.com/fantastic-four-grace-shopper/grace-shopper"
    }
  ];
  return (
    <div id="projects-page">
      <div className="projects-title">Projects</div>
      <div className="all-project-items-container">
        {projects.map(project => (
          <div id={projects.id} className="project-item">
            <div className="single-sub-item">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  alt={project.imageAlt}
                  src={project.imageUrl}
                  className="project-photo"
                />
              </a>
            </div>
            <div className="single-text-item">
              <div className="project-title">
                {project.name} ({project.status})
              </div>
              <div className="project-description">{project.description}</div>
              <div className="project-tech">
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
