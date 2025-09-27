import React from "react";
import Seo from "../components/Seo";
import { motion } from "framer-motion";
import { fadeIn } from "../animations/fadeIn";

const experiences = [
  {
    title: "Stage - Choisir mon Groupement",
    description: "Développement informatique et optimisation de base de données. Participation à la refactorisation et à l'amélioration des requêtes pour gains de performance.",
    date: "06/2024 - 07/2024",
    location: "Schiltigheim (67)",
    highlights: [
      "Optimisation SQL et indexation",
      "Scripts d'automatisation pour déploiement",
      "Documentation et transfert de compétences"
    ],
    tech: ["SQL", "Python", "Docker"],
    link: "#"
  },
  {
    title: "Inspire, Junior-Entreprise",
    description: "Chargé Qualité : mise en place de processus qualité, tests et revue des livrables pour les projets clients.",
    date: "09/2023 - 04/2025",
    location: "Saint-Étienne (42)",
    highlights: [
      "Audit qualité des livrables",
      "Mise en place de templates et checklists",
      "Formation interne"
    ],
    tech: ["Git", "Jira", "Confluence"],
    link: "#"
  },
  {
    title: "Responsable E-Sport",
    description: "Organisation d'événements et coordination d'équipes ; gestion de budgets et communication associative.",
    date: "2023 - 2025",
    location: "Télécom Saint-Étienne",
    highlights: [
      "Organisation d'un tournoi de 200+ participants",
      "Gestion partenariats et sponsors",
      "Coordination logistique et communication"
    ],
    tech: ["Trello", "Slack"],
    link: "#"
  },
  // Ajoute d'autres expériences si besoin
];

const Badge = ({ children }) => (
  <span className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full bg-white/6 text-white/90 mr-2 mb-2">
    {children}
  </span>
);

const Experiences = () => (
  <>
    <Seo title="Expériences | Portfolio Florian GIURGIU" description="Expériences professionnelles et associatives de Florian GIURGIU." />
    <section className="w-full py-16 px-6 md:px-12 lg:px-24 bg-[#050d33]">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">Expériences</h1>
      <div className="flex flex-col gap-8">
        {experiences.map((exp, idx) => (
          <motion.article
            key={exp.title}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: idx * 0.06, duration: 0.45 }}
            className={`w-full flex flex-col ${idx % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} items-stretch gap-6 p-6 md:p-8 rounded-2xl
                       bg-gradient-to-r from-white/4 to-white/2/5 backdrop-blur-md border border-white/8
                       shadow-[0_10px_30px_rgba(2,6,23,0.6)] transform transition-all duration-300 hover:scale-[1.01]`}
          >
            {/* Main content */}
            <div className="flex-1 flex flex-col justify-between z-10">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">{exp.title}</h2>
                  <div className="text-sm text-blue-200/80">{exp.date}</div>
                </div>
                <p className="text-sm text-blue-100/90 mb-4 text-justify leading-relaxed">{exp.description}</p>

                <div className="flex flex-wrap mb-3">
                  {exp.tech && exp.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>

                <div className="text-sm text-blue-200/80 mb-3">
                  <strong>Lieu :</strong> {exp.location}
                </div>

                <ul className="list-inside list-disc text-sm text-blue-100/80 mb-4 space-y-1">
                  {exp.highlights && exp.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={exp.link}
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg shadow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  En savoir plus
                </a>
              </div>
            </div>

            {/* Visual / badge */}
            <div className="w-full md:w-56 lg:w-72 flex-shrink-0 rounded-xl overflow-hidden relative">
              <div className="w-full h-40 md:h-full bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-500 flex items-center justify-center">
                <svg className="w-20 h-20 text-white/90" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M12 2l3 7h7l-5.5 4 2 7L12 17l-6.5 3 2-7L2 9h7l3-7z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="absolute top-3 right-3 px-2 py-1 rounded bg-white/6 text-xs text-white/90">Expérience</div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  </>
);

export default Experiences;