import React from "react";
import { motion } from "framer-motion";
import { projects } from "../data/sampleData";
import { FaExternalLinkAlt, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";

const Projects: React.FC = () => {
  // Define a mapping from technology names to corresponding icons
  const iconMap: { [key: string]: JSX.Element } = {
    React: <FaReact />,
    NodeJS: <FaNodeJs />,
    MongoDB: <FaDatabase />,
    // Add more mappings for other technologies as needed
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white p-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-5xl font-bold mb-16 text-center">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75 hover:opacity-0 transition-opacity duration-300"></div>
            <div className="p-6 z-10">
              <h2 className="text-2xl font-semibold mb-4 text-white">{project.title}</h2>
              <p className="mb-4 text-gray-300">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="flex items-center bg-gray-700 bg-opacity-50 text-white px-2 py-1 rounded"
                  >
                    {iconMap[tag]}
                    <span className="ml-1">{tag}</span>
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-end text-blue-400 hover:text-blue-500 hover:underline"
              >
                View Project <FaExternalLinkAlt className="ml-1" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
