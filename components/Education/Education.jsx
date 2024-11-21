import "./Education.css";

function Education() {
  const educationData = [
    {
      institution: "Universidad Sevilla",
      degree: "Grado en Geografia y Ordenación del Territorio",
      details:
        "Enfocado en desarrollo geográfico, Sistemas de Información Geográfica y bases de datos.",
    },
    {
      institution: "Universidad de Sevilla",
      degree:
        "Master en Sistemas de Información Geográfica y Planificación Urbana",
      details: "Especialización en SIG.",
    },
    {
      institution: "Sta Joaquina de Vedruna",
      degree: "Grado Superior Desarrollo de Aplicacion Web",
      details: "Especialización en programacion y desarrollo web.",
    },
  ];

  return (
    <section id="education" className="education-section">
      <h2>Educación</h2>
      <div className="education-list">
        {educationData.map((educacion, i) => (
          <div key={i} className="education-item">
            <h3 className="education-institution">{educacion.institution}</h3>
            <p className="education-degree">{educacion.degree}</p>
            <p className="education-period">{educacion.period}</p>
            <p className="education-details">{educacion.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
