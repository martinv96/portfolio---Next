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

      {/* Toujours rendu, mais caché selon showIntro */}
      <div style={{ display: showIntro ? "none" : "block" }}>
        {/* Particules visibles uniquement sur Hero */}
        <ParticlesBackground />
        <Navbar />
        <main>
          <Hero />
          <Apropos />
        </main>

        {/* Sections sans fond de particules */}
        <div className="relative z-10">
          <Competences />
          <Recommandations />
          <SectionProjets />
          <ContactezMoi />
        </div>
      </div>
    </>
  );
}
