import React from "react";
import Seo from "../components/Seo";
import { motion } from "framer-motion";
import { fadeIn } from "../animations/fadeIn";
import { smoothScrollTo } from "../animations/smoothScrollTo";
import { useNavigate, useLocation } from "react-router-dom";

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
  <Seo title="Florian GIURGIU — Services" description="Prestations : création de sites, applications, IA et accompagnement." />
  <header className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto py-20 px-6">
          <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}>
            <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black text-center mb-4 font-serif">
              Services & Prestations
            </motion.h1>

            <motion.p variants={fadeIn} className="text-lg text-black text-center max-w-3xl mx-auto mb-8">
              Solutions complètes pour lancer, faire croître et industrialiser vos produits numériques : du prototype à la production.
            </motion.p>

            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8" variants={fadeIn}>
              <motion.div whileHover={{ y: -6 }} className="p-6 bg-slate-50 rounded-2xl shadow hover:shadow-lg transition">
                <div className="text-3xl mb-3">🔎</div>
                <h3 className="font-semibold text-lg mb-2">Audit & Conseil</h3>
                <p className="text-sm text-black">Analyse technique et feuille de route priorisée pour vos besoins produit et perf.</p>
              </motion.div>

              <motion.div whileHover={{ y: -6 }} className="p-6 bg-slate-50 rounded-2xl shadow hover:shadow-lg transition">
                <div className="text-3xl mb-3">⚙️</div>
                <h3 className="font-semibold text-lg mb-2">Projets sur‑mesure</h3>
                <p className="text-sm text-black">Développement full‑stack, architecture scalable et déploiement en production.</p>
              </motion.div>

              <motion.div whileHover={{ y: -6 }} className="p-6 bg-slate-50 rounded-2xl shadow hover:shadow-lg transition">
                <div className="text-3xl mb-3">🤖</div>
                <h3 className="font-semibold text-lg mb-2">Accompagnement IA</h3>
                <p className="text-sm text-black">Intégration de modèles, optimisation d'inférence et pipelines MLOps pour production.</p>
              </motion.div>
            </motion.div>

            <motion.div className="flex justify-center gap-4 mt-10" variants={fadeIn}>
              <button onClick={() => goTo('/service', '#site-web')} className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-500 hover:from-blue-700 hover:to-purple-600 text-white font-semibold shadow-lg shadow-blue-500/20 transition">Voir les services</button>
              <button onClick={() => goTo('/contact', '#contact')} className="px-6 py-3 rounded-lg border border-slate-300 text-black hover:bg-slate-50 transition">Demander un devis</button>
            </motion.div>
          </motion.div>
        </div>
      </header>
    </>
  );
};

export default Header;
