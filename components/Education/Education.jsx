import { useState, useEffect } from "react";
import "./Education.css";

function Education() {
  // Declara el estado education que almacenará los datos de la educación
  const [education, setEducation] = useState([]);

  // useEffect para cargar los datos cuando el componente se ejecute
  useEffect(() => {
    //Realiza una petición fetch al endPoint
    fetch("/data/education.json")
      //Parseas la respuesta a JSON
      .then((response) => response.json())
      //Cuando se hayan almacenado los datos se setean al setEducation
      .then((data) => setEducation(data))
      //Manejo de error
      .catch((error) => console.error("Error loading education:", error));
  });

  return (
    <section id="education" className="education-section">
      <h2>Education</h2>
      {/* Contenedor para la lista de elementos */}
      <div className="education-list">
        {/* Iteramos sobre los datos de educación con .map */}
        {education.map((educacion, i) => (
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
