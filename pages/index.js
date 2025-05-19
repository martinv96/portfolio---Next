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

  // Défaut : dark, puis on check client-side
  const [theme, setTheme] = useState("dark");
  const [hasMounted, setHasMounted] = useState(false); // évite hydration mismatch

  // Lecture du thème après le montage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
    setHasMounted(true);
  }, []);

  // Synchronisation HTML + localStorage
  useEffect(() => {
    if (!hasMounted) return; // évite les erreurs au build

    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme, hasMounted]);

  // Timer pour l’intro
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 6500);
    return () => clearTimeout(timer);
  }, []);

  // Empêche le rendu avant montage pour éviter les bugs SSR
  if (!hasMounted) return null;

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
        <Navbar theme={theme} setTheme={setTheme} />
        <main>
          <Hero />
          <Apropos />
        </main>
        <div className="relative z-10">
          <Competences theme={theme} />
          <Recommandations theme={theme} />
          <SectionProjets theme={theme} />
          <ContactezMoi theme={theme} />
        </div>
      </div>
    </>
  );
}
