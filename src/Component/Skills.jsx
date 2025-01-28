import styled from "styled-components";
import {
  FaReact,
  FaDocker,
  FaCss3Alt,
  FaHtml5,
  FaGitAlt,
  FaJava,
  FaAws,
  FaJenkins,
  FaLinux,
  FaBootstrap,
  FaWindows,
  FaGithub,
  FaPython,
} from "react-icons/fa";
import {
  SiKubernetes,
  SiSpringboot,
  SiMysql,
  SiTerraform,
  SiAnsible,
  SiSonarqube,
  SiVagrant,
  SiPostman,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import PropTypes from "prop-types";
import { VscAzure } from "react-icons/vsc";

export default function Skills({ isDarkMode }) {
  const skills = [
    {
      category: "Programming Languages",
      items: [
        { name: "Java", logo: <FaJava /> },
        { name: "Python", logo: <FaPython /> },
        { name: "JavaScript", logo: <IoLogoJavascript /> },
      ],
    },
    {
      category: "Frontend Technologies",
      items: [
        { name: "React", logo: <FaReact /> },
        { name: "CSS", logo: <FaCss3Alt /> },
        { name: "HTML", logo: <FaHtml5 /> },
        { name: "Bootstrap", logo: <FaBootstrap /> },
      ],
    },
    {
      category: "Backend Technologies",
      items: [
        { name: "Spring Boot", logo: <SiSpringboot /> },
        { name: "Postman", logo: <SiPostman /> },
      ],
    },
    {
      category: "Cloud Platforms",
      items: [
        { name: "AWS", logo: <FaAws /> },
        { name: "Azure", logo: <VscAzure /> },
      ],
    },
    {
      category: "Database Technologies",
      items: [
        { name: "MySQL", logo: <SiMysql /> },
        {
          name: "Amazon RDS",
          logo: (
            <img
              src="RDS.png"
              alt="Amazon RDS"
              className="w-14 h-14 object-contain rounded-lg shadow-md"
            />
          ),
        },
      ],
    },
    {
      category: "DevOps Tools",
      items: [
        { name: "Docker", logo: <FaDocker /> },
        { name: "Kubernetes", logo: <SiKubernetes /> },
        { name: "Ansible", logo: <SiAnsible /> },
      ],
    },
    {
      category: "Operating Systems & Environments",
      items: [
        { name: "Windows", logo: <FaWindows /> },
        { name: "Linux (RHEL 9)", logo: <FaLinux /> },
      ],
    },
    {
      category: "Version Control Systems",
      items: [
        { name: "Git", logo: <FaGitAlt /> },
        { name: "GitHub", logo: <FaGithub /> },
      ],
    },
    {
      category: "CI/CD Tools",
      items: [
        { name: "Jenkins", logo: <FaJenkins /> },
        { name: "SonarQube", logo: <SiSonarqube /> },
      ],
    },
    {
      category: "Virtual Machine Automation Tools",
      items: [{ name: "Vagrant", logo: <SiVagrant /> }],
    },
    {
      category: "Infrastructure as Code (IaC)",
      items: [{ name: "Terraform", logo: <SiTerraform /> }],
    },
  ];

  return (
    <section id="skills">
      <StyledSkills isDarkMode={isDarkMode}>
        <h2 className="title">Skills</h2>
        <div className="skills-container">
          {skills.map((category, index) => (
            <div key={index} className="category-card">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-grid">
                {category.items.map((skill, index) => (
                  <div key={index} className="skill-card">
                    <div className="skill-logo">{skill.logo}</div>
                    <div className="skill-name">{skill.name}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </StyledSkills>
    </section>
  );
}

const StyledSkills = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  background: ${(props) =>
    props.isDarkMode ? "black" : "linear-gradient(to right, #f0f4f8, #e1e8ee)"};
  color: ${(props) => (props.isDarkMode ? "#e0e0e0" : "#333333")};

  .title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
    color: ${(props) => (props.isDarkMode ? "#ffffff" : "#333")};
  }

  .skills-container {
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }

  .category-card {
    background: ${(props) => (props.isDarkMode ? "#1f2937" : "#ffffff")};
    border-radius: 12px;
    box-shadow: 0 8px 15px
      ${(props) =>
        props.isDarkMode ? "rgba(0, 0, 0, 0.6)" : "rgba(0, 0, 0, 0.1)"};
    padding: 20px;
    width: 100%;
    max-width: 500px;
    text-align: center;
  }

  .category-title {
    font-size: 1.8rem;
    margin-bottom: 20px;
    font-weight: bold;
    color: ${(props) => (props.isDarkMode ? "#ffffff" : "#333")};
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 20px;
    justify-items: center;
  }

  .skill-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 120px;
    border-radius: 10px;
    background: ${(props) => (props.isDarkMode ? "#444" : "#f9f9f9")};
    box-shadow: 0 4px 8px
      ${(props) =>
        props.isDarkMode ? "rgba(0, 0, 0, 0.4)" : "rgba(0, 0, 0, 0.2)"};
    transition: transform 0.3s, box-shadow 0.3s;
  }

  .skill-card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 15px
      ${(props) =>
        props.isDarkMode ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.4)"};
  }

  .skill-logo {
  font-size: 3rem;
  transition: filter 0.3s ease-in-out;
  color: ${(props) => (props.isDarkMode ? "#00aaff" : "#0077cc")};
}


  .skill-name {
    font-size: 1rem;
    font-weight: bold;
  }
`;

Skills.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};
