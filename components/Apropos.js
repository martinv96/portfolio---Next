import { motion } from "framer-motion";

export default function Apropos() {
  return (
    <section
      className="w-full py-20 px-4 text-white"
      style={{ backgroundColor: "rgba(240, 50, 50, 0.85)" }}
      id="about"
    >
      <motion.div
        className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-center gap-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Photo profile */}
        <img
          src="/profile.jpg"
          alt="Photo de Martin"
          className="w-48 h-48 rounded-full object-cover flex-shrink-0 relative z-20"
        />

        {/* Texte */}
        <div className="max-w-3xl text-justify">
         <h2 className="text-4xl font-bold mb-8 text-center md:text-left">
  Parlons un peu de moi
</h2>

<p className="text-lg mb-6 leading-relaxed">
  Je m'appelle Martin Vallée, développeur web basé en Île-de-France. Actuellement en formation Concepteur Développeur d'Applications (CDA) en alternance au sein de Nexa Digital School, je construis des outils numériques robustes tout en répondant aux enjeux concrets du terrain. Passionné par l'évolution des technologies, je prévois de poursuivre mon cursus en Mastère Intelligence Artificielle afin de spécialiser mon expertise dans la Data et l'IA.
</p>

<p className="text-lg mb-6 leading-relaxed">
  Au travers de mes expériences, j’ai conçu des solutions structurantes comme GDAP (Gestion des Accès du Plessis), un système de gestion de parc et de workflows sous Symfony, ainsi que Teona Passenger en React. Mon expertise technique s'appuie sur des environnements variés comme Symfony, PHP, React et Vue.js, avec une attention constante portée aux bonnes pratiques : architecture MVC, APIs RESTful et gestion de bases de données relationnelles.
</p>

<p className="text-lg mb-6 leading-relaxed">
  Curieux, rigoureux et orienté solutions, je cherche à mettre mes compétences au service de projets ambitieux au sein d’équipes dynamiques. Mon objectif est d'allier la solidité du développement web traditionnel aux opportunités offertes par l'IA pour créer des applications innovantes et performantes.
</p>
          {/* Bouton de téléchargement */}
          <div className="mt-8 text-center md:text-left">
            <a
              href="/cv martin vallée - alternance_ia.pdf"
              download
              className="inline-block bg-white text-red-600 font-semibold px-6 py-3 rounded shadow hover:bg-red-100 transition relative z-20"
            >
              Télécharger mon CV
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
