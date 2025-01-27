import { Element } from "react-scroll";
import Header from "./Header.jsx";
import HeroSection from "./HeroSection.jsx";
import Projects from "./Projects.jsx";
import Footer from "./Footer.jsx";

function Home() {
  return (
    <div className="flex select-none flex-col justify-center scroll-auto">
      <Header />
      <HeroSection />
      <Element name="projects-section">
        <Projects />
      </Element>
      <Footer />
    </div>
  );
}

export default Home;
