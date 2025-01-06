import { FaMoon, FaSun, FaBars } from "react-icons/fa";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Projects from "./Component/Projects";
import { useState, useEffect, useRef } from "react";
import Skills from "./Component/Skills";
import Education from "./Component/Education";
import Preloader from "./Component/Preloader";
import Certifications from "./Component/Certifications";
import Intership from "./Component/Intership";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const headerRef = useRef(null);

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

  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const headerHeight = headerRef.current
        ? headerRef.current.offsetHeight
        : 0;
      const scrollPosition = window.scrollY + headerHeight + 50;
      let currentSection = sections[0]?.id;

      sections.forEach((section) => {
        if (!section) return;

        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentSection = section.id;
        }
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    let ticking = false;
    const scrollHandler = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScrollSpy();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollHandler);
    handleScrollSpy();

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const headerHeight = headerRef.current
        ? headerRef.current.offsetHeight
        : 0;
      const offset = headerHeight + 2;

      window.scrollTo({
        top: section.offsetTop - offset,
        behavior: "smooth",
      });
    }

    setIsMenuOpen(false);
    setActiveSection(id);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "Internship", label: "Internship" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "certifications", label: "Certification" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen">
      {loading ? (
        <Preloader onFinish={handlePreloaderFinish} />
      ) : (
        <>
          <header
            ref={headerRef}
            className={`sticky top-0 w-full z-50 p-4 ${
              isDarkMode ? "bg-gray-900 text-white" : "bg-gray-800 text-white"
            }`}
          >
            <div className="container mx-auto flex items-center justify-between">
              <a href="#" className="text-2xl font-bold">
                <span className="text-blue-400">My</span>Portfolio
              </a>

              <button
                className="block md:hidden text-white focus:outline-none ml-auto"
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

                <div className="hidden md:block w-full flex justify-center mt-4 md:mt-0">
                  <button
                    onClick={() => {
                      toggleDarkMode();
                      if (isMenuOpen) toggleMenu();
                    }}
                    className="text-yellow-400 hover:text-yellow-500"
                  >
                    {isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
                  </button>
                </div>
              </nav>
            </div>
          </header>

          {/* Sticky dark mode button for mobile */}
          <div
            className={`md:hidden fixed bottom-4 right-4 z-50 p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 ${
              isDarkMode ? "bg-yellow-400" : "bg-gray-800"
            }`}
          >
            <button
              onClick={() => toggleDarkMode()}
              className={`text-xl flex items-center justify-center ${
                isDarkMode ? "text-gray-800" : "text-white"
              }`}
            >
              {isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
            </button>
          </div>

          <main>
            <section id="about" className="min-h-screen">
              <About isDarkMode={isDarkMode} />
            </section>
            <section id="education" className="min-h-screen">
              <Education handleScroll={handleScroll} isDarkMode={isDarkMode} />
            </section>
            <section id="Internship" className="min-h-screen">
              <Intership handleScroll={handleScroll} isDarkMode={isDarkMode} />
            </section>
            <section id="projects">
              <Projects isDarkMode={isDarkMode} />
            </section>
            <section id="skills" className="min-h-screen">
              <Skills isDarkMode={isDarkMode} />
            </section>
            <section id="certifications" className="min-h-screen">
              <Certifications isDarkMode={isDarkMode} />
            </section>
            <section id="contact" className="min-h-screen">
              <Contact isDarkMode={isDarkMode} />
            </section>
          </main>

          <footer
            className={`w-full p-4 ${
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
