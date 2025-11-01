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

export default projects;
