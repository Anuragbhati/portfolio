import React from 'react';
import { motion } from 'framer-motion';
import { contactInfo } from '../data/sampleData';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-black to-gray-900 text-white p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-5xl font-bold mb-8 text-center">Contact</h1>
      <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-8 shadow-lg text-center w-full max-w-lg">
        <div className="text-lg mb-8">
          <div className="flex items-center justify-center mb-4 space-x-2">
            <FaEnvelope className="text-blue-500" />
            <p>Email: <a href={`mailto:${contactInfo.email}`} className="text-blue-500 hover:underline">{contactInfo.email}</a></p>
          </div>
          <div className="flex items-center justify-center mb-4 space-x-2">
            <FaPhone className="text-green-500" />
            <p>Phone: <a href={`tel:${contactInfo.phone}`} className="text-green-500 hover:underline">{contactInfo.phone}</a></p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact
