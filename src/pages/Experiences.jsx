import React from "react";
import Seo from "../components/Seo";
import { motion } from "framer-motion";
import { fadeIn } from "../animations/fadeIn";

const experiences = [
  {
    title: "Stage - Choisir mon Groupement",
    description: "Développement informatique et optimisation de base de données.",
    date: "06/2024 - 07/2024",
    location: "Schiltigheim (67)",
  },
  {
    title: "Inspire, Junior-Entreprise",
    description: "Chargé Qualité à Télécom Saint-Étienne.",
    date: "09/2023 - 04/2025",
    location: "Saint-Étienne (42)",
  },
  {
    title: "Responsable E-Sport",
    description: "Bureau des Arts & Bureau des Sports.",
    date: "2023 - 2025",
    location: "Télécom Saint-Étienne",
  },
  // Ajoute d'autres expériences si besoin
];

const Experiences = () => (
  <>
    <Seo title="Expériences | Portfolio Florian GIURGIU" description="Expériences professionnelles et associatives de Florian GIURGIU." />
    <section className="max-w-6xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-blue-700 mb-10 text-center">Expériences</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.title}
            className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rounded-xl shadow-lg p-8 flex flex-col border-t-4 border-blue-700"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: idx * 0.1, duration: 0.5 }}
          >
            <h2 className="text-xl font-bold text-blue-700 mb-2">{exp.title}</h2>
            <p className="text-gray-700 mb-2">{exp.description}</p>
            <p className="text-xs text-gray-500 mb-2">{exp.date} {exp.location && `| ${exp.location}`}</p>
          </motion.div>
        ))}
      </div>
    </section>
  </>
);

export default Experiences;
