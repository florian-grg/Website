import React from "react";
import Seo from "../components/Seo";
import { motion } from "framer-motion";
import { fadeIn } from "../animations/fadeIn";

const services = [
	{
		title: "Création de sites web",
		description: "Sites vitrines, portfolios, blogs, landing pages sur-mesure. Expertise HTML, CSS, JS.",
		icon: (
			<svg
				className="w-8 h-8 text-blue-700"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				viewBox="0 0 24 24"
			>
				<rect x="3" y="4" width="18" height="16" rx="2" />
				<path d="M3 8h18" />
			</svg>
		),
	},
	{
		title: "Développement d'applications",
		description: "Applications web et desktop (Python, Java, C++). Interfaces graphiques Qt, traitement d'images, IA.",
		icon: (
			<svg
				className="w-8 h-8 text-blue-700"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				viewBox="0 0 24 24"
			>
				<rect x="2" y="7" width="20" height="14" rx="2" />
				<path d="M16 3v4M8 3v4" />
			</svg>
		),
	},
	{
		title: "Optimisation & Intelligence Artificielle",
		description: "Optimisation de bases de données, Deep Learning (PyTorch), vision par ordinateur, NLP.",
		icon: (
			<svg
				className="w-8 h-8 text-blue-700"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				viewBox="0 0 24 24"
			>
				<circle cx="12" cy="12" r="10" />
				<path d="M8 12h8M12 8v8" />
			</svg>
		),
	},
	{
		title: "Conseil & accompagnement",
		description: "Audit, optimisation, conseils pour votre présence digitale et projets innovants.",
		icon: (
			<svg
				className="w-8 h-8 text-blue-700"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				viewBox="0 0 24 24"
			>
				<path d="M12 20v-6M12 4v2M6 12H4M20 12h-2M7.8 7.8l-1.4-1.4M16.2 16.2l1.4 1.4M16.2 7.8l1.4-1.4M7.8 16.2l-1.4 1.4" />
			</svg>
		),
	},
];

const Services = () => (
	<>
		<Seo title="Services | Portfolio Florian GIURGIU" description="Services proposés : création de sites web, IA, optimisation, conseil." />
		<section className="w-full py-16 px-64">
			<h1 className="text-4xl font-bold text-blue-700 mb-10 text-center">
				Mes Services
			</h1>
			<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
				{services.map((service, idx) => (
					<motion.div
						key={service.title}
						className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rounded-xl shadow-lg p-8 flex flex-col items-center text-center border-t-4 border-blue-700"
						variants={fadeIn}
						initial="hidden"
						animate="visible"
						transition={{ delay: idx * 0.1, duration: 0.5 }}
					>
						<div className="mb-4">{service.icon}</div>
						<h2 className="text-xl font-bold text-blue-700 mb-2">
							{service.title}
						</h2>
						<p className="text-gray-700">{service.description}</p>
					</motion.div>
				))}
			</div>
		</section>
	</>
);

export default Services;
