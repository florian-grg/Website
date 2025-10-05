import React, { useEffect, useState, useRef } from 'react';
import Seo from '../components/Seo';
import { motion } from 'framer-motion';
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
	const [activeId, setActiveId] = useState('');
	const containerRef = useRef(null);

	// smooth scroll to hash on mount/update
	useEffect(() => {
		if (location.hash) {
			const id = location.hash.replace('#', '');
			setTimeout(() => {
				const el = document.getElementById(id);
				if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}, 80);
		}
	}, [location]);

	// IntersectionObserver to highlight active section
	useEffect(() => {
		const sections = Array.from(document.querySelectorAll('section[data-service-id]'));
		if (!sections.length) return;

		const obs = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveId(entry.target.getAttribute('data-service-id'));
					}
				});
			},
			{ root: null, rootMargin: '-40% 0px -40% 0px', threshold: 0 }
		);

		sections.forEach((s) => obs.observe(s));
		return () => obs.disconnect();
	}, []);

	return (
		<>
			<Seo title="Services | Florian GIURGIU" description="Prestations : création de sites, applications, IA et accompagnement." />

			<main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-gray-50 text-slate-900">
				{/* Layout: sticky TOC on left (lg), content sections on right */}
				<div ref={containerRef} className="min-h-screen mx-auto px-4 md:px-8 lg:px-18 xl:px-24 py-8 lg:grid lg:grid-cols-12 gap-8">
					<aside className="hidden lg:block lg:col-span-3 sticky top-28 self-start h-fit">
						<nav className="space-y-4">
							{services.map((s) => (
								<a key={s.id} href={`#${s.id}`} className={`block px-4 py-3 rounded-lg ${activeId === s.id ? 'bg-[#052047] text-white shadow' : 'bg-white/60 text-slate-800 hover:bg-slate-100'}`}>
									<span className="font-semibold block">{s.title}</span>
									<small className="text-sm opacity-80">{s.subtitle}</small>
								</a>
							))}
						</nav>
					</aside>

					<div className="lg:col-span-9 col-span-12">
						<div className="snap-y snap-mandatory overflow-y-auto" style={{ scrollSnapType: 'y mandatory' }}>
							{services.map((s, idx) => (
								<section key={s.id} id={s.id} data-service-id={s.id} className="snap-start min-h-screen flex items-center py-20 px-6 md:px-12 lg:px-0">
									<div className="w-full">
										<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
											<motion.div variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: idx * 0.06, duration: 0.6 }}>
												<div className="rounded-3xl p-12 bg-white shadow-xl border border-slate-100">
													<h2 className="text-3xl md:text-4xl font-extrabold text-[#052047]">{s.title}</h2>
													<p className="text-slate-600 mt-2">{s.subtitle}</p>

													<p className="mt-6 text-slate-700 leading-relaxed">{s.description}</p>

													<ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
														{s.benefits.map((b) => (
															<li key={b} className="flex items-start gap-3">
																<span className="mt-1 inline-block w-3 h-3 rounded-full bg-emerald-400" aria-hidden />
																<span className="text-slate-700">{b}</span>
															</li>
														))}
													</ul>

													<div className="mt-8 flex flex-col sm:flex-row gap-3">
														<Link to="/contact#contact" className="inline-flex items-center gap-2 bg-[#052047] text-white px-5 py-3 rounded-md font-semibold">Demander un devis</Link>
														<a href={`#${s.id}`} className="inline-flex items-center px-4 py-3 border border-slate-200 rounded-md text-slate-700">Rester sur la section</a>
													</div>
												</div>
											</motion.div>

											<motion.div variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: idx * 0.12, duration: 0.6 }}>
												<div className="rounded-3xl p-8 bg-gradient-to-br from-sky-100/60 to-indigo-100/40 shadow-inner h-full flex flex-col justify-center">
													<h3 className="text-2xl font-bold mb-4">Exemples & résultats</h3>
													<p className="text-slate-700">Exemples concrets de missions, métriques et impacts pour vous aider à comprendre la valeur apportée.</p>

													<div className="mt-6 grid grid-cols-1 gap-4">
														<div className="p-4 bg-white/80 rounded-lg">
															<strong className="block">Projet type</strong>
															<p className="text-sm text-slate-700">Conception d'une boutique performante — +35% de conversion, temps de chargement &lt; 1s.</p>
														</div>

														<div className="p-4 bg-white/80 rounded-lg">
															<strong className="block">Livrables</strong>
															<p className="text-sm text-slate-700">Design, code, documentation, plan de maintenance et formation.</p>
														</div>
													</div>
												</div>
											</motion.div>
										</div>
									</div>
								</section>
							))}
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
