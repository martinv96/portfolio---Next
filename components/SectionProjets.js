import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: "gdap",
    title: "GDAP (Gestion des Accès du Plessis)",
    description: "Plateforme interne de gestion des ressources, services et workflows de validation pour les services municipaux.",
    imgSrc: "/mairie.JPG",
    details: (
      <>
        <p>
          GDAP est une application web robuste destinée aux services de la ville du Plessis-Trévise. Elle permet de gérer de manière centralisée les utilisateurs nominatifs, les services, et les ressources (logiciels et matériels). L'architecture repose sur Symfony et intègre un système complexe de validation (Workflows) pour automatiser et sécuriser les processus administratifs.
        </p>

        <a
          href="https://github.com/martinv96/gestion-demandes-acces"
          class="text-gray-300 hover:underline hover:text-gray-400 transition duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          Voir le code source
        </a>

        <h3 className="mt-6 font-semibold">🧱 Structure du projet</h3>
        <ul className="list-disc ml-5 space-y-1 text-sm">
          <li>Framework Back-end : Symfony 6/7</li>
          <li>Moteur de template : Twig (avec composants réutilisables)</li>
          <li>Architecture : MVC (Model-View-Controller)</li>
          <li>Base de données : MySQL / MariaDB (via Doctrine ORM)</li>
          <li>Organisation : Repository pattern, Services personnalisés</li>
        </ul>

        <h3 className="mt-6 font-semibold">👤 Gestion des utilisateurs & accès</h3>
        <ul className="list-disc ml-5 space-y-1 text-sm">
          <li>Authentification sécurisée (UserInterface, PasswordHasher)</li>
          <li>Transition vers des comptes nominatifs pour une meilleure traçabilité</li>
          <li>Système de rôles dynamique (dérivé du code service : ROLE_RH, ROLE_DSI, ROLE_ST)</li>
          <li>Contrôle d'accès granulaire via le SecurityBundle de Symfony</li>
          <li>Gestion complète des profils (Firstname, Lastname, Email unique)</li>
        </ul>

        <h3 className="mt-6 font-semibold">⚙️ Workflows & Notifications</h3>
        <ul className="list-disc ml-5 space-y-1 text-sm">
          <li>Système de Workflow paramétrable (IsActive, StepOrder, Actions)</li>
          <li>Historisation complète de chaque étape de validation</li>
          <li>Gestion des transitions selon les droits spécifiques des services</li>
          <li><strong>Notifications par email</strong> automatiques envoyées aux responsables lors des changements d'état</li>
        </ul>

        <h3 className="mt-6 font-semibold">📦 Ressources & Reporting</h3>
        <ul className="list-disc ml-5 space-y-1 text-sm">
          <li>Base de données unifiée pour Logiciels et Matériels</li>
          <li>Statut d'attribution en temps réel (attribué, non attribué)</li>
          <li>Pagination optimisée (SQL Offset/Limit) pour chaque catégorie</li>
          <li><strong>Exportation Excel (XLS)</strong> des données filtrées pour le reporting administratif</li>
          <li>Filtrage avancé par catégorie, service et statut</li>
        </ul>

        <h3 className="mt-6 font-semibold">🖼️ Interface Utilisateur (UX/UI)</h3>
        <ul className="list-disc ml-5 space-y-1 text-sm">
          <li>Dashboard complet avec navigation par onglets dynamiques</li>
          <li>Templates Twig structurés avec intégration Bootstrap/Tailwind</li>
          <li>Modales de confirmation pour les actions critiques (sécurité des données)</li>
          <li>Interface responsive adaptée aux besoins des agents en bureau ou terrain</li>
        </ul>

        <h3 className="mt-6 font-semibold">🔍 Optimisation & Sécurité</h3>
        <ul className="list-disc ml-5 space-y-1 text-sm">
          <li>Requêtes Repository optimisées pour garantir la performance</li>
          <li>Migrations Doctrine pour un versioning précis du schéma de base</li>
          <li>Validation stricte des données côté serveur (Symfony Constraints)</li>
          <li>Nettoyage et normalisation des entrées utilisateur (strtolower/trim)</li>
        </ul>

        <h3 className="mt-6 font-semibold">🚀 Évolutions prévues</h3>
        <ul className="list-disc ml-5 space-y-1 text-sm">
          <li>Tableau de bord statistique avec graphiques (Chart.js)</li>
          <li>Déploiement via CI/CD pour automatiser les mises à jour</li>
          <li>Module de gestion des signatures numériques</li>
        </ul>
      </>
    ),
  },
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

        <a
          href="https://github.com/martinv96/Easydealz"
          class="text-gray-300 hover:underline hover:text-gray-400 transition duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          Voir le code source
        </a>


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

        <a
          href="https://github.com/Behind-Game-Group/TeonaPassenger"
          class="text-gray-300 hover:underline hover:text-gray-400 transition duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          Voir le code source
        </a>

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

        <a
          href="https://github.com/martinv96/ProjetMai2025"
          class="text-gray-300 hover:underline hover:text-gray-400 transition duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          Voir le code source
        </a>

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
  {
  id: "spacex-launch-explorer",
  title: "🚀 SpaceX Launch Explorer",
  description: "Application Vue 3 affichant les lancements de SpaceX avec filtres, modale détaillée et intégration vidéo YouTube.",
  imgSrc: "/spacex-launch-explorer.JPG",
  details: (
    <>
      <p>
        SpaceX Launch Explorer est une application front dynamique développée avec Vue 3, TypeScript et Tailwind CSS. 
        Elle consomme l’API publique SpaceX v5 et permet de consulter les prochains lancements, d’explorer les derniers vols 
        et d’accéder à des informations détaillées via une interface moderne et responsive.
      </p>

      <a
        href="https://github.com/martinv96/spacex"
        class="text-gray-300 hover:underline hover:text-gray-400 transition duration-200"
        target="_blank"
        rel="noopener noreferrer"
      >
        Voir le code source
      </a>

      <a
        href="https://spacex-u5ch.vercel.app/"
        class="ml-4 text-gray-300 hover:underline hover:text-gray-400 transition duration-200"
        target="_blank"
        rel="noopener noreferrer"
      >
        Voir la démo en ligne
      </a>

      <h3 className="mt-6 font-semibold">🧱 Structure du projet</h3>
      <ul className="list-disc ml-5 space-y-1 text-sm">
        <li>Framework : Vue 3 (Composition API)</li>
        <li>Langages : TypeScript, HTML, Tailwind CSS</li>
        <li>Composables pour la gestion des appels API</li>
        <li>Gestion des états réactifs avec <code>ref</code> et <code>computed</code></li>
      </ul>

      <h3 className="mt-6 font-semibold">👤 Fonctionnalités utilisateur</h3>
      <ul className="list-disc ml-5 space-y-1 text-sm">
        <li>Affichage du prochain lancement</li>
        <li>Liste paginée des 10 derniers lancements</li>
        <li>Filtrage par succès / échec</li>
        <li>Détails complets d’un lancement dans une modale</li>
        <li>Intégration vidéo YouTube si disponible</li>
        <li>Données supplémentaires (lieu de lancement, payloads, clients)</li>
      </ul>

      <h3 className="mt-6 font-semibold">🖼️ Interface utilisateur</h3>
      <ul className="list-disc ml-5 space-y-1 text-sm">
        <li>Responsive (desktop & mobile)</li>
        <li>Design simple et épuré avec Tailwind CSS</li>
        <li>Gestion des cas où certaines données sont absentes (vidéo, description, etc.)</li>
      </ul>

      <h3 className="mt-6 font-semibold">🧪 Difficultés rencontrées</h3>
      <ul className="list-disc ml-5 space-y-1 text-sm">
        <li>Absence fréquente de la description <code>details</code> dans l’API</li>
        <li>Pas de champ <code>youtube_id</code> : extraction manuelle depuis <code>links.webcast</code></li>
        <li>Multiples requêtes nécessaires pour obtenir launchpad et payloads</li>
        <li>Gestion d’erreurs silencieuses pour données nulles ou incomplètes</li>
      </ul>

      <h3 className="mt-6 font-semibold">🛠️ Fonctionnalités à venir</h3>
      <ul className="list-disc ml-5 space-y-1 text-sm">
        <li>Recherche avancée (par nom de mission, date, etc.)</li>
        <li>Tri personnalisé (par date, statut, payloads)</li>
        <li>Historique complet avec pagination étendue</li>
        <li>Mode sombre / clair</li>
      </ul>
    </>
  ),
},
{
  id: "cookmaster",
  title: "🍳 CookMaster",
  description: "Site de recettes interactif développé en Next.js avec moteur de recherche, quiz chronométré et newsletter.",
  imgSrc: "/cookmaster.JPG",
  details: (
    <>
      <p>
        CookMaster est une application web développée avec Next.js, React et Tailwind CSS. 
        Elle permet de consulter des recettes de cuisine détaillées avec images et étapes, de participer à un quiz chronométré, 
        de s’inscrire à une newsletter et de contacter l’équipe via une page dédiée. L’interface est moderne, responsive et fluide.
      </p>

      <a
        href="https://github.com/martinv96/projetaout"
        class="text-gray-300 hover:underline hover:text-gray-400 transition duration-200"
        target="_blank"
        rel="noopener noreferrer"
      >
        Voir le code source
      </a>

      <a
        href="https://projetaout.vercel.app/"
        class="ml-4 text-gray-300 hover:underline hover:text-gray-400 transition duration-200"
        target="_blank"
        rel="noopener noreferrer"
      >
        Voir la démo en ligne
      </a>

      <h3 className="mt-6 font-semibold">🧱 Structure du projet</h3>
      <ul className="list-disc ml-5 space-y-1 text-sm">
        <li>Framework : Next.js 15 + React 19</li>
        <li>Langages : TypeScript, JavaScript, HTML, CSS avec Tailwind</li>
        <li>API backend pour gestion de la newsletter avec Express.js et Nodemailer</li>
        <li>Pages principales : Recettes, Quiz, Contact</li>
        <li>Gestion des états réactifs avec React hooks</li>
      </ul>

      <h3 className="mt-6 font-semibold">👤 Fonctionnalités utilisateur</h3>
      <ul className="list-disc ml-5 space-y-1 text-sm">
        <li>Consultation des recettes avec images et étapes détaillées</li>
        <li>Moteur de recherche pour filtrer les recettes</li>
        <li>Quiz culinaire chronométré</li>
        <li>Inscription à une newsletter</li>
        <li>Page de contact avec formulaire</li>
      </ul>

      <h3 className="mt-6 font-semibold">🖼️ Interface utilisateur</h3>
      <ul className="list-disc ml-5 space-y-1 text-sm">
        <li>Design moderne et épuré</li>
        <li>Responsive (desktop & mobile)</li>
        <li>Animations subtiles avec Framer Motion pour améliorer l’expérience utilisateur</li>
      </ul>

      <h3 className="mt-6 font-semibold">🧪 Difficultés rencontrées</h3>
      <ul className="list-disc ml-5 space-y-1 text-sm">
        <li>Intégration de l’API newsletter dans Next.js</li>
        <li>Gestion des envois d’emails avec Nodemailer</li>
        <li>Création du quiz chronométré avec suivi du temps et des scores</li>
        <li>Optimisation des performances pour le rendu rapide des pages recettes</li>
      </ul>

      <h3 className="mt-6 font-semibold">🛠️ Fonctionnalités à venir</h3>
      <ul className="list-disc ml-5 space-y-1 text-sm">
        <li>Ajout d’un système de notation et commentaires pour les recettes</li>
        <li>Favoris pour enregistrer ses recettes préférées</li>
        <li>Authentification utilisateurs pour gestion personnalisée</li>
        <li>Amélioration de l’accessibilité et optimisation SEO</li>
      </ul>
    </>
  ),
},
{
  id: "eventify-api",
  title: "🎫 Eventify API",
  description: "API RESTful Laravel pour la gestion complète d'événements, utilisateurs et réservations.",
  imgSrc: "/eventify-api.JPG", // image type diagramme ou Postman screenshot
  details: (
    <>
      <p>
        Eventify API est un backend Laravel 10 conçu pour alimenter une plateforme web et mobile de gestion d’événements. 
        Elle fournit des endpoints sécurisés pour gérer les utilisateurs, événements, catégories et réservations, avec 
        authentification via tokens API et validation complète des données.
      </p>

      <a
        href="https://github.com/martinv96/laravel"
        class="text-gray-300 hover:underline hover:text-gray-400 transition duration-200"
        target="_blank"
        rel="noopener noreferrer"
      >
        Voir le code source
      </a>

      <h3 className="mt-6 font-semibold">🧱 Structure du projet</h3>
      <ul className="list-disc ml-5 space-y-1 text-sm">
        <li>Framework : Laravel 10</li>
        <li>Langages : PHP, MySQL, SQLite pour tests</li>
        <li>Authentification : Sanctum API tokens</li>
        <li>Architecture MVC avec contrôleurs, modèles et migrations</li>
        <li>Tests unitaires et fonctionnels avec PHPUnit</li>
      </ul>

      <h3 className="mt-6 font-semibold">👤 Fonctionnalités utilisateur</h3>
      <ul className="list-disc ml-5 space-y-1 text-sm">
        <li>Inscription et connexion sécurisées</li>
        <li>Gestion des profils utilisateurs</li>
        <li>CRUD complet sur les événements et catégories</li>
        <li>Filtrage, recherche et pagination des événements</li>
        <li>Réservation de places pour les événements</li>
        <li>Visualisation et gestion des réservations pour utilisateurs et administrateurs</li>
      </ul>

      <h3 className="mt-6 font-semibold">🖼️ Illustration / UI</h3>
      <ul className="list-disc ml-5 space-y-1 text-sm">
        <li>Pas d’interface frontend intégrée</li>
        <li>Représentation possible via diagramme des endpoints ou capture Postman</li>
        <li>JSON structuré et clair pour chaque endpoint</li>
      </ul>

      <h3 className="mt-6 font-semibold">🧪 Difficultés rencontrées</h3>
      <ul className="list-disc ml-5 space-y-1 text-sm">
        <li>Gestion de l’authentification API dans les tests (erreurs 401)</li>
        <li>Relations complexes : réservation ↔ utilisateur ↔ événement</li>
        <li>Filtrage et pagination efficaces avec Eloquent</li>
        <li>Validation et gestion des erreurs cohérentes pour tous les endpoints</li>
      </ul>

      <h3 className="mt-6 font-semibold">🛠️ Fonctionnalités à venir</h3>
      <ul className="list-disc ml-5 space-y-1 text-sm">
        <li>Endpoints supplémentaires pour analytics / statistiques</li>
        <li>Notification par email pour réservations</li>
        <li>Extension pour gérer plusieurs types d’événements ou sessions</li>
        <li>Documentation interactive Swagger / Postman</li>
      </ul>
    </>
  ),
},

  {
  id: "angular-tasks",
  title: "Angular Tasks Manager",
  description: "Application de gestion de tâches et calendrier développée avec Angular 20.",
  imgSrc: "/angular-tasks.JPG",
  details: (
    <>
      <p>
        Angular Tasks Manager est une application de gestion quotidienne développée avec Angular 20. 
        Elle permet d’ajouter, modifier et supprimer des tâches, de gérer leur statut, et d’utiliser un calendrier interactif. 
        Le projet inclut un système de thème clair/sombre et une interface responsive moderne.
      </p>

      <a
        href="https://github.com/martinv96/projetAngular"
        class="text-gray-300 hover:underline hover:text-gray-400 transition duration-200"
        target="_blank"
        rel="noopener noreferrer"
      >
        Voir le code source
      </a>

      <h3 className="mt-6 font-semibold">🧱 Structure du projet</h3>
      <ul className="list-disc ml-5 space-y-1 text-sm">
        <li>Framework : Angular 20</li>
        <li>Langages : TypeScript, HTML, CSS (Bootstrap 5 + personnalisations)</li>
        <li>Services : gestion des tâches et gestion du thème (dark/light)</li>
        <li>Architecture modulaire avec composants standalone</li>
      </ul>

      <h3 className="mt-6 font-semibold">👤 Fonctionnalités utilisateur</h3>
      <ul className="list-disc ml-5 space-y-1 text-sm">
        <li>Ajouter, modifier et supprimer des tâches</li>
        <li>Changement du statut des tâches (En cours, Terminée, Urgente)</li>
        <li>Calendrier interactif (navigation par mois/année, sélection de jour)</li>
        <li>Thème clair / sombre activable par bouton</li>
        <li>Pages dédiées : Accueil, Profil, Contact, À propos</li>
      </ul>

      <h3 className="mt-6 font-semibold">🖼️ Interface utilisateur</h3>
      <ul className="list-disc ml-5 space-y-1 text-sm">
        <li>Responsive (desktop & mobile)</li>
        <li>Design moderne avec Bootstrap 5 et CSS personnalisé</li>
        <li>Utilisation de Google Fonts (Poppins)</li>
        <li>Composants réutilisables (cartes, boutons, formulaires)</li>
      </ul>

      <h3 className="mt-6 font-semibold">🧪 Tests & qualité</h3>
      <ul className="list-disc ml-5 space-y-1 text-sm">
        <li>Tests unitaires prévus avec Jasmine/Karma</li>
        <li>Respect des bonnes pratiques Angular (services injectables, modularité)</li>
      </ul>

      <h3 className="mt-6 font-semibold">🌐 SEO & Accessibilité</h3>
      <ul className="list-disc ml-5 space-y-1 text-sm">
        <li>Structuration sémantique du HTML</li>
        <li>Contrastes adaptés pour le mode sombre</li>
        <li>Préparation à l’optimisation SEO avec balises <code>title</code> et <code>meta</code></li>
      </ul>

      <h3 className="mt-6 font-semibold">🛠️ Fonctionnalités à venir</h3>
      <ul className="list-disc ml-5 space-y-1 text-sm">
        <li>Connexion / inscription utilisateurs</li>
        <li>Persistance des tâches via API ou base de données</li>
        <li>Amélioration du calendrier (événements, rappels, couleurs personnalisées)</li>
        <li>Notifications pour les tâches urgentes</li>
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
  const sectionBg = theme === "light" ? "bg-light-bg" : "bg-gray-900";
  const sectionText = theme === "light" ? "text-gray-800" : "text-gray-100";
  const sectionBorder = theme === "light" ? "border-gray-200" : "border-gray-700";
  const cardBg = theme === "light" ? "bg-white" : "bg-gray-800";
  const cardBorder = theme === "light" ? "border-gray-100" : "border-gray-700";
  const cardTextTitle = theme === "light" ? "text-gray-900" : "text-gray-200";
  const cardTextExcerpt = theme === "light" ? "text-gray-700" : "text-gray-300";
  const buttonBg = theme === "light" ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-600 hover:bg-blue-700";
  const buttonText = "text-white";
  const modalBg = theme === "light" ? "bg-white" : "bg-gray-800";
  const modalText = theme === "light" ? "text-gray-900" : "text-gray-100";
  const modalBorder = theme === "light" ? "border-gray-100" : "border-gray-700";
  const closeBtnText = theme === "light" ? "text-gray-500 hover:text-gray-900" : "text-gray-400 hover:text-white";

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