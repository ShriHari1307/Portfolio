import { FaMoon, FaSun, FaBars } from "react-icons/fa";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Projects from "./Component/Projects";
import { useState, useEffect } from "react";
import Skills from "./Component/Skills";
import Education from "./Component/Education";

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

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const headerHeight = document.querySelector("header").offsetHeight;
      window.scrollTo({
        top: section.offsetTop - headerHeight,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log('Section intersecting:', entry.target.id, 'isIntersecting:', entry.isIntersecting);
          if (entry.isIntersecting) {
            // Make sure we're using the exact same case as in the button comparison
            setActiveSection(entry.target.id.toLowerCase());
            console.log('Setting active section to:', entry.target.id.toLowerCase());
          }
        });
      },
      { threshold: 0.2 }  // Reduced threshold to make it more sensitive
    );
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
                activeSection === "education" ? "text-blue-500" : ""
              }`}
              onClick={() => handleScroll("education")}
            >
              Education
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
                activeSection === "skills" ? "text-blue-500" : ""
              }`}
              onClick={() => handleScroll("skills")}
            >
              Skills
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
        <section id="education">
          <Education handleScroll={handleScroll} isDarkMode={isDarkMode} />
        </section>
        <section id="projects">
          <Projects isDarkMode={isDarkMode} />
        </section>
        <section id="skills">
          <Skills isDarkMode={isDarkMode} />
        </section>
        <section id="contact">
          <Contact isDarkMode={isDarkMode} />
        </section>
      </main>
      <footer
        className={`w-full p-4 mt-auto ${
          isDarkMode ? "bg-gray-900 text-white" : "bg-gray-800 text-white"
        }`}
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center text-center">
          <p>© {new Date().getFullYear()} Shrihari. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
