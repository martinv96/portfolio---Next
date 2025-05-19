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
    FaUsersCog
} from "react-icons/fa";

const skills = [
    {
        icon: <FaCode className="text-3xl text-red-500" />,
        title: "Langages",
        text: "Maîtrise de PHP 8, JavaScript (ES6), Python. Solides bases en HTML5, CSS3 et SQL.",
    },
    {
        icon: <FaProjectDiagram className="text-3xl text-red-500" />,
        title: "Frameworks & Librairies",
        text: "Expérience confirmée avec Symfony 5/6, React, Next.js. Bonne connaissance de Salesforce, Flask, Bootstrap, TailwindCSS.",
    },
    {
        icon: <FaDatabase className="text-3xl text-red-500" />,
        title: "Bases de données & ORM",
        text: "Très bonne maîtrise de MySQL et de l'ORM Doctrine.",
    },
    {
        icon: <FaTools className="text-3xl text-red-500" />,
        title: "Environnement & Outils",
        text: "Utilisation quotidienne de Git, GitHub, VS Code, Postman. Expérience en environnement collaboratif.",
    },
    {
        icon: <FaCogs className="text-3xl text-red-500" />,
        title: "Architectures & Bonnes pratiques",
        text: "Approche structurée MVC, conception d’API REST, intégration responsive design multi-supports.",
    },
    {
        icon: <FaUsersCog className="text-3xl text-red-500" />,
        title: "Méthodologies & Soft Skills",
        text: "Travail en méthode Agile (Scrum), autonomie, bonne communication, vulgarisation des sujets techniques.",
    },
    {
        icon: <FaClipboardCheck className="text-3xl text-red-500" />,
        title: "Déploiement & CI/CD",
        text: "Utilisation de Vercel, Netlify, GitHub Actions. Connaissance de Docker.",
    },
    {
        icon: <FaShieldAlt className="text-3xl text-red-500" />,
        title: "Sécurité Web",
        text: "Bonnes pratiques OWASP : CSRF, XSS, validation des données, gestion des rôles.",
    },
    {
        icon: <FaBug className="text-3xl text-red-500" />,
        title: "Tests & Qualité",
        text: "Tests avec PHPUnit, React Testing Library. Outils : ESLint, Prettier, SonarLint.",
    },
    {
        icon: <FaServer className="text-3xl text-red-500" />,
        title: "APIs & Intégrations",
        text: "Conception et intégration d’APIs REST/GraphQL, services tiers comme Stripe, Gmail.",
    },
    {
        icon: <FaCogs className="text-3xl text-red-500" />,
        title: "Back-office & CMS",
        text: "Interfaces d’administration avec EasyAdmin. Expérience WordPress pour la gestion de contenu.",
    },
];

export default function Competences() {
    return (
        <section className="w-full py-20 px-4 text-black" id="skills">
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
                            className="flex items-start gap-4 bg-white shadow-md rounded-xl p-4 border border-gray-200 hover:shadow-lg transition"
                        >
                            <div>{skill.icon}</div>
                            <div>
                                <h3 className="text-lg font-semibold mb-1">{skill.title}</h3>
                                <p className="text-sm text-gray-700">{skill.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
