import React from "react";
import { motion } from "framer-motion";
import { contactInfo } from "../data/sampleData";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-900 via-black to-blue-900 text-white p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-6xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        Contact Us
      </motion.h1>
      <motion.div
        className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-xl rounded-2xl p-10 shadow-2xl text-center w-full max-w-xl border border-white border-opacity-20"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="text-xl mb-10 space-y-8">
          <motion.div
            className="flex items-center justify-center space-x-4 hover:bg-white hover:bg-opacity-10 p-4 rounded-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <FaEnvelope className="text-blue-400 text-2xl" />
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              {contactInfo.email}
            </a>
          </motion.div>
          <motion.div
            className="flex items-center justify-center space-x-4 hover:bg-white hover:bg-opacity-10 p-4 rounded-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <FaPhone className="text-green-400 text-2xl" />
            <a
              href={`tel:${contactInfo.phone}`}
              className="text-green-400 hover:text-green-300 transition-colors duration-300"
            >
              {contactInfo.phone}
            </a>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
