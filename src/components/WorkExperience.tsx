import React from "react";
import { motion } from "framer-motion";
import { experiences } from "../data/sampleData";

const WorkExperience: React.FC = () => {
  return (
    <motion.div
      className="container mx-auto p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-5xl font-bold mb-8 text-center">Work Experience</h1>
      <div className="relative flex flex-col items-center">
        <div className="hidden md:block absolute w-1 bg-gray-300 dark:bg-gray-600 h-full"></div>
        {experiences.map((experience, index) => (
          <div
            key={index}
            className={`flex w-full ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            } mb-8`}
          >
            <div className={`w-full md:w-1/2 p-4`}>
              <motion.div
                className="flex items-center mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="hidden md:block w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded-full mr-4"></div>
                <div>
                  <h2 className="text-lg font-semibold">
                    {experience.company}
                  </h2>
                  <p className="text-sm">{experience.position}</p>
                </div>
              </motion.div>
              <motion.div
                className="mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <p>{experience.duration}</p>
                <p>{experience.location}</p>
              </motion.div>
              <motion.ul
                className="list-disc pl-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {experience.responsibilities.map((responsibility, idx) => (
                  <li
                    key={idx}
                    className="mb-2 text-sm md:text-base list-none pl-5 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-4 rounded-lg shadow-lg"
                  >
                    {responsibility}
                  </li>
                ))}
              </motion.ul>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default WorkExperience;
