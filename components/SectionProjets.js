import { useState, useCallback } from "react";
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
          EasyDealz est une application e-commerce développée avec Symfony, offrant une structure back-end robuste, une base de données MySQL, une gestion sécurisée des utilisateurs et des produits, et une interface moderne. Le projet est axé sur l’expérience utilisateur, le SEO, la sécurité et la conformité RGPD.
        </p>

        <h3 className="mt-6 font-semibold">🧱 Structure du projet</h3>
        <ul className="list-disc ml-5 space-y-1 text-sm">
          <li>Framework : Symfony 7.1.*</li>
          <li>Base de données : MySQL (PHPMyAdmin en local, Railway en ligne)</li>
          <li>Langages : PHP, HTML, CSS, JavaScript (avec TailwindCSS)</li>
          <li>Système de templates : Twig</li>
          <li>Stockage des images : Upload local (produits et profils)</li>
          <li>Entités : User, Product, Category, Videogame, DVD, Phones, Cart, CartItem, Order, OrderItem</li>
        </ul>

        <h3 className="mt-6 font-semibold">👤 Fonctionnalités utilisateur</h3>
        <ul className="list-disc ml-5 space-y-1 text-sm">
          <li>Inscription et connexion avec formulaire personnalisé</li>
          <li>Page de profil avec modification des données</li>
          <li>Email de validation + email de confirmation d'inscription</li>
          <li>Visite des profils publics d'autres utilisateurs</li>
          <li>Thème clair / sombre activable par bouton</li>
        </ul>

        <h3 className="mt-6 font-semibold">🛍️ Fonctionnalités e-commerce</h3>
        <ul className="list-disc ml-5 space-y-1 text-sm">
          <li>Produits classés par catégories : Jeux vidéo, Téléphones, DVD</li>
          <li>Création / modification de produits par les vendeurs</li>
          <li>Gestion de collections publiques / privées</li>
          <li>Base prête pour panier, commandes, système de paiement à venir</li>
        </ul>

        <h3 className="mt-6 font-semibold">🖼️ Interface utilisateur</h3>
        <ul className="list-disc ml-5 space-y-1 text-sm">
          <li>Responsive (desktop & mobile)</li>
          <li>Design moderne avec Flexbox, Grid et Tailwind</li>
          <li>Composants réutilisables : cartes, boutons, etc.</li>
          <li>Google Fonts intégré (Inter)</li>
        </ul>

        <h3 className="mt-6 font-semibold">🧪 Tests & sécurité</h3>
        <ul className="list-disc ml-5 space-y-1 text-sm">
          <li>Tests unitaires avec PHPUnit</li>
          <li>Contrôle des accès (ex : collections privées uniquement modifiables par leur propriétaire)</li>
          <li>Tests de sécurité en cours</li>
          <li>Mise en conformité RGPD</li>
        </ul>

        <h3 className="mt-6 font-semibold">🌐 SEO & Accessibilité</h3>
        <ul className="list-disc ml-5 space-y-1 text-sm">
          <li>Travail en cours sur le SEO</li>
          <li>Structuration sémantique du HTML</li>
          <li>Préparation des balises <code>title</code>, <code>meta</code>, etc.</li>
        </ul>

        <h3 className="mt-6 font-semibold">🐳 Déploiement</h3>
        <ul className="list-disc ml-5 space-y-1 text-sm">
          <li>Docker pour l’environnement de dev</li>
          <li>Render pour l’hébergement</li>
          <li>Base distante via Railway</li>
        </ul>

        <h3 className="mt-6 font-semibold">🛠️ Fonctionnalités à venir</h3>
        <ul className="list-disc ml-5 space-y-1 text-sm">
          <li>Système de paiement (Stripe ou PayPal)</li>
          <li>Finalisation du module de commande</li>
          <li>Filtres et tri des produits</li>
          <li>Messagerie ou notation entre vendeurs et acheteurs</li>
          <li>Suppression de compte et cookies conformes RGPD</li>
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
          Teona Passenger est une application de comparaison de prix dans le domaine du tourisme (vols, hébergements, hôtels, etc.). Le projet est développé en React, avec une interface unifiée pour toutes les catégories, une barre de recherche dynamique, et une attention particulière portée à l’expérience utilisateur, à la responsivité et à la performance.
        </p>

        <h3 className="mt-6 font-semibold">🧱 Structure du projet</h3>
        <ul className="list-disc ml-5 space-y-1 text-sm">
          <li>Framework Front-end : React (Vite)</li>
          <li>Organisation : components/, pages/, style/</li>
          <li>Langages : JavaScript, HTML5, CSS (TailwindCSS)</li>
          <li>Données : API fictive ou à venir</li>
          <li>Routage : React Router</li>
        </ul>

        <h3 className="mt-6 font-semibold">👤 Fonctionnalités utilisateur</h3>
        <ul className="list-disc ml-5 space-y-1 text-sm">
          <li>Navigation fluide entre les pages de catégories</li>
          <li>Barre de recherche dynamique selon la catégorie</li>
          <li>Interface cohérente et fluide (SPA)</li>
          <li>Affichage adapté aux écrans desktop et mobile</li>
          <li>Prévision d’un système de compte utilisateur</li>
        </ul>

        <h3 className="mt-6 font-semibold">🔍 Fonctionnalités de comparaison</h3>
        <ul className="list-disc ml-5 space-y-1 text-sm">
          <li>Page d’accueil par défaut : vols</li>
          <li>Chaque catégorie comprend : page dédiée, barre de recherche spécifique, résultats simulés</li>
          <li>Filtres et tris avancés prévus (prix, durée, avis)</li>
        </ul>

        <h3 className="mt-6 font-semibold">🖼️ Interface utilisateur</h3>
        <ul className="list-disc ml-5 space-y-1 text-sm">
          <li>Design moderne avec TailwindCSS</li>
          <li>Grilles & Flexbox pour une mise en page fluide</li>
          <li>Composants réutilisables (Header, Footer, etc.)</li>
          <li>Police : Inter (Google Fonts)</li>
          <li>Responsive mobile-first</li>
        </ul>

        <h3 className="mt-6 font-semibold">🧪 Tests & sécurité (à venir)</h3>
        <ul className="list-disc ml-5 space-y-1 text-sm">
          <li>Tests unitaires prévus (React Testing Library / Jest)</li>
          <li>Structure pensée pour modularité & testabilité</li>
          <li>Respect du principe de séparation des responsabilités</li>
        </ul>

        <h3 className="mt-6 font-semibold">🌐 SEO & Accessibilité</h3>
        <ul className="list-disc ml-5 space-y-1 text-sm">
          <li>HTML sémantique (section, article, etc.)</li>
          <li>Balises <code>title</code> et <code>meta</code> pour le SEO</li>
          <li>Accessibilité pensée dès la conception</li>
        </ul>

        <h3 className="mt-6 font-semibold">🚀 Déploiement</h3>
        <ul className="list-disc ml-5 space-y-1 text-sm">
          <li>Développement local avec Vite</li>
          <li>Déploiement prévu : Netlify, Vercel ou Render</li>
          <li>Connexion future à un CMS ou base distante</li>
        </ul>

        <h3 className="mt-6 font-semibold">🛠️ Fonctionnalités à venir</h3>
        <ul className="list-disc ml-5 space-y-1 text-sm">
          <li>Connexion à une API REST Symfony sécurisée</li>
          <li>Authentification utilisateur</li>
          <li>Commentaires et notes sur les résultats</li>
          <li>Intégration de paiements pour réservation</li>
        </ul>
      </>
    ),
  }
  ,
  {
    id: "codebyme",
    title: "CodeByMe",
    description: "Plateforme collaborative de partage de code en Python avec Flask.",
    imgSrc: "/codeByMe.JPG",
    details: (
      <>
        <p className="mb-4">
          CodeByMe permet aux développeurs de partager et commenter des extraits de code dans un espace communautaire.
        </p>

        <p>
          CodeByMe est un projet disponible ici : <a href="https://codebyme.onrender.com/" target="_blank" rel="noopener noreferrer" className="underline">https://codebyme.onrender.com/</a>
        </p>
        <h3 className="mt-6 font-semibold">🧱 Structure du projet</h3>
        <ul className="list-disc ml-5 space-y-1 text-sm">
          <li>Framework : Flask (Python)</li>
          <li>Templates : Jinja2</li>
          <li>Langages : Python, HTML, CSS, JavaScript</li>
          <li>Organisation : routes.py, templates/, static/</li>
          <li>Base de données : SQLite (simple)</li>
        </ul>

        <h3 className="mt-6 font-semibold">👤 Fonctionnalités utilisateur</h3>
        <ul className="list-disc ml-5 space-y-1 text-sm">
          <li>Présentation dynamique des compétences</li>
          <li>Formulaire de contact connecté à une API Next.js</li>
          <li>Affichage de projets avec détails en modales</li>
          <li>Thème clair/sombre activable</li>
        </ul>

        <h3 className="mt-6 font-semibold">🖼️ Interface utilisateur</h3>
        <ul className="list-disc ml-5 space-y-1 text-sm">
          <li>Design simple, moderne et épuré</li>
          <li>Responsive mobile-first</li>
          <li>Animations CSS légères</li>
          <li>Composants React intégrés côté front</li>
        </ul>

        <h3 className="mt-6 font-semibold">🧪 Tests & sécurité</h3>
        <ul className="list-disc ml-5 space-y-1 text-sm">
          <li>Protection contre injection SQL et XSS</li>
          <li>Validation des données côté serveur</li>
          <li>Tests unitaires Python (Pytest)</li>
        </ul>

        <h3 className="mt-6 font-semibold">🌐 SEO & Accessibilité</h3>
        <ul className="list-disc ml-5 space-y-1 text-sm">
          <li>Balises meta et titles optimisées</li>
          <li>Navigation accessible au clavier</li>
          <li>Structure sémantique</li>
        </ul>

        <h3 className="mt-6 font-semibold">🚀 Déploiement</h3>
        <ul className="list-disc ml-5 space-y-1 text-sm">
          <li>Hébergement sur Heroku / Render</li>
          <li>CI/CD basique avec GitHub Actions</li>
          <li>SSL activé</li>
        </ul>

        <h3 className="mt-6 font-semibold">🛠️ Fonctionnalités à venir</h3>
        <ul className="list-disc ml-5 space-y-1 text-sm">
          <li>Ajout d’une section blog</li>
          <li>Optimisations SEO avancées</li>
          <li>Intégration de nouveaux projets</li>
        </ul>
      </>
    ),

  },
];

export default function SectionProjets({ theme }) {
  const [modalId, setModalId] = useState(null);
  const closeModal = useCallback(() => setModalId(null), []);

  const handleBackdropClick = useCallback(
    (e) => {
      if (e.target.id === "modal-backdrop") {
        closeModal();
      }
    },
    [closeModal]
  );

  const currentProject = projects.find((p) => p.id === modalId) || null;

  // Classes dynamiques selon thème
  const sectionBg = theme === "light" ? "bg-white" : "bg-gray-900";
  const sectionText = theme === "light" ? "text-gray-900" : "text-gray-100";
  const sectionBorder = theme === "light" ? "border-gray-300" : "border-gray-700";
  const cardBg = theme === "light" ? "bg-gray-50" : "bg-gray-800";
  const cardBorder = theme === "light" ? "border-gray-200" : "border-gray-700";
  const cardTextTitle = theme === "light" ? "text-gray-800" : "text-gray-200";
  const cardTextExcerpt = theme === "light" ? "text-gray-700" : "text-gray-300";
  const buttonBg = "bg-blue-600 hover:bg-blue-700";
  const buttonText = "text-white";
  const modalBg = theme === "light" ? "bg-white" : "bg-gray-800";
  const modalText = theme === "light" ? "text-gray-900" : "text-gray-100";
  const modalBorder = theme === "light" ? "border-gray-200" : "border-gray-700";
  const closeBtnText = theme === "light" ? "text-gray-600 hover:text-gray-900" : "text-gray-400 hover:text-white";

  return (
    <section
      id="projects"
      className={`w-full py-24 px-6 ${sectionBg} ${sectionText} border-t ${sectionBorder}`}
    >
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-bold text-center mb-10">Mes Projets</h2>
        <p className="max-w-2xl mx-auto text-center text-lg leading-relaxed mb-16">
          Voici quelques projets que j’ai développés, avec descriptions et détails.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map(({ id, title, description, imgSrc }) => (
            <motion.div
              key={id}
              className={`border ${cardBorder} rounded-xl p-6 shadow-sm hover:shadow-md cursor-pointer flex flex-col ${cardBg} transition-shadow duration-300`}
              onClick={() => setModalId(id)}
              whileHover={{ scale: 1.04 }}
            >
              <div className="relative w-full h-48 mb-5 rounded-lg overflow-hidden">
                <Image
                  src={imgSrc}
                  alt={`Image du projet ${title}`}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
              </div>
              <h3 className={`text-2xl font-semibold mb-3 ${cardTextTitle}`}>{title}</h3>
              <p className={`flex-grow mb-6 text-sm ${cardTextExcerpt}`}>{description}</p>
              <button
                className={`${buttonBg} ${buttonText} font-semibold px-5 py-2 rounded-lg self-start`}
                onClick={(e) => {
                  e.stopPropagation(); // Empêche la fermeture ou ouverture multiple
                  setModalId(id);
                }}
                type="button"
              >
                Voir les détails
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* MODALE */}
      <AnimatePresence>
        {currentProject && (
          <motion.div
            id="modal-backdrop"
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-6 mt-16"
            onClick={handleBackdropClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={`max-w-full md:max-w-4xl w-full max-h-[90vh] rounded-2xl p-8 relative flex flex-col overflow-auto shadow-xl ${modalBg} ${modalText} border ${modalBorder}`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className={`absolute top-4 right-5 text-3xl font-bold ${closeBtnText} transition z-20`}
                onClick={closeModal}
                aria-label="Fermer la modale"
                type="button"
              >
                &times;
              </button>
              <h2 className="text-3xl font-bold mb-6">{currentProject.title}</h2>
              <div className="mb-6">{currentProject.details}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}