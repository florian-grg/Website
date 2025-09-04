import React from "react";
import NeuralNetworkBackground from "../components/NeuralNetworkBackground";
import Seo from "../components/Seo";
import { motion } from "framer-motion";
import { fadeIn } from "../animations/fadeIn";

const Header = () => (
  <>
    <Seo title="Accueil | Portfolio Florian GIURGIU" description="Accueil du portfolio de Florian GIURGIU, développeur web et auto-entrepreneur." />
    <header className="relative overflow-hidden py-20 bg-white">
      <NeuralNetworkBackground />
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center px-4">
        <motion.img
          src="/pp.png"
          alt="Florian GIURGIU"
          className="w-32 h-32 rounded-full border-4 border-blue-700 mb-6 shadow-lg object-cover"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.7 }}
        />
        <motion.h1
          className="text-5xl font-extrabold text-blue-700 mb-4 drop-shadow"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Florian GIURGIU
        </motion.h1>
        <motion.h2
          className="text-xl md:text-2xl text-gray-700 font-medium mb-6"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Développeur Web & Auto-Entrepreneur
        </motion.h2>
        <motion.p
          className="text-gray-600 text-lg mb-8"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Je conçois des sites et applications modernes, performants et sur-mesure.
          <br />
          Passionné, à l’écoute et force de proposition pour vos projets digitaux.
        </motion.p>
        <motion.div
          className="flex gap-4 justify-center mb-6"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <a href="#contact"
            className="bg-blue-700 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-blue-800 transition"
          >
            Me contacter
          </a>
          <a
            href="#projects"
            className="bg-white text-blue-700 border border-blue-700 px-6 py-2 rounded-full font-semibold shadow hover:bg-blue-50 transition"
          >
            Voir mes projets
          </a>
        </motion.div>
      </div>
    </header>
  </>
);

export default Header;
