import { motion } from "framer-motion";

export default function Apropos() {
  return (
    <section
      className="w-full py-20 px-4 text-white"
      style={{ backgroundColor: "rgba(240, 50, 50, 0.85)" }} // rouge translucide
    >
      <motion.div
        className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-center gap-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Photo à gauche */}
        <img
          src="/profile.jpg"
          alt="Photo de Martin"
          className="w-48 h-48 rounded-full object-cover flex-shrink-0 relative z-50"
        />

        {/* Texte à droite */}
        <div className="max-w-3xl text-justify">
          <h2 className="text-4xl font-bold mb-8 text-center md:text-left">
            Faisons connaissance
          </h2>

          <p className="text-lg mb-6">
            Je m'appelle Martin, j'ai 28 ans et je suis développeur web et web mobile récemment diplômé. Après une reconversion professionnelle, j'ai choisi de me former aux technologies du web et je suis maintenant prêt à débuter ma carrière en tant que développeur junior.
          </p>

          <p className="text-lg mb-6">
            Au cours de ma formation, j'ai travaillé sur plusieurs projets passionnants, dont deux principaux : EasyDealz et Teona Passenger. Ces projets m'ont permis de perfectionner mes compétences en Symfony, React, PHP et bien plus encore.
          </p>

          <p className="text-lg mb-6">
            Aujourd'hui, je suis à la recherche de nouvelles opportunités professionnelles où je pourrai contribuer à des projets innovants et continuer à me perfectionner.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
