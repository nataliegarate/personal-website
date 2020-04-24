import React from "react";

function Projects() {
  let projects = [
    {
      id: "valleyInstallers",
      status: "Contract Work",
      name: "Valley Installers Inc",
      description:
        "I was hired to create, design, and deploy a new website for a small buisness: Valley Installers Inc. I created elegant layout that highlights the work they do. I also implemented an ideal user expeirence for desktop, tablet and mobile.",
      technologies: "JavaScript, Node, React, Next, Zeit",
      imageUrl: "./ValleyInstallers.png",
      imageAlt: "Photo of Valley Installers website",
      link: "https://valleyinstallers.com",
    },
    {
      id: "cupcake",
      status: "Group Project",
      name: "Best Cupcakes",
      description:
        "An E-Commerce site that sells delicious cupcakes. It has a store inventory, shopping cart, and checkout feature. It supports logged in users and guest users.",
      technologies:
        "JavaScript, Node, React, Redux, Express, and Sequelize with PostgreSQL",
      imageUrl: "./BestCupcakes.png",
      imageAlt: "Photo of Best Cupcakes website",
      link: "https://github.com/nataliegarate/grace-shopper",
    },
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
      link: "https://github.com/nataliegarate/gratitude-tracker",
    },
    {
      id: "music",
      status: "Group Project",
      name: "Music Mapper",
      description:
        "A data visualization website that provides an interesting chance at self-reflection. It displays a Spotify user’s musical preferences with various colorful, animated, and interactive graphs.",
      technologies:
        "Javascript, Node, d3, React, Redux, Express, Spotify API, and Musixmatch API",
      imageUrl: "./MusicMapper.png",
      imageAlt: "Photo of Music Mapper website",
      link: "https://github.com/music-mapper/music-mapper",
    },
  ];
  return (
    <div id="projects-page">
      <div className="projects-title">Projects</div>
      <div className="all-project-items-container">
        {projects.map((project) => (
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
