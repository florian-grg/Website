import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white/60 backdrop-blur-lg border-b border-blue-100 fixed w-full z-20">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-8 w-8" />
          <span className="ml-2 text-2xl font-extrabold text-blue-600 tracking-tight">
            Florian
          </span>
        </Link>
        <div className="w-full flex flex-wrap min-[600px]:flex-nowrap min-[600px]:space-x-4 space-y-2 min-[600px]:space-y-0 justify-center min-[600px]:justify-end items-center">
          <Link to="/about" className="px-3 py-1 rounded-lg font-medium text-blue-600 hover:bg-blue-50 transition">À propos</Link>
          <Link to="/projects" className="px-3 py-1 rounded-lg font-medium text-blue-600 hover:bg-blue-50 transition">Projets</Link>
          <Link to="/experiences" className="px-3 py-1 rounded-lg font-medium text-blue-600 hover:bg-blue-50 transition">Expériences</Link>
          <Link to="/skills" className="px-3 py-1 rounded-lg font-medium text-blue-600 hover:bg-blue-50 transition">Compétences</Link>
          <Link to="/services" className="px-3 py-1 rounded-lg font-medium text-blue-600 hover:bg-blue-50 transition">Services</Link>
          <Link to="/contact" className="px-3 py-1 rounded-lg font-medium text-blue-600 hover:bg-blue-50 transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
