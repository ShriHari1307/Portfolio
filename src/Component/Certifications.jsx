import PropTypes from "prop-types";

export default function Certifications({ isDarkMode }) {
    const certifications = [
      {
        title: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        date: "March 2023",
        description: "Achieved proficiency in architecting and deploying applications on AWS.",
        image: "https://via.placeholder.com/150", // Replace with your image URL
      },
      {
        title: "Google Cloud Professional Data Engineer",
        issuer: "Google Cloud",
        date: "May 2022",
        description: "Certified in data engineering on Google Cloud platform, focusing on data processing and storage solutions.",
        image: "https://via.placeholder.com/150", // Replace with your image URL
      },
      {
        title: "Certified Kubernetes Administrator",
        issuer: "Cloud Native Computing Foundation",
        date: "July 2021",
        description: "Mastered the deployment, scaling, and management of containerized applications using Kubernetes.",
        image: "https://via.placeholder.com/150", // Replace with your image URL
      },
      // Add more certifications here
    ];
  
    return (
      <section
        id="certifications"
        className={`min-h-screen p-6 ${isDarkMode ? "bg-black text-white" : "bg-gradient-to-r from-[#f0f4f8] to-[#e1e8ee] text-black"}`}
      >
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            My Certifications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`rounded-lg shadow-lg p-6 ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                } transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-light-blue-500`}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-2xl font-semibold mb-2">{cert.title}</h3>
                <p className="text-sm text-gray-400">{cert.issuer}</p>
                <p className="text-sm text-gray-500">{cert.date}</p>
                <p className="mt-4 text-base text-gray-300">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  Certifications.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
  };
  