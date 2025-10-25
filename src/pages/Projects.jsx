import React from "react";
import Seo from "../components/Seo";
import { motion } from "framer-motion";
import { fadeIn } from "../animations/fadeIn";

const projects = [
  {
    title: "Projet d'ingénierie - Myakiatto",
    description:
      "Détection et géoréférencement de points caractéristiques du paysage à partir d'images satellite via traitement d'images et IA. Pipeline complet : prétraitement, segmentation, matching et post-traitement géospatial.",
    date: "03/2025 - 06/2025",
    location: "Saint-Étienne (42)",
    tech: ["Python", "PyTorch", "OpenCV", "GDAL"],
    role: "Lead ML Engineer",
    highlights: [
      "Architecture CNN custom pour détection multi-échelle",
      "Géoréférencement par appariement robuste et filtrage RANSAC",
      "Pipeline dockerisé pour batch processing"
    ],
    link: "#",
    repo: "#"
  },
  {
    title: "Autoencodeur Variationnel (VAE)",
    description:
      "Conception et entraînement d'un VAE conditionnel pour génération d'images sur CelebA, contrôle par attributs visuels.",
    date: "05/2025",
    location: "",
    tech: ["PyTorch", "GAN/VAE", "CUDA"],
    role: "Research & Implementation",
    highlights: [
      "Conditionnement par labels binaires",
      "Expérimentations sur architectures latentes",
      "Visualisation d'attributs et squelettes d'évaluation FID"
    ],
    link: "#",
    repo: "#"
  },
  {
    title: "Système On-Screen Display pour Robot",
    description:
      "Interface OSD pour robot: intégration capteurs, affichage temps réel, et contrôle distant via TCP/IP.",
    date: "03/2024 - 05/2024",
    location: "",
    tech: ["Python", "Qt", "TCP/IP"],
    role: "Développeur logiciel",
    highlights: [
      "Client/serveur léger pour commandes et télémétrie",
      "UI Qt réactive pour monitoring",
    ],
    link: "#",
    repo: "#"
  },
  {
    title: "Étude qualité de l'air intérieur",
    description:
      "Modélisation et simulation de la diffusion de CO₂ en milieu clos (TIPE). Analyse des paramètres et recommandations d'aération.",
    date: "01/2022 - 07/2023",
    location: "",
    tech: ["Python", "C"],
    role: "Analyste / Développeur",
    highlights: [
      "Simulations numériques et visualisations",
      "Comparaison expérimentale / modèle"
    ],
    link: "#",
    repo: "#"
  },
];

const Badge = ({ children }) => (
  <span className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full bg-white/6 text-white/90 mr-2 mb-2">
    {children}
  </span>
);

const Projects = () => (
  <>
    <Seo title="Portfolio | Florian GIURGIU" description="Projets réalisés par Florian GIURGIU, IA, web, optimisation." />
    <section className="w-full py-16 px-6 md:px-12 lg:px-24 bg-[#050d33]">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">Projets</h1>

      <div className="flex flex-col gap-8">
        {projects.map((project, idx) => (
          <motion.article
            key={project.title}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: idx * 0.06, duration: 0.45 }}
            className={`w-full flex flex-col ${idx % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} items-stretch gap-6 p-6 md:p-8 rounded-2xl
                       bg-gradient-to-r from-white/4 to-white/2/5 backdrop-blur-md border border-white/8
                       shadow-[0_10px_30px_rgba(2,6,23,0.6)] transform transition-all duration-300 hover:scale-[1.01]`}
          >
            {/* Left content: main info */}
            <div className="flex-1 flex flex-col justify-between z-10">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">{project.title}</h2>
                  <div className="text-sm text-blue-200/80">{project.date}</div>
                </div>
                <p className="text-sm text-blue-100/90 mb-4 text-justify leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap mb-3">
                  {project.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
                <div className="text-sm text-blue-200/80 mb-3">
                  <strong>Rôle :</strong> {project.role}
                  {project.location && <span className="ml-3">| {project.location}</span>}
                </div>
                <ul className="list-inside list-disc text-sm text-blue-100/80 mb-4 space-y-1">
                  {project.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg shadow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir le projet
                </a>
                <a
                  href={project.repo}
                  className="inline-flex items-center gap-2 border border-white/10 text-white/90 px-3 py-2 rounded-lg hover:bg-white/5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repo
                </a>
              </div>
            </div>

            {/* Right visual: decorative card / placeholder */}
            <div className="w-full md:w-56 lg:w-72 flex-shrink-0 rounded-xl overflow-hidden relative">
              <div className="w-full h-40 md:h-full bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-500 flex items-center justify-center">
                <svg className="w-20 h-20 text-white/90" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M3 7a4 4 0 014-4h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 12h8M8 16h5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="absolute top-3 right-3 px-2 py-1 rounded bg-white/6 text-xs text-white/90">Projet</div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  </>
);

export default Projects;