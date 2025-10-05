import { smoothScrollTo } from "../animations/smoothScrollTo";
import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../logo.svg';

export default function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      if (
        window.location.pathname === "/mentions-legales"
      ) {
        setScrolled(false);
      } else if (
        window.scrollY > 0.9 * window.innerHeight
      ) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Update scroll state on scroll and on page navigation
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("popstate", handleScroll);
    window.addEventListener("pushstate", handleScroll); // For custom navigation events if used

    // Run once on mount to set initial state
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("popstate", handleScroll);
      window.removeEventListener("pushstate", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full py-1 z-20 ${scrolled ? "bg-[#050d33ff] backdrop-blur-lg" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
  <img src={logo} alt="Logo" className="h-8 w-8" />
        <div className="w-full flex flex-wrap space-x-4 space-y-0 justify-end items-center">
          {[
            { path: '/', label: 'Accueil', hash: '#header' },
            { path: '/portfolio', label: 'À propos', hash: '#about' },
            { path: '/service', label: 'Services', hash: '#service' },
            { path: '/contact', label: 'Contact', hash: '#contact' },
          ].map(({ path, hash, label }) => {
            const isActive = location.pathname === path;
            return (
              <a
                key={path}
                href={path}
                aria-current={isActive ? 'page' : undefined}
                className={`px-3 py-1 rounded-lg font-medium transition ${isActive ? 'bg-blue-50 text-blue-700 ring-2 ring-blue-200' : 'text-white hover:text-blue-600'}`}
                onClick={e => {
                  e.preventDefault();
                  if (location.pathname === path) {
                    // same page: scroll directly to the hash if present
                    if (hash) smoothScrollTo(hash);
                  } else {
                    // navigate to path then scroll after a short delay
                    navigate(path);
                    if (hash) setTimeout(() => smoothScrollTo(hash), 250);
                  }
                }}
              >
                {label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
