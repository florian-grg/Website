import React from "react";
import Seo from "../components/Seo";
import { motion } from "framer-motion";
import { fadeIn } from "../animations/fadeIn";

const services = [
	{
		title: "Création de sites web",
		subtitle: "Vitrine, portfolio, e-commerce léger",
		link: "site-web",
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

const Services = () => {
	return (
		<>
			<Seo
				title="Florian GIURGIU"
				description="Offres de prestation : création de sites web, IA, optimisation, conseil."
			/>

			<section className="w-full py-20 px-6 md:px-12 lg:px-24">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">Mes différentes prestations</h1>
						<p className="mt-3 text-slate-600 max-w-2xl mx-auto">
							Des prestations sur-mesure pour entreprises et porteurs de projets : sites, applications, intelligence artificielle et accompagnement stratégique.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{services.map((s, idx) => (
							<motion.div
								key={s.title}
								variants={fadeIn}
								initial="hidden"
								animate="visible"
								transition={{ delay: idx * 0.08, duration: 0.5 }}
								className="relative rounded-2xl overflow-hidden p-6 bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-md border border-slate-100 shadow-lg flex flex-col justify-between"
							>
								<div>
									<div className="w-16 h-16 rounded-lg bg-blue-700 flex items-center justify-center mb-4">
										{s.icon}
									</div>
									<h3 className="text-xl font-bold text-slate-900 mb-1">{s.title}</h3>
									<p className="text-sm text-slate-600 mb-3">{s.subtitle}</p>
									<p className="text-slate-700 mb-4">{s.description}</p>

									<ul className="mb-4 space-y-2">
										{s.benefits.map((b) => (
											<li key={b} className="text-sm text-slate-600 flex items-start gap-3">
												<span className="inline-block w-3 h-3 mt-1 rounded-full bg-green-400" aria-hidden />
												<span>{b}</span>
											</li>
										))}
									</ul>
								</div>

								<div className="mt-4 flex items-center justify-between gap-4">
									<a
										href={`#/service#${s.link}`}
										className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md transition"
										aria-label={`Demander un devis pour ${s.title}`}
									>
										En savoir plus
									</a>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default Services;
