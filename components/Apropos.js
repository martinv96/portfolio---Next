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
  Je m'appelle Martin, développeur web passionné de 28 ans. Après une reconversion professionnelle réfléchie, j’ai entrepris une formation intensive au développement web et web mobile, avec pour objectif de donner un nouveau sens à ma carrière à travers la création d’outils numériques utiles et modernes.
</p>

<p className="text-lg mb-6">
  Au fil de ma formation, j’ai eu l’opportunité de travailler sur plusieurs projets concrets, notamment <strong>EasyDealz</strong> et <strong>Teona Passenger</strong>. Ces expériences m’ont permis de développer mes compétences techniques en <strong>Symfony</strong>, <strong>React</strong>, <strong>PHP</strong> ou encore <strong>JavaScript</strong>, tout en adoptant de bonnes pratiques de développement (versioning, API, responsive design...).
</p>

<p className="text-lg mb-6">
  Curieux, rigoureux et toujours motivé par l’apprentissage, je cherche aujourd’hui à rejoindre une équipe dynamique où je pourrai contribuer à des projets innovants, tout en continuant à progresser sur le plan technique et humain. Mon objectif : évoluer dans un environnement stimulant où je pourrai mettre mes compétences au service d’une vision collective.
</p>


          {/* Bouton de téléchargement */}
          <div className="mt-8 text-center md:text-left">
            <a
              href="/cv.pdf"
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
