import { smoothScrollTo } from "../animations/smoothScrollTo";
import React from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);

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
    <nav className={`fixed w-full z-20 ${scrolled ? "bg-[#050d33ff]/90 backdrop-blur-lg" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-8 w-8" />
          <span className={"ml-2 text-2xl text-white font-extrabold tracking-tight hover:text-blue-600"}>
            Florian
          </span>
        </a>
        <div className="w-full flex flex-wrap space-x-4 space-y-0 justify-end items-center">
          {[
            { href: "#about", label: "À propos" },
            { href: "#projects", label: "Projets" },
            { href: "#experiences", label: "Expériences" },
            { href: "#skills", label: "Compétences" },
            { href: "#services", label: "Services" },
            { href: "#contact", label: "Contact" },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={"px-3 py-1 rounded-lg text-white font-medium hover:text-blue-600 transition"}
              onClick={e => {
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  smoothScrollTo(href);
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
