import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function Intro({ onFinish }) {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start("extend");
      await controls.start("split");
      await controls.start("showInitials");
      await controls.start("fadeOut");
      if (onFinish) onFinish();
    };
    sequence();
  }, [controls, onFinish]);

  return (
    <motion.section
      className="fixed inset-0 bg-black text-white z-50 flex justify-center items-center"
      initial={{ opacity: 1 }}
      animate={controls}
      variants={{
        fadeOut: { opacity: 0, transition: { delay: 8, duration: 1 } },
      }}
    >
      <div className="relative flex flex-col items-center">
        {/* Barre unique qui s’allonge */}
        <motion.div
          className="h-1 bg-white"
          initial={{ width: "0%" }}
          variants={{
            extend: {
              width: "120px",
              transition: { duration: 0.5 },
            },
            split: {
              height: "1px",
              y: -25,
              transition: { duration: 0.5 },
            },
          }}
          animate={controls}
        />

        {/* Initiales MV */}
        <motion.h1
          className="text-6xl font-bold absolute top-0"
          variants={{
            showInitials: {
              opacity: 1,
              scale: 1,
              transition: { delay: 0.2, duration: 0.8 },
            },
          }}
          initial={{ opacity: 0, scale: 0.8 }}
        >
          MV
        </motion.h1>

        {/* Ligne du bas */}
        <motion.div
          className="h-1 bg-white mt-16"
          initial={{ width: "0%" }}
          variants={{
            split: {
              width: "120px",
              y: 25,
              transition: { duration: 0.5 },
            },
          }}
          animate={controls}
        />

        {/* Nom complet */}
        <motion.p
          className="text-2xl mt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          Martin Vallée
        </motion.p>

        {/* Description */}
        <motion.p
          className="mt-4 text-center text-gray-300 max-w-md px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
        >
          Développeur web & passionné de création digitale.
        </motion.p>
      </div>
    </motion.section>
  );
}
