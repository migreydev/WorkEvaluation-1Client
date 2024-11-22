import "./Projects.css";

// Example project data
const projects = [
  {
    id: 1,
    title: "Twitter Clone",
    description:
      "A Twitter clone built with PHP, and MySQL. It allows users to log in, follow other users, and view posts.",
    image: "https://via.placeholder.com/300x200.png?text=Twitter+Clone",
    link: "https://github.com/yourusername/twitter-clone",
  },
  {
    id: 2,
    title: "E-commerce React",
    description:
      "An e-commerce application built with React and Redux. It allows users to add products to the cart and make payments.",
    image: "https://via.placeholder.com/300x200.png?text=E-commerce+React",
    link: "https://github.com/yourusername/e-commerce-react",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="button-container">
              <a
                href={project.link}
                className="project-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
