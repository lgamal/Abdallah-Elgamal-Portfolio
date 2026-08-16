import React, { useState } from 'react';
import { FaBriefcase, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const [expanded, setExpanded] = useState(0);

  const experiences = [
    {
      id: 0,
      role: "Lead Software Engineer",
      subRole: "Acting Project Manager — Agency Digital Application Platform & Group Insurance Programme",
      company: "Chubb Life Insurance",
      period: "Apr 2025 – Present",
      type: "Current Role",
      typeColor: "#059669",
      highlights: [
        "Acts as Project Manager for the nationwide Agency Digital Application Platform — owning the delivery roadmap, requirements definition with business stakeholders, scope control, and the critical path through to FRA regulatory approval",
        "Owns vendor management across the delivery lifecycle for eight internal teams and external vendors — eBao (Life Core System), Paymob (payment integration), Valify (FRA-authorised identity verification & digital signature), the Azure AD B2C / Entra ID team, Information Security, API Studio (API onboarding), the Azure push-notification team, and mobile store release teams — holding each to plan, quality standards, and agreed milestones",
        "Led 100+ meetings and stand-ups across those parties, maintaining meeting minutes, decision logs, action trackers, and RAID items with disciplined escalation of risks and dependencies",
        "Runs a hybrid delivery model — internal stage-gate governance wrapped around vendor delivery — owning quality gates and exit criteria for Information Security approvals and API Studio onboarding, and clearing them without slipping milestones",
        "Coordinates integration workstreams across the core policy system, payment gateway, identity/e-signature provider, identity management, and notification platforms; identifies and specifies the API surface each party must expose or consume",
        "Manages acceptance of vendor deliverables against agreed criteria, with input to vendor contracts, SLAs, and commercial terms; tracks effort and budget against plan",
        "Owns end-to-end architecture and delivery of the platform (React Native) serving insurance agents across Egypt's full branch network, fully integrated with the Life Core System",
        "Leads the Group Insurance digitisation programme as owner from the software side — a phased transformation from manual, paper-based operations to an end-to-end system",
        "Plans milestones, dependencies, and releases in JIRA; mentors junior engineers and fresh graduates, enforcing coding standards and architecture consistency"
      ],
      technologies: ["React Native", "Node.js", "REST API", "SQL Server", "Azure AD B2C", "eBao", "Paymob", "Valify", "JIRA"]
    },
    {
      id: 1,
      role: "Senior Software Engineer",
      subRole: "Project Lead — FRA Regulatory Integration & Group Insurance Digitisation",
      company: "Chubb Life Insurance",
      period: "Apr 2022 – Mar 2025",
      type: "3 Years",
      typeColor: "#1e40af",
      highlights: [
        "Owned the FRA Regulatory Integration project end to end — from regulation analysis and requirements definition through API specification, build, security review, go-live, and post-go-live support — establishing the automated data-submission channel to the Egyptian Financial Regulatory Authority",
        "Initiated and led the Group Insurance digitisation programme, running discovery workshops with Group Sales, Underwriting, Operations, Claims, Collections, and Actuarial to agree scope, deliverables, and success criteria, converting a fully manual, paper-based business into a phased delivery plan",
        "Delivered a data migration workstream from legacy MS Access systems to SQL Server on the Decoding Management System — migration strategy, reconciliation, and business sign-off — with RBAC, real-time notifications, and full audit trails",
        "Architected database schemas, REST APIs, and end-to-end business workflows, translating regulatory, actuarial, and operational requirements into system rules",
        "Produced management, actuarial, and operational reporting from complex SQL data sets to support decision-making and regulatory positions",
        "Delivered full Arabic and English website versions; developed 5+ Python automation tools for Finance, Operations, Claims, and Training — eliminating manual workflows across departments"
      ],
      technologies: ["React.js", "TypeScript", "Node.js", "Python", "SQL Server", "Oracle DB", "JWT", "REST API"]
    },
    {
      id: 2,
      role: "Software Engineer",
      subRole: "Automation & Process Digitisation",
      company: "Chubb Life Insurance",
      period: "May 2019 – Mar 2022",
      type: "3 Years",
      typeColor: "#6b7280",
      highlights: [
        "Developed and maintained enterprise applications using Python, Swift (iOS), VB.NET, and SQL",
        "Gathered requirements directly from Finance, Operations, and Training users — translating manual departmental processes into automated tools, and running rollout, user training, and post-deployment support",
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
                    {exp.subRole && <p className="timeline-subrole">{exp.subRole}</p>}
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
