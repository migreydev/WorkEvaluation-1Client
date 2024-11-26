import { useState, useEffect } from "react";
import "./References.css";

function References() {
  // Declara el estado references que almacenará los datos de las referencias
  const [references, setReferences] = useState([]);

  // useEffect para cargar los datos cuando el componente se ejecute
  useEffect(() => {
    // Se realiza la solicitud 'fetch' para obtener el archivo JSON
    fetch("/data/references.json")
      //La respuesta se convierte en formato JSON
      .then((response) => response.json())
      // Cuando los datos se obtienen correctamente, se actualiza el estado
      .then((data) => setReferences(data))
      //Capturar error
      .catch((error) => console.error("Error loading references:", error));
  }, []);

  return (
    <section id="references" className="references section-container">
      <h2>References</h2>
      <div className="references-list">
        {/* Mapeamos el array references para crear una referencia para cada elemento del array */}
        {references.map((ref, index) => (
          <div key={index} className="reference-item">
            <h3>{ref.name}</h3>
            <p className="position">{ref.position}</p>
            <p className="comment">{ref.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default References;
