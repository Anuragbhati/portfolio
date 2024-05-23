import React from "react";
import { motion } from "framer-motion";

const WorkExperience: React.FC = () => {
  const experiences = [
    {
      company: "Paragon",
      position: "FullStack Engineer",
      duration: "February 2023 – present",
      location: "Remote",
      responsibilities: [
        "Worked on microservices architecture to handle high data flows in and out, ensuring scalability and maintainability of applications.",
        "Utilized indexing for PostgreSQL for robust data management, ensuring data integrity and efficient retrieval, resulting in a 25% increase in query performance.",
        "Integrated various third-party services, including Google, Microsoft, and Typeform, to enhance application functionality and user experience.",
        "Implemented full authentication processes for all the integrations.",
        "Implemented CRON triggers and webhooks for automated task scheduling and real-time data synchronization, resulting in a 35% reduction in manual intervention and processing delays.",
        "Deployed applications on AWS and utilized Docker for containerization, enhancing scalability and deployment efficiency.",
        "Optimized application performance and reliability using Redis for caching and session management.",
      ],
    },
    {
      company: "Thinksys Software pvt.ltd",
      position: "Frontend Engineer",
      duration: "April 2022 – February 2023",
      location: "Noida",
      responsibilities: [
        "Developed and maintained internal HR portal using Vue.js and Bootstrap, ensuring responsive and user-friendly interfaces.",
        "Collaborated with cross-functional teams to implement new features and optimize existing ones, improving overall user experience.",
        "Utilized Strapi, a Node.js CMS built on Koa.js, to manage content and build RESTful APIs for efficient data handling.",
        "Spearheaded an internal HR portal project, enhancing employee data management and streamlining HR processes.",
        "Employed GitHub for version control and collaborative development, ensuring code quality and seamless integration.",
      ],
    },
  ];

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
                  <li key={idx} className="mb-2 text-sm md:text-base list-disc">
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
