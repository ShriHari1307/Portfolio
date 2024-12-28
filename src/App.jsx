import { FaMoon, FaSun, FaBars } from "react-icons/fa";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Projects from "./Component/Projects";
import { useState, useEffect } from "react";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Handle Scroll to a section
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false); // Close menu after navigation
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe each section
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* Header */}
      <header
        className={`fixed w-full z-10 top-0 p-4 ${
          isDarkMode ? "bg-gray-900 text-white" : "bg-gray-800 text-white"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold">
            <span className="text-blue-400">My</span>Portfolio
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="block md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <FaBars size={24} />
          </button>

          {/* Navigation */}
          <nav
            className={`absolute md:static bg-gray-800 md:bg-transparent top-14 left-0 w-full md:w-auto md:flex items-center space-y-4 md:space-y-0 space-x-0 md:space-x-6 p-4 md:p-0 transition-all duration-300 ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <button
              className={`block w-full md:inline hover:text-blue-400 ${
                activeSection === "about" ? "text-blue-500" : ""
              }`}
              onClick={() => handleScroll("about")}
            >
              About
            </button>
            <button
              className={`block w-full md:inline hover:text-blue-400 ${
                activeSection === "projects" ? "text-blue-500" : ""
              }`}
              onClick={() => handleScroll("projects")}
            >
              Projects
            </button>
            <button
              className={`block w-full md:inline hover:text-blue-400 ${
                activeSection === "contact" ? "text-blue-500" : ""
              }`}
              onClick={() => handleScroll("contact")}
            >
              Contact
            </button>
          </nav>

          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className="text-yellow-400 hover:text-yellow-500 ml-6"
          >
            {isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
          </button>
        </div>
      </header>

      {/* Sections */}
      <main className="pt-20 md:pt-16">
        <section id="about">
          <About isDarkMode={isDarkMode} />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}