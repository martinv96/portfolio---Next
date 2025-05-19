import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex justify-between items-center py-4 px-8 z-50 transition-colors duration-300 ${
        scrolled ? "bg-white text-black" : "bg-transparent text-white"
      }`}
    >
      <div className="text-xl font-bold">Martin</div>
      <ul className="flex space-x-6">
        <li>
          <a href="#hero" className={`hover:text-blue-400 transition-colors duration-300`}>
            Accueil
          </a>
        </li>
        <li>
          <a href="#projects" className={`hover:text-blue-400 transition-colors duration-300`}>
            Projets
          </a>
        </li>
        <li>
          <a href="#about" className={`hover:text-blue-400 transition-colors duration-300`}>
            À propos
          </a>
        </li>
        <li>
          <a href="#contact" className={`hover:text-blue-400 transition-colors duration-300`}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
