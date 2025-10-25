import React, { useEffect, useState } from 'react';
// Rétablissement des chemins d'importation d'origine (../)
import Seo from '../components/Seo';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from '../animations/fadeIn';
import { Link, useLocation } from 'react-router-dom';

const services = [
    {
        id: 'site-web',
        title: 'Création de sites web',
        subtitle: 'Vitrine, portfolio, e‑commerce léger',
        description:
            "Sites modernes, rapides et responsives, optimisés SEO et conversion. Design sur‑mesure, intégration CMS si nécessaire.",
        benefits: ['Design sur‑mesure', "SEO & performance", 'Responsive & accessible'],
    },
    {
        id: 'application',
        title: "Développement d'applications",
        subtitle: 'Web & Desktop',
        description:
            "Applications robustes : API, backends, interfaces desktop, traitement de données et pipelines. Architecture maintenable et tests.",
        benefits: ['Architecture maintenable', 'Intégration IA', 'Tests & CI'],
    },
    {
        id: 'ia-optimisation',
        title: "Optimisation & IA",
        subtitle: 'Deep Learning & performance',
        description:
            "Optimisation de modèles (PyTorch), vision par ordinateur et NLP, mise en production et optimisation d'inférence pour réduire la latence et le coût.",
        benefits: ['Modèles performants', 'Gain de précision', 'Pipeline déployable'],
    },
    {
        id: 'conseil-accompagnement',
        title: 'Conseil & accompagnement',
        subtitle: 'Audit & stratégie',
        description:
            "Audit technique, feuille de route produit, accompagnement projet et formation pour vos équipes — de la stratégie jusqu'à l'exécution opérationnelle.",
        benefits: ['Audit complet', 'Roadmap produit', "Accompagnement opérationnel"],
    },
];

export default function Services() {
    const location = useLocation();
    // L'onglet actif, par défaut le premier service
    const [activeId, setActiveId] = useState(services[0].id);

    // Fait défiler jusqu'à l'ancre si elle est dans l'URL
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            // Met à jour l'onglet actif si l'ancre correspond à un service
            if (services.some(s => s.id === id)) {
                setActiveId(id);
            }
            // Fait défiler vers l'élément (peut être un onglet ou une section)
            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 80);
        }
    }, [location]); // Se redéclenche si l'URL (le hash) change

    // Trouve le service actif à afficher
    const activeService = services.find(s => s.id === activeId) || services[0];

    return (
        <>
            <Seo title="Services | Florian GIURGIU" description="Prestations : création de sites, applications, IA et accompagnement." />

            {/* Fond sombre appliqué */}
            <main className="min-h-screen bg-white text-slate-900 py-24 md:py-32">
                
                {/* Conteneur principal centré */}
                <div className="max-w-7xl mx-auto px-4 md:px-8">

                    {/* Titre et introduction */}
                    <motion.div 
                        variants={fadeIn} 
                        initial="hidden" 
                        animate="visible"
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">Mes Prestations</h1>
                        <p className="max-w-2xl mx-auto mt-4 text-lg text-slate-600">
                            De la conception de sites web performants à l'optimisation de modèles d'IA, je propose des solutions sur-mesure pour vos défis techniques.
                        </p>
                    </motion.div>

                    {/* NOUVELLE ARCHITECTURE : Navigation par Onglets */}
                    <nav id="services-nav" className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
                        {services.map((s) => (
                            <motion.button
                                key={s.id}
                                onClick={() => setActiveId(s.id)}
                                variants={fadeIn}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: s.id === 'site-web' ? 0.1 : s.id === 'application' ? 0.2 : s.id === 'ia-optimisation' ? 0.3 : 0.4, duration: 0.5 }}
                                className={`block px-5 py-3 rounded-lg transition-all duration-300 backdrop-blur-md border text-left
                                ${activeId === s.id
                                    ? 'bg-gradient-to-r from-blue-600 to-purple-500 text-white shadow-lg shadow-blue-500/20 border-transparent'
                                    : 'bg-slate-50 border-slate-100 text-slate-700 hover:bg-slate-100 hover:border-slate-200'
                                }`}
                            >
                                <span className="font-semibold block">{s.title}</span>
                                <small className={`text-sm ${activeId === s.id ? 'opacity-90' : 'opacity-70'}`}>{s.subtitle}</small>
                            </motion.button>
                        ))}
                    </nav>

                    {/* Contenu de l'onglet actif (animé) */}
                    <div className="mt-12">
                        <AnimatePresence mode="wait">
                            <motion.div
                                // La clé est essentielle pour qu'AnimatePresence détecte le changement
                                key={activeId}
                                variants={fadeIn}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                transition={{ duration: 0.4 }}
                            >
                                {/* Grille réutilisée de la v1, mais pour le service actif */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

                                    {/* Carte de service principale "Glassmorphism" */}
                    <div className="rounded-3xl p-10 md:p-12 bg-white shadow-sm border border-slate-100 h-full flex flex-col">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">{activeService.title}</h2>
                        <p className="text-slate-600 mt-2">{activeService.subtitle}</p>
                        <p className="mt-6 text-slate-700 leading-relaxed">{activeService.description}</p>
                                        
                                        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {activeService.benefits.map((b) => (
                                                <li key={b} className="flex items-start gap-3">
                                                    <span className="mt-1 inline-block w-3 h-3 rounded-full bg-emerald-400" aria-hidden />
                                                    <span className="text-slate-700">{b}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="flex-grow" /> {/* Pousse les boutons en bas */}
                                        <div className="mt-8 flex flex-col sm:flex-row gap-3">
                                            <Link to="/contact#contact" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 rounded-md font-semibold transition-colors duration-200 shadow-lg shadow-blue-500/20">
                                                Demander un devis
                                            </Link>
                                        </div>
                                    </div>

                                            {/* Carte "Exemples" avec style "incrusté" */}
                                    <div className="rounded-3xl p-8 bg-white/50 shadow-inner shadow-black/10 h-full flex flex-col justify-center">
                                        <h3 className="text-2xl font-bold mb-4 text-slate-900">Exemples & résultats</h3>
                                        <p className="text-slate-700">Exemples concrets de missions, métriques et impacts pour vous aider à comprendre la valeur ajoutée.</p>

                                        <div className="mt-6 grid grid-cols-1 gap-4">
                                            <div className="p-4 bg-white rounded-lg border border-slate-100">
                                                <strong className="block text-slate-900">Projet type</strong>
                                                <p className="text-sm text-slate-700">Conception d'une boutique performante — +35% de conversion, temps de chargement &lt; 1s.</p>
                                            </div>

                                            <div className="p-4 bg-white rounded-lg border border-slate-100">
                                                <strong className="block text-slate-900">Livrables</strong>
                                                <p className="text-sm text-slate-700">Design, code, documentation, plan de maintenance et formation.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </main>
        </>
    );
}

