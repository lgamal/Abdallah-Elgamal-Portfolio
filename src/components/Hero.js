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
            <div className="hero-badge">Lead Software Engineer · Solution Architect</div>
            <h1 className="hero-title">
              <span className="accent-text">Abdallah Elgamal</span>
            </h1>
            <h2 className="hero-subtitle">
              Architecting Enterprise Systems Across Web, Mobile &amp; Cloud
            </h2>
            <p className="hero-description">
              6+ years building production-grade systems in regulated insurance environments.
              Led nationwide digital transformation platforms, FRA-compliant regulatory systems,
              and cross-platform mobile applications — from architecture to delivery.
            </p>

            <div className="hero-highlights">
              <div className="highlight-item">
                <span className="highlight-number">6+</span>
                <span className="highlight-label">Years in Enterprise</span>
              </div>
              <div className="highlight-divider"></div>
              <div className="highlight-item">
                <span className="highlight-number">3</span>
                <span className="highlight-label">Production Platforms</span>
              </div>
              <div className="highlight-divider"></div>
              <div className="highlight-item">
                <span className="highlight-number">2024</span>
                <span className="highlight-label">Most Innovative Award</span>
              </div>
            </div>

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
              <a href="https://github.com/lgamal" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/abdallahabdelaziiz" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="mailto:abdallahabdelaziiz@gmail.com" className="social-link" title="Email">
                <FaEnvelope />
              </a>
              <a href={resume} download className="social-link" title="Download Resume">
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
