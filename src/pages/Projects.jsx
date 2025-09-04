import React from "react";
import Seo from "../components/Seo";
import { motion } from "framer-motion";
import { fadeIn } from "../animations/fadeIn";

const projects = [
  {
    title: "Projet d'ingénierie - Myakiatto",
    description: "Détection et géoréférencement de points caractéristiques du paysage à partir d'images satellite via Traitement d'Images et Intelligence Artificielle.",
    date: "03/2025 - 06/2025",
    location: "Saint-Étienne (42)",
    link: "#",
  },
  {
    title: "Conception d'un Autoencodeur Variationnel (VAE)",
    description: "Génération d'images conditionnelles avec PyTorch, entraînement sur CelebA, génération par attributs visuels.",
    date: "05/2025",
    location: "",
    link: "#",
  },
  {
    title: "Système On-Screen Display pour Robot",
    description: "Intégration des données de capteurs et contrôle à distance via serveur TCP/IP en Python.",
    date: "03/2024 - 05/2024",
    location: "",
    link: "#",
  },
  {
    title: "Étude de la qualité de l'air intérieur",
    description: "Diffusion du CO₂ en milieu clos en Python et C (TIPE).",
    date: "01/2022 - 07/2023",
    location: "",
    link: "#",
  },
];

const Projects = () => (
  <>
    <Seo title="Projets | Portfolio Florian GIURGIU" description="Projets réalisés par Florian GIURGIU, IA, web, optimisation." />
    <section className="max-w-6xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-blue-700 mb-10 text-center">Projets</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rounded-xl shadow-lg p-8 flex flex-col border-t-4 border-blue-700"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: idx * 0.1, duration: 0.5 }}
          >
            <h2 className="text-xl font-bold text-blue-700 mb-2">{project.title}</h2>
            <p className="text-gray-700 mb-2">{project.description}</p>
            <p className="text-xs text-gray-500 mb-2">{project.date} {project.location && `| ${project.location}`}</p>
            <a
              href={project.link}
              className="mt-auto text-blue-700 hover:underline font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir le projet
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  </>
);

export default Projects;
