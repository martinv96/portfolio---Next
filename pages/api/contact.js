import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Tous les champs sont requis." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS, // mot de passe d'application
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: "Nouveau message venant de votre portfolio",
      text: `Nom: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    });

    return res.status(200).json({ message: "Message envoyé avec succès." });
  } catch (error) {
    console.error("Erreur d'envoi :", error);
    return res.status(500).json({ error: "Erreur lors de l'envoi du message." });
  }
}
