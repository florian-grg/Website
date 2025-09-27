import React, { useState } from "react";
import Seo from "../components/Seo";
import { motion } from "framer-motion";
import { fadeIn } from "../animations/fadeIn";

const SKILLS = [
  { name: "Python", category: "Langages", level: 92, years: 5, tech: ["PyTorch", "NumPy"] },
  { name: "JavaScript", category: "Langages", level: 85, years: 4, tech: ["React", "Node"] },
  { name: "Java", category: "Langages", level: 78, years: 4, tech: ["OOP", "Qt"] },
  { name: "C/C++", category: "Langages", level: 74, years: 3, tech: ["Embedded", "Optimisation"] },
  { name: "SQL", category: "Databases", level: 80, years: 3, tech: ["Postgres", "SQLite"] },
  { name: "PyTorch (Deep Learning)", category: "IA", level: 88, years: 3, tech: ["CNN", "Training"] },
  { name: "MATLAB", category: "Outils", level: 68, years: 2, tech: ["Simulations"] },
  { name: "HTML", category: "Web", level: 86, years: 4, tech: ["Semantics"] },
  { name: "CSS", category: "Web", level: 82, years: 4, tech: ["Tailwind", "Responsive"] },
  { name: "Qt (GUI)", category: "Outils", level: 70, years: 2, tech: ["Interfaces"] },
  { name: "LaTeX", category: "Outils", level: 75, years: 4, tech: ["Docs", "Reports"] },
  { name: "Git", category: "Outils", level: 90, years: 5, tech: ["Workflows"] },
];

const getUniqueCategories = (list) => ["Tous", ...Array.from(new Set(list.map((s) => s.category)))];

const Logo = ({ name }) => {
  switch (name) {
    case "Python":
      return (
        <div aria-hidden className="w-12 h-12 flex items-center justify-center rounded-md bg-gradient-to-br from-yellow-300 to-blue-500">
          <span className="text-white font-bold">Py</span>
        </div>
      );
    case "JavaScript":
      return (
        <div className="w-12 h-12 flex items-center justify-center rounded-md bg-yellow-400">
          <span className="text-black font-bold">JS</span>
        </div>
      );
    case "Java":
      return (
        <div className="w-12 h-12 flex items-center justify-center rounded-md bg-red-500">
          <span className="text-white font-bold">Jv</span>
        </div>
      );
    case "C/C++":
      return (
        <div className="w-12 h-12 flex items-center justify-center rounded-md bg-sky-600">
          <span className="text-white font-bold">C++</span>
        </div>
      );
    case "SQL":
      return (
        <div className="w-12 h-12 flex items-center justify-center rounded-md bg-emerald-600">
          <span className="text-white font-bold">DB</span>
        </div>
      );
    case "PyTorch (Deep Learning)":
      return (
        <div className="w-12 h-12 flex items-center justify-center rounded-md bg-indigo-600">
          <span className="text-white font-bold">PT</span>
        </div>
      );
    case "HTML":
      return (
        <div className="w-12 h-12 flex items-center justify-center rounded-md bg-orange-500">
          <span className="text-white font-bold">HT</span>
        </div>
      );
    case "CSS":
      return (
        <div className="w-12 h-12 flex items-center justify-center rounded-md bg-blue-600">
          <span className="text-white font-bold">CSS</span>
        </div>
      );
    case "Qt (GUI)":
      return (
        <div className="w-12 h-12 flex items-center justify-center rounded-md bg-violet-600">
          <span className="text-white font-bold">Qt</span>
        </div>
      );
    case "LaTeX":
      return (
        <div className="w-12 h-12 flex items-center justify-center rounded-md bg-gray-700">
          <span className="text-white font-bold">TeX</span>
        </div>
      );
    case "MATLAB":
      return (
        <div className="w-12 h-12 flex items-center justify-center rounded-md bg-slate-600">
          <span className="text-white font-bold">ML</span>
        </div>
      );
    case "Git":
      return (
        <div className="w-12 h-12 flex items-center justify-center rounded-md bg-red-600">
          <span className="text-white font-bold">Git</span>
        </div>
      );
    default:
      return (
        <div className="w-12 h-12 flex items-center justify-center rounded-md bg-white/10">
          <span className="text-white font-medium">•</span>
        </div>
      );
  }
};

const Skills = () => {
  const [category, setCategory] = useState("Tous");
  const categories = getUniqueCategories(SKILLS);
  const filtered = category === "Tous" ? SKILLS : SKILLS.filter((s) => s.category === category);

  return (
    <>
      <Seo
        title="Compétences | Portfolio Florian GIURGIU"
        description="Compétences techniques de Florian GIURGIU : Python, Java, IA, web, etc."
      />
      <section className="w-full py-16 px-6 md:px-12 lg:px-24">
        <div className="mx-auto">
          <div className="rounded-2xl shadow-2xl p-8 md:p-12 overflow-hidden bg-white border border-gray-200">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">Compétences</h1>
                <p className="text-slate-600 mt-2">Technologies, outils et domaines où j'interviens — niveaux et exemples d'application.</p>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setCategory(cat)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition ${
                      category === cat
                        ? "bg-slate-900 text-white ring-2 ring-slate-100/10"
                        : "bg-slate-100 text-slate-800 hover:bg-slate-200"
                    }`}
                    aria-pressed={category === cat}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {filtered.map((s, idx) => (
                <motion.article
                  key={s.name}
                  variants={fadeIn}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: idx * 0.04, duration: 0.3 }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 border border-gray-100 hover:shadow transition"
                >
                  <Logo name={s.name} />

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 leading-tight">{s.name}</h3>
                        <div className="text-xs text-slate-500">Catégorie • {s.category} • {s.years} ans</div>
                      </div>
                      <div className="text-sm text-slate-700 font-medium">{s.level}%</div>
                    </div>

                    <div className="mt-3">
                      <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden" aria-hidden>
                        <div
                          className="h-2 rounded-full bg-gradient-to-r from-green-400 to-blue-500"
                          style={{ width: `${s.level}%` }}
                        />
                      </div>

                      <div className="mt-2 flex flex-wrap gap-2">
                        {s.tech.map((t) => (
                          <span key={t} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-md">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;