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
  SiPostman 
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
      items: [{ name: "Spring Boot", logo: <SiSpringboot /> },
        { name: "PostMan", logo: <SiPostman  /> }
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
      items: [
        { name: "Terraform", logo: <SiTerraform /> },
      ],
    }
  ];

  return (
    <section id="skills">
      <StyledSkills isDarkMode={isDarkMode}>
        <h2 className="title">Skills</h2>
        <div className="skills-container">
          {skills.map((category, index) => (
            <div key={index} className="category">
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
  }

  .category {
    margin-bottom: 40px;
    padding: 10px;
  }

  .category-title {
    font-size: 1.8rem;
    margin-bottom: 20px;
    text-align: center;
    font-weight: bold;
    color: ${(props) => (props.isDarkMode ? "#ffffff" : "#333")};
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 20px;
    width: 100%;
    justify-items: center;
  }

  .skill-card {
    width: 160px;
    height: 160px;
    background: ${(props) => (props.isDarkMode ? "#333333" : "#ffffff")};
    border-radius: 12px;
    box-shadow: 0 8px 15px
      ${(props) =>
        props.isDarkMode ? "rgba(0, 0, 0, 0.6)" : "rgba(0, 0, 0, 0.1)"};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  }

  .skill-logo {
    font-size: 3rem;
    transition: filter 0.3s ease-in-out;
    color: ${(props) => (props.isDarkMode ? "#00aaff" : "#0077cc")};
  }

  .skill-name {
    position: absolute;
    bottom: 10px;
    font-size: 1.1rem;
    font-weight: bold;
    opacity: 0;
    color: ${(props) => (props.isDarkMode ? "#ffffff" : "#333")};
    text-align: center;
    transition: opacity 0.3s ease-in-out;
  }

  .skill-card:hover {
    transform: scale(1.1);
    box-shadow: 0 15px 30px
      ${(props) =>
        props.isDarkMode ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.2)"};
  }

  .skill-card:hover .skill-name {
    opacity: 1;
  }

  @media (max-width: 768px) {
    .skill-name {
      opacity: 1;
      bottom: 5px;
    }

    .skill-card:hover {
      transform: none;
    }

    .skill-card:hover .skill-logo {
      filter: none;
    }
  }

  @media (max-width: 480px) {
    .skills-grid {
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    }

    .skill-card {
      width: 110px;
      height: 110px;
    }

    .skill-logo {
      font-size: 2rem;
    }

    .skill-name {
      font-size: 0.9rem;
    }
  }
`;

Skills.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};
