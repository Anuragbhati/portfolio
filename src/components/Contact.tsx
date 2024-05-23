import React from 'react';
import { motion } from 'framer-motion';
import { contactInfo } from '../data/sampleData';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-black to-gray-900 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-5xl font-bold mb-8 text-center">Contact</h1>
      <div className="text-lg text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <FaEnvelope className="mr-2" />
          <p>Email: <a href={`mailto:${contactInfo.email}`} className="text-blue-500 hover:underline">{contactInfo.email}</a></p>
        </div>
        <div className="flex items-center justify-center mb-4">
          <FaPhone className="mr-2" />
          <p>Phone: <a href={`tel:${contactInfo.phone}`} className="text-blue-500 hover:underline">{contactInfo.phone}</a></p>
        </div>
        <div className="flex items-center justify-center">
          <FaMapMarkerAlt className="mr-2" />
          <p>Address: {contactInfo.address}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
