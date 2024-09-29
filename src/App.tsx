import React, { useRef, useState, useEffect } from "react";
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
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [homeRef, workRef, skillsRef, projectsRef, contactRef];
      const currentSection = sections.find((ref) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.current?.id || "");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (ref: React.RefObject<HTMLDivElement>, id: string) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
    setIsOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-purple-900 to-violet-900 text-white">
      <header className="bg-opacity-80 backdrop-filter backdrop-blur-xl text-white p-4 fixed w-full z-10 transition-all duration-300 ease-in-out">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Anurag Bhati</h1>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden text-white focus:outline-none"
          >
            <FaBars />
          </button>
          <nav
            className={`sm:flex ${
              isOpen
                ? "flex flex-col absolute top-full left-0 right-0 bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg"
                : "hidden"
            } sm:flex-row sm:items-center sm:static`}
          >
            {[
              { ref: homeRef, icon: FaHome, label: "Home", id: "home" },
              { ref: workRef, icon: FaUser, label: "Experience", id: "work" },
              { ref: skillsRef, icon: FaCode, label: "Skills", id: "skills" },
              {
                ref: projectsRef,
                icon: FaProjectDiagram,
                label: "Projects",
                id: "projects",
              },
              {
                ref: contactRef,
                icon: FaEnvelope,
                label: "Contact",
                id: "contact",
              },
            ].map(({ ref, icon: Icon, label, id }) => (
              <button
                key={id}
                onClick={() => handleScroll(ref, id)}
                className={`hover:text-blue-400 flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  activeSection === id ? "text-blue-400" : ""
                }`}
              >
                <Icon className="mr-1" /> {label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <AnimatePresence>
          {[
            { ref: homeRef, component: HeroSection, id: "home" },
            { ref: workRef, component: WorkExperience, id: "work" },
            { ref: skillsRef, component: Skills, id: "skills" },
            { ref: projectsRef, component: Projects, id: "projects" },
            {
              ref: contactRef,
              component: About,
              id: "about",
              className: "mt-20",
            },
            { ref: contactRef, component: Contact, id: "contact" },
          ].map(({ ref, component: Component, id, className }, index) => (
            <motion.section
              key={index}
              ref={ref}
              id={id}
              className={className}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Component />
            </motion.section>
          ))}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default App;
