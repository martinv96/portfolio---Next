import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: "easydealz",
    title: "EasyDealz",
    description: "Plateforme de bons plans développée avec Symfony et React.",
    imgSrc: "/easydealz.JPG",
    details: (
      <>
        <p>
          EasyDealz est une application e-commerce développée avec Symfony, offrant une structure back-end robuste, une base de données MySQL, une gestion sécurisée des utilisateurs et des produits, et une interface moderne.
        </p>
        <ul className="list-disc ml-5 space-y-2 text-sm mt-4">
          <li><strong>Framework :</strong> Symfony 7.1.*</li>
          <li><strong>Base de données :</strong> MySQL</li>
          <li><strong>Langages :</strong> PHP, HTML, CSS, JavaScript</li>
          <li><strong>Templates :</strong> Twig</li>
          <li><strong>Fonctionnalités :</strong> Auth, CRUD, panier</li>
          <li><strong>Déploiement :</strong> Docker, Render</li>
        </ul>
      </>
    ),
  },
  {
    id: "teona",
    title: "Teona Passenger",
    description: "Application de gestion de passagers avec API REST Symfony et React.",
    imgSrc: "/teona.JPG",
    details: (
      <>
        <p>
          Application de comparaison de prix dans le domaine du tourisme (vols, hébergements, hôtels), avec une interface moderne, responsive, et une barre de recherche dynamique.
        </p>
        <ul className="list-disc ml-5 space-y-2 text-sm mt-4">
          <li><strong>Front-end :</strong> React + Vite</li>
          <li><strong>Langages :</strong> JavaScript, HTML5, CSS (Tailwind)</li>
          <li><strong>Routing :</strong> React Router</li>
          <li><strong>Design :</strong> Composants réutilisables, responsive</li>
          <li><strong>Déploiement prévu :</strong> Netlify, Vercel</li>
        </ul>
      </>
    ),
  },
  {
    id: "codebyme",
    title: "CodeByMe",
    description: "Plateforme collaborative de partage de code en Python avec Flask.",
    imgSrc: "/codeByMe.JPG",
    details: (
      <>
        <p>
          CodeByMe permet aux développeurs de partager et commenter des extraits de code dans un espace communautaire.
        </p>
        <ul className="list-disc ml-5 space-y-2 text-sm mt-4">
          <li><strong>Back-end :</strong> Flask</li>
          <li><strong>Base :</strong> SQLite</li>
          <li><strong>Front :</strong> Jinja2, JS</li>
          <li><strong>Fonctionnalités :</strong> Auth, snippets, likes, commentaires</li>
          <li><strong>Déploiement :</strong> Render, Docker</li>
        </ul>
      </>
    ),
  },
];

export default function SectionProjets() {
  const [modalProjectId, setModalProjectId] = useState(null);
  const closeModal = () => setModalProjectId(null);
  const handleBackdropClick = (e) => {
    if (e.target.id === "modal-backdrop") closeModal();
  };

  const modalProject = projects.find((p) => p.id === modalProjectId);

  return (
    <section id="projects" className="w-full py-24 px-4 bg-white text-gray-900 border-t border-gray-300">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-extrabold mb-6 text-center">Mes Projets</h2>
        <p className="text-center text-gray-600 mb-14">Explorez quelques projets clés que j'ai réalisés récemment.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(({ id, title, description, imgSrc }) => (
            <motion.div
              key={id}
              whileHover={{ scale: 1.02 }}
              className="cursor-pointer bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
              onClick={() => setModalProjectId(id)}
            >
              <div className="relative w-full h-56 overflow-hidden rounded-t-xl bg-white">
                <Image
                  src={imgSrc}
                  alt={title}
                  fill
                  className={`transition-transform duration-300 ${id === "easydealz" || id === "teona"
                      ? "object-contain scale-95"
                      : "object-cover"
                    }`}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={id === "easydealz"}
                />
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold mb-2">{title}</h3>
                <p className="text-sm text-gray-600 flex-grow">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {modalProject && (
          <motion.div
            id="modal-backdrop"
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={handleBackdropClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white w-[92%] max-w-3xl rounded-xl p-6 relative overflow-y-auto max-h-[80vh] shadow-xl"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="absolute top-4 right-5 text-2xl font-bold text-gray-400 hover:text-red-500 transition"
                onClick={closeModal}
                aria-label="Fermer la modale"
              >
                &times;
              </button>
              <h2 className="text-2xl font-semibold mb-4">
                🚀 {modalProject.title}
              </h2>
              {modalProject.imgSrc && (
                <div className="mb-6">
                  <Image
                    src={modalProject.imgSrc}
                    alt={modalProject.title}
                    width={800}
                    height={450}
                    className="rounded-md object-contain w-full max-h-[450px]"
                  />
                </div>
              )}
              <div className="text-sm leading-relaxed">{modalProject.details}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
