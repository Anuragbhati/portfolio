import React from 'react';
import { motion } from 'framer-motion';
import { aboutMe } from '../data/sampleData';

const About: React.FC = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-black via-gray-900 to-black text-white p-10"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 1.5 }}
    >
      <h1 className="text-5xl font-bold mb-8 text-center">About Me</h1>
      <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-8 shadow-lg max-w-4xl mx-auto text-lg">
        <p>{aboutMe}</p>
      </div>
    </motion.div>
  );
};

export default About;
