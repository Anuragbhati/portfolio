import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

const HeroSection: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const name = "Anurag Bhati";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 1,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const nameVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.5,
      },
    },
  };

  const charVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-purple-900 to-violet-900 text-white px-4 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="text-6xl md:text-8xl font-extrabold mb-6 text-center flex flex-wrap justify-center perspective-1000"
        style={{ lineHeight: "1.2" }}
        variants={nameVariants}
      >
        {name.split("").map((char, index) => (
          <motion.span
            key={index}
            className="inline-block cursor-pointer transform-style-3d"
            variants={charVariants}
            whileHover={{
              scale: 1.2,
              rotateY: 180,
              color: ["#f87171", "#60a5fa", "#34d399", "#fbbf24"][index % 4],
              transition: { duration: 0.5 },
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
      <motion.p
        className="text-xl md:text-2xl mb-8 max-w-2xl text-center px-4 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        I am a Full Stack Developer with expertise in TypeScript, Node.js,
        React, MongoDB, and Express.
      </motion.p>
      <motion.div
        className="flex space-x-8 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.div
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <FaReact size={60} className="text-blue-400 filter drop-shadow-lg" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2, y: -10 }}
          transition={{ duration: 0.5 }}
        >
          <FaNodeJs
            size={60}
            className="text-green-400 filter drop-shadow-lg"
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2, rotate: -360 }}
          transition={{ duration: 0.5 }}
        >
          <FaDatabase
            size={60}
            className="text-yellow-400 filter drop-shadow-lg"
          />
        </motion.div>
      </motion.div>
      <motion.button
        className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-4 rounded-full font-bold text-xl shadow-lg transition-all duration-300 transform hover:scale-105"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={openModal}
      >
        Learn More
      </motion.button>

      <AnimatePresence>
        {modalIsOpen && (
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className="flex items-center justify-center h-screen"
            overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-800 rounded-2xl p-8 text-center relative max-w-md mx-auto text-white w-11/12 md:w-96 shadow-2xl border border-purple-500"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition duration-300"
              >
                <FaTimes size={24} />
              </button>
              <div className="flex justify-center space-x-8 mt-4">
                <motion.a
                  href="https://github.com/Anuragbhati"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-purple-400 transition duration-300 flex flex-col items-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaGithub size={50} />
                  <span className="mt-2">Github</span>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/anuragbhati/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 transition duration-300 flex flex-col items-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaLinkedin size={50} />
                  <span className="mt-2">LinkedIn</span>
                </motion.a>
                <motion.a
                  href="https://flowcv.com/resume/qpv9v0aqj1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-pink-400 transition duration-300 flex flex-col items-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaFilePdf size={50} />
                  <span className="mt-2">CV</span>
                </motion.a>
              </div>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default HeroSection;
