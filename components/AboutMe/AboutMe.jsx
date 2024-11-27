import "./AboutMe.css";

function AboutMe() {
  return (
    <section id="aboutMe" className="about-me">
      <div className="about-me-container">
        <img
          src="/assets/images/signal-2024-10-02-190312_002.jpeg"
          alt="Mi foto"
          className="about-me-photo"
        />

        <div className="about-me-info">
          <h2>Hey Everyone! I´m Miguel Ángel</h2>
          <h3>
            I´m a geographer and I´m currently studying a degree in Web
            Application Development DAW.
          </h3>
          <p>
            I consider myself a meticulous person with order, simple and a
            technology lover. Regarding the world of programming, currently I
            like more the backend but I enjoy both.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
