import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { name, email, message } = req.body;
  const mailerDsn = process.env.MAILER_DSN;
  const mailerFrom = process.env.MAILER_FROM;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Tous les champs sont requis." });
  }

  if (!mailerDsn || !mailerFrom) {
    console.error("Variables d'environnement manquantes : MAILER_DSN / MAILER_FROM");
    return res
      .status(500)
      .json({ error: "Configuration e-mail manquante sur le serveur." });
  }

  try {
    const transporter = nodemailer.createTransport(mailerDsn);

    await transporter.sendMail({
      from: `"Portfolio Contact" <${mailerFrom}>`,
      to: mailerFrom,
      replyTo: email,
      subject: "Nouveau message venant de votre portfolio",
      text: `Nom: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    });

    return res.status(200).json({ message: "Message envoyé avec succès." });
  } catch (error) {
    console.error("Erreur d'envoi :", error);
    return res.status(500).json({ error: "Erreur lors de l'envoi du message." });
  }
}
