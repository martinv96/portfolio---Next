import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setMenuOpen(false); // ferme le menu si on passe en desktop
      }
    }

    handleResize(); // initialise
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (menuRef.current) {
      if (menuOpen) {
        setMaxHeight(menuRef.current.scrollHeight + "px");
      } else {
        setMaxHeight("0px");
      }
    }
  }, [menuOpen]);

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false); // ferme menu mobile au clic
    }
  };

  const mobileMenuBgClass = !scrolled
    ? "bg-transparent text-white"
    : "bg-white text-black";

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex justify-between items-center py-4 px-6 z-50 transition-colors duration-300 ${
        scrolled ? "bg-white text-black shadow-md" : "bg-transparent text-white"
      }`}
    >
      <div
        className="text-xl font-bold cursor-pointer"
        onClick={() => scrollToSection("#hero")}
      >
        Martin
      </div>

      {/* Bouton burger visible uniquement en mobile */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {menuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Menu responsive */}
      <ul
        ref={menuRef}
        className={`md:flex md:flex-row md:space-x-6 md:static absolute top-full left-0 w-full md:w-auto overflow-hidden
          transition-[max-height,opacity] duration-500 ease-in-out
          ${mobileMenuBgClass}
          md:max-h-full md:opacity-100 md:bg-transparent md:text-inherit
        `}
        style={
          isMobile
            ? {
                maxHeight: maxHeight,
                opacity: menuOpen ? 1 : 0,
                pointerEvents: menuOpen ? "auto" : "none",
              }
            : {}
        }
      >
        <li>
          <button
            onClick={() => scrollToSection("#hero")}
            className="block px-6 py-3 md:py-0 hover:text-blue-400 transition-colors duration-300 w-full text-left md:text-center"
          >
            Accueil
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("#skills")}
            className="block px-6 py-3 md:py-0 hover:text-blue-400 transition-colors duration-300 w-full text-left md:text-center"
          >
            Compétences
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("#about")}
            className="block px-6 py-3 md:py-0 hover:text-blue-400 transition-colors duration-300 w-full text-left md:text-center"
          >
            À propos
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("#projects")}
            className="block px-6 py-3 md:py-0 hover:text-blue-400 transition-colors duration-300 w-full text-left md:text-center"
          >
            Projets
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("#contact")}
            className="block px-6 py-3 md:py-0 hover:text-blue-400 transition-colors duration-300 w-full text-left md:text-center"
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}
