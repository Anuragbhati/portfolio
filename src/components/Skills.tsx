import React from "react";
import { motion } from "framer-motion";
import { skills } from "../data/sampleData";
import {
  FaReact,
  FaCss3,
  FaHtml5,
  FaAws,
  FaGithub,
  FaDocker,
  FaJs,
  FaSass,
  FaNode,
} from "react-icons/fa";
import {
  SiTypescript,
  SiGraphql,
  SiFirebase,
  SiWebpack,
  SiJest,
  SiBabel,
  SiRedis,
  SiRedux,
  SiSocketdotio,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";

const Skills: React.FC = () => {
  // Define a mapping from skill names to corresponding icons
  const iconMap: { [key: string]: JSX.Element } = {
    JavaScript: <FaJs />,
    TypeScript: <SiTypescript />,
    React: <FaReact />,
    NodeJS: <FaNode />,
    Express: <SiExpress />,
    MongoDB: <SiMongodb />,
    "Tailwind CSS": <SiTailwindcss />,
    HTML: <FaHtml5 />,
    CSS: <FaCss3 />,
    Git: <FaGithub />,
    "REST APIs": <FaNode />,
    GraphQL: <SiGraphql />,
    Docker: <FaDocker />,
    AWS: <FaAws />,
    PostgreSQL: <SiPostgresql />,
    Firebase: <SiFirebase />,
    Jest: <SiJest />,
    Webpack: <SiWebpack />,
    Babel: <SiBabel />,
    SASS: <FaSass />,
    Redis: <SiRedis />,
    Redux: <SiRedux />,
    Socket: <SiSocketdotio />,
    // Add more mappings for other skills as needed
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen py-20 px-4 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <motion.h1
        className="text-7xl font-black mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
      >
        My Skillset
      </motion.h1>
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="group"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative overflow-hidden bg-white bg-opacity-10 rounded-2xl p-6 backdrop-blur-lg shadow-xl transition-all duration-300 group-hover:bg-opacity-20">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
              <div className="flex flex-col items-center">
                <motion.div
                  className="text-5xl mb-4 text-white"
                  initial={{ rotateY: 0 }}
                  whileHover={{ rotateY: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {iconMap[skill]}
                </motion.div>
                <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors duration-300">
                  {skill}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
