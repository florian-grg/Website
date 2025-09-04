import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { AnimatePresence, motion } from 'framer-motion';
import { pageVariants } from './animations/pageVariants';

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

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <Header />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.4 }}>
              <About />
            </motion.div>
          }
        />
        <Route
          path="/projects"
          element={
            <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.4 }}>
              <Projects />
            </motion.div>
          }
        />
        <Route
          path="/experiences"
          element={
            <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.4 }}>
              <Experiences />
            </motion.div>
          }
        />
        <Route
          path="/skills"
          element={
            <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.4 }}>
              <Skills />
            </motion.div>
          }
        />
        <Route
          path="/services"
          element={
            <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.4 }}>
              <Services />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.4 }}>
              <Contact />
            </motion.div>
          }
        />
        <Route
          path="/mentions-legales"
          element={
            <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.4 }}>
              <MentionsLegales />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <Helmet>
        <title>Portfolio Florian GIURGIU</title>
        <meta name="description" content="Développeur web, IA, optimisation, portfolio moderne et performant." />
        <meta name="keywords" content="Florian GIURGIU, développeur, web, IA, optimisation, portfolio, freelance" />
        <meta name="author" content="Florian GIURGIU" />
      </Helmet>
      <Navbar />
      <div className="pt-16">
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
