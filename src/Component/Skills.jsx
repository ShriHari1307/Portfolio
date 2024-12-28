import styled from 'styled-components';
import {
  FaReact,
  FaDocker,
  FaCss3Alt,
  FaHtml5,
  FaGitAlt,
  FaJava,
  FaAws,
  FaJenkins,
} from "react-icons/fa";
import { SiKubernetes, SiSpringboot, SiMysql } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "CSS", logo: <FaCss3Alt /> },
    { name: "HTML", logo: <FaHtml5 /> },
    { name: "React", logo: <FaReact /> },
    { name: "Git", logo: <FaGitAlt /> },
    { name: "Java", logo: <FaJava /> },
    { name: "Spring Boot", logo: <SiSpringboot /> },
    { name: "AWS", logo: <FaAws /> },
    { name: "Jenkins", logo: <FaJenkins /> },
    { name: "MySQL", logo: <SiMysql /> },
    { name: "Docker", logo: <FaDocker /> },
    { name: "Kubernetes", logo: <SiKubernetes /> },
  ];

  return (
    <StyledSkills id="skills">
      <h2 className="title">Skills</h2>
      <p className="subtitle">Here are some of the skills I have acquired:</p>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-logo">{skill.logo}</div>
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </StyledSkills>
  );
}

const StyledSkills = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  background-color: #f4f4f4;

  .title {
    font-size: 2.5rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
  }

  .subtitle {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 30px;
    text-align: center;
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 20px;
    width: 100%;
    max-width: 1200px;
    justify-items: center;
  }

  .skill-card {
    position: relative;
    width: 150px;
    height: 150px;
    background: #fff;
    border-radius: 15px;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: all 0.3s ease-in-out;
    overflow: hidden;
    cursor: pointer;
  }

  .skill-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }

  .skill-logo {
    font-size: 3rem;
    color: #0077cc;
    transition: opacity 0.3s ease-in-out;
  }

  .skill-card:hover .skill-logo {
    opacity: 0.2;
  }

  .skill-name {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  .skill-card:hover .skill-name {
    opacity: 1;
  }

  @media (max-width: 768px) {
    .title {
      font-size: 2rem;
    }

    .subtitle {
      font-size: 1rem;
    }

    .skill-card {
      width: 120px;
      height: 120px;
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
      width: 100px;
      height: 100px;
    }

    .skill-name {
      font-size: 0.9rem;
    }
  }
`;
