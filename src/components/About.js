import React from 'react';
import { FaCode, FaLightbulb, FaUsers, FaRocket, FaTrophy, FaCertificate, FaTasks, FaHandshake } from 'react-icons/fa';
import './About.css';

const About = () => {
  const qualities = [
    {
      icon: <FaCode />,
      title: "Solution Architecture",
      description: "Designed end-to-end architectures for enterprise insurance platforms — from API contracts and data models to security standards and integration strategies."
    },
    {
      icon: <FaLightbulb />,
      title: "Digital Transformation",
      description: "Led digital transformation at Chubb Life Insurance Egypt — replacing manual, paper-based departmental operations with scalable, FRA-compliant production systems."
    },
    {
      icon: <FaTasks />,
      title: "Project & Delivery Management",
      description: "Own delivery across the full lifecycle — requirements definition, phased roadmaps, RAID logs, milestone and dependency tracking in JIRA, quality gates and go-live readiness, through to hypercare and benefits tracking."
    },
    {
      icon: <FaHandshake />,
      title: "Vendor & Third-Party Management",
      description: "Single point of contact across eBao, Paymob, Valify, Azure AD B2C, Information Security, API Studio, Azure push notifications, and mobile store teams — holding eight parties to one plan, agreed milestones, and quality standards."
    },
    {
      icon: <FaUsers />,
      title: "Cross-Functional Leadership",
      description: "Coordinated Mobile App, Life Core System, Actuarial, Operations, and Sales teams alongside external vendors and platform teams — aligning business, technical, and compliance stakeholders to deliver on-time and on-spec."
    },
    {
      icon: <FaRocket />,
      title: "Regulated Delivery",
      description: "Delivered production systems within Egyptian Financial Regulatory Authority (FRA) compliance frameworks, including audit trails and secure API integrations."
    }
  ];

  const achievements = [
    {
      icon: <FaTrophy />,
      title: "Most Innovative Employee",
      detail: "Chubb Life Insurance · 2024",
      color: "#f59e0b"
    },
    {
      icon: <FaCertificate />,
      title: "PMP — In Progress",
      detail: "Project Management Institute",
      color: "#0a5a9c"
    },
    {
      icon: <FaCertificate />,
      title: "Azure AZ-900 + DP-900",
      detail: "Microsoft Certified",
      color: "#0089d0"
    },
    {
      icon: <FaCertificate />,
      title: "Oracle Cloud Foundation",
      detail: "OCI + Data Foundation",
      color: "#f80000"
    }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-text">
            <div className="about-card">
              <h3 className="about-subtitle">Professional Journey</h3>
              <p className="about-description">
                I'm a <strong>Lead Software Engineer</strong> at Chubb Life Insurance with a career built entirely
                within regulated financial services. Since 2019, I've grown from building automation tools and
                iOS apps to owning end-to-end architecture of a <strong>nationwide Agency Digital Application Platform</strong>
                &nbsp;used by insurance agents across Egypt.
              </p>
              <p className="about-description">
                My work spans the full delivery lifecycle — system design, API architecture, stakeholder
                alignment, regulatory compliance (FRA), and mentoring engineers. I thrive where technology
                meets complex business requirements that can't afford to fail.
              </p>
              <p className="about-description">
                Beyond engineering, I run delivery. On our nationwide mobile programme I act as project
                manager — defining requirements with business stakeholders, owning the roadmap, and
                leading <strong>100+ meetings and stand-ups</strong> across eight internal teams and external
                vendors: eBao (Life Core System), Paymob (payments), Valify (FRA-authorised identity
                verification and digital signature), the Azure AD B2C / Entra ID team, Information Security
                for gate approvals, API Studio for API onboarding, the Azure push-notification team, and the
                mobile store release teams. I hold vendors to plan, own the quality gates, keep the RAID log
                honest, and write the minutes that keep the critical path clear.
              </p>

              <div className="about-stats">
                <div className="stat">
                  <div className="stat-number">7+</div>
                  <div className="stat-label">Years at Chubb Life</div>
                </div>
                <div className="stat">
                  <div className="stat-number">3</div>
                  <div className="stat-label">Production Platforms</div>
                </div>
                <div className="stat">
                  <div className="stat-number">5</div>
                  <div className="stat-label">Cloud Certifications</div>
                </div>
              </div>

              <div className="achievements-row">
                {achievements.map((a, i) => (
                  <div key={i} className="achievement-badge">
                    <span className="achievement-icon" style={{ color: a.color }}>{a.icon}</span>
                    <div className="achievement-text">
                      <span className="achievement-title">{a.title}</span>
                      <span className="achievement-detail">{a.detail}</span>
                    </div>
                  </div>
                ))}
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
