import Navbar from "../components/NavBar/NavBar";
import AboutMe from "../components/AboutMe/AboutMe";
import Education from "../components/Education/Education";
import WorkExperience from "../components/WorkExperience/WorkExperience";
import Skills from "../components/Skills/Skills";
import ContactMe from "../components/ContactMe/ContactMe";
import References from "../components/References/References";
import Projects from "../components/Projects/Projects";
import Footer from "../components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <AboutMe />
      <Education />
      <WorkExperience />
      <Projects />
      <Skills />
      <References />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
