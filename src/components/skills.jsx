import React from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';
import Magnet from '../assets/magnet_eff';

const skills = [
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'MySQL', icon: <SiMysql /> }
 
];

const Skills = () => {
  return (
    <section className="rare-skills-section" id="skills">
    <h2 className="rare-skills-title">My Tech Stack</h2>
    <div className="rare-skills-grid">
      {skills.map((skill, index) => (
        <Magnet magnetStrength={3} padding={30} key={index} className="magnet-wrapper" factor={0.25}>
          <div className="rare-skill-card">
            <div className="rare-skill-icon">{skill.icon}</div>
            <div className="rare-skill-name">{skill.name}</div>
          </div>
        </Magnet>
      ))}
    </div>
  </section>
  );
};

export default Skills;
