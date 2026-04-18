import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf, FaMapMarkerAlt } from 'react-icons/fa';
import './Hero.css';
import resume from './Abdallah-Elgamal_Resume.pdf';

const TITLES = [
  'Lead Software Engineer',
  'Solutions Architect',
  'iOS & Mobile Engineer',
  'Full-Stack & Backend Dev',
  'Enterprise Systems Builder',
];

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TITLES[titleIndex];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setTitleIndex((i) => (i + 1) % TITLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, titleIndex]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      {/* Animated background */}
      <div className="hero-bg">
        <div className="hero-orb orb-1"></div>
        <div className="hero-orb orb-2"></div>
        <div className="hero-orb orb-3"></div>
        <div className="hero-grid"></div>
      </div>

      <div className="container">
        <div className="hero-layout">

          {/* LEFT — Text */}
          <div className="hero-text">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              Available for opportunities
            </div>

            <h1 className="hero-name">Abdallah<br /><span className="accent">Elgamal</span></h1>

            <div className="hero-typewriter">
              <span className="typewriter-text">{displayed}</span>
              <span className="typewriter-cursor">|</span>
            </div>

            <p className="hero-description">
              7+ years designing and delivering enterprise-grade systems in regulated financial
              services — across iOS native (Swift / SwiftUI / UIKit), cross-platform mobile
              (KMP / React Native), full-stack web (React / Next.js / TypeScript), backend
              (Python / Node.js), and databases (SQL Server / Oracle PLSQL / PostgreSQL).
              I own projects end-to-end: architecture, delivery, and compliance.
            </p>

            <div className="hero-location">
              <FaMapMarkerAlt />
              <span>Cairo, Egypt · Open to Remote / Relocation</span>
            </div>

            <div className="hero-stats">
              <div className="stat-pill">
                <span className="stat-num">7+</span>
                <span className="stat-lbl">Years</span>
              </div>
              <div className="stat-sep"></div>
              <div className="stat-pill">
                <span className="stat-num">3</span>
                <span className="stat-lbl">Production Platforms</span>
              </div>
              <div className="stat-sep"></div>
              <div className="stat-pill">
                <span className="stat-num">🏆</span>
                <span className="stat-lbl">Most Innovative 2024</span>
              </div>
            </div>

            <div className="hero-actions">
              <button onClick={() => scrollToSection('projects')} className="btn btn-primary hero-btn">
                View Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="btn btn-ghost hero-btn">
                Get In Touch
              </button>
            </div>

            <div className="hero-social">
              <a href="https://github.com/lgamal" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/abdallahabdelaziiz" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="mailto:abdallahabdelaziiz@gmail.com" className="social-icon" title="Email">
                <FaEnvelope />
              </a>
              <a href={resume} download className="social-icon" title="Download Resume">
                <FaFilePdf />
              </a>
            </div>
          </div>

          {/* RIGHT — Photo */}
          <div className="hero-photo-wrap">
            <div className="photo-ring photo-ring-outer"></div>
            <div className="photo-ring photo-ring-inner"></div>
            <div className="photo-frame">
              <img src={`${process.env.PUBLIC_URL}/abdallah-photo.png`} alt="Abdallah Elgamal" className="hero-photo" />
            </div>
            <div className="photo-badge photo-badge-1">
              <span className="pb-icon">📱</span>
              <span>iOS · KMP · Mobile</span>
            </div>
            <div className="photo-badge photo-badge-2">
              <span className="pb-icon">🏗️</span>
              <span>Solutions Architect</span>
            </div>
            <div className="photo-badge photo-badge-3">
              <span className="pb-icon">🔒</span>
              <span>FRA · Enterprise</span>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
