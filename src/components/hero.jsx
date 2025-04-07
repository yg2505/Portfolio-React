
import './hero.css';
import React, { useRef, useEffect, useState } from 'react';
import Bgimg from '../assets/img-bg2.png';
import { Link } from 'react-router-dom';
import BlurText from "../assets/blur_eff";

const Hero = () => {
  const blurRef = useRef(null);
  const [animateKey, setAnimateKey] = useState(0);

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            
            setAnimateKey(prev => prev + 1);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (blurRef.current) {
      observer.observe(blurRef.current);
    }

    return () => {
      if (blurRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(blurRef.current);
      }
    };
  }, []);

  return (
    <div className='hero'>
      <div className='mask'>
        <img className='bgimg' src={Bgimg} alt="background" />
      </div>

      <div className='content'>
      
        <div ref={blurRef}>
          <BlurText
            key={animateKey}  
            text="HI, I'M A WEB DEVELOPER"
            delay={120}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-2xl mb-8"
          />
        </div>

        

       
      </div>
    </div>
  );
};

export default Hero;