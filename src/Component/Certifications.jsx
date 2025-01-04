import PropTypes from "prop-types";

export default function Certifications({ isDarkMode }) {
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "July 2023",
      description: "Gained foundational knowledge of AWS cloud services and their key offerings, including cloud security, architecture, and pricing models.",
      image: "aws-certified-cloud-practitioner.png",
      link: "https://bit.ly/shri-aws-practitioner"
    },
    {
      title: "Redhat Certified System Administrator",
      issuer: "RedHat",
      date: "September 2023",
      description: "Achieved RedHat Certified System Administrator status, scoring a perfect 300/300 on the certification exam, demonstrating expertise in system administration, automation, and troubleshooting on Red Hat Enterprise Linux.",
      image: "RHCSA.png",
      link: "https://bit.ly/461smze"
    },
    {
      title: "AWS Cloud Quest: Cloud Practitioner",
      issuer: "AWS",
      date: "July 2023",
      description: "Completed the AWS Cloud Quest challenge, gaining hands-on experience in key cloud concepts, including networking, storage, and security, through practical, real-world scenarios.",
      image: "aws-quest.png",
      link: "https://bit.ly/shri-aws-quest"
    }
  ];

  return (
    <section
      id="certifications"
      className={`min-h-screen p-6 ${isDarkMode ? "bg-black text-white" : "bg-gradient-to-r from-[#f0f4f8] to-[#e1e8ee] text-black"}`}
    >
      <div className="container mx-auto">
        <h2 className={`text-4xl font-bold text-center mb-12 ${isDarkMode ? "text-white" : "text-black"}`}>
          My Certifications
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-lg p-6 ${isDarkMode ? "bg-gray-800" : "bg-white"} transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-light-blue-500`}
            >
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain rounded-md mb-4"
                />
              </div>
              <h3 className={`text-2xl font-semibold mb-2 ${isDarkMode ? "text-white" : "text-black"}`}>{cert.title}</h3>
              <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>{cert.issuer}</p>
              <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-500"}`}>{cert.date}</p>
              <p className={`mt-4 text-base ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>{cert.description}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-6 py-2 bg-blue-500 text-white rounded-lg transition-all duration-300 hover:bg-blue-600"
              >
                View Certification
              </a>
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
