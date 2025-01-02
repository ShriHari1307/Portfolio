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
    FaGithub, FaPython
  } from "react-icons/fa";
  import { SiKubernetes, SiSpringboot, SiMysql, SiAnsible, SiSonarqube,SiVagrant  } from "react-icons/si";
  import { IoLogoJavascript } from "react-icons/io5";
  import PropTypes from "prop-types";
  import { VscAzure } from "react-icons/vsc";


  export default function Skills({ isDarkMode }) {
    const skills = [
      {
        category: "Programming",
        items: [
          { name: "Java", logo: <FaJava /> },
          { name: "Python", logo: <FaPython /> },
          { name: "JavaScript", logo: <IoLogoJavascript /> },
        ],
      },
      {
        category: "Frontend Development",
        items: [
          { name: "React", logo: <FaReact /> },
          { name: "CSS", logo: <FaCss3Alt /> },
          { name: "HTML", logo: <FaHtml5 /> },
          { name: "Bootstrap", logo: <FaBootstrap /> },
        ],
      },
      {
        category: "Backend Development",
        items: [
          { name: "Spring Boot", logo: <SiSpringboot /> },
        ],
      },
      {
        category: "Cloud",
        items: [
          { name: "AWS", logo: <FaAws /> },
          { name: "AZURE", logo: <VscAzure /> },
        ],
      },
      {
        category: "Databases",
        items: [
          { name: "MySQL", logo: <SiMysql /> },
          { name: "Amazon RDS", logo: <img src="RDS.png" alt="Amazon RDS" className="w-14 h-14 object-contain rounded-lg shadow-md" /> }
        ],
      },
      {
        category: "DevOps & Infrastructure",
        items: [
          { name: "Docker", logo: <FaDocker /> },
          { name: "Kubernetes", logo: <SiKubernetes /> },
          { name: "Jenkins", logo: <FaJenkins /> },
          { name: "Linux", logo: <FaLinux /> },
          { name: "Ansible", logo: <SiAnsible /> },
        ],
      },
      {
        category: "Operating System",
        items: [
          { name: "Windows", logo: <FaWindows /> },
          { name: "Linux (RHEL 9)", logo: <FaLinux /> },
        ],
      },
      {
        category: "Version Control",
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
        category: "VM Automation Tool",
        items: [
          { name: "Vagrant", logo: <SiVagrant /> },
          
        ],
      },
    ];

    return (
      <section id="skills">
      <StyledSkills id="skills" isDarkMode={isDarkMode}>
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
    background-color: ${(props) => (props.isDarkMode ? "#1e1e1e" : "#f4f4f4")};
    color: ${(props) => (props.isDarkMode ? "#e0e0e0" : "#333")};

    .title {
      font-size: 2.5rem;
      font-weight: bold;
      color: ${(props) => (props.isDarkMode ? "#ffffff" : "#333")};
      margin-bottom: 20px;
      text-align: center;
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
      font-weight: bold;
      color: ${(props) => (props.isDarkMode ? "#ffffff" : "#333")};
      margin-bottom: 20px;
      text-align: center;
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
      gap: 20px;
      width: 100%;
      justify-items: center;
    }

    .skill-card {
      position: relative;
      width: 160px;
      height: 160px;
      background: ${(props) => (props.isDarkMode ? "#333333" : "#ffffff")};
      border-radius: 12px;
      box-shadow: 0 8px 15px
        ${(props) => (props.isDarkMode ? "rgba(0, 0, 0, 0.6)" : "rgba(0, 0, 0, 0.1)")};
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      transition: all 0.3s ease-in-out;
      overflow: hidden;
      cursor: pointer;
      padding: 10px;
    }

    .skill-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 15px 30px
        ${(props) => (props.isDarkMode ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.2)")};
    }

    .skill-logo {
      font-size: 3rem;
      color: ${(props) => (props.isDarkMode ? "#00aaff" : "#0077cc")};
      transition: opacity 0.3s ease-in-out;
    }

    .skill-card:hover .skill-logo {
      opacity: 0.3;
    }

    .skill-name {
      position: absolute;
      bottom: 5px;
      left: 0;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.1rem;
      font-weight: bold;
      color: ${(props) => (props.isDarkMode ? "#ffffff" : "#333")};
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
      padding: 5px;
    }

    .skill-card:hover .skill-name {
      opacity: 1;
    }

    @media (max-width: 768px) {
      .title {
        font-size: 2rem;
      }

      .category-title {
        font-size: 1.5rem;
      }

      .skill-card {
        width: 130px;
        height: 130px;
      }

      .skill-name {
        font-size: 1rem;
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

      .skill-name {
        font-size: 0.9rem;
      }
    }
  `;

  Skills.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
  };
