import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import du viewer PDF
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const recommandations = [
  {
    id: "behindgame",
    title: "Lettre de recommandation - Behind Game",
    pdfUrl: "/pdf/Lettre de recommandation - Behind Game.pdf",
    excerpt:
      "Recommandation détaillée de Behind Game, soulignant mes compétences techniques et mon professionnalisme.",
  },
  {
    id: "dgfip",
    title: "Lettre de recommandation - DGFIP",
    pdfUrl: "/pdf/lettre de recommandation - DGFIP.pdf",
    excerpt:
      "Recommandation officielle de la DGFIP valorisant mes qualités humaines et mes réalisations.",
  },
];

export default function Recommandations({ theme }) {
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

  const currentRec = recommandations.find((rec) => rec.id === modalId) || null;

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
      id="recommendations"
      className={`w-full py-24 px-6 ${sectionBg} ${sectionText} border-t ${sectionBorder}`}
    >
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-bold text-center mb-10">Recommandations</h2>
        <p className="max-w-2xl mx-auto text-center text-lg leading-relaxed mb-16">
          Découvrez les lettres de recommandation reçues de mes anciens employeurs et partenaires.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {recommandations.map(({ id, title, excerpt }) => (
            <motion.div
              key={id}
              className={`border ${cardBorder} rounded-xl p-8 shadow-sm hover:shadow-md cursor-pointer flex flex-col justify-between ${cardBg} transition-shadow duration-300`}
              onClick={() => setModalId(id)}
              whileHover={{ scale: 1.04 }}
            >
              <h3 className={`text-2xl font-semibold mb-5 ${cardTextTitle}`}>{title}</h3>
              <p className={`mb-8 flex-grow leading-relaxed ${cardTextExcerpt}`}>{excerpt}</p>
              <button
                className={`${buttonBg} ${buttonText} font-semibold px-6 py-3 rounded-lg transition self-start`}
                onClick={(e) => {
                  e.stopPropagation();
                  setModalId(id);
                }}
              >
                Lire la lettre
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* MODALE */}
      <AnimatePresence>
        {currentRec && (
          <motion.div
            id="modal-backdrop"
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-6 mt-16"
            onClick={handleBackdropClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={`max-w-full md:max-w-4xl w-full max-h-[90vh] rounded-2xl p-6 relative flex flex-col overflow-hidden shadow-xl ${modalBg} ${modalText} border ${modalBorder}`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className={`absolute top-4 right-5 text-3xl font-bold ${closeBtnText} transition z-20`}
                onClick={closeModal}
                aria-label="Fermer la modale"
              >
                &times;
              </button>
              <h2 className="text-3xl font-bold mb-5">{currentRec.title}</h2>

              <div className="flex-grow overflow-auto rounded-lg shadow-inner border border-gray-200">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                  <Viewer fileUrl={currentRec.pdfUrl} defaultScale={1} />
                </Worker>
              </div>

              <div className="mt-6 flex justify-end">
                <a
                  href={currentRec.pdfUrl}
                  download
                  className={`${buttonBg} ${buttonText} font-semibold px-7 py-3 rounded-lg transition shadow-md`}
                  style={{ boxSizing: "border-box" }}
                >
                  Télécharger la lettre
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
