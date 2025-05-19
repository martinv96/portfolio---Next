import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactezMoi() {
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

  return (
    <section className="w-full py-20 px-4 text-black" id="contact">
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center mb-10">Contactez-moi</h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6"
          noValidate
        >
          <input
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            placeholder="Votre nom"
            required
            className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Votre email"
            required
            className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Votre message"
            required
            rows={5}
            className="border border-gray-300 rounded px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition disabled:opacity-50"
          >
            {status === "loading" ? "Envoi..." : "Envoyer"}
          </button>
        </form>

        {status === "success" && (
          <p className="mt-4 text-green-600 text-center">Message envoyé avec succès !</p>
        )}
        {status === "error" && (
          <p className="mt-4 text-red-600 text-center">
            Une erreur est survenue lors de l’envoi, veuillez réessayer.
          </p>
        )}
      </motion.div>
    </section>
  );
}
