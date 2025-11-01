import React from "react";
import Seo from "../components/Seo";
import { motion } from "framer-motion";
import { fadeIn } from "../animations/fadeIn";
import servicesData from "../data/servicesData";
import { useNavigate } from "react-router-dom";
import { smoothScrollTo } from "../animations/smoothScrollTo";

const Services = () => {
	const navigate = useNavigate();
	return (
		<>
			<Seo
				title="Florian GIURGIU — Services"
				description="Services : création de sites web, IA, optimisation, conseil."
			/>

			{/* Section 1 — Aperçu des prestations (fond blanc, design landing page) */}
			<section className="w-full min-h-screen py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-white via-blue-50 to-purple-50 text-black flex items-center">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-14">
						<h1 className="text-4xl md:text-5xl font-extrabold text-black">Mes Prestations</h1>
						<p className="mt-4 text-lg text-black max-w-2xl mx-auto">
							Des prestations sur-mesure pour entreprises et porteurs de projets : sites, applications, intelligence artificielle et accompagnement stratégique.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{servicesData.map((s, idx) => (
							<motion.div
								key={s.id}
								variants={fadeIn}
								initial="hidden"
								animate="visible"
								transition={{ delay: idx * 0.08, duration: 0.5 }}
								className="relative rounded-3xl overflow-hidden p-7 bg-white shadow-xl border border-slate-100 hover:scale-[1.03] hover:shadow-2xl transition-transform duration-300 flex flex-col justify-between group"
							>
								<div>
									<div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-purple-500 flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform">
										{s.icon}
									</div>
									<h3 className="text-2xl font-bold text-black mb-1 group-hover:text-blue-700 transition-colors">{s.title}</h3>
									<p className="text-base text-black mb-2 font-semibold">{s.subtitle}</p>
									<p className="text-black mb-4">{s.description}</p>

									<ul className="mb-4 space-y-2">
										{s.benefits.map((b) => (
											<li key={b} className="text-sm text-black flex items-start gap-3">
												<span className="inline-block w-3 h-3 mt-1 rounded-full bg-gradient-to-r from-emerald-400 to-green-500" aria-hidden />
												<span>{b}</span>
											</li>
										))}
									</ul>
								</div>

								<div className="mt-4">
									<button
										onClick={() => {
											navigate({ pathname: "/service", search: `?tab=${s.id}` });
											setTimeout(() => smoothScrollTo("#service"), 250);
										}}
										className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-500 hover:from-blue-700 hover:to-purple-600 text-white font-semibold px-4 py-2 rounded-lg shadow"
									>
										<span>En savoir plus</span>
										<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
									</button>
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