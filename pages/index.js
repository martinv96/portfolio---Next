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
  const [theme, setTheme] = useState("dark");
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme, hasMounted]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 6500);
    return () => clearTimeout(timer);
  }, []);

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
            <Intro onFinish={() => setShowIntro(false)} />
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
