import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Socials() {
  return (
    <div className="flex gap-4 justify-center mt-4">
      <a href="https://www.linkedin.com/in/florian-giurgiu/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FaLinkedin size={28} className="text-gray-600 hover:text-gray-800" />
      </a>
      <a href="https://github.com/florian-grg" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <FaGithub size={28} className="text-gray-600 hover:text-gray-800" />
      </a>
    </div>
  );
}
