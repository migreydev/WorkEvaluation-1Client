import "./Education.css";

function Education() {
  const educationData = [
    {
      institution: "Universidad Sevilla",
      degree: "Grado en Geografía y Ordenación del Territorio",
      details:
        "Enfocado en desarrollo geográfico, Sistemas de Información Geográfica y bases de datos.",
      image: "../../assets/images/Emblema_Universidad_de_Sevilla.png",
    },
    {
      institution: "Universidad de Sevilla",
      degree:
        "Máster en Sistemas de Información Geográfica y Planificación Urbana",
      details: "Especialización en SIG y planificacion de ordenación urbana.",
      image: "../../assets/images/Emblema_Universidad_de_Sevilla.png",
    },
    {
      institution: "Sta Joaquina de Vedruna",
      degree: "Grado Superior Desarrollo de Aplicación Web",
      details: "Especialización en programación y desarrollo web.",
      image: "../../assets/images/LOGO-NUEVO-FOP-2023.png",
    },
  ];

  return (
    <section id="education" className="education-section">
      <h2>Educación</h2>
      {/* Contenedor para la lista de elementos */}
      <div className="education-list">
        {/* Iteramos sobre los datos de educación con .map */}
        {educationData.map((educacion, i) => (
          // Cada elemento tiene una clase 'education-item' y una clave única basada en el índice
          <div key={i} className="education-item">
            <img src={educacion.image} alt={educacion.institution} />
            <div>
              <h3 className="education-institution">{educacion.institution}</h3>
              <p className="education-degree">{educacion.degree}</p>
              <p className="education-details">{educacion.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
