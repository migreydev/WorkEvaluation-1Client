import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <span className="footer-logo-text">PortFolio</span>
          <br></br>
          <span className="footer-logo-text">Miguel Ángel</span>
        </div>
        <div className="footer-links">
          <a href="/">About Us</a>
          <a href="/">Services</a>
          <a href="/">Contact</a>
        </div>
        <div className="footer-social">
          <a href="https://github.com/migreydev" className="footer-social-icon">
            GitHub
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <small>&copy; 2024, All Rights Reserved.</small>
        <p className="footer-bottom">Made with 💛 by Miguel Angel Reyes</p>
      </div>
    </footer>
  );
};

export default Footer;
