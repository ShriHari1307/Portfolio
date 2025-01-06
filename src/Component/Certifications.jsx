import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Certifications({ isDarkMode }) {
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "July 2023",
      description: [
        "Gained foundational knowledge of AWS cloud services, including security, architecture, and pricing models.",
        "Developed skills to identify AWS services and implement cloud best practices for businesses.",
      ],
      image: "aws-certified-cloud-practitioner.png",
      link: "https://bit.ly/shri-aws-practitioner",
    },
    {
      title: "Redhat Certified System Administrator",
      issuer: "RedHat",
      date: "September 2023",
      description: [
        "Achieved RedHat Certified System Administrator status with a perfect score of 300/300.",
        "Demonstrated expertise in system administration, automation, and containerized application deployment.",
      ],
      image: "RHCSA.png",
      link: "https://bit.ly/461smze",
    },
    {
      title: "AWS Cloud Quest: Cloud Practitioner",
      issuer: "AWS",
      date: "July 2023",
      description: [
        "Completed AWS Cloud Quest, gaining hands-on experience with cloud concepts like networking, storage, and security.",
        "Built practical skills in designing and implementing cloud-based solutions with AWS tools.",
      ],
      image: "aws-quest.png",
      link: "https://bit.ly/shri-aws-quest",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? certifications.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === certifications.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === certifications.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [certifications.length]);

  return (
    <section
      id="certifications"
      className={`min-h-screen p-6 ${
        isDarkMode
          ? "bg-black text-white"
          : "bg-gradient-to-r from-[#f0f4f8] to-[#e1e8ee] text-black"
      }`}
    >
      <div className="container mx-auto">
        <h2
          className={`text-4xl font-bold text-center mb-12 ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          Certifications
        </h2>

        <div className="relative flex items-center justify-center">
          <button
            className="absolute top-4 left-4 p-3 bg-black bg-opacity-50 text-white rounded-full transition-all duration-300 hover:bg-opacity-80 z-10"
            onClick={handlePrev}
          >
            <FaArrowLeft size={20} />
          </button>

          <div className="w-full sm:w-3/4 overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 w-full lg:w-full rounded-lg shadow-lg p-6 ${
                    isDarkMode ? "bg-gray-800" : "bg-white"
                  }`}
                >
                  <div className="w-full h-48 overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-contain rounded-md mb-4"
                    />
                  </div>
                  <h3
                    className={`text-2xl font-semibold mb-2 ${
                      isDarkMode ? "text-white" : "text-black"
                    }`}
                  >
                    {cert.title}
                  </h3>
                  <p
                    className={`text-sm ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {cert.issuer}
                  </p>
                  <p
                    className={`text-sm ${
                      isDarkMode ? "text-gray-300" : "text-gray-500"
                    }`}
                  >
                    {cert.date}
                  </p>
                  <ul
                    className={`mt-4 text-base ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    } text-justify`}
                  >
                    {cert.description.map((point, idx) => (
                      <li key={idx} className="mb-2">
                        - {point}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block px-6 py-2 bg-blue-500 text-white rounded-lg transition-all duration-300 hover:bg-blue-600"
                  >
                    View Certificate
                  </a>
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute top-4 right-4 p-3 bg-black bg-opacity-50 text-white rounded-full transition-all duration-300 hover:bg-opacity-80 z-10"
            onClick={handleNext}
          >
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

Certifications.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};
