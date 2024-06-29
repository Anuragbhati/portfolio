import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "react-modal";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGithub,
  FaLinkedin,
  FaTimes,
  FaFilePdf,
} from "react-icons/fa";

Modal.setAppElement("#root");

const Home: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const name = "Anurag Bhati";

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 1,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const charVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white px-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="text-6xl md:text-8xl lg:font-extrabold mb-6 text-center flex flex-wrap justify-center"
        style={{ lineHeight: "1.2" }}
      >
        {name.split("").map((char, index) => (
          <motion.span
            key={index}
            className="inline-block cursor-pointer"
            variants={charVariants}
            whileHover={{
              scale: 1.5,
              color: ["#f87171", "#60a5fa", "#34d399", "#fbbf24"][index % 4],
              transition: { duration: 0.5 },
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
      <motion.p
        className="text-xl md:text-2xl mb-8 max-w-2xl text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        I am a Full Stack Developer with expertise in TypeScript, Node.js,
        React, MongoDB, and Express.
      </motion.p>
      <motion.div
        className="flex space-x-4 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <FaReact size={50} className="text-blue-500 animate-spin-slow" />
        <FaNodeJs size={50} className="text-green-500 animate-pulse" />
        <FaDatabase size={50} className="text-yellow-500 animate-bounce" />
      </motion.div>
      <motion.button
        className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={openModal}
      >
        Learn More
      </motion.button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="flex items-center justify-center h-screen"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
      >
        <div className="bg-gray-900 rounded-lg p-8 text-center relative max-w-md mx-auto text-white w-11/12 md:w-96 shadow-xl">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition duration-300"
          >
            <FaTimes size={24} />
          </button>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Anuragbhati"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition duration-300"
            >
              <FaGithub size={40} /> Github
            </a>
            <a
              href="https://www.linkedin.com/in/anuragbhati/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition duration-300"
            >
              <FaLinkedin size={40} /> LinkedIn
            </a>
            <a
              href="https://flowcv.com/resume/qpv9v0aqj1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition duration-300"
            >
              <FaFilePdf size={40} /> CV
            </a>
          </div>
        </div>
      </Modal>
    </motion.div>
  );
};

export default Home;
