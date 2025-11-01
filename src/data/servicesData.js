import React from "react";

// Données de services (utilisées pour la grille + l'onglet détaillé)
export const servicesData = [
  {
    title: "Création de sites web",
    subtitle: "Vitrine, portfolio, e-commerce léger",
    link: "site-web",
    id: "site-web",
    description:
      "Sites modernes, rapides et responsives, optimisés SEO et conversion. Design sur-mesure, intégration CMS si nécessaire.",
    benefits: ["Design sur-mesure", "SEO & performance", "Responsive & accessible"],
    icon: (
      <svg
        className="w-10 h-10 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        aria-hidden
      >
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 8h18" />
      </svg>
    ),
  },
  {
    title: "Développement d'applications",
    subtitle: "Web & Desktop",
    link: "application",
    id: "application",
    description:
      "Applications robustes (Python, Java, C++) : API, backends, interfaces Qt, traitement d'images et pipelines ML.",
    benefits: ["Architecture maintenable", "Intégration IA", "Tests & CI"],
    icon: (
      <svg
        className="w-10 h-10 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        aria-hidden
      >
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 3v4M8 3v4" />
      </svg>
    ),
  },
  {
    title: "Optimisation & IA",
    subtitle: "Deep Learning & Performance",
    link: "ia-optimisation",
    id: "ia-optimisation",
    description:
      "Optimisation de systèmes, modèles PyTorch, vision par ordinateur et NLP pour rendre vos produits plus intelligents et efficaces.",
    benefits: ["Modèles performants", "Gain de précision", "Pipeline déployable"],
    icon: (
      <svg
        className="w-10 h-10 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        aria-hidden
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8M12 8v8" />
      </svg>
    ),
  },
  {
    title: "Conseil & accompagnement",
    subtitle: "Audit & stratégie",
    link: "conseil-accompagnement",
    id: "conseil-accompagnement",
    description:
      "Audit technique, feuille de route produit, accompagnement projet et formation pour vos équipes.",
    benefits: ["Audit complet", "Roadmap produit", "Accompagnement opérationnel"],
    icon: (
      <svg
        className="w-10 h-10 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        aria-hidden
      >
        <path d="M12 20v-6M12 4v2M6 12H4M20 12h-2" />
      </svg>
    ),
  },
];

export default servicesData;
