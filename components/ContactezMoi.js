import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactezMoi({ theme }) {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.nom,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ nom: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  // Classes dynamiques selon thème
  const sectionBg = theme === "light" ? "bg-gray-50" : "bg-gray-900";
  const sectionText = theme === "light" ? "text-black" : "text-gray-100";
  const borderColor = theme === "light" ? "border-gray-200" : "border-gray-700";
  const inputBg = theme === "light" ? "bg-white" : "bg-gray-800";
  const inputBorder = theme === "light" ? "border-gray-300" : "border-gray-600";
  const inputText = theme === "light" ? "text-black" : "text-gray-100";
  const inputPlaceholder = theme === "light" ? "placeholder-gray-400" : "placeholder-gray-500";
  const focusRing = theme === "light" ? "focus:ring-blue-400" : "focus:ring-blue-600";
  const buttonBg = theme === "light" ? "bg-blue-800 hover:bg-blue-900" : "bg-blue-600 hover:bg-blue-700";
  const buttonText = "text-white";
  const successText = theme === "light" ? "text-green-600" : "text-green-400";
  const errorText = theme === "light" ? "text-red-600" : "text-red-400";

  return (
    <section
      className={`w-full py-20 px-4 ${sectionBg} ${sectionText} border-t ${borderColor}`}
      id="contact"
    >
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center mb-10">Contactez-moi</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
          <input
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            placeholder="Votre nom *"
            required
            className={`border rounded-lg px-5 py-4 focus:outline-none focus:ring-2 ${focusRing} transition-all duration-300
              ${inputBg} ${inputBorder} ${inputText} ${inputPlaceholder}`}
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Votre email *"
            required
            className={`border rounded-lg px-5 py-4 focus:outline-none focus:ring-2 ${focusRing} transition-all duration-300
              ${inputBg} ${inputBorder} ${inputText} ${inputPlaceholder}`}
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Votre message *"
            required
            rows={6}
            className={`border rounded-lg px-5 py-4 resize-none focus:outline-none focus:ring-2 ${focusRing} transition-all duration-300
              ${inputBg} ${inputBorder} ${inputText} ${inputPlaceholder}`}
          />

          <button
            type="submit"
            disabled={status === "loading"}
            className={`${buttonBg} ${buttonText} px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-300 disabled:opacity-50`}
          >
            {status === "loading" ? "Envoi..." : "Envoyer"}
          </button>
        </form>

        {status === "success" && (
          <p className={`mt-4 text-center text-lg ${successText}`}>
            Message envoyé avec succès !
          </p>
        )}
        {status === "error" && (
          <p className={`mt-4 text-center text-lg ${errorText}`}>
            Une erreur est survenue lors de l’envoi, veuillez réessayer.
          </p>
        )}
      </motion.div>
    </section>
  );
}
