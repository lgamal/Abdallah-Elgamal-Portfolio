import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaBriefcase, FaBlog, FaListAlt, FaPaw, FaGamepad, FaCheckSquare } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Job Tracker",
      description: "A comprehensive React application for tracking job applications, managing interview schedules, and organizing the job search process. Features a clean interface for monitoring application status, deadlines, and follow-ups.",
      technologies: ["React", "JavaScript", "CSS3", "Local Storage", "Responsive Design"],
      image: "job-tracker",
      features: [
        "Application Status Tracking",
        "Interview Schedule Management",
        "Company Information Storage",
        "Search and Filter Functionality",
        "Data Persistence with Local Storage"
      ],
      github: "https://github.com/lgamal/job-tracker",
      live: "#",
      icon: <FaBriefcase />
    },
    {
      id: 2,
      title: "Blog CMS",
      description: "A modern Content Management System built with TypeScript and Next.js for creating, editing, and managing blog content. Features a powerful admin interface with rich text editing and media management capabilities.",
      technologies: ["TypeScript", "Next.js", "React", "Node.js", "CSS Modules"],
      image: "blog-cms",
      features: [
        "Rich Text Editor Integration",
        "Media Upload & Management",
        "SEO Optimization Features",
        "User Authentication & Authorization",
        "Responsive Admin Dashboard"
      ],
      github: "https://github.com/lgamal/my-blog-cms",
      live: "#",
      icon: <FaBlog />
    },
    {
      id: 3,
      title: "My Todos",
      description: "A fast and efficient todo application built with Vite for lightning-fast development and build times. Clean, minimalist interface for managing daily tasks and productivity tracking.",
      technologies: ["JavaScript", "Vite", "CSS3", "HTML5", "PWA"],
      image: "my-todos",
      features: [
        "Fast Task Creation & Editing",
        "Priority Level Management",
        "Completion Status Tracking",
        "Local Data Persistence",
        "Lightning-Fast Performance with Vite"
      ],
      github: "https://github.com/lgamal/my-todos",
      live: "#",
      icon: <FaListAlt />
    },
    {
      id: 4,
      title: "Pet Appointments",
      description: "A React-based appointment scheduling system designed for veterinary clinics and pet care services. Streamlines the booking process for pet owners and helps clinics manage their schedules efficiently.",
      technologies: ["React", "JavaScript", "CSS3", "Date Management", "Form Validation"],
      image: "pet-appointments",
      features: [
        "Appointment Scheduling Interface",
        "Pet Profile Management",
        "Service Type Selection",
        "Calendar Integration",
        "Appointment Confirmation System"
      ],
      github: "https://github.com/lgamal/pets-appointments",
      live: "#",
      icon: <FaPaw />
    },
    {
      id: 5,
      title: "BullsEye Game",
      description: "An engaging iOS guessing game built with Swift and UIKit. Players test their precision by guessing numbers within a target range. Features smooth animations and an intuitive user interface.",
      technologies: ["Swift", "UIKit", "Core Animation", "Game Logic", "iOS SDK"],
      image: "bullseye-game",
      features: [
        "Interactive Slider Controls",
        "Score Calculation System",
        "Smooth UI Animations",
        "Multiple Difficulty Levels",
        "Native iOS Performance"
      ],
      github: "https://github.com/lgamal/BullsEye",
      live: "#",
      icon: <FaGamepad />
    },
    {
      id: 6,
      title: "iOS Checklist",
      description: "A native iOS task management application built with Swift and UIKit. Features comprehensive task tracking with status updates, priority management, and a clean, iOS-native user interface.",
      technologies: ["Swift", "UIKit", "Core Data", "iOS SDK", "MVC Architecture"],
      image: "ios-checklist",
      features: [
        "Task Creation & Management",
        "Status Tracking (Complete/Incomplete)",
        "Priority Level Assignment",
        "Core Data Persistence",
        "Native iOS Design Patterns"
      ],
      github: "https://github.com/lgamal/IOS-Checklist",
      live: "#",
      icon: <FaCheckSquare />
    }
  ];

  const ProjectCard = ({ project, index }) => (
    <div className="project-card card" style={{ animationDelay: `${index * 0.2}s` }}>
      <div className="project-image">
        <div className="project-placeholder">
          <div className="project-icon">
            {project.icon}
          </div>
          <div className="project-overlay">
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                <FaGithub />
                <span>Code</span>
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                <FaExternalLinkAlt />
                <span>Live Demo</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-features">
          <h4 className="features-title">Key Features:</h4>
          <ul className="features-list">
            {project.features.map((feature, idx) => (
              <li key={idx} className="feature-item">{feature}</li>
            ))}
          </ul>
        </div>

        <div className="project-tech">
          <h4 className="tech-title">Technologies Used:</h4>
          <div className="tech-stack">
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A showcase of my diverse projects spanning web development, mobile applications, and full-stack solutions. 
          Each project demonstrates different aspects of my technical expertise and problem-solving approach.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="projects-cta">
          <div className="cta-card card">
            <h3 className="cta-title">Explore More of My Work</h3>
            <p className="cta-description">
              These are just a few highlights from my portfolio. Visit my GitHub profile to see more projects, 
              including experimental work, open-source contributions, and ongoing developments in web and mobile technologies.
            </p>
            <div className="cta-buttons">
              <a href="https://github.com/lgamal" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <FaGithub />
                View All Repositories
              </a>
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-outline"
              >
                Discuss a Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 