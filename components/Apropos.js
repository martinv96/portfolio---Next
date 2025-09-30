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

          <p className="text-lg mb-6">
            Je m'appelle Martin Vallée, développeur web passionné basé en Île-de-France. Après une reconversion professionnelle réfléchie, j’ai suivi une formation intensive en développement web et web mobile à Doranco et Nexa Digital School, avec pour objectif de construire des outils numériques modernes et utiles, tout en consolidant mes compétences techniques.
          </p>

          <p className="text-lg mb-6">
            Au cours de ma formation et de mes expériences professionnelles, j’ai participé à plusieurs projets concrets, tels que <strong>EasyDealz</strong>, <strong>Teona Passenger</strong>, une <strong>API Laravel pour la gestion d’événements</strong>, ainsi que l’<strong>Application SpaceX en Vue.js</strong> et un <strong>projet Angular </strong>  de gestion productive. Ces projets m’ont permis de développer mes compétences en <strong>Symfony</strong>, <strong>React</strong>, <strong>Vue.js</strong>, <strong>Angular</strong>, <strong>PHP</strong>, <strong>JavaScript/TypeScript</strong> et <strong>Python</strong>, tout en appliquant les bonnes pratiques du développement : MVC, API RESTful, responsive design, tests unitaires et fonctionnels, CI/CD.
          </p>

          <p className="text-lg mb-6">
            Curieux, rigoureux et motivé par l’apprentissage, je cherche aujourd’hui à rejoindre une équipe dynamique où je pourrai contribuer à des projets innovants, tout en continuant à progresser techniquement et humainement. Mon objectif : évoluer dans un environnement stimulant, collaboratif et orienté solutions, où je pourrai mettre mes compétences au service de projets ambitieux et concrets.
          </p>



          {/* Bouton de téléchargement */}
          <div className="mt-8 text-center md:text-left">
            <a
              href="/CV - Fullstack.pdf"
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
