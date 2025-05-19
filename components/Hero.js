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
      className="w-full min-h-screen flex flex-col justify-center items-center text-center px-6 sm:px-12 md:px-20 lg:px-32 xl:px-40 text-white"
      style={{ backgroundColor: "#212529" }}
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
        <AnimatedText text="Bonjour, Mon nom est Martin" />
      </h1>
      <p className="text-base sm:text-lg md:text-xl max-w-xl mb-6 px-2 sm:px-0">
        <AnimatedText text="Développeur web passionné, je crée des expériences digitales modernes." />
      </p>
      <a
        href="#contact"
        className="bg-blue-600 text-white px-6 py-3 rounded w-full max-w-xs sm:max-w-sm mx-auto hover:bg-blue-700 transition text-center block"
      >
        Contactez-moi
      </a>
    </section>
  );
}
