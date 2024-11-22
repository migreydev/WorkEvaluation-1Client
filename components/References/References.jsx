import "./References.css";

function References() {
  const references = [
    {
      name: "Ana Belén",
      position: "Senior Developer",
      comment:
        "Miguel Ángel is an outstanding team player and problem solver. Highly recommended!",
    },
    {
      name: "Juan Reyes",
      position: "Project Manager",
      comment:
        "Miguel consistently delivered high-quality work under tight deadlines.",
    },
    {
      name: "Cristina Reyes",
      position: "Software Engineer",
      comment:
        "Working with Miguel was a pleasure; his skills and dedication are exceptional.",
    },
  ];

  return (
    <section id="references" className="references section-container">
      <h2>References</h2>
      <div className="references-list">
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
