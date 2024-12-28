import PropTypes from "prop-types"; // Import PropTypes
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

function About({ isDarkMode }) {
  return (
    <section
      id="about"
      className={`h-screen flex items-center justify-between py-16 px-16 ${
        isDarkMode ? "bg-[#1e1e1e] text-gray-200" : "bg-gray-100 text-gray-800"
      }`}
    >
      <div className="w-1/2 pr-8">
        {/* Typing Animation */}
        <h2
          className={`text-6xl font-bold mb-6 ${
            isDarkMode ? "text-gray-200" : "text-gray-800"
          }`}
        >
          <span className="inline-block overflow-hidden whitespace-nowrap border-r-4 border-blue-500 animate-typing">
            Hello! I am <span className="text-blue-500">Shrihari</span>
          </span>
        </h2>

        {/* Description */}
        <p
          className={`mt-4 text-lg leading-relaxed ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          I am an aspiring full-stack developer with a deep-seated passion for
          technology and a keen interest in exploring the ever-evolving tech
          landscape. My enthusiasm extends to DevOps and cloud computing, where
          I am driven to learn and implement practices that enhance scalability,
          efficiency, and reliability. I am constantly seeking opportunities to
          expand my knowledge, stay updated with emerging trends, and apply
          innovative solutions to real-world challenges.
        </p>

        <div className="mt-8 flex space-x-4">
          <a
            href="public/shri-DevopsResume.pdf"
            download="shrihari-resume.pdf"
            className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            Get My Resume
          </a>
          <button
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
            className="px-6 py-3 bg-gray-800 text-white font-bold rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
          >
            Contact Me
          </button>
        </div>

        <div className="mt-6 flex space-x-6">
          <a
            href="https://www.linkedin.com/in/tshrihari/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group transform hover:scale-125 transition duration-300 ease-in-out"
          >
            <FaLinkedin
              size={40}
              className={`${
                isDarkMode ? "text-blue-400" : "text-blue-700"
              } transition-transform duration-300 group-hover:translate-y-1`}
            />
            <span
              className={`absolute top-full left-1/2 transform -translate-x-1/2 text-center text-sm font-semibold mt-2 opacity-0 group-hover:opacity-100 transition duration-300 z-10 ${
                isDarkMode ? "text-blue-400" : "text-blue-700"
              }`}
            >
              LinkedIn
            </span>
          </a>
          <a
            href="https://github.com/ShriHari1307"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group transform hover:scale-125 transition duration-300 ease-in-out"
          >
            <FaGithub
              size={40}
              className={`${
                isDarkMode ? "text-white" : "text-black"
              } transition-transform duration-300 group-hover:translate-y-1`}
            />
            <span
              className={`absolute top-full left-1/2 transform -translate-x-1/2 text-center text-sm font-semibold mt-2 opacity-0 group-hover:opacity-100 transition duration-300 z-10 ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              GitHub
            </span>
          </a>
          <a
            href="https://hashnode.com/@Shrihari13"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group transform hover:scale-125 transition duration-300 ease-in-out"
          >
            <FaHashnode
              size={40}
              className={`${
                isDarkMode ? "text-white" : "text-black"
              } transition-transform duration-300 group-hover:translate-y-1`}
            />
            <span
              className={`absolute top-full left-1/2 transform -translate-x-1/2 text-center text-sm font-semibold mt-2 opacity-0 group-hover:opacity-100 transition duration-300 z-10 ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              Hashnode
            </span>
          </a>
          <a
            href="https://leetcode.com/u/TSHRIHARI13/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group transform hover:scale-125 transition duration-300 ease-in-out"
          >
            <SiLeetcode
              size={40}
              className={`${
                isDarkMode ? "text-white" : "text-black"
              } transition-transform duration-300 group-hover:translate-y-1`}
            />
            <span
              className={`absolute top-full left-1/2 transform -translate-x-1/2 text-center text-sm font-semibold mt-2 opacity-0 group-hover:opacity-100 transition duration-300 z-10 ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              LeetCode
            </span>
          </a>
        </div>
      </div>

      {/* Right Side (Image) */}
      <div className="w-1/3 pl-8">
        <img
          src="public/boy-image.png"
          alt="Profile"
          className="w-full h-auto rounded-lg shadow-lg object-cover"
        />
      </div>
    </section>
  );
}

// Prop validation
About.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default About;
