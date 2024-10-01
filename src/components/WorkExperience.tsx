import React, { useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { experiences } from "../data/sampleData";

const WorkExperience: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="bg-gradient-to-b from-gray-900 to-black py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
          variants={itemVariants}
        >
          Work Experience
        </motion.h1>
        <AnimatePresence>
          <motion.div className="relative">
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-400 via-pink-500 to-red-500 hidden md:block"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            ></motion.div>
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                className={`flex mb-24 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
                variants={itemVariants}
              >
                <motion.div
                  className={`w-full sm:w-5/12 ${
                    index % 2 === 0 ? "pr-8" : "pl-8"
                  }`}
                >
                  <motion.div
                    className="bg-gray-800 rounded-lg p-6 shadow-md mb-6"
                    whileHover={{ scale: 1.05 }}
                  >
                    <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 mb-2">
                      {experience.company}
                    </h2>
                    <p className="text-xl font-semibold text-gray-300 mb-2">
                      {experience.position}
                    </p>
                    <p className="text-sm text-gray-400 mb-1">
                      {experience.duration}
                    </p>
                    <p className="text-sm text-gray-400">
                      {experience.location}
                    </p>
                  </motion.div>
                  {experience.responsibilities.map((responsibility, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center mb-4 relative"
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + idx * 0.1 }}
                    >
                      <motion.div
                        className="bg-gray-800 rounded-lg p-3 shadow-md"
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className="text-gray-300">{responsibility}</span>
                      </motion.div>
                      {index % 2 === 0 && (
                        <motion.div
                          className={`absolute top-1/2 -right-12 w-8 h-0.5 bg-pink-500 hidden md:block`}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ delay: 0.3 + idx * 0.1 }}
                          style={{
                            transformOrigin: "100% 50%",
                          }}
                        />
                      )}
                      {index % 2 !== 0 && (
                        <motion.div
                          className={`absolute top-1/2 -left-12 w-8 h-0.5 bg-pink-500 hidden md:block`}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ delay: 0.3 + idx * 0.1 }}
                          style={{
                            transformOrigin: "0% 50%",
                          }}
                        />
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default WorkExperience;
