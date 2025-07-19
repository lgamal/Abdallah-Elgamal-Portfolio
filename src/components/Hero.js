import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from 'react-icons/fa';
import './Hero.css';
import resume from './Abdallah_Elgamal_Resume.pdf'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-shape shape-1"></div>
        <div className="hero-shape shape-2"></div>
        <div className="hero-shape shape-3"></div>
        <div className="hero-shape shape-4"></div>
        <div className="hero-shape shape-5"></div>
        <div className="hero-shape shape-6"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="accent-text">Abdallah Elgamal</span>
            </h1>
            <h2 className="hero-subtitle">Lead Software Engineer at Chubb Life Egypt</h2>
            <p className="hero-description">
              Passionate front-end developer with expertise in React, Node.js, TypeScript, iOS development, and Python. 
              I create innovative solutions that bridge web and mobile platforms, delivering exceptional user experiences 
              and scalable applications.
            </p>
            
            <div className="hero-buttons">
              <button 
                onClick={() => scrollToSection('projects')} 
                className="btn btn-primary"
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="btn btn-outline"
              >
                Get In Touch
              </button>
            </div>

            <div className="hero-social">
              <a href="https://github.com/lgamal" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/abdallahabdelaziiz" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin />
              </a>
              <a href="mailto:abdallahabdelaziiz@gmail.com" className="social-link">
                <FaEnvelope />
              </a>
              <a href={resume} download className="social-link">
                <FaFilePdf />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 