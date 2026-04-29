import { motion } from "framer-motion";
import {
  FaCode,
  FaTools,
  FaDatabase,
  FaCogs,
  FaProjectDiagram,
  FaShieldAlt,
  FaBug,
  FaServer,
  FaClipboardCheck,
  FaUsersCog,
  FaChartLine,
} from "react-icons/fa";

const skills = [
  {
    icon: <FaCode className="text-3xl text-red-500" />,
    title: "Langages",
    text: "Maîtrise de PHP 8, JavaScript/TypeScript, Python et SQL. Compétences opérationnelles en Java (Spring Boot). Pratique confirmée de la POO et des principes SOLID.",
  },
  {
    icon: <FaProjectDiagram className="text-3xl text-red-500" />,
    title: "Frameworks & Librairies",
    text: "Expérience confirmée avec Symfony 5/6, React, Next.js, Vue.js et Angular. Bonne connaissance de Flask (Python) et des frameworks CSS (Tailwind, Bootstrap).",
  },
  {
    icon: <FaChartLine className="text-3xl text-red-500" />,
    title: "Data & Intelligence Artificielle",
    text: "Préparation au Mastère IA. Visualisation de données avec Power BI et Grafana. Utilisation de Python pour le traitement de données et l'automatisation.",
  },
  {
    icon: <FaDatabase className="text-3xl text-red-500" />,
    title: "Bases de données & ORM",
    text: "Très bonne maîtrise de MySQL et Doctrine ORM. Utilisation d'outils de modélisation et gestion comme DBeaver et MySQL Workbench.",
  },
  {
    icon: <FaTools className="text-3xl text-red-500" />,
    title: "Environnement & DevOps",
    text: "Utilisation quotidienne de Git, Docker et Postman. Travail en environnement collaboratif Agile (Gitflow, CI/CD, GitHub Actions).",
  },
  {
    icon: <FaCogs className="text-3xl text-red-500" />,
    title: "Architectures & Qualité",
    text: "Approche structurée MVC, conception d’API RESTful, respect des normes PSR, tests unitaires (PHPUnit) et fonctionnels.",
  },
  {
    icon: <FaShieldAlt className="text-3xl text-red-500" />,
    title: "Sécurité & Bonnes pratiques",
    text: "Protection contre les failles OWASP (XSS, CSRF), validation stricte des données et gestion dynamique des rôles/permissions.",
  },
  {
    icon: <FaUsersCog className="text-3xl text-red-500" />,
    title: "Méthodologies & Soft Skills",
    text: "Autonomie, curiosité et adaptabilité. Esprit orienté solution développé au travers de projets complexes en milieu professionnel.",
  },
];


export default function Competences({ theme }) {
  // Classes dynamiques selon thème
  const sectionBg = theme === "light" ? "bg-light-bg" : "bg-gray-900";
  const textColor = theme === "light" ? "text-gray-800" : "text-white";
  const cardBg = theme === "light" ? "bg-white" : "bg-gray-800";
  const cardBorder = theme === "light" ? "border-gray-100" : "border-gray-700";
  const cardText = theme === "light" ? "text-gray-700" : "text-gray-300";

  return (
    <section className={`${sectionBg} w-full py-20 px-4 ${textColor}`} id="skills">
      <motion.div
        className="max-w-5xl mx-auto grid gap-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center mb-10">Compétences</h2>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 ${cardBg} shadow-md rounded-xl p-4 border ${cardBorder} hover:shadow-lg transition`}
            >
              <div>{skill.icon}</div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{skill.title}</h3>
                <p className={`text-sm ${cardText}`}>{skill.text}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
