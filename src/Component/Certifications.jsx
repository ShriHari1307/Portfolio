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
        "Gained foundational knowledge of AWS cloud services and their key offerings, including cloud security, architecture, compliance, and pricing models.",
        "Acquired skills to identify AWS service offerings and understand cloud best practices, enabling efficient cloud-based solutions for businesses.",
        "Developed a strong understanding of global infrastructure, shared responsibility models, and cloud economics, empowering informed decision-making for cloud adoption strategies.",
      ],
      image: "aws-certified-cloud-practitioner.png",
      link: "https://bit.ly/shri-aws-practitioner",
    },
    {
      title: "Redhat Certified System Administrator",
      issuer: "RedHat",
      date: "September 2023",
      description: [
        "Achieved RedHat Certified System Administrator status, scoring a perfect 300/300 on the certification exam.",
        "Demonstrated advanced expertise in system administration, automation, configuration, and troubleshooting tasks on Red Hat Enterprise Linux.",
        "Mastered essential skills for managing enterprise systems, such as deploying, securing, and maintaining servers in demanding production environments.",
        "Proficient in tasks like configuring storage, setting up basic networking, and deploying containerized applications, ensuring robust and efficient system performance.",
      ],
      image: "RHCSA.png",
      link: "https://bit.ly/461smze",
    },
    {
      title: "AWS Cloud Quest: Cloud Practitioner",
      issuer: "AWS",
      date: "July 2023",
      description: [
        "Completed the AWS Cloud Quest challenge, gaining hands-on experience in key cloud concepts, including networking, storage, compute, and security.",
        "Engaged in interactive learning by solving practical, real-world scenarios that simulate professional challenges.",
        "Built a comprehensive understanding of designing and implementing cloud-based solutions with AWS tools and services.",
        "Explored advanced cloud functionalities such as monitoring, cost optimization, and workload migration, gaining practical insights into the cloud ecosystem.",
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
