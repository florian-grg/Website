import React from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0.95 * window.innerHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-20 ${scrolled ? "bg-white/70 backdrop-blur-lg" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#accueil" className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-8 w-8" />
          <span className={`ml-2 text-2xl font-extrabold tracking-tight ${scrolled ? "text-blue-600 hover:bg-blue-50 " : "text-white"}`}>
            Florian
          </span>
        </a>
        <div className="w-full flex flex-wrap space-x-4 space-y-0 justify-end items-center">
          <a href="#about" className={`px-3 py-1 rounded-lg font-medium transition ${scrolled ? "text-blue-600 hover:bg-blue-50 " : "text-white"}`}>À propos</a>
          <a href="#projects" className={`px-3 py-1 rounded-lg font-medium transition ${scrolled ? "text-blue-600 hover:bg-blue-50 " : "text-white"}`}>Projets</a>
          <a href="#experiences" className={`px-3 py-1 rounded-lg font-medium transition ${scrolled ? "text-blue-600 hover:bg-blue-50 " : "text-white"}`}>Expériences</a>
          <a href="#skills" className={`px-3 py-1 rounded-lg font-medium transition ${scrolled ? "text-blue-600 hover:bg-blue-50 " : "text-white"}`}>Compétences</a>
          <a href="#services" className={`px-3 py-1 rounded-lg font-medium transition ${scrolled ? "text-blue-600 hover:bg-blue-50 " : "text-white"}`}>Services</a>
          <a href="#contact" className={`px-3 py-1 rounded-lg font-medium transition ${scrolled ? "text-blue-400 hover:bg-blue-50 " : "text-white"}`}>Contact</a>
        </div>
      </div>
    </nav>
  );
}
