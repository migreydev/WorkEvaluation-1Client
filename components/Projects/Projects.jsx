import "./Projects.css";
import React, { useEffect, useState } from "react";

const Projects = () => {
  // Inicializamos el estado de los proyectos, la página actual y el número total de páginas
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); // Página inicial
  const [totalPages, setTotalPages] = useState(0); // Total de páginas

  // Función para cargar los proyectos
  const fetchProjects = (page) => {
    //Realizamos un fetch al siguiente endPoint
    fetch(`http://localhost:8080/api/v1/projects?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setProjects(data.content); // Asignamos los proyectos de la página actual
        setTotalPages(data.totalPages); // Asignamos el total de páginas
      })
      .catch((error) => {
        console.error("Error al obtener los proyectos:", error);
      });
  };

  // useEffect para cargar los proyectos cuando el componente se ejecuta o cuando la página cambia
  useEffect(() => {
    fetchProjects(currentPage);
  }, [currentPage]);

  // Funciones para manejar la pagina
  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

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
              <a href={project.link} className="project-button">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Controles de paginación */}
      <div className="pagination-controls">
        <button onClick={prevPage} disabled={currentPage === 0}>
          Prev
        </button>
        <span>
          Page {currentPage + 1} of {totalPages}
        </span>
        <button onClick={nextPage} disabled={currentPage === totalPages - 1}>
          Next
        </button>
      </div>
    </section>
  );
};

export default Projects;
