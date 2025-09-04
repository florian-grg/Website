import React from "react";
import Seo from "../components/Seo";
import { motion } from "framer-motion";
import { fadeIn } from "../animations/fadeIn";

const skills = [
  "Python",
  "Java",
  "C/C++",
  "SQL",
  "MATLAB",
  "HTML",
  "CSS",
  "JavaScript",
  "PyTorch (Deep Learning)",
  "Qt (GUI)",
  "LaTeX",
  "Pack Office",
];

const Skills = () => (
  <>
    <Seo
      title="Compétences | Portfolio Florian GIURGIU"
      description="Compétences techniques de Florian GIURGIU : Python, Java, IA, web, etc."
    />
    <section className="max-w-6xl mx-auto py-16 px-6">
      <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">
          Compétences
        </h1>
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.map((skill, idx) => (
            <motion.span
              key={skill}
              className="bg-white bg-opacity-80 text-blue-700 px-4 py-2 rounded-full font-medium border border-blue-700 shadow-sm"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: idx * 0.05, duration: 0.3 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Skills;
