import { FaMoon, FaSun, FaBars } from "react-icons/fa";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Projects from "./Component/Projects";
import { useState, useEffect } from "react";
import Skills from "./Component/Skills";
import Education from "./Component/Education";
import Preloader from "./Component/Preloader";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handlePreloaderFinish = () => {
    setLoading(false);
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
    setActiveSection(id);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScrollSpy);
    // Initial check
    handleScrollSpy();

    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  const navItems = [
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div>
      {loading ? (
        <Preloader onFinish={handlePreloaderFinish} />
      ) : (
        <>
          <header
            className={`fixed w-full z-10 top-0 p-4 ${
              isDarkMode ? "bg-gray-900 text-white" : "bg-gray-800 text-white"
            }`}
          >
            <div className="container mx-auto flex items-center justify-between">
              <a href="#" className="text-2xl font-bold">
                <span className="text-blue-400">My</span>Portfolio
              </a>

              <button
                className="block md:hidden text-white focus:outline-none"
                onClick={toggleMenu}
              >
                <FaBars size={24} />
              </button>

              <nav
                className={`absolute md:static bg-gray-800 md:bg-transparent top-14 left-0 w-full md:w-auto md:flex items-center space-y-4 md:space-y-0 space-x-0 md:space-x-6 p-4 md:p-0 transition-all duration-300 ${
                  isMenuOpen ? "block" : "hidden"
                } md:flex`}
              >
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    className={`block w-full md:inline transition-colors duration-200 hover:text-blue-400 ${
                      activeSection === item.id ? "text-blue-500" : "text-white"
                    }`}
                    onClick={() => handleScroll(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              <button
                onClick={toggleDarkMode}
                className="text-yellow-400 hover:text-yellow-500 ml-6"
              >
                {isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
              </button>
            </div>
          </header>

          <main className="pt-20 md:pt-16">
            <section id="about" className="min-h-screen">
              <About isDarkMode={isDarkMode} />
            </section>
            <section id="education" className="min-h-screen">
              <Education handleScroll={handleScroll} isDarkMode={isDarkMode} />
            </section>
            <section id="projects" className="min-h-screen">
              <Projects isDarkMode={isDarkMode} />
            </section>
            <section id="skills" className="min-h-screen">
              <Skills isDarkMode={isDarkMode} />
            </section>
            <section id="contact" className="min-h-screen">
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
        </>
      )}
    </div>
  );
}