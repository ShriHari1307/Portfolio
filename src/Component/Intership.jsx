import PropTypes from "prop-types";

export default function Internship({ isDarkMode }) {
  return (
    <section
      className={`${
        isDarkMode
          ? "bg-black text-gray-200"
          : "bg-gradient-to-r from-[#f0f4f8] to-[#e1e8ee] text-gray-800"
      } flex flex-col justify-between items-center p-6 transition-colors duration-300 pb-12`} // Removed h-screen for dynamic height
    >
      <h1 className="text-4xl font-extrabold text-center mt-12 mb-8 tracking-tight ">
        Internship Experience
      </h1>
      <div className="flex flex-col items-center max-w-3xl mx-auto space-y-8 justify-center">
        <img
          src="ITMan.png" 
          alt="Company Logo"
          className="w-40 h-40 object-contain rounded-full border-4 border-gray-300 mb-8 shadow-lg"
        />
        <div
          className={`${
            isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
          } w-full p-8 rounded-xl shadow-lg`}
        >
          <div className="text-2xl font-semibold mb-4">AWS Cloud Intern at The IT Man</div>
          <div className="text-lg mb-2">
            <strong>Duration:</strong> October 2023 - January 2024
          </div>
          <div className="text-lg mb-2">
            <strong>Location:</strong> Chennai
          </div>
          <div className="text-lg font-semibold mb-4">Key Responsibilities:</div>
          <ul className="list-disc pl-6 space-y-2 text-justify">
            <li>Assisted in the deployment and management of cloud infrastructure using AWS services like EC2, S3, and Lambda.</li>
            <li>Worked on optimizing AWS resources for cost and performance using AWS Cost Explorer and CloudWatch.</li>
            <li>Collaborated with senior cloud engineers to implement best practices for cloud security and data management.</li>
            <li>Assisted in the migration of on-premise applications to AWS cloud, including setup of VPC, security groups, and IAM roles.</li>
            <li>Monitored cloud environments for performance issues and helped resolve technical challenges related to scaling.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

Internship.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};
