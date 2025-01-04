import PropTypes from "prop-types"; // Import PropTypes
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

function About({ isDarkMode }) {
  return (
    <section
      id="about"
      className={`flex flex-col md:flex-row items-center justify-between h-screen px-6 sm:px-10 lg:px-16 py-16 ${
        isDarkMode
          ? "bg-black text-gray-200"
          : "bg-gradient-to-r from-[#f0f4f8] to-[#e1e8ee] text-gray-800"
      }`}
    >
      {/* Left Side (Text Section) */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
        {/* Typing Animation */}
        <h2
          className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${
            isDarkMode ? "text-gray-200" : "text-gray-800"
          }`}
        >
          <span
            className="inline-block overflow-hidden whitespace-nowrap border-r-4 border-blue-500 animate-typing"
          >
            Hello! I am <span className="text-blue-500">Shrihari</span>
          </span>
        </h2>

        {/* Description */}
        <p
          className={`text-base sm:text-lg leading-relaxed ${
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

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://drive.google.com/file/d/1AEpVnXWGXYeHRIAkUVA_nvsqSi8mlJmB/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 transition duration-300 text-sm sm:text-base"
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
            className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-800 text-white font-bold rounded-lg shadow-md hover:bg-gray-700 transition duration-300 text-sm sm:text-base"
          >
            Contact Me
          </button>
        </div>

        {/* Social Icons */}
        <div className="mt-6 flex space-x-4 sm:space-x-6">
          {[{ icon: FaLinkedin, url: "https://www.linkedin.com/in/tshrihari/", label: "LinkedIn", color: isDarkMode ? "text-blue-400" : "text-blue-700" },
            { icon: FaGithub, url: "https://github.com/ShriHari1307", label: "GitHub", color: isDarkMode ? "text-white" : "text-black" },
            { icon: FaHashnode, url: "https://hashnode.com/@Shrihari13", label: "Hashnode", color: isDarkMode ? "text-white" : "text-black" },
            { icon: SiLeetcode, url: "https://leetcode.com/u/TSHRIHARI13/", label: "LeetCode", color: isDarkMode ? "text-white" : "text-black" }
          ].map(({ icon: Icon, url, label, color }, index) => (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group transform hover:scale-125 transition duration-300 ease-in-out"
            >
              <Icon size={30} className={`${color} transition-transform duration-300 group-hover:translate-y-1`} />
              <span
                className={`absolute top-full left-1/2 transform -translate-x-1/2 text-center text-xs sm:text-sm font-semibold mt-2 opacity-0 group-hover:opacity-100 transition duration-300 z-10 ${color}`}
              >
                {label}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Right Side (Image Section) */}
      <div className="w-full md:w-1/3">
        <img
          src="public/boy-image.png"
          alt="Profile"
          className="w-full h-auto rounded-lg shadow-none object-cover"
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
