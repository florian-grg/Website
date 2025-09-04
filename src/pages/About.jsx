import React, { useRef } from "react";
import Seo from "../components/Seo";
import { motion, useInView } from "framer-motion";
import { fadeIn } from "../animations/fadeIn";

const timelinePoints = [
  {
    title: "Semestre Erasmus - Université de Padoue",
    date: "09/2025 - 02/2026 (À venir) | Padoue, Italie",
  },
  {
    title: "École d'Ingénieur Généraliste du Numérique - Télécom Saint-Étienne",
    date: "09/2023 - 08/2026 (En Cours) | Saint-Étienne (42)",
  },
  {
    title: "Classe Préparatoire aux Grandes Écoles (MPSI/PSI) - Lycée ORT",
    date: "09/2021 - 07/2023 | Strasbourg (67)",
  },
  {
    title: "Baccalauréat Général Mathématiques, Physique-Chimie, SVT - Lycée Adrien Zeller",
    date: "09/2018 - 07/2021 | Bouxwiller (67)",
  },
];

const experiencesPoints = [
  {
    title: "Projet d'ingénierie - Myakiatto",
    date: "03/2025 - 06/2025 | Saint-Étienne (42)",
  },
  {
    title: "Inspire, Junior-Entreprise de Télécom Saint-Étienne",
    date: "Chargé Qualité | 09/2023 - 04/2025 | Saint-Étienne (42)",
  },
  {
    title: "Stage - Choisir mon Groupement",
    date: "06/2024 - 07/2024 | Schiltigheim (67)",
  },
];

const projectsPoints = [
  {
    title: "Autoencodeur Variationnel (VAE) conditionnel - PyTorch",
    date: "05/2025",
  },
  {
    title: "Système \"On-Screen Display\" pour Robot - Python",
    date: "03/2024 - 05/2024",
  },
  {
    title: "Étude de la qualité de l'air intérieur : Diffusion du CO₂ en milieu clos",
    date: "Python & C | TIPE | 01/2022 - 07/2023",
  },
];

const Timeline = ({ points }) => {
  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: false, margin: "-100px" });

  return (
    <div ref={timelineRef} className="relative pl-6">
      {/* Ligne animée */}
      <motion.div
        className="absolute left-0 top-0 w-1 bg-blue-700 rounded"
        initial={{ height: 0 }}
        animate={{ height: isInView ? "100%" : 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ minHeight: "100%", zIndex: 0 }}
      />
      <ol className="space-y-8 relative z-10">
        {points.map((point, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
            transition={{ delay: 0.2 + idx * 0.2, duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -left-3.5 w-7 h-7 bg-blue-700 rounded-full flex items-center justify-center"></div>
            <div className="ml-8">
              <h3 className="font-semibold text-blue-700 text-lg">{point.title}</h3>
              <span className="text-sm text-gray-500">{point.date}</span>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
};

const About = () => (
  <>
    <Seo title="À propos | Portfolio Florian GIURGIU" description="À propos de Florian GIURGIU, développeur web, IA, optimisation." />
    <section className="max-w-3xl mx-auto py-16 px-6">
      {/* Bloc principal : photo + texte */}
      <motion.div
        className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8 mb-8"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
      >
        <img
          src="/pp.png"
          alt="Florian GIURGIU"
          className="w-40 h-40 rounded-full border-4 border-blue-700 object-cover"
        />
        <div>
          <h1 className="text-4xl font-bold text-blue-700 mb-2">À propos de moi</h1>
          <p className="text-lg text-gray-700 mb-2">
            <span className="font-semibold text-blue-700">Florian GIURGIU</span> <br />
            <span className="text-sm text-gray-500">Strasbourg (67) • Né le 16/10/2003</span>
          </p>
          <p className="text-gray-700">
            Curieux, rigoureux et persévérant, j’ai développé un esprit critique et une forte capacité à résoudre des problèmes complexes.
          </p>
        </div>
      </motion.div>
      <motion.div
        className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rounded-xl shadow-lg p-8 mb-8 text-blue-700"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Langues</h2>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-700 text-blue-50 px-3 py-1 rounded-full text-sm font-medium">Français / Roumain : Bilingue</span>
            <span className="bg-blue-700 text-blue-50 px-3 py-1 rounded-full text-sm font-medium">Anglais : B2</span>
            <span className="bg-blue-700 text-blue-50 px-3 py-1 rounded-full text-sm font-medium">Espagnol : A2</span>
            <span className="bg-blue-700 text-blue-50 px-3 py-1 rounded-full text-sm font-medium">Allemand : A1</span>
          </div>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Certifications</h2>
          <ul className="list-disc list-inside text-gray-700 mt-1 text-sm">
            <li>NVIDIA Deep Learning Institute : Getting Started with Deep Learning</li>
            <li>Introduction to Transformer-Based NLP</li>
            <li>Generative AI with Diffusion Models (2025)</li>
            <li>TOEIC : B2 (04/2025 - 04/2027)</li>
            <li>Formation Musicale - Mention Bien (2019)</li>
          </ul>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Centres d'intérêt</h2>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-700 text-blue-50 px-3 py-1 rounded-full text-sm font-medium">Musculation</span>
            <span className="bg-blue-700 text-blue-50 px-3 py-1 rounded-full text-sm font-medium">Handball</span>
            <span className="bg-blue-700 text-blue-50 px-3 py-1 rounded-full text-sm font-medium">Guitare</span>
            <span className="bg-blue-700 text-blue-50 px-3 py-1 rounded-full text-sm font-medium">Responsable E-Sport (BDA & BDS)</span>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Contact</h2>
          <p className="text-gray-700 mt-1 text-sm">
            <span className="font-semibold">Email :</span> florian.giurgiu3@gmail.com <br />
            <span className="font-semibold">Téléphone :</span> +33 (0)6 29 15 80 54
          </p>
        </div>
      </motion.div>
      {/* Chronologie du parcours scolaire */}
      <motion.div
        className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rounded-xl shadow-lg p-8 mb-8"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <h2 className="text-xl font-bold text-blue-700 mb-6">Parcours scolaire</h2>
        <Timeline points={timelinePoints} />
      </motion.div>
      {/* Chronologie des expériences */}
      <motion.div
        className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rounded-xl shadow-lg p-8 mb-8"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.15, duration: 0.5 }}
      >
        <h2 className="text-xl font-bold text-blue-700 mb-6">Expériences</h2>
        <Timeline points={experiencesPoints} />
      </motion.div>
      {/* Chronologie des projets */}
      <motion.div
        className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rounded-xl shadow-lg p-8 mb-8"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.18, duration: 0.5 }}
      >
        <h2 className="text-xl font-bold text-blue-700 mb-6">Projets</h2>
        <Timeline points={projectsPoints} />
      </motion.div>
    </section>
  </>
);

export default About;
