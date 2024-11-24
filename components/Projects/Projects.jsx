import "./Projects.css";
import { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); // Página inicial
  const [totalPages, setTotalPages] = useState(0); // Total de páginas
  const [searchTerm, setSearchTerm] = useState(""); // Buscar palabra
  const [errorMessage, setErrorMessage] = useState(""); // Mensaje de error para búsqueda

  // Función para cargar los proyectos
  const fetchProjects = (page, word = "") => {
    let endpoint;

    if (word) {
      endpoint = `http://localhost:8080/api/v1/projects/${word}`; // Búsqueda con palabra
    } else {
      endpoint = `http://localhost:8080/api/v1/projects?page=${page}`; // Carga de proyectos por página
    }

    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        setProjects(data.content); // Asignamos los proyectos de la página actual
        setTotalPages(data.totalPages); // Asignamos el total de páginas
        setErrorMessage(""); // Limpiamos cualquier mensaje de error
      })
      .catch((error) => {
        console.error("Error al obtener los proyectos:", error);
        setErrorMessage("Hubo un problema al cargar los proyectos.");
      });
  };

  // Función para manejar la búsqueda
  const searchProjects = () => {
    if (searchTerm) {
      fetchProjects(0, searchTerm); // Realizamos la búsqueda
      setCurrentPage(0); // Restablecemos a la primera página
    } else {
      setCurrentPage(0); // Restablecemos a la primera página
      fetchProjects(currentPage); //Volvemos a cargar todos los proyectos
    }
  };

  // useEffect para cargar los proyectos cuando el componente se ejecuta o cuando la página cambia
  useEffect(() => {
    fetchProjects(currentPage);
  }, [currentPage]);

  // Funciones para manejar la página
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
      <div className="search-container">
        <input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={searchProjects} className="project-button">
          Search
        </button>
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}{" "}
      {/* Mostrar mensaje de error */}
      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.project_id} className="project-card">
            <h3>{project.project_name}</h3>
            <img src={project.picture} alt={project.project_name} />
            <p>{project.description}</p>
            <div className="button-container">
              <a href={project.repository_url} className="project-button">
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
