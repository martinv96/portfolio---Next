import { motion } from "framer-motion";

function AnimatedText({ text }) {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04 },
    },
  };

  const child = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.15,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.span
      style={{ display: "inline-block" }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((char, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full min-h-screen flex flex-col justify-center items-center text-center px-4 z-0 text-white"
      style={{ backgroundColor: "#212529"}}
    >
      <h1 className="text-5xl font-extrabold mb-4">
        <AnimatedText text="Salut, je suis Martin" />
      </h1>
      <p className="text-lg max-w-xl mb-6">
        <AnimatedText text="Développeur web passionné, je crée des expériences digitales modernes." />
      </p>
      <a
        href="#contact"
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
      >
        Contactez-moi
      </a>
    </section>
  );
}
