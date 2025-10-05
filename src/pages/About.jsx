import Seo from "../components/Seo";
import { motion } from "framer-motion";
import { fadeIn } from "../animations/fadeIn";

const About = () => (
  <>
    <Seo title="À propos | Portfolio Florian GIURGIU" description="À propos de Florian GIURGIU, développeur web, IA, optimisation." />
    <section className="w-full py-16 px-6 md:px-12 lg:px-24">
      {/* Titre */}
      <motion.div
        className="p-4 flex items-center justify-center mb-8"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#050d33] mb-12 text-center">À propos de moi</h1>
      </motion.div>

      {/* Contenu: texte plus large (3/4) et photo plus petite (1/4) sur md+ */}
      <motion.div
        className="w-full flex flex-col-reverse justify-center md:flex-row items-start gap-8 md:gap-12 max-w-7xl mx-auto"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
      >
        {/* Texte (occuppe 3/4 sur md+) */}
        <div className="flex-1 md:w-3/4">
          <p className="font-serif text-gray-700 leading-relaxed text-justify text-base sm:text-lg">
            Bonjour, je m'appelle Florian Giurgiu, étudiant en dernière année d'école d'ingénieur à Télécom Saint-Étienne et actuellement en échange Erasmus à l'Université de Padoue en Italie. Passionné par l'Intelligence Artificielle, la Vision par Ordinateur et le Développement Logiciel, j'aime concevoir et expérimenter des solutions innovantes alliant mathématiques, programmation et créativité.
          </p>

          <p className="font-serif text-gray-700 leading-relaxed text-justify text-base sm:text-lg mt-4">
            Curieux et persévérant, je m'intéresse autant à l'apprentissage profond (Deep Learning, Réseaux de neurones, Optimisation) qu'au développement full stack pour donner vie à des projets concrets. J'ai eu l'occasion de travailler sur des projets variés : détection et appariement d'images par Deep Learning, développement d'applications interactives en Java et Qt, ainsi que la création de sites modernes avec React et Tailwind CSS.
          </p>

          <p className="font-serif text-gray-700 leading-relaxed text-justify text-base sm:text-lg mt-4">
            Au-delà de mes études, je suis passionné de musculation et de handball, et je pratique la guitare depuis plusieurs années. J'aime aussi m'investir dans la vie associative, notamment à travers l'organisation d'événements E-Sport et culturels. Je parle couramment le français et le roumain, et j'ai également un bon niveau d'anglais (B2), ainsi que des notions en espagnol (A2) et en allemand (A1).
          </p>

          <p className="font-serif text-gray-700 leading-relaxed text-justify text-base sm:text-lg mt-4">
            Mon objectif est de mettre mes compétences au service de projets ambitieux et innovants, dans lesquels je peux apprendre, partager et avoir un impact positif.
          </p>
        </div>

        {/* Photo (1/4 sur md+), centrée verticalement et alignée à droite */}
        <div className="w-full md:w-1/4 flex items-center justify-center">
          <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-blue-700 shadow-lg">
            <img
              src="/pp.png"
              alt="Portrait de Florian Giurgiu"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </section>
  </>
);

export default About;