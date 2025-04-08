import React from 'react';
import './proj.css';

const projectData = [
  {
    title: 'Tic-Tac-Toe',
    desc: 'Tic-tac-toe game built with HTML,CSS,JS',
    demoLink: 'https://yg2505.github.io/tic_tac_toe/',
    codeLink: 'https://github.com/yg2505/tic_tac_toe',
  },
  {
    title: 'A Game',
    desc: 'A guessing game built with HTML,CSS,JS',
    demoLink: 'https://yg2505.github.io/game1/',
    codeLink: 'https://github.com/yg2505/game1',
  },
  {
    title: 'TO-DO App',
    desc: 'A simple to-do app',
    demoLink: 'https://to-do-vert-gamma.vercel.app/',
    codeLink: 'https://github.com/yg2505/To-do',
  },
 
];

const Projects = () => {
  return (
    <section className="project-section">
      <h2 className="section-title">WORK</h2>
      <p className="section-subtitle">Check out some of my most recent work</p>

      <div className="project-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <h3 className="card-title">{project.title}</h3>
            <p className="card-desc">{project.description}</p>
            <div className="card-buttons">
              <a href={project.demoLink} className="btn demo-btn" target="_blank" rel="noreferrer">Demo</a>
              <a href={project.codeLink} className="btn code-btn" target="_blank" rel="noreferrer">Code</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
