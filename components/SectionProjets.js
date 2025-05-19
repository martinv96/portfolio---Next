import { motion } from "framer-motion";

export default function SectionProjets() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-20 max-w-5xl mx-auto px-6"
    >
      <h2 className="text-4xl font-bold mb-8">Mes Projets</h2>
      {/* Liste de projets ici */}
    </motion.section>
  );
}
