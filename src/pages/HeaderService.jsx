import React from "react";
import NeuralNetworkBackground from "../components/NeuralNetworkBackground";
import Seo from "../components/Seo";
import { motion } from "framer-motion";
import { fadeIn } from "../animations/fadeIn";
import { smoothScrollTo } from "../animations/smoothScrollTo";
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goTo = (path, hash) => {
    if (location.pathname === path) {
      smoothScrollTo(hash);
    } else {
      navigate(path);
      setTimeout(() => smoothScrollTo(hash), 250);
    }
  };

  return (
  <>
    <Seo title="Accueil | Portfolio Florian GIURGIU" description="Accueil du portfolio de Florian GIURGIU, développeur web et auto-entrepreneur." />
    <header className="relative overflow-hidden py-20 bg-white min-h-screen flex flex-col items-center justify-center">
      <NeuralNetworkBackground />
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center px-4">
        <motion.h1
          className="text-5xl font-extrabold text-white mb-4 drop-shadow"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Services
        </motion.h1>
        <motion.h2
          className="text-xl md:text-2xl text-gray-400 font-medium mb-6"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Florian GIURGIU - Étudiant Ingénieur
        </motion.h2>
        <motion.p
          className="text-gray-400 text-lg mb-8"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Des prestations complètes pour créer, optimiser et accompagner votre produit numérique. Naviguez rapidement avec les liens ou descendez pour découvrir chaque offre en détail.
        </motion.p>
        <motion.div
          className="flex flex-col gap-4 justify-center items-center mb-6"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="flex gap-4">
            <button
              className="bg-blue-700 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-blue-800 transition"
              onClick={() => goTo('/contact', '#contact')}
            >
              Me contacter
            </button>
            <button
              className="bg-blue-700 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-blue-800 transition"
              onClick={() => goTo('/service', '#site-web')}
            >
              Voir les services
            </button>
          </div>
          <a
            href="/CV_Florian_Giurgiu.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#000725ff] border border-blue-700 text-blue-700 px-6 py-2 rounded-full font-semibold shadow transition hover:bg-blue-700 hover:text-white hover:border-blue-800 flex items-center"
            download
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
            </svg>
            <span>Téléchargez mon CV</span>
          </a>
        </motion.div>
      </div>
    </header>
  </>
  );
};

export default Header;
