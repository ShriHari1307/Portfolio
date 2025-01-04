import PropTypes from "prop-types";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Card from "./Card";

export default function Projects({ isDarkMode }) {
  const projectData = [
    {
      id: 1,
      title: "Insurance Agent Management Using React",
      description:
        "This project is developed to make management of agents easier with Spring Boot as the backend, involving CRUD operations.",
      previewLink: "#",
      imageUrl: "react-image.png",
      codeLink: "#",
    },
    {
      id: 2,
      title: "Complete CICD Pipeline using Jenkins",
      description:
        "Created a complete CICD pipeline using Jenkins and other code quality tools like Sonarqube and Nexus OSS repository, deployed in EKS.",
      imageUrl: "pipeline.png",
      previewLink: "#",
      codeLink: "#",
    },
    {
      id: 3,
      title: "Deploying 3-tier application in Kubernetes",
      description:
        "Deployed a complete 3-tier architecture application in AWS EKS by creating Docker files and deploying them.",
      imageUrl: "Kubernetes-with-Azure.jpg",
      previewLink: "#",
      codeLink: "#",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projectData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section
      id="projects"
      className={`${
        isDarkMode
          ? "bg-black text-gray-200"
          : "bg-gradient-to-r from-[#f0f4f8] to-[#e1e8ee] text-gray-800"
      } flex flex-col items-center justify-center py-16`}
    >
      <div className="w-full max-w-6xl px-4">
        <h2
          className={`text-4xl font-bold text-center mb-12 ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}
        >
          Projects
        </h2>

        {/* Only display the carousel on small screens */}
        <div className="block sm:hidden">
          <div className="relative flex items-center justify-center">
            {/* Previous Arrow */}
            <button
              className="absolute top-4 left-4 p-3 bg-black bg-opacity-50 text-white rounded-full transition-all duration-300 hover:bg-opacity-80 z-10"
              onClick={handlePrev}
            >
              <FaArrowLeft size={20} />
            </button>

            {/* Inner Div for Carousel */}
            <div className="w-full overflow-hidden">
              <div
                className="flex transition-transform duration-500"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {projectData.map((project) => (
                  <div
                    key={project.id}
                    className={`flex-shrink-0 w-full p-6 ${
                      isDarkMode ? "bg-gray-800" : "bg-white"
                    } rounded-lg shadow-lg hover:scale-105 transform transition-all`}
                  >
                    <Card
                      title={project.title}
                      description={project.description}
                      previewLink={project.previewLink}
                      codeLink={project.codeLink}
                      imageUrl={project.imageUrl}
                      isDarkMode={isDarkMode}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Next Arrow */}
            <button
              className="absolute top-4 right-4 p-3 bg-black bg-opacity-50 text-white rounded-full transition-all duration-300 hover:bg-opacity-80 z-10"
              onClick={handleNext}
            >
              <FaArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Grid for Larger Screens */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {projectData.map((project) => (
            <div
              key={project.id}
              className={`p-6 ${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-lg shadow-lg hover:scale-105 transform transition-all`}
            >
              <Card
                title={project.title}
                description={project.description}
                previewLink={project.previewLink}
                codeLink={project.codeLink}
                imageUrl={project.imageUrl}
                isDarkMode={isDarkMode}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Projects.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};
