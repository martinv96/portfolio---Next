import { useState, useEffect, useRef } from "react";

export default function Navbar({ theme, setTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");
  const [isMobile, setIsMobile] = useState(false);

  // Toggle thème
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Détection scroll
  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Détection resize
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Gestion maxHeight menu
  useEffect(() => {
    if (menuRef.current) {
      setMaxHeight(menuOpen ? `${menuRef.current.scrollHeight}px` : "0px");
    }
  }, [menuOpen]);

  // Sauvegarde thème dans localStorage
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Scroll vers section
  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  // Classes dynamiques navbar selon scroll et thème
  const navbarClass = scrolled
    ? theme === "light"
      ? "bg-white text-black shadow-md"
      : "bg-gray-900 text-white shadow-md"
    : theme === "light"
      ? "bg-white text-black"
      : "bg-transparent text-white";

  const mobileMenuBgClass = isMobile
    ? scrolled
      ? theme === "light"
        ? "bg-white text-black"
        : "bg-gray-900 text-white"
      : theme === "light"
        ? "bg-white text-black"
        : "bg-transparent text-white"
    : scrolled
      ? theme === "light"
        ? "bg-white text-black"
        : "bg-gray-900 text-white"
      : theme === "light"
        ? "bg-white text-black"
        : "bg-transparent text-white";

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex justify-between items-center py-4 px-6 z-50 transition-colors duration-300 ${navbarClass}`}
    >
      <div
        className="text-xl font-bold cursor-pointer"
        onClick={() => scrollToSection("#hero")}
      >
        Martin
      </div>

      {/* Bouton toggle thème */}
      <button
        onClick={toggleTheme}
        aria-label="Toggle theme"
        title="Changer le thème clair/sombre"
        className={`mr-4 p-2 rounded transition 
    ${theme === "light"
            ? "hover:bg-gray-400 hover:text-white"
            : "hover:bg-white hover:text-black"
          }`}
      >
        {theme === "light" ? "🔆" : "🌙"}
      </button>

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
        {[
          ["#hero", "Accueil"],
          ["#about", "À propos"],
          ["#skills", "Compétences"],
          ["#recommendations", "Recommandations"],
          ["#projects", "Projets"],
          ["#contact", "Contact"],
        ].map(([id, label]) => (
          <li key={id} className="border-b border-gray-300 md:border-0">
            <button
              onClick={() => scrollToSection(id)}
              className="block px-6 py-3 md:py-0 hover:text-blue-400 transition-colors duration-300 w-full text-left md:text-center"
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
