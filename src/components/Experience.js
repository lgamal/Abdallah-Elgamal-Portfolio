import React, { useState } from 'react';
import { FaBriefcase, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const [expanded, setExpanded] = useState(0);

  const experiences = [
    {
      id: 0,
      role: "Lead Software Engineer",
      company: "Chubb Life Insurance",
      period: "Apr 2025 – Present",
      type: "Current Role",
      typeColor: "#059669",
      highlights: [
        "Owns end-to-end architecture and delivery of a nationwide Agency Digital Application Platform (React Native) serving insurance agents across Egypt's full branch network, fully integrated with the Life Core System",
        "Defines system architecture, API contracts, data models, security standards, and integration strategies for enterprise insurance platforms",
        "Coordinates Mobile App, Life Core System, Actuarial, Operations, Sales teams, and external vendors",
        "Plans delivery milestones and dependencies in JIRA — project delivered, pending FRA regulatory approval",
        "Mentors junior engineers and fresh graduates, enforcing coding standards and architecture consistency"
      ],
      technologies: ["React Native", "Node.js", "REST API", "SQL Server", "Azure", "JIRA"]
    },
    {
      id: 1,
      role: "Senior Software Engineer",
      company: "Chubb Life Insurance",
      period: "Apr 2022 – Mar 2025",
      type: "3 Years",
      typeColor: "#1e40af",
      highlights: [
        "Led FRA compliance systems: Python-based data pipelines validating, transforming, and securely submitting insurance data to the Egyptian Financial Regulatory Authority",
        "Designed and built a Full-Stack Group Insurance System (React.js, TypeScript, Node.js, SQL Server) covering Group Sales, Underwriting, Operations, Claims, Collections, and Actuarial",
        "Architected database schemas, REST APIs, and end-to-end business workflows — led system through UAT with stakeholder sign-off",
        "Built complex SQL queries and financial reports for management, actuarial, and operational analysis",
        "Delivered full Arabic and English website versions; developed 5+ Python automation tools for Finance, Operations, Claims, and Training — eliminating manual workflows across departments"
      ],
      technologies: ["React.js", "TypeScript", "Node.js", "Python", "SQL Server", "Oracle DB", "JWT", "REST API"]
    },
    {
      id: 2,
      role: "Software Engineer",
      company: "Chubb Life Insurance",
      period: "May 2019 – Mar 2022",
      type: "3 Years",
      typeColor: "#6b7280",
      highlights: [
        "Developed and maintained enterprise applications using Python, Swift (iOS), VB.NET, and SQL",
        "Built iOS applications using Firebase for authentication and backend services",
        "Created automation tools using Excel Power Query and VBA to streamline reporting workflows",
        "Contributed to software architecture decisions, data governance, and integration standards",
        "Collaborated within Agile teams on development, testing, documentation, and production support"
      ],
      technologies: ["Python", "Swift", "UIKit", "Firebase", "VB.NET", "SQL", "VBA", "Excel"]
    }
  ];

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`timeline-item ${expanded === index ? 'expanded' : ''}`}>
              <div className="timeline-marker">
                <div className="timeline-dot">
                  <FaBriefcase />
                </div>
                {index < experiences.length - 1 && <div className="timeline-line"></div>}
              </div>

              <div className="timeline-content card">
                <div
                  className="timeline-header"
                  onClick={() => setExpanded(expanded === index ? -1 : index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setExpanded(expanded === index ? -1 : index)}
                >
                  <div className="timeline-meta">
                    <div className="timeline-title-row">
                      <h3 className="timeline-role">{exp.role}</h3>
                      <span
                        className="timeline-type-badge"
                        style={{ background: `${exp.typeColor}18`, color: exp.typeColor, borderColor: `${exp.typeColor}40` }}
                      >
                        {exp.type}
                      </span>
                    </div>
                    <p className="timeline-company">{exp.company}</p>
                    <p className="timeline-period">{exp.period}</p>
                  </div>
                  <button className="timeline-toggle" aria-label="Toggle details">
                    {expanded === index ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                </div>

                {expanded === index && (
                  <div className="timeline-details">
                    <ul className="timeline-highlights">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="timeline-highlight">{h}</li>
                      ))}
                    </ul>
                    <div className="timeline-tech">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
