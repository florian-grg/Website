import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { motion } from 'framer-motion';
import { fadeIn } from '../animations/fadeIn';

const Feature = ({ title, desc, to, icon, delay = 0 }) => (
  <motion.article
    className="group bg-gradient-to-br from-white/60 to-white/30 rounded-2xl p-6 shadow border border-gray-100 hover:shadow-2xl transform hover:-translate-y-1 transition"
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.45 }}
  >
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 p-3 bg-blue-50 text-blue-700 rounded-lg">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
        <p className="text-gray-600 mt-1">{desc}</p>
        <Link to={to} className="inline-block mt-4 text-sm font-medium text-blue-700 hover:underline">Voir →</Link>
      </div>
    </div>
  </motion.article>
);

const Presentation = () => {
  return (
    <>
      <Seo title="Présentation | Florian GIURGIU" description="Présentation du site, de l'auteur et des différentes sections disponibles" />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <motion.section
            className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-700 to-indigo-700 text-white p-10 mb-10 shadow-2xl flex flex-col md:flex-row items-center gap-8"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Bienvenue sur mon portfolio</h1>
              <p className="mt-4 text-blue-100 max-w-2xl">
                Je suis Florian, développeur web indépendant. Ici tu trouveras mes projets, mes compétences et les services que je propose.
                Mon objectif : livrer des sites rapides, élégants et efficaces qui convertissent.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="/CV_Florian_GIURGIU.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white text-blue-700 px-5 py-3 rounded-full font-semibold shadow hover:scale-105 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M8 2a1 1 0 00-1 1v2H5a2 2 0 00-2 2v8a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2V3a1 1 0 00-1-1H8z" /></svg>
                  Télécharger le CV
                </a>
                <Link to="/contact#contact" className="inline-flex items-center gap-2 border border-white/30 px-5 py-3 rounded-full text-white hover:bg-white/10 transition">
                  Me contacter
                </Link>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-2/5">
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <img src="/pp.png" alt="Photo Florian" className="w-28 h-28 rounded-full object-cover border-2 border-white/30 shadow-lg mx-auto" />
                <h3 className="text-xl font-semibold text-white text-center mt-4">Florian GIURGIU</h3>
                <p className="text-blue-100 text-sm text-center mt-2">Développeur web · créateur de sites performants</p>
                <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-blue-100">
                  <li className="flex items-center gap-2"><span className="w-2 h-2 bg-white rounded-full" />Réactivité</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 bg-white rounded-full" />Design</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 bg-white rounded-full" />Performance</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 bg-white rounded-full" />SEO</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Features */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Feature
              title="Accueil"
              desc="Visuel d'introduction et accès rapide aux actions importantes."
              to="/"
              delay={0.05}
              icon={<svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 12l2-2m0 0l7-7 7 7M13 5v6h6' /></svg>}
            />
            <Feature
              title="Portfolio"
              desc="Étude détaillée des projets, technologies utilisées et responsabilités."
              to="/portfolio#about"
              delay={0.12}
              icon={<svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 8c-1.657 0-3 1.343-3 3v6h6v-6c0-1.657-1.343-3-3-3z' /><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 2a5 5 0 015 5v1H7V7a5 5 0 015-5z' /></svg>}
            />
            <Feature
              title="Services"
              desc="Offres claires : création, refonte, optimisation, maintenance."
              to="/services"
              delay={0.18}
              icon={<svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12h6m2 2a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h3l2 2h4a2 2 0 012 2z' /></svg>}
            />
          </section>

          {/* Structure */}
          <section className="bg-white rounded-2xl p-6 shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Structure du site & navigation</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-700 mb-3">Le site est organisé pour faciliter la découverte : un accueil fort, puis un espace portfolio riche et une page dédiée aux services.</p>
                <ol className="list-decimal list-inside text-gray-600 space-y-2">
                  <li><strong>Accueil</strong> — prise de contact rapide et message clair.</li>
                  <li><strong>Portfolio</strong> — projets détaillés, compétences et expériences.</li>
                  <li><strong>Services</strong> — prestations, modalités et CTA vers contact.</li>
                  <li><strong>Contact</strong> — formulaire simple pour me joindre.</li>
                </ol>
              </div>
              <div>
                <p className="text-gray-700 mb-3">Conseil : commence par le portfolio si tu veux évaluer mon travail, ou par <em>Services</em> si tu veux demander un devis.</p>
                <div className="mt-4 flex gap-3">
                  <Link to="/portfolio#about" className="px-4 py-2 rounded-md bg-blue-700 text-white font-semibold shadow hover:bg-blue-800 transition">Voir le portfolio</Link>
                  <Link to="/services" className="px-4 py-2 rounded-md border border-gray-200 bg-white font-semibold hover:shadow transition">Voir les services</Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Presentation;
