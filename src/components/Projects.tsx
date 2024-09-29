import React from "react";
import { motion } from "framer-motion";
import { projects } from "../data/sampleData";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import {
  FaAws,
  FaCss3,
  FaDocker,
  FaHtml5,
  FaJs,
  FaNode,
  FaReact,
  FaSass,
} from "react-icons/fa";
import {
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiGraphql,
  SiPostgresql,
  SiFirebase,
  SiJest,
  SiWebpack,
  SiBabel,
  SiRedis,
  SiRedux,
  SiSocketdotio,
} from "react-icons/si";

const Projects: React.FC = () => {
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
        staggerChildren: 0.2,
      },
    },
  };

  const projectVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8 md:p-16 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold mb-12 md:mb-20 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      >
        My Projects
      </motion.h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="group relative overflow-hidden rounded-2xl backdrop-blur-md bg-white/10 shadow-lg border border-white/20 transition-all duration-300 hover:shadow-2xl hover:bg-white/20"
            variants={projectVariants}
          >
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors duration-300">
                {project.title}
              </h2>
              <p className="mb-4 text-gray-300 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/20 text-gray-200"
                  >
                    {iconMap[tag]}
                    <span className="ml-1">{tag}</span>
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                {project.status === "in-progress" ? (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/80 text-gray-900">
                    In Progress
                  </span>
                ) : (
                  <motion.a
                    href={project.deployedLink}
                    className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-600/80 text-white hover:bg-blue-700/80 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project <FaExternalLinkAlt className="ml-2" />
                  </motion.a>
                )}
                <motion.a
                  href={project.githubLink}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub size={24} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
