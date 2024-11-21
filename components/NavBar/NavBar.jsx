import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <a href="#aboutMe">About Me</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#workExperience">Work Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#references">References</a>
        </li>
        <li>
          <a href="#contactMe">Contact Me</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
