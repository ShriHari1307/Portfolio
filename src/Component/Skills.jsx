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
    margin-bottom: 30px;
    text-align: center;
    color: ${(props) => (props.isDarkMode ? "#ffffff" : "#333")};
  }

  .skills-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    max-width: 1200px;
    width: 100%;
  }

  .category {
    flex: 1 1 calc(33.33% - 20px); /* 3 cards per row with spacing */
    max-width: calc(33.33% - 20px);
    background: ${(props) => (props.isDarkMode ? "#222" : "#fff")};
    border-radius: 12px;
    box-shadow: 0 5px 15px
      ${(props) =>
        props.isDarkMode ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0.1)"};
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: transform 0.3s ease-in-out;
    cursor: pointer;
  }

  .category:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 25px
      ${(props) =>
        props.isDarkMode ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.2)"};
  }

  .category-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 15px;
    color: ${(props) => (props.isDarkMode ? "#ffffff" : "#333")};
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 15px;
    width: 100%;
    justify-items: center;
  }

  .skill-card {
    width: 100px;
    height: 100px;
    background: ${(props) => (props.isDarkMode ? "#333" : "#f9f9f9")};
    border-radius: 10px;
    box-shadow: 0 4px 10px
      ${(props) =>
        props.isDarkMode ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0.1)"};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  }

  .skill-logo {
    font-size: 2.5rem;
    color: ${(props) => (props.isDarkMode ? "#00aaff" : "#0077cc")};
  }

  .skill-name {
    margin-top: 8px;
    font-size: 1rem;
    font-weight: bold;
    color: ${(props) => (props.isDarkMode ? "#ffffff" : "#333")};
  }

  .skill-card:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 20px
      ${(props) =>
        props.isDarkMode ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.2)"};
  }

  @media (max-width: 768px) {
    .category {
      flex: 1 1 calc(50% - 20px); /* 2 cards per row */
      max-width: calc(50% - 20px);
    }

    .skill-card {
      width: 80px;
      height: 80px;
    }

    .skill-logo {
      font-size: 2rem;
    }

    .skill-name {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    .category {
      flex: 1 1 calc(100% - 20px); /* 1 card per row */
      max-width: calc(100% - 20px);
    }

    .skills-grid {
      grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
    }

    .skill-card {
      width: 70px;
      height: 70px;
    }

    .skill-logo {
      font-size: 1.8rem;
    }

    .skill-name {
      font-size: 0.8rem;
    }
  }
`;


Skills.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};
