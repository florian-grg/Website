import Seo from "../components/Seo";
import { motion } from "framer-motion";
import { fadeIn } from "../animations/fadeIn";

const About = () => (
  <>
    <Seo title="À propos | Portfolio Florian GIURGIU" description="À propos de Florian GIURGIU, développeur web, IA, optimisation." />
     <section className="w-full py-16 px-6">
      {/* Bloc principal : photo + texte */}
      <motion.div
        className="p-8 flex flex-row items-center justify-center gap-8 mb-8"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-blue-700 mb-2">À propos de moi</h1>
      </motion.div>
      <motion.div
        className="px-64 flex flex-col md:flex-row items-center justify-center gap-32 mb-8"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
      >
        <div>
          <p className="font-serif text-gray-700">
            Bonjour et bienvenue sur mon site !
            <br/><br/>
            Je m'appelle Florian Giurgiu, étudiant en dernière année d'école d'ingénieur à Télécom Saint-Étienne et actuellement en échange Erasmus à l'Université de Padoue en Italie. Passionné par l'Intelligence Artificielle, la Vision par Ordinateur et le Développement Logiciel, j'aime concevoir et expérimenter des solutions innovantes alliant mathématiques, programmation et créativité.
            <br/><br/>
            Curieux et persévérant, je m'intéresse autant à l'apprentissage profond (Deep Learning, Réseaux de neurones, Optimisation) qu'au développement full stack pour donner vie à des projets concrets. J'ai eu l'occasion de travailler sur des projets variés : détection et appariement d'images par Deep Learning, développement d'applications interactives en Java et Qt, ainsi que la création de sites modernes avec React et Tailwind CSS.
            <br/><br/>
            Au-delà de mes études, je suis passionné de musculation et de handball, et je pratique la guitare depuis plusieurs années. J'aime aussi m'investir dans la vie associative, notamment à travers l'organisation d'événements E-Sport et culturels. Je parle couramment le français et le roumain, et j'ai également un bon niveau d'anglais (B2), ainsi que des notions en espagnol (A2) et en allemand (A1).
            <br/><br/>
            Mon objectif est de mettre mes compétences au service de projets ambitieux et innovants, dans lesquels je peux apprendre, partager et avoir un impact positif.
          </p>
        </div>
        <img
          src="/pp.png"
          alt="Florian GIURGIU"
          className="w-80 h-80 rounded-full border-4 border-blue-700 object-cover"
        />
      </motion.div>
    </section>
  </>
);

export default About;
