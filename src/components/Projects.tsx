import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/sampleData';
import { FaExternalLinkAlt, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';

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
      className="flex flex-col items-center justify-center min-h-screen bg-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-5xl font-bold mb-8 text-center">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg p-6 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ gridRowEnd: `span ${index % 2 === 0 ? '2' : '1'}` }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-white">{project.title}</h2>
            <p className="mb-4 text-gray-300">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="flex items-center bg-gray-600 text-white px-2 py-1 rounded">
                  {iconMap[tag]} {/* Render the icon corresponding to the tag */}
                  <span className="ml-1">{tag}</span>
                </span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-end text-gray-300 hover:text-gray-400 hover:underline">
              View Project <FaExternalLinkAlt className="ml-1" />
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
