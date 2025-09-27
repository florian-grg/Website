import { smoothScrollTo } from "../animations/smoothScrollTo";
import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';

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
    <nav className={`fixed w-full z-20 ${scrolled ? "bg-[#050d33ff] backdrop-blur-lg" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <img src="/logo.png" alt="Logo" className="h-8 w-8" />
        <div className="w-full flex flex-wrap space-x-4 space-y-0 justify-end items-center">
          {[
            { path: '/', label: 'Accueil' },
            { path: '/portfolio', label: 'À propos' },
            { path: '/contact', label: 'Contact' },
          ].map(({ path, href, label }) => (
            <a
              key={path}
              href={path}
              className={"px-3 py-1 rounded-lg text-white font-medium hover:text-blue-600 transition"}
              onClick={e => {
                e.preventDefault();
                if (location.pathname === path) {
                  // same page: scroll directly
                  smoothScrollTo(href);
                } else {
                  // navigate to path then scroll after a short delay
                  navigate(path);
                  setTimeout(() => smoothScrollTo(href), 250);
                }
              }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
