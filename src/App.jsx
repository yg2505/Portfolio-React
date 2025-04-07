import React, { useRef } from 'react';
import './App.css'
import Home from './routes/home'
import About from './routes/about'
import Contact from './routes/contact'
import Project from './routes/project'
import Navbar from './components/navbar'
 

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    const sectionMap = {
      home: homeRef,
      about: aboutRef,
      project: projectRef,
      contact: contactRef,
    };

    const ref = sectionMap[section];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar scrollToSection={scrollToSection} />
      <div ref={homeRef}><Home /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={projectRef}><Project /></div>
      <div ref={contactRef}><Contact /></div>
    </>
  );
}

export default App


