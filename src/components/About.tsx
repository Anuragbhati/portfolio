import React from 'react';
import { motion } from 'framer-motion';
import { aboutMe } from '../data/sampleData';

const About: React.FC = () => {
  return (
    <motion.div
      className="container mx-auto p-20"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 ,delay:1.5 }}
    >
      <h1 className="text-5xl font-bold mb-8 text-center">About Me</h1>
      <p className="text-lg max-w-4xl mx-auto">{aboutMe}</p>
    </motion.div>
  );
};

export default About;
