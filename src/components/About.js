import React from 'react';
import { FaCode, FaLightbulb, FaUsers, FaRocket } from 'react-icons/fa';
import './About.css';

const About = () => {
  const qualities = [
    {
      icon: <FaCode />,
      title: "Technical Excellence",
      description: "Expert in full-stack development with React, Node.js, TypeScript, Python, and Swift iOS development"
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation Leader",
      description: "Leading cutting-edge solutions and driving technological innovation in the insurance industry"
    },
    {
      icon: <FaUsers />,
      title: "Team Leadership",
      description: "Experienced in leading development teams and mentoring junior developers"
    },
    {
      icon: <FaRocket />,
      title: "Performance Optimization",
      description: "Specialized in building scalable, high-performance applications that handle enterprise-level workloads"
    }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-card">
              <h3 className="about-subtitle">My Professional Journey</h3>
              <p className="about-description">
                As a <strong>Lead Software Engineer at Chubb Life Egypt</strong>, I bring extensive experience 
                in developing comprehensive software solutions that span both web and mobile platforms. 
                My expertise lies in creating robust, scalable applications using modern technologies like 
                React, Node.js, TypeScript, Python, and Swift.
              </p>
              <p className="about-description">
                I'm passionate about building user-centric applications that solve real-world problems. 
                From job tracking systems to content management platforms and iOS games, I enjoy the 
                challenge of transforming ideas into functional, beautiful, and efficient software solutions.
              </p>
              
              <div className="about-stats">
                <div className="stat">
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Featured Projects</div>
                </div>
                <div className="stat">
                  <div className="stat-number">6+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat">
                  <div className="stat-number">∞</div>
                  <div className="stat-label">Learning Mindset</div>
                </div>
              </div>
            </div>
          </div>

          <div className="qualities-grid">
            {qualities.map((quality, index) => (
              <div key={index} className="quality-card card">
                <div className="quality-icon">
                  {quality.icon}
                </div>
                <h4 className="quality-title">{quality.title}</h4>
                <p className="quality-description">{quality.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 