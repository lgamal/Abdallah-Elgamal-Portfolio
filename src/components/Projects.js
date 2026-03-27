import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaBriefcase, FaBlog, FaListAlt, FaPaw, FaGamepad, FaCheckSquare, FaDatabase, FaMobile, FaShieldAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 0,
      badge: 'Production · FRA-Pending',
      badgeType: 'production',
      title: "Agency Digital Application Platform",
      description: "Nationwide React Native platform enabling insurance agents across Egypt to submit digital life insurance applications, fully integrated with the Life Core System. Led end-to-end architecture, API contracts, security standards, and cross-team delivery coordination.",
      technologies: ["React Native", "Life Core API", "JWT", "REST API", "Node.js", "SQL Server", "JIRA"],
      features: [
        "Nationwide deployment for Egypt insurance agents",
        "Full integration with Life Core System",
        "Architected API contracts, data models & security standards",
        "Coordinated Mobile, Actuarial, Operations & vendor teams",
        "Delivered on-time — pending FRA regulatory approval"
      ],
      github: "https://github.com/lgamal",
      live: "#",
      icon: <FaMobile />,
      privateRepo: true
    },
    {
      id: 1,
      badge: 'Production · Enterprise',
      badgeType: 'production',
      title: "Group Insurance Full-Stack System",
      description: "End-to-end Group Insurance management system covering the full insurance lifecycle — Group Sales, Underwriting, Operations, Claims, Collections, and Actuarial. Built with React.js, TypeScript, Node.js, and SQL Server. Successfully delivered through UAT with business sign-off.",
      technologies: ["React.js", "TypeScript", "Node.js", "Express.js", "SQL Server", "JWT", "REST API"],
      features: [
        "Role-based workflows across 6 insurance departments",
        "Architected database schema, REST APIs & business workflows",
        "Led UAT with business stakeholder sign-off",
        "Financial reports for management, actuarial & operations",
        "Covers full insurance lifecycle end-to-end"
      ],
      github: "https://github.com/lgamal",
      live: "#",
      icon: <FaDatabase />,
      privateRepo: true
    },
    {
      id: 2,
      badge: 'Production · FRA Compliant',
      badgeType: 'production',
      title: "FRA Regulatory Compliance System",
      description: "Python-based regulatory data pipeline that validates, transforms, and securely submits insurance data to the Egyptian Financial Regulatory Authority (FRA). Includes full authentication, authorization, logging, and audit trails. Reduced manual processing and operational risk significantly.",
      technologies: ["Python", "REST API", "OAuth", "PostgreSQL", "SQL Server", "Audit Logging"],
      features: [
        "Secure integration with FRA REST APIs (GET/POST)",
        "Data validation, transformation & automated submission",
        "Complete audit trail & compliance logging",
        "Eliminated manual regulatory reporting workflows",
        "Aligned with Egyptian FRA legal requirements"
      ],
      github: "https://github.com/lgamal",
      live: "#",
      icon: <FaShieldAlt />,
      privateRepo: true
    },
    {
      id: 3,
      badge: 'Open Source',
      badgeType: 'open',
      title: "Decoding Management System",
      description: "Enterprise web application migrating an internal decoding workflow from MS Access to SQL Server, with a modern React/Next.js frontend. Features role-based access control, real-time email notifications, and comprehensive audit trails for workflow management.",
      technologies: ["Next.js", "React", "TypeScript", "SQL Server", "Node.js", "JWT", "Tailwind CSS", "Nodemailer"],
      features: [
        "Role-based Access Control (BC Users, Operations, Admin)",
        "Real-time Email Notifications & Status Tracking",
        "File Upload & Attachment Management",
        "Comprehensive Audit Trail & Change Tracking",
        "Excel Export & Database Migration from MS Access"
      ],
      github: "https://github.com/lgamal/Decoding",
      live: "#",
      icon: <FaDatabase />
    },
    {
      id: 4,
      badge: 'Open Source',
      badgeType: 'open',
      title: "Blog CMS",
      description: "A modern Content Management System built with TypeScript and Next.js for creating, editing, and managing blog content. Features a powerful admin interface with rich text editing and media management.",
      technologies: ["TypeScript", "Next.js", "React", "Node.js", "CSS Modules"],
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
      id: 5,
      badge: 'Open Source',
      badgeType: 'open',
      title: "Job Tracker",
      description: "React application for tracking job applications, managing interview schedules, and organizing the entire job search process with status management and deadline tracking.",
      technologies: ["React", "JavaScript", "CSS3", "Local Storage", "Responsive Design"],
      features: [
        "Application Status Tracking",
        "Interview Schedule Management",
        "Search and Filter Functionality",
        "Data Persistence with Local Storage"
      ],
      github: "https://github.com/lgamal/job-tracker",
      live: "#",
      icon: <FaBriefcase />
    },
    {
      id: 6,
      badge: 'iOS Native',
      badgeType: 'mobile',
      title: "iOS Checklist",
      description: "Native iOS task management app built with Swift and UIKit. Features comprehensive task tracking with status updates, priority management, and Core Data persistence.",
      technologies: ["Swift", "UIKit", "Core Data", "iOS SDK", "MVC Architecture"],
      features: [
        "Task Creation & Management",
        "Status Tracking with Due Date Warnings",
        "Priority Level Assignment",
        "Core Data Persistence",
        "Native iOS Design Patterns"
      ],
      github: "https://github.com/lgamal/IOS-Checklist",
      live: "#",
      icon: <FaCheckSquare />
    },
    {
      id: 7,
      badge: 'iOS Native',
      badgeType: 'mobile',
      title: "BullsEye Game",
      description: "Engaging iOS guessing game built with Swift and UIKit. Players test precision by guessing numbers within a target range, featuring smooth animations and score tracking.",
      technologies: ["Swift", "UIKit", "Core Animation", "iOS SDK"],
      features: [
        "Interactive Slider Controls",
        "Score Calculation System",
        "Smooth UI Animations",
        "Multiple Difficulty Levels"
      ],
      github: "https://github.com/lgamal/BullsEye",
      live: "#",
      icon: <FaGamepad />
    },
    {
      id: 8,
      badge: 'Open Source',
      badgeType: 'open',
      title: "Pet Appointments",
      description: "React-based appointment scheduling system for veterinary clinics. Streamlines the booking process for pet owners and helps clinics manage their schedules efficiently.",
      technologies: ["React", "JavaScript", "CSS3", "Date Management", "Form Validation"],
      features: [
        "Appointment Scheduling Interface",
        "Pet Profile Management",
        "Service Type Selection",
        "Appointment Confirmation System"
      ],
      github: "https://github.com/lgamal/pets-appointments",
      live: "#",
      icon: <FaPaw />
    },
    {
      id: 9,
      badge: 'Open Source',
      badgeType: 'open',
      title: "My Todos",
      description: "Fast and efficient todo application built with Vite. Clean, minimalist interface for managing daily tasks with priority levels and local data persistence.",
      technologies: ["JavaScript", "Vite", "CSS3", "HTML5", "PWA"],
      features: [
        "Fast Task Creation & Editing",
        "Priority Level Management",
        "Completion Status Tracking",
        "Lightning-Fast Performance with Vite"
      ],
      github: "https://github.com/lgamal/my-todos",
      live: "#",
      icon: <FaListAlt />
    }
  ];

  const badgeColors = {
    production: { bg: '#fef3c7', color: '#92400e', border: '#fcd34d' },
    open: { bg: '#eff6ff', color: '#1e40af', border: '#bfdbfe' },
    mobile: { bg: '#f0fdf4', color: '#166534', border: '#bbf7d0' }
  };

  const ProjectCard = ({ project, index }) => {
    const badge = badgeColors[project.badgeType] || badgeColors.open;
    return (
      <div className="project-card card" style={{ animationDelay: `${index * 0.1}s` }}>
        <div className="project-image">
          <div className="project-placeholder">
            <div className="project-icon">
              {project.icon}
            </div>
            <div className="project-overlay">
              <div className="project-links">
                {project.privateRepo ? (
                  <span className="project-link project-link-private">
                    <FaShieldAlt />
                    <span>Private Repo</span>
                  </span>
                ) : (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaGithub />
                    <span>Code</span>
                  </a>
                )}
                {project.live !== '#' && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="project-content">
          <div className="project-header">
            <span
              className="project-badge"
              style={{ background: badge.bg, color: badge.color, borderColor: badge.border }}
            >
              {project.badge}
            </span>
          </div>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>

          <div className="project-features">
            <h4 className="features-title">Key Achievements:</h4>
            <ul className="features-list">
              {project.features.map((feature, idx) => (
                <li key={idx} className="feature-item">{feature}</li>
              ))}
            </ul>
          </div>

          <div className="project-tech">
            <div className="tech-stack">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          From FRA-regulated production platforms to cross-platform mobile apps —
          each project represents real business impact delivered in enterprise environments.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="projects-cta">
          <div className="cta-card card">
            <h3 className="cta-title">Explore More on GitHub</h3>
            <p className="cta-description">
              Production systems are private by nature — but public repos showcase the
              breadth of technologies I work with across web, mobile, and automation.
            </p>
            <div className="cta-buttons">
              <a href="https://github.com/lgamal" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <FaGithub />
                View GitHub Profile
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
