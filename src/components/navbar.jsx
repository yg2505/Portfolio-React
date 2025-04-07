import React, { useState } from 'react';
import './navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ scrollToSection }) => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const handleNavClick = (section) => {
    scrollToSection(section);
    setClick(false); // close menu on mobile after click
  };

  return (
    <div className='header'>
      <h1 style={{ cursor: 'pointer' }} onClick={() => handleNavClick('home')}>Portfolio</h1>

      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li><button onClick={() => handleNavClick('home')}>Home</button></li>
        <li><button onClick={() => handleNavClick('about')}>About</button></li>
        <li><button onClick={() => handleNavClick('project')}>Work</button></li>
        <li><button onClick={() => handleNavClick('contact')}>Contact</button></li>
      </ul>

      <div className='hamburger' onClick={handleClick}>
        {click
          ? <FaTimes size={20} style={{ color: '#fff' }} />
          : <FaBars size={20} style={{ color: '#fff' }} />
        }
      </div>
    </div>
  );
};

export default Navbar;
