import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import SectionProjets from "../components/SectionProjets";
import Apropos from "../components/Apropos";
import ParticlesBackground from "../components/ParticlesBackground";
import Competences from "../components/Competences";
import ContactezMoi from "../components/ContactezMoi";
import Recommandations from "../components/Recommandations";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  // State theme remonté ici
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  // Sync theme with localStorage & document html class
  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 6500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            className="fixed inset-0 z-50"
          >
            <Intro />
          </motion.div>
        )}
      </AnimatePresence>

      <div style={{ display: showIntro ? "none" : "block" }}>
        <ParticlesBackground />
        {/* Passer theme & setTheme à Navbar */}
        <Navbar theme={theme} setTheme={setTheme} />
        <main>
          <Hero />
          <Apropos />
        </main>

        <div className="relative z-10">
          {/* Passer theme en props aux sections */}
          <Competences theme={theme} />
          <Recommandations theme={theme} />
          <SectionProjets theme={theme} />
          <ContactezMoi theme={theme} />
        </div>
      </div>
    </>
  );
}
