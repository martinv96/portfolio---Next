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

export default function Recommandations() {
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

  return (
    <section
      id="recommendations"
      className="w-full py-24 px-6 bg-white text-gray-900 border-t border-gray-300"
    >
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-bold text-center mb-10">
          Recommandations
        </h2>
        <p className="max-w-2xl mx-auto text-center text-gray-600 mb-16 text-lg leading-relaxed">
          Découvrez les lettres de recommandation reçues de mes anciens employeurs et partenaires.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {recommandations.map(({ id, title, excerpt }) => (
            <motion.div
              key={id}
              className="border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md cursor-pointer flex flex-col justify-between bg-gray-50 transition-shadow duration-300"
              onClick={() => setModalId(id)}
              whileHover={{ scale: 1.04 }}
            >
              <h3 className="text-2xl font-semibold mb-5 text-gray-800">{title}</h3>
              <p className="text-gray-700 mb-8 flex-grow leading-relaxed">{excerpt}</p>
              <button
                className="self-start bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
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
              className="bg-white max-w-full md:max-w-4xl w-full max-h-[90vh] rounded-2xl p-6 relative flex flex-col overflow-hidden shadow-xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="absolute top-4 right-5 text-3xl font-bold text-gray-600 hover:text-gray-900 transition z-20"
                onClick={closeModal}
                aria-label="Fermer la modale"
              >
                &times;
              </button>
              <h2 className="text-3xl font-bold mb-5 text-gray-900">{currentRec.title}</h2>

              <div className="flex-grow overflow-auto border border-gray-200 rounded-lg shadow-inner">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                  <Viewer
                    fileUrl={currentRec.pdfUrl}
                    defaultScale={1}
                  />
                </Worker>
              </div>

              <div className="mt-6 flex justify-end">
                <a
                  href={currentRec.pdfUrl}
                  download
                  className="bg-blue-600 text-white font-semibold px-7 py-3 rounded-lg hover:bg-blue-700 transition shadow-md"
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
