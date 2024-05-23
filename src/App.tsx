import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Projects from "./components/Projects";
import {
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";
import WorkExperience from "./components/WorkExperience";

const App: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const handleScroll = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-4 fixed w-full z-10">
        <nav className="flex justify-center space-x-4">
          <button
            onClick={() => handleScroll(homeRef)}
            className="hover:text-gray-300 flex items-center"
          >
            <FaHome className="mr-1" /> Home
          </button>
          <button
            onClick={() => handleScroll(aboutRef)}
            className="hover:text-gray-300 flex items-center"
          >
            <FaUser className="mr-1" /> About
          </button>
          <button
            onClick={() => handleScroll(skillsRef)}
            className="hover:text-gray-300 flex items-center"
          >
            <FaCode className="mr-1" /> Skills
          </button>
          <button
            onClick={() => handleScroll(projectsRef)}
            className="hover:text-gray-300 flex items-center"
          >
            <FaProjectDiagram className="mr-1" /> Projects
          </button>
          <button
            onClick={() => handleScroll(contactRef)}
            className="hover:text-gray-300 flex items-center"
          >
            <FaEnvelope className="mr-1" /> Contact
          </button>
        </nav>
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
            ref={homeRef}
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
            key={5}
            ref={aboutRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <About />
          </motion.section>
          <motion.section
            key={6}
            ref={contactRef}
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
