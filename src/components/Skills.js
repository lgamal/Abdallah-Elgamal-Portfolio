import React from 'react';
import { FaReact, FaNodeJs, FaJs, FaCode, FaUsers, FaCog, FaRocket } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiSwift } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const technicalSkills = [
    {
      name: "React",
      level: 95,
      icon: <FaReact />,
      description: "Expert in building modern, scalable React applications with hooks and state management"
    },
    {
      name: "TypeScript",
      level: 90,
      icon: <SiTypescript />,
      description: "Strong typing and advanced TypeScript features for robust application development"
    },
    {
      name: "Node.js",
      level: 88,
      icon: <FaNodeJs />,
      description: "Full-stack development with Node.js, Express, and backend API development"
    },
    {
      name: "Swift & iOS",
      level: 85,
      icon: <SiSwift />,
      description: "Native iOS development with Swift, UIKit, and iOS app architecture patterns"
    },
    {
      name: "JavaScript",
      level: 92,
      icon: <FaJs />,
      description: "Advanced JavaScript ES6+, async programming, and modern web development"
    },
    {
      name: "Next.js",
      level: 87,
      icon: <SiNextdotjs />,
      description: "Server-side rendering, static generation, and full-stack Next.js applications"
    }
  ];

  const softSkills = [
    {
      name: "Technical Leadership",
      level: 92,
      icon: <FaRocket />,
      description: "Leading technical teams and making architectural decisions in enterprise environments"
    },
    {
      name: "Problem Solving",
      level: 95,
      icon: <FaCog />,
      description: "Analytical thinking and creative solutions for complex technical challenges"
    },
    {
      name: "Team Collaboration",
      level: 90,
      icon: <FaUsers />,
      description: "Cross-functional collaboration and mentoring junior developers"
    },
    {
      name: "System Architecture",
      level: 88,
      icon: <FaCode />,
      description: "Designing scalable, maintainable software architectures and technical strategy"
    }
  ];

  const SkillCard = ({ skill, index }) => (
    <div className="skill-card card" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="skill-header">
        <div className="skill-icon">
          {skill.icon}
        </div>
        <div className="skill-info">
          <h4 className="skill-name">{skill.name}</h4>
          <p className="skill-description">{skill.description}</p>
        </div>
      </div>
      
      <div className="skill-progress">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${skill.level}%` }}
          ></div>
        </div>
        <span className="progress-percentage">{skill.level}%</span>
      </div>
    </div>
  );

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="skills-content">
          <div className="skills-category">
            <h3 className="category-title">
              <span className="category-icon">💻</span>
              Technical Skills
            </h3>
            <div className="skills-grid">
              {technicalSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3 className="category-title">
              <span className="category-icon">🎯</span>
              Leadership & Soft Skills
            </h3>
            <div className="skills-grid">
              {softSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index + 6} />
              ))}
            </div>
          </div>
        </div>

        <div className="skills-summary">
          <div className="summary-card card">
            <h3 className="summary-title">Professional Expertise</h3>
            <p className="summary-text">
              As a Lead Software Engineer, I combine deep technical expertise in modern web and mobile 
              technologies with strong leadership skills. My experience spans from building responsive 
              React applications and TypeScript-based systems to developing native iOS apps with Swift. 
              I excel at leading technical teams, making architectural decisions, and delivering 
              high-quality solutions in enterprise environments.
            </p>
            <div className="competency-tags">
              <span className="tag">Full-Stack Development</span>
              <span className="tag">iOS Development</span>
              <span className="tag">Technical Leadership</span>
              <span className="tag">System Architecture</span>
              <span className="tag">Agile Methodologies</span>
              <span className="tag">Code Review & Mentoring</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 