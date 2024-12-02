import "./Projects.css";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); // Página inicial
  const [totalPages, setTotalPages] = useState(0); // Total de páginas
  const [searchTerm, setSearchTerm] = useState(""); // Buscar palabra
  const [errorMessage, setErrorMessage] = useState(""); // Mensaje de error para búsqueda

  // Variable para modo de prueba
  const testMode = true; // Cambiar a false en producción

  // Componente reutilizable para mostrar una tarjeta de proyecto
  const ProjectCard = ({ project, test = false, onDelete }) => {
    return (
      <div className="project-card">
        <h3>{project.project_name}</h3>
        <img src={project.picture} alt={project.project_name} />
        <p>{project.description}</p>
        <p>
          <b>Status:</b> {project.status.status_name}
        </p>
        <p>
          <b>Developer:</b>{" "}
          {project.developersHasProjectsDTO.length > 0
            ? project.developersHasProjectsDTO
                .map((developer) => developer.dev_name)
                .join(", ")
            : "No developers"}
        </p>
        <div className="button-container">
          <a href={project.repository_url} className="project-button">
            View Project
          </a>
          {test && (
            <button
              onClick={() => onDelete(project.project_id)}
              className="project-button delete"
            >
              Delete
            </button>
          )}
        </div>
      </div>
    );
  };

  // Validación de campos del prop Project Card
  ProjectCard.propTypes = {
    project: PropTypes.shape({
      project_id: PropTypes.number.isRequired,
      project_name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      repository_url: PropTypes.string.isRequired,
      status: PropTypes.shape({
        status_name: PropTypes.string.isRequired,
      }).isRequired,
      developersHasProjectsDTO: PropTypes.arrayOf(
        PropTypes.shape({
          dev_id: PropTypes.number.isRequired,
          dev_name: PropTypes.string.isRequired,
        })
      ).isRequired,
    }).isRequired,
    test: PropTypes.bool,
    onDelete: PropTypes.func.isRequired,
  };

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
        console.error("Error in obtaining projects:", error);
        setErrorMessage("There was a problem loading the projects.");
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

  // Función para eliminar un proyecto
  const deleteProject = (projectId) => {
    fetch(`http://localhost:8080/api/v1/projects/${projectId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          fetchProjects(currentPage); // Recargar los proyectos actuales
        } else {
          throw new Error("Failed to remove project");
        }
      })
      .catch((error) => {
        console.error("Error deleting the project:", error);
        setErrorMessage("There was a problem deleting the project.");
      });
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
          <ProjectCard
            key={project.project_id}
            project={project}
            test={testMode}
            onDelete={deleteProject} // Pasamos la función de borrado
          />
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
