import React from "react";
import { motion } from "framer-motion";
import { skills } from "../data/sampleData";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCss3,
  FaHtml5,
  FaAws,
  FaGithub,
  FaDocker,
  FaJs,
  FaCss3Alt,
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
} from "react-icons/si";

const Skills: React.FC = () => {
  // Define a mapping from skill names to corresponding icons
  const iconMap: { [key: string]: JSX.Element } = {
    JavaScript: <FaJs />,
    TypeScript: <SiTypescript />,
    React: <FaReact />,
    NodeJS: <FaNodeJs />,
    Express: <FaNode />,
    MongoDB: <FaDatabase />,
    "Tailwind CSS": <FaCss3Alt />,
    HTML: <FaHtml5 />,
    CSS: <FaCss3 />,
    Git: <FaGithub />,
    "REST APIs": <FaNode />,
    GraphQL: <SiGraphql />,
    Docker: <FaDocker />,
    AWS: <FaAws />,
    PostgreSQL: <FaDatabase />,
    Firebase: <SiFirebase />,
    Jest: <SiJest />,
    Webpack: <SiWebpack />,
    Babel: <SiBabel />,
    SASS: <FaSass />,
    // Add more mappings for other skills as needed
  };

  return (
    <motion.div
      className="container mx-auto p-4"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-5xl font-bold mb-8 text-center">Skills</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex items-center bg-gray-800 text-white px-4 py-2 rounded shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {iconMap[skill]}
            <span className="ml-2">{skill}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
