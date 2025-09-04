import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './pages/Header';
import About from './pages/About';
import Projects from './pages/Projects';
import Experiences from './pages/Experiences';
import Skills from './pages/Skills';
import Services from './pages/Services';
import Contact from './pages/Contact';
import MentionsLegales from './pages/MentionsLegales';

export default function App() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <section id="accueil">
          <Header />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="experiences">
          <Experiences />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="mentions">
          <MentionsLegales />
        </section>
        <Footer />
      </div>
    </>
  );
}
