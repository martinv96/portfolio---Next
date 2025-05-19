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
          EasyDealz est une application e-commerce développée avec Symfony, offrant une structure
          back-end robuste, une base de données MySQL, une gestion sécurisée des utilisateurs et
          des produits, et une interface moderne.
        </p>
        <ul className="list-disc ml-5 space-y-2 text-sm mt-4">
          <li><strong>Framework :</strong> Symfony 7.1.*</li>
          <li><strong>Base de données :</strong> MySQL</li>
          <li><strong>Langages :</strong> PHP, HTML, CSS, JavaScript</li>
          <li><strong>Système de templates :</strong> Twig</li>
          <li><strong>Stockage des images :</strong> Upload local</li>
          <li><strong>Entités :</strong> User, Product, Cart, Order…</li>
          <li><strong>Fonctionnalités utilisateur :</strong> Authentification, profil</li>
          <li><strong>Déploiement :</strong> Docker, Render, Railway</li>
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
          Teona Passenger est une application de comparaison de prix dans le domaine du tourisme
          (vols, hébergements, hôtels, etc.). Le projet est développé en React, avec une interface
          unifiée pour toutes les catégories, une barre de recherche dynamique, et une attention
          particulière portée à l’expérience utilisateur, à la responsivité et à la performance.
        </p>
        <ul className="list-disc ml-5 space-y-2 text-sm mt-4">
          <li><strong>Framework Front-end :</strong> React (Vite)</li>
          <li><strong>Organisation :</strong> components/, pages/, style/</li>
          <li><strong>Langages :</strong> JavaScript, HTML5, CSS (TailwindCSS)</li>
          <li><strong>Données :</strong> API fictive ou à venir</li>
          <li><strong>Routage :</strong> React Router</li>
          <li><strong>Fonctionnalités utilisateur :</strong> Navigation fluide, recherche dynamique, SPA, responsive</li>
          <li><strong>Comparaison :</strong> Résultats simulés, filtres/tris prévus</li>
          <li><strong>Interface :</strong> Design moderne, responsive, composants réutilisables</li>
          <li><strong>Police :</strong> Inter (Google Fonts)</li>
          <li><strong>Tests & sécurité :</strong> Structure modulaire, tests à venir</li>
          <li><strong>SEO & accessibilité :</strong> HTML sémantique, balises SEO, conception accessible</li>
          <li><strong>Déploiement :</strong> Local avec Vite, prévu : Netlify/Vercel/Render</li>
          <li><strong>À venir :</strong> Connexion API réelles, auth, back-office, thème sombre, i18n</li>
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
        CodeByMe est une application web collaborative développée en Python avec le micro-framework Flask. 
        Elle permet aux utilisateurs de partager, commenter et améliorer des extraits de code dans un espace commun.
      </p>
      <ul className="list-disc ml-5 space-y-2 text-sm mt-4">
        <li><strong>Framework Back-end :</strong> Python Flask</li>
        <li><strong>Base de données :</strong> SQLite (ou autre selon configuration)</li>
        <li><strong>Langages :</strong> Python, HTML, CSS, JavaScript</li>
        <li><strong>Fonctionnalités :</strong> Authentification, création et édition de snippets, commentaires, système de likes</li>
        <li><strong>API REST :</strong> Pour gestion des snippets et interactions utilisateurs</li>
        <li><strong>Front-end :</strong> Templates Jinja2, intégration JavaScript minimaliste</li>
        <li><strong>Déploiement :</strong> Hébergement sur Render (ou autre), utilisation possible de Docker</li>
        <li><strong>Sécurité :</strong> Gestion des sessions, validation des formulaires, protection CSRF</li>
        <li><strong>À venir :</strong> Edition collaborative en temps réel, notifications, thèmes personnalisés</li>
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
    <section id="projects" className="w-full py-20 px-4 text-black bg-gray-100">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-10 text-center">Mes Projets</h2>
        <p className="text-center text-gray-600 mb-12">Présentation de mes dernières expériences.</p>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(({ id, title, description, imgSrc }) => (
            <div key={id} className="flex flex-col items-stretch h-full">
              <div className="flex flex-col bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 h-full">
                <div
                  onClick={() => setModalProjectId(id)}
                  className="cursor-pointer flex items-center justify-center h-[250px] bg-white rounded-t-md"
                >
                  <Image
                    src={imgSrc}
                    alt={title}
                    width={600}
                    height={400}
                    className="object-contain max-h-full mt-5 px-3"
                    priority={id === "easydealz"}
                  />
                </div>
                <div className="p-4 flex flex-col justify-between flex-grow text-center">
                  <h3 className="text-xl font-semibold mb-1">{title}</h3>
                  <p className="text-sm text-gray-700">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* MODALE AVEC TRANSITION */}
      <AnimatePresence>
        {modalProject && (
          <motion.div
            id="modal-backdrop"
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={handleBackdropClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-white max-w-3xl w-full rounded-lg p-6 relative overflow-y-auto max-h-[76vh]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="absolute top-3 right-4 text-xl font-bold text-red-500 hover:text-red-700 transition"
                onClick={closeModal}
                aria-label="Fermer la modale"
              >
                ✕
              </button>
              <h2 className="text-2xl font-bold mb-4">
                🎯 Plus de détails sur le projet {modalProject.title}
              </h2>

              {modalProject.imgSrc && (
                <div className="mb-6 flex justify-center">
                  <Image
                    src={modalProject.imgSrc}
                    alt={modalProject.title}
                    width={800}
                    height={500}
                    className="rounded-md object-contain max-h-[400px] w-auto"
                  />
                </div>
              )}

              {modalProject.details ? (
                modalProject.details
              ) : (
                <p>{modalProject.description}</p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
