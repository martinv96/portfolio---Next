import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Import dynamique pour éviter le SSR (Three.js nécessite le DOM)
const Initiales3D = dynamic(() => import("./Initiales3D"), { ssr: false });

export default function Intro({ onFinish }) {
  const controls = useAnimation();
  const [show3D, setShow3D] = useState(false);

  useEffect(() => {
    const sequence = async () => {
      setShow3D(true); // Apparition initiales 3D après les deux barres
      await controls.start("extend");
      await controls.start("split");
    };
    sequence();
  }, [controls]);

  return (
    <motion.section
      className="fixed inset-0 bg-black text-white z-50 flex justify-center items-center"
      initial={{ opacity: 1 }}
      animate={controls}
      variants={{
        fadeOut: { opacity: 0, transition: { delay: 7, duration: 1 } },
      }}
    >
      <div className="relative flex flex-col items-center">
        {/* Barre unique */}
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

        {/* Ligne du bas */}
        <motion.div
          className="h-1 bg-white mt-12"
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

        {/* Initiales 3D */}
        <motion.div
          className="absolute top-[-80px] w-[300px] h-[200px]"
          initial={{ opacity: 0 }}
          animate={show3D ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {show3D && <Initiales3D />}
        </motion.div>

        {/* Nom complet */}
        <motion.p
          className="text-2xl mt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 1 }} // délai augmenté pour commencer après les initiales
        >
          Martin Vallée
        </motion.p>

        {/* Description */}
        <motion.p
          className="mt-4 text-center text-gray-300 max-w-md px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.3, duration: 1 }} // délai augmenté aussi
        >
          Développeur web & passionné de création digitale.
        </motion.p>
      </div>
    </motion.section>
  );
}
