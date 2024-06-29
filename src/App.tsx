import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Projects from "./components/Projects";
import WorkExperience from "./components/WorkExperience";
import {
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
  FaBars,
} from "react-icons/fa";

const App: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-4 fixed w-full z-10">
        <div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="block sm:hidden text-white focus:outline-none"
            style={{ marginLeft: "10px" }}
          >
            <FaBars />
          </button>
        </div>
        <div className="flex flex justify-center">
          <nav
            className={`sm:flex ${
              isOpen
                ? "flex flex-col sm:flex-row items-center sm:justify-center"
                : "hidden"
            }`}
          >
            <button
              onClick={() => handleScroll(homeRef)}
              className="hover:text-gray-300 flex items-center px-3 py-2 rounded-md text-sm font-medium mb-2 sm:mb-0 sm:mr-4"
            >
              <FaHome className="mr-1" /> Home
            </button>
            <button
              onClick={() => handleScroll(workRef)}
              className="hover:text-gray-300 flex items-center px-3 py-2 rounded-md text-sm font-medium mb-2 sm:mb-0 sm:mr-4"
            >
              <FaUser className="mr-1" /> Experience
            </button>
            <button
              onClick={() => handleScroll(skillsRef)}
              className="hover:text-gray-300 flex items-center px-3 py-2 rounded-md text-sm font-medium mb-2 sm:mb-0 sm:mr-4"
            >
              <FaCode className="mr-1" /> Skills
            </button>
            <button
              onClick={() => handleScroll(projectsRef)}
              className="hover:text-gray-300 flex items-center px-3 py-2 rounded-md text-sm font-medium mb-2 sm:mb-0 sm:mr-4"
            >
              <FaProjectDiagram className="mr-1" /> Projects
            </button>
            <button
              onClick={() => handleScroll(contactRef)}
              className="hover:text-gray-300 flex items-center px-3 py-2 rounded-md text-sm font-medium mb-2 sm:mb-0 sm:mr-4"
            >
              <FaEnvelope className="mr-1" /> Contact
            </button>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <AnimatePresence>
          <motion.section
            ref={homeRef}
            key={1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <HeroSection />
          </motion.section>
          <motion.section
            ref={workRef}
            key={2}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <WorkExperience />
          </motion.section>
          <motion.section
            ref={skillsRef}
            key={3}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Skills />
          </motion.section>
          <motion.section
            ref={projectsRef}
            key={4}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Projects />
          </motion.section>
          <motion.section
            className="mt-20"
            ref={contactRef}
            key={5}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <About />
          </motion.section>
          <motion.section
            ref={contactRef}
            key={6}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Contact />
          </motion.section>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default App;
