import { motion } from "framer-motion";

// Animation lettre par lettre, mots séparés
function AnimatedText({ text, isHeading = false }) {
  const words = text.split(" ").map((word) => word.split(""));

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.span
      className="inline-block leading-tight break-words"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((letters, wordIndex) => (
        <span
          key={wordIndex}
          className={`inline-block ${
            isHeading ? "mr-2 sm:mr-3 md:mr-4" : "mr-1"
          }`}
        >
          {letters.map((char, letterIndex) => (
            <motion.span
              key={letterIndex}
              variants={child}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.span>
  );
}

export default function Hero() {
  const handleScrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="w-full min-h-screen flex flex-col justify-center items-center text-center px-6 sm:px-12 md:px-20 lg:px-32 xl:px-40 text-white"
      style={{ backgroundColor: "#212529" }}
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
        <AnimatedText text="Bienvenue ! Je suis Martin, développeur web." isHeading />
      </h1>
      <p className="text-base sm:text-lg md:text-xl max-w-xl mb-6 px-2 sm:px-0">
        <AnimatedText text="Développeur web passionné, je crée des expériences digitales modernes." />
      </p>
      <button
        onClick={handleScrollToContact}
        className="bg-[#1e3a8a] text-white px-6 py-3 rounded w-full max-w-xs sm:max-w-sm mx-auto hover:bg-[#274bb3] transition text-center block relative z-20"
      >
        Contactez-moi
      </button>
    </section>
  );
}
