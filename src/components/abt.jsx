import React, { useEffect, useRef, useState } from 'react';
import './abt.css';
import myPhoto from '../assets/myPhoto.png';  

const About = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`about-section ${isVisible ? 'animate' : ''}`}
    >
      <div className="about-container">
        <div className="about-image">
          <img src={myPhoto} alt="My Portrait" />
        </div>
        <div className="about-content">
          <h2 className="about-title">About Me</h2>
          <p className="about-text">
            Hey! I'm <span className="highlight">Yashvi Goyal</span>, a student at <span className="highlight">Newton School of Technology</span> pursuing a B.Tech in Computer Science. 
            I'm a passionate front-end developer who loves building responsive and interactive web experiences.
          </p>
          <p className="about-subtext">
            I'm constantly learning and exploring new technologies to improve my skills and bring ideas to life.
            Whether it's building projects, solving problems, or diving deep into design, I enjoy the process of creating and growing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
