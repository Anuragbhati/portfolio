import React from "react";
import { motion } from "framer-motion";
import { aboutMe } from "../data/sampleData";

const About: React.FC = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-black via-gray-900 to-black text-white p-6 sm:p-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h1
        className="text-4xl sm:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        About Me
      </motion.h1>
      <motion.div
        className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-lg p-6 sm:p-8 shadow-2xl max-w-4xl mx-auto text-lg border border-gray-700"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <p className="leading-relaxed text-gray-300">{aboutMe}</p>
      </motion.div>
    </motion.div>
  );
};

export default About;
