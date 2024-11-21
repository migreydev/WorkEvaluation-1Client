import "./WorkExperience.css";

function WorkExperience() {
  const WorkExperienceData = [
    {
      position: "Técnico de Proyectos",
      company: "U-Space",
      period: "04/2021 - 06/2021",
      location: "Sevilla",
      details:
        "Participation in projects focused on geographical analysis and technological solutions applied to urban planning.",
    },
    {
      position:
        "Prácticas del Máster en Tecnologías de la Información Geográfica",
      company: "Agencia de Medio Ambiente y Agua de Andalucía (AMAYA)",
      period: "10/2019 - 02/2020",
      location: "Sevilla",
      details:
        "Support in the GIS line and development of REDIAM, including spatial data management and creation of interactive maps.",
    },
  ];

  return (
    <section id="workExperience" className="work-experience-timeline">
      <h2>Work Experience</h2>
      <div className="timeline">
        {/* Mapeo de los datos de experiencia laboral */}
        {WorkExperienceData.map((work, index) => (
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
