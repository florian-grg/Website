import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => (
    <footer className="bg-gray-100 text-gray-600 py-6 mt-12 border-t">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-center gap-6 text-sm">
            <span>
                © {new Date().getFullYear()} Florian GIURGIU. Tous droits réservés.
            </span>
            <span>
                <a href="#/mentions-legales" className="text-blue-600 underline">Mentions légales</a>
            </span>
            <span>
                Hébergement : GitHub Pages.
            </span>
            <span>
                Contact : florian.giurgiu3@gmail.com
            </span>
            <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/florian-giurgiu/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin size={28} className="text-gray-600 hover:text-gray-800" />
            </a>
            <a href="https://github.com/florian-grg" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub size={28} className="text-gray-600 hover:text-gray-800" />
            </a>
            </div>
            <a href="https://github.com/florian-grg/florian-grg.github.io" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                Voir le code source du site sur Github
            </a>
        </div>
    </footer>
);

export default Footer;
