import React, { useState } from 'react';
import {
  FaGithub, FaExternalLinkAlt, FaBriefcase, FaBlog, FaListAlt,
  FaPaw, FaGamepad, FaCheckSquare, FaDatabase, FaMobile,
  FaShieldAlt, FaBuilding, FaShoppingCart, FaHospital, FaEnvelope
} from 'react-icons/fa';
import './Projects.css';

const FILTERS = ['All', 'Production', 'SaaS / ERP', 'Mobile', 'Open Source'];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    /* ── PRODUCTION / ENTERPRISE ────────────────────────────────── */
    {
      id: 'agency-platform',
      badge: 'Production · FRA-Pending',
      badgeColor: '#f59e0b',
      filter: 'Production',
      title: 'Agency Digital Application Platform',
      subtitle: 'Nationwide React Native Insurance Platform',
      description:
        'Led end-to-end architecture and delivery of a nationwide platform enabling insurance agents across Egypt to submit digital life insurance applications, fully integrated with the Life Core System.',
      technologies: ['React Native', 'Node.js', 'SQL Server', 'JWT', 'REST API', 'Azure', 'JIRA'],
      achievements: [
        'Owned architecture, API contracts, data models & security standards',
        'Coordinated Mobile, Actuarial, Operations, Sales & vendor teams',
        'Delivered on-time — pending FRA regulatory approval',
      ],
      github: null,
      live: null,
      icon: <FaMobile />,
      iconBg: 'linear-gradient(135deg,#1e40af,#0f172a)',
      private: true,
    },
    {
      id: 'group-insurance',
      badge: 'Production · UAT Complete',
      badgeColor: '#10b981',
      filter: 'Production',
      title: 'Group Insurance Full-Stack System',
      subtitle: 'React.js · TypeScript · Node.js · SQL Server',
      description:
        'Full-stack system covering the complete insurance lifecycle — Group Sales, Underwriting, Operations, Claims, Collections, and Actuarial — from DB schema design to UAT sign-off.',
      technologies: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'SQL Server', 'JWT'],
      achievements: [
        'Role-based workflows across 6 insurance departments',
        'Architected DB schema, REST APIs & business logic end-to-end',
        'Led UAT with full business-stakeholder sign-off',
      ],
      github: null,
      live: null,
      icon: <FaDatabase />,
      iconBg: 'linear-gradient(135deg,#065f46,#0f172a)',
      private: true,
    },
    {
      id: 'fra-compliance',
      badge: 'Production · Live',
      badgeColor: '#ef4444',
      filter: 'Production',
      title: 'FRA Regulatory Compliance System',
      subtitle: 'Python · REST API · PostgreSQL',
      description:
        'Python-based data pipeline that validates, transforms, and securely submits insurance data to the Egyptian Financial Regulatory Authority with full audit trails.',
      technologies: ['Python', 'REST API', 'OAuth', 'PostgreSQL', 'SQL Server', 'Audit Logging'],
      achievements: [
        'Secure FRA REST API integration (GET/POST) with auth & audit trail',
        'Eliminated manual regulatory reporting workflows',
        'Reduced operational risk for FRA compliance submission',
      ],
      github: null,
      live: null,
      icon: <FaShieldAlt />,
      iconBg: 'linear-gradient(135deg,#7c2d12,#0f172a)',
      private: true,
    },

    {
      id: 'pss-email-sender',
      badge: 'Production · Internal Tool',
      badgeColor: '#10b981',
      filter: 'Production',
      title: 'PSS Email Sender',
      subtitle: 'Policy Document Automation Platform · Chubb Life Egypt',
      description:
        'Desktop automation platform replacing a manual policy document delivery workflow — reads eBao Crystal Report output, auto-matches policy PDFs, attaches brochures, and sends personalised customer emails in a single click. Built entirely in-house at zero third-party cost.',
      technologies: ['React', 'Python', 'Flask', 'MS Access', 'REST API', 'RBAC', 'Crystal Reports', 'eBao Integration'],
      achievements: [
        'Eliminated hours of manual work per batch — full policy-to-email pipeline automated end-to-end',
        'Role-based access (Admin / Operator / Manager) with complete audit trail for compliance traceability',
        'Manager reconciliation dashboard with live success rates and date/user filtering for month-end closing',
        'Arabic RTL + English email support; admin-configurable templates and one-click Excel export',
      ],
      github: null,
      live: null,
      icon: <FaEnvelope />,
      iconBg: 'linear-gradient(135deg,#065f46,#0f172a)',
      private: true,
    },

    /* ── SAAS / ERP ─────────────────────────────────────────────── */
    {
      id: 'woko-erp',
      badge: 'SaaS · Multi-Tenant ERP',
      badgeColor: '#6366f1',
      filter: 'SaaS / ERP',
      title: 'WokoERP',
      subtitle: 'React 18 · TypeScript · Node.js · SQL Server',
      description:
        'Production-ready multi-tenant ERP SaaS for Egyptian businesses — HR, Finance, Sales, Inventory, CRM, Procurement, VAT, Billing, and custom reporting modules with a full SuperAdmin panel.',
      technologies: ['React 18', 'TypeScript', 'Node.js', 'SQL Server', 'Multi-Tenant', 'JWT', 'Tailwind CSS'],
      achievements: [
        '10+ modules: HR, Finance, Sales, Inventory, CRM, Procurement, VAT, Billing',
        'Multi-tenant SaaS architecture with subscription billing & audit middleware',
        'SuperAdmin panel, tenant isolation, currency & customization support',
      ],
      github: 'https://github.com/lgamal/WokoERP',
      live: null,
      icon: <FaBuilding />,
      iconBg: 'linear-gradient(135deg,#4f46e5,#0f172a)',
    },

    /* ── MOBILE / KMP ───────────────────────────────────────────── */
    {
      id: 'mafrouza',
      badge: 'KMP · Android + iOS',
      badgeColor: '#ec4899',
      filter: 'Mobile',
      title: 'Mafrouza — مفروزة',
      subtitle: 'Kotlin Multiplatform · Compose Multiplatform',
      description:
        'Arabic-first RTL e-commerce app for Egyptian food delivery, targeting both Android and iOS from a single Kotlin codebase using Compose Multiplatform with shared business logic and UI.',
      technologies: ['Kotlin Multiplatform', 'Compose Multiplatform', 'Android', 'iOS', 'Koin DI', 'MVVM'],
      achievements: [
        'Single shared codebase for Android & iOS (Kotlin Multiplatform)',
        'Full Arabic-first RTL design with custom MafrouzaTheme design system',
        'Cart, product catalog, order summary, MVVM + repository pattern',
      ],
      github: 'https://github.com/lgamal/Mafrouza',
      live: null,
      icon: <FaShoppingCart />,
      iconBg: 'linear-gradient(135deg,#be185d,#0f172a)',
    },
    {
      id: 'agency-platform-mobile',
      badge: 'Production · React Native',
      badgeColor: '#f59e0b',
      filter: 'Mobile',
      title: 'Agency Digital Application Platform',
      subtitle: 'React Native · Life Core API',
      description:
        'Nationwide React Native app for insurance agents across Egypt — see Production entry for full details.',
      technologies: ['React Native', 'Node.js', 'JWT', 'SQL Server', 'Azure'],
      achievements: [
        'Cross-platform (iOS + Android) with Life Core System integration',
        'FRA regulatory approval pending',
      ],
      github: null,
      live: null,
      icon: <FaMobile />,
      iconBg: 'linear-gradient(135deg,#1e40af,#0f172a)',
      private: true,
      hidden: true,
    },

    /* ── OPEN SOURCE ─────────────────────────────────────────────── */
    {
      id: 'egypt-sports',
      badge: 'Government · Ministry Platform',
      badgeColor: '#0ea5e9',
      filter: 'Open Source',
      title: 'Egypt Sports Medical Platform',
      subtitle: 'منصة حجز الفحوصات الطبية الرياضية',
      description:
        'Comprehensive digital platform for managing mandatory medical examinations for football players, under the supervision of the Egyptian Ministry of Youth and Sports — with club, hospital, and admin roles.',
      technologies: ['Node.js', 'Express.js', 'PostgreSQL', 'React', 'Vite', 'JWT', 'Role-Based Access'],
      achievements: [
        'Multi-role system: Ministry Admin, Clubs (Al Ahly, Zamalek, Pyramids), Hospitals',
        'Booking management for player medical examinations with full RBAC',
        'Seed data with 3 clubs, 3 hospitals, 7 users, 20 players, 15 bookings',
      ],
      github: 'https://github.com/lgamal/egypt-sports-medical-platform',
      live: null,
      icon: <FaHospital />,
      iconBg: 'linear-gradient(135deg,#0c4a6e,#0f172a)',
    },
    {
      id: 'decoding',
      badge: 'Enterprise · Open Source',
      badgeColor: '#3b82f6',
      filter: 'Open Source',
      title: 'Decoding Management System',
      subtitle: 'Next.js · TypeScript · SQL Server',
      description:
        'Enterprise web app migrating internal decoding operations from MS Access to SQL Server with RBAC, real-time email notifications, file uploads, and comprehensive audit trails.',
      technologies: ['Next.js', 'React', 'TypeScript', 'SQL Server', 'Node.js', 'JWT', 'Nodemailer'],
      achievements: [
        'Role-based Access Control — BC Users, Operations, Admin',
        'Real-time email notifications, file uploads & Excel export',
        'Database migration from MS Access to SQL Server',
      ],
      github: 'https://github.com/lgamal/Decoding',
      live: null,
      icon: <FaDatabase />,
      iconBg: 'linear-gradient(135deg,#1e40af,#0f172a)',
    },
    {
      id: 'blog-cms',
      badge: 'Open Source',
      badgeColor: '#8b5cf6',
      filter: 'Open Source',
      title: 'Blog CMS',
      subtitle: 'TypeScript · Next.js · Node.js',
      description:
        'Modern Content Management System with rich text editing, media management, SEO optimization, authentication, and a responsive admin dashboard.',
      technologies: ['TypeScript', 'Next.js', 'React', 'Node.js', 'CSS Modules'],
      achievements: [
        'Rich text editor, media upload & SEO features',
        'User authentication & responsive admin dashboard',
      ],
      github: 'https://github.com/lgamal/my-blog-cms',
      live: null,
      icon: <FaBlog />,
      iconBg: 'linear-gradient(135deg,#5b21b6,#0f172a)',
    },
    {
      id: 'job-tracker',
      badge: 'Open Source',
      badgeColor: '#3b82f6',
      filter: 'Open Source',
      title: 'Job Tracker',
      subtitle: 'React · JavaScript',
      description:
        'React application for tracking job applications, interview schedules, and job search pipeline with local persistence and filter/search.',
      technologies: ['React', 'JavaScript', 'CSS3', 'Local Storage'],
      achievements: [
        'Application status + interview schedule management',
        'Search, filter & local persistence',
      ],
      github: 'https://github.com/lgamal/job-tracker',
      live: null,
      icon: <FaBriefcase />,
      iconBg: 'linear-gradient(135deg,#1d4ed8,#0f172a)',
    },
    {
      id: 'ios-checklist',
      badge: 'iOS Native',
      badgeColor: '#10b981',
      filter: 'Mobile',
      title: 'iOS Checklist',
      subtitle: 'Swift · UIKit · Core Data',
      description:
        'Native iOS task management app with status tracking, priority levels, due-date warnings, and Core Data persistence.',
      technologies: ['Swift', 'UIKit', 'Core Data', 'MVC', 'iOS SDK'],
      achievements: [
        'Status tracking with due-date warning notifications',
        'Core Data persistence with native iOS MVC patterns',
      ],
      github: 'https://github.com/lgamal/IOS-Checklist',
      live: null,
      icon: <FaCheckSquare />,
      iconBg: 'linear-gradient(135deg,#065f46,#0f172a)',
    },
    {
      id: 'bullseye',
      badge: 'iOS Native',
      badgeColor: '#10b981',
      filter: 'Mobile',
      title: 'BullsEye Game',
      subtitle: 'Swift · UIKit · Core Animation',
      description:
        'Engaging iOS precision guessing game with slider controls, score calculation, smooth animations, and multiple difficulty levels.',
      technologies: ['Swift', 'UIKit', 'Core Animation', 'iOS SDK'],
      achievements: [
        'Interactive sliders, score system & multiple difficulty levels',
        'Smooth native iOS animations',
      ],
      github: 'https://github.com/lgamal/BullsEye',
      live: null,
      icon: <FaGamepad />,
      iconBg: 'linear-gradient(135deg,#065f46,#0f172a)',
    },
    {
      id: 'pets',
      badge: 'Open Source',
      badgeColor: '#3b82f6',
      filter: 'Open Source',
      title: 'Pet Appointments',
      subtitle: 'React · JavaScript',
      description:
        'React appointment scheduling system for veterinary clinics with pet profiles, service selection, and booking confirmation.',
      technologies: ['React', 'JavaScript', 'CSS3'],
      achievements: ['Pet profile management', 'Calendar-based appointment scheduling'],
      github: 'https://github.com/lgamal/pets-appointments',
      live: null,
      icon: <FaPaw />,
      iconBg: 'linear-gradient(135deg,#1d4ed8,#0f172a)',
    },
    {
      id: 'todos',
      badge: 'Open Source',
      badgeColor: '#3b82f6',
      filter: 'Open Source',
      title: 'My Todos',
      subtitle: 'Vite · JavaScript · PWA',
      description:
        'Lightning-fast Vite-based todo app with priority levels, completion tracking, and local persistence.',
      technologies: ['JavaScript', 'Vite', 'CSS3', 'PWA'],
      achievements: ['Vite performance', 'Priority levels & local persistence'],
      github: 'https://github.com/lgamal/my-todos',
      live: null,
      icon: <FaListAlt />,
      iconBg: 'linear-gradient(135deg,#1d4ed8,#0f172a)',
    },
  ];

  const visible = projects.filter(
    (p) => !p.hidden && (activeFilter === 'All' || p.filter === activeFilter)
  );

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          From FRA-regulated production platforms to multi-tenant ERP SaaS and cross-platform mobile apps
          — each project represents real business impact.
        </p>

        {/* Filter Tabs */}
        <div className="project-filters">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {visible.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="projects-cta">
          <div className="cta-card card">
            <h3 className="cta-title">Explore More on GitHub</h3>
            <p className="cta-description">
              Production enterprise systems are private by nature — but public repos showcase the
              breadth of technologies across web, mobile, SaaS, and automation.
            </p>
            <div className="cta-buttons">
              <a href="https://github.com/lgamal" target="_blank" rel="noopener noreferrer" className="btn btn-primary cta-btn">
                <FaGithub /> View GitHub Profile
              </a>
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-outline cta-btn"
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

const ProjectCard = ({ project, index }) => (
  <div className="project-card" style={{ animationDelay: `${index * 0.07}s` }}>
    {/* Top banner */}
    <div className="project-banner" style={{ background: project.iconBg }}>
      <div className="project-icon-wrap">{project.icon}</div>
      <div className="project-overlay">
        <div className="project-links">
          {project.private ? (
            <span className="proj-link proj-link-private"><FaShieldAlt /> Private</span>
          ) : project.github ? (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="proj-link">
              <FaGithub /> Code
            </a>
          ) : null}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="proj-link">
              <FaExternalLinkAlt /> Live
            </a>
          )}
        </div>
      </div>
    </div>

    {/* Content */}
    <div className="project-body">
      <div className="proj-badge-row">
        <span className="proj-badge" style={{ color: project.badgeColor, borderColor: `${project.badgeColor}40`, background: `${project.badgeColor}12` }}>
          {project.badge}
        </span>
      </div>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-subtitle">{project.subtitle}</p>
      <p className="project-desc">{project.description}</p>

      <ul className="project-achievements">
        {project.achievements.map((a, i) => (
          <li key={i}>{a}</li>
        ))}
      </ul>

      <div className="project-tech-row">
        {project.technologies.map((t, i) => (
          <span key={i} className="tech-chip">{t}</span>
        ))}
      </div>
    </div>
  </div>
);

export default Projects;
