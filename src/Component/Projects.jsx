import PropTypes from "prop-types";
import { useState,useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Projects({ isDarkMode }) {
  const projects = [
    {
      title: "Deploying 3-tier application in Kubernetes",
      description: [
        "This project involved deploying a complete 3-tier architecture application on AWS EKS.",
        "The application was containerized using Docker, and Dockerfiles were created for each tier.",
        "These containers were then deployed and orchestrated within AWS EKS, ensuring high availability and scalability.",
        " The architecture comprises a frontend, backend, and database layer, each deployed as separate services, allowing seamless communication and efficient management of the application on the cloud.",
      ],
      tools: [
        "Docker",
        "AWS EKS",
        "Kubernetes",
        "AWS EC2",
        "Git",
        "Maven",
        "VSCode",
        "AWS RDS",
        "Spring boot",
      ],
      github: "https://github.com/ShriHari1307/EKSThreeTier",
      image: "kubernetes-proj.jpg",
    },
    {
      title: "Insurance Agent Management Using React",
      description: [
        "This project is developed to simplify the management of agents. It implements create, read, update, and delete functionalities for efficient handling of agent data.",
        "The backend is built using Spring Boot, ensuring scalability and robustness.",
        "Additionally, it offers a user-friendly interface that allows seamless interaction with agent management tasks.",
        "The system supports real-time updates to ensure that the agent data is always up-to-date, reducing the need for manual interventions.",
      ],
      tools: [
        "React",
        "Spring Boot",
        "MySQL",
        "Bootstrap",
        "VSCode",
        "Git",
        "Maven",
      ],
      github: "https://github.com/ShriHari1307/InsuranceAgentManagement",
      image: "react-project.jpeg",
    },
    {
      title: "Complete CICD Pipeline using Jenkins",
      description: [
        "This project involved setting up a complete CI/CD pipeline using Jenkins, integrated with code quality tools like SonarQube and Nexus OSS repository.",
        "The pipeline automates the build, test, and deployment processes, ensuring faster and more reliable software delivery. Jenkins handles the automation, while SonarQube ensures code quality by analyzing and reporting on potential issues.",
        "Nexus OSS is used to store and manage the build artifacts, and the entire pipeline is deployed on AWS EKS, enabling efficient scaling and management of the application in a containerized environment.",
      ],
      tools: [
        "Jenkins",
        "SonarQube",
        "Nexus OSS",
        "Docker",
        "AWS EKS",
        "Git Bash",
        "Maven",
        "AWS EC2",
      ],
      liveDemo: "https://example.com/live-demo/aws-cloud-quest",
      github: "https://github.com/yourusername/aws-cloud-quest",
      image: "pipeline.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <section
      id="projects"
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
          Projects
        </h2>

        <div className="relative flex items-center justify-center">
          <button
            className="absolute top-2 left-4 p-3 bg-black bg-opacity-50 text-white rounded-full transition-all duration-300 hover:bg-opacity-80 z-10"
            onClick={handlePrev}
          >
            <FaArrowLeft size={20} />
          </button>

          <div className="w-full sm:w-5/6 md:w-4/5 lg:w-2/3 xl:w-3/5 overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 w-full rounded-lg shadow-lg p-10 ${
                    isDarkMode ? "bg-gray-800" : "bg-white"
                  }`}
                >
                  <div className="flex flex-col lg:flex-row items-center justify-between">
                    <div className="w-full lg:w-2/5 h-72 overflow-hidden mb-6 lg:mb-0">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                    <div className="w-full lg:w-3/5 lg:pl-6">
                      <h3
                        className={`text-3xl font-semibold mb-4 ${
                          isDarkMode ? "text-white" : "text-black"
                        }`}
                      >
                        {project.title}
                      </h3>
                      <div
                        className={`mt-4 text-base ${
                          isDarkMode ? "text-gray-300" : "text-gray-700"
                        } text-justify`}
                      >
                        <ul>
                          {project.description.map((desc, index) => (
                            <li key={index} className="mb-2">
                              - {desc}
                            </li>
                          ))}
                        </ul>
                        <p className="mt-2">
                          <strong>Tools Used: </strong>
                          {project.tools.join(", ")}
                        </p>
                      </div>
                      <div className="mt-4 flex space-x-6">
                        {project.liveDemo && (
                          <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 bg-green-500 text-white rounded-lg transition-all duration-300 hover:bg-green-600"
                          >
                            Live Demo
                          </a>
                        )}
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-8 py-3 bg-blue-500 text-white rounded-lg transition-all duration-300 hover:bg-blue-600"
                        >
                          GitHub Repo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute top-2 right-4 p-3 bg-black bg-opacity-50 text-white rounded-full transition-all duration-300 hover:bg-opacity-80 z-10"
            onClick={handleNext}
          >
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

Projects.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};
