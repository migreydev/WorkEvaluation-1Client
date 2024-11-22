import Navbar from "../components/NavBar/NavBar";
import AboutMe from "../components/AboutMe/AboutMe";
import Education from "../components/Education/Education";
import WorkExperience from "../components/WorkExperience/WorkExperience";
import Skills from "../components/Skills/Skills";
import ContactMe from "../components/ContactMe/ContactMe";
import References from "../components/References/References";

function App() {
  return (
    <>
      <Navbar />
      <AboutMe />
      <Education />
      <WorkExperience />
      <Skills />
      <References />
      <ContactMe />
    </>
  );
}

export default App;
