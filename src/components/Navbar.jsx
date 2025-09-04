export default function Navbar() {
  return (
    <nav className="bg-white/60 backdrop-blur-lg border-b border-blue-100 fixed w-full z-20">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#accueil" className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-8 w-8" />
          <span className="ml-2 text-2xl font-extrabold text-blue-600 tracking-tight">
            Florian
          </span>
        </a>
        <div className="w-full flex flex-wrap min-[600px]:flex-nowrap min-[600px]:space-x-4 space-y-2 min-[600px]:space-y-0 justify-center min-[600px]:justify-end items-center">
          <a href="#about" className="px-3 py-1 rounded-lg font-medium text-blue-600 hover:bg-blue-50 transition">À propos</a>
          <a href="#projects" className="px-3 py-1 rounded-lg font-medium text-blue-600 hover:bg-blue-50 transition">Projets</a>
          <a href="#experiences" className="px-3 py-1 rounded-lg font-medium text-blue-600 hover:bg-blue-50 transition">Expériences</a>
          <a href="#skills" className="px-3 py-1 rounded-lg font-medium text-blue-600 hover:bg-blue-50 transition">Compétences</a>
          <a href="#services" className="px-3 py-1 rounded-lg font-medium text-blue-600 hover:bg-blue-50 transition">Services</a>
          <a href="#contact" className="px-3 py-1 rounded-lg font-medium text-blue-600 hover:bg-blue-50 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}
