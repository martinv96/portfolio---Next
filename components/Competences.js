import { motion } from "framer-motion";
import { FaCode, FaTools, FaDatabase, FaCogs, FaProjectDiagram } from "react-icons/fa";

export default function Competences() {
    return (
        <section 
        className="w-full py-20 px-4 text-black" 
        id="skills">
            <motion.div
                className="max-w-5xl mx-auto grid gap-12"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl font-bold text-center mb-10">Compétences</h2>

                <div className="grid gap-8 md:grid-cols-2">
                    <div className="flex items-start gap-4">
                        <FaCode className="text-3xl text-red-500 mt-1" />
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Langages</h3>
                            <p>
                                Maîtrise de PHP 8, JavaScript (ES6), Python. Solides bases en HTML5, CSS3 et SQL.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <FaProjectDiagram className="text-3xl text-red-500 mt-1" />
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Frameworks & Librairies</h3>
                            <p>
                                Expérience confirmée avec Symfony 5/6, React. Bonne connaissance de Salesforce,
                                Flask, Bootstrap, TailwindCSS.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <FaDatabase className="text-3xl text-red-500 mt-1" />
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Bases de données & ORM</h3>
                            <p>
                                Très bonne maîtrise de MySQL et de l'ORM Doctrine.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <FaTools className="text-3xl text-red-500 mt-1" />
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Environnement & Outils</h3>
                            <p>
                                Utilisation quotidienne de Git, GitHub, VS Code, Postman. Expérience en environnement collaboratif.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <FaCogs className="text-3xl text-red-500 mt-1" />
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Architectures & Bonnes pratiques</h3>
                            <p>
                                Approche structurée MVC, conception d’API REST, intégration responsive design multi-supports.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
