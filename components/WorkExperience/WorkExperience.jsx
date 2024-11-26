import { useState, useEffect } from "react";
import "./WorkExperience.css";

function WorkExperience() {
  // Declara el estado workExperience que almacenará los datos de las experiencias laborales
  const [workExperience, setWorkExperience] = useState([]);

  // useEffect para cargar los datos cuando el componente se ejecute
  useEffect(() => {
    //Realiza una peticion fetch al archivo JSON
    fetch("/data/workExperience.json")
      //Convierte los datos en un JSO
      .then((response) => response.json())
      //Cuando se obtiene lo datos se lo seteamos al estado setWorkExperience
      .then((data) => setWorkExperience(data))
      //Manejo de error
      .catch((error) => console.error("Error loading references:", error));
  });

  return (
    <section id="workExperience" className="work-experience-timeline">
      <h2>Work Experience</h2>
      <div className="timeline">
        {/* Mapeo de los datos de experiencia laboral */}
        {workExperience.map((work, index) => (
          // Cada elemento de la línea de tiempo
          <div key={index} className="timeline-item">
            {/* Punto que representa la experiencia en la línea de tiempo */}
            <div className="timeline-dot"></div>
            {/* Contenido detallado de la experiencia laboral */}
            <div className="timeline-content">
              <h3 className="timeline-position">{work.position}</h3>
              <p className="timeline-company">{work.company}</p>
              <p className="timeline-period">{work.period}</p>
              <p className="timeline-location">{work.location}</p>
              <p className="timeline-details">{work.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;
