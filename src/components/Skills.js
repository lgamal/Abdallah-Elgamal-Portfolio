import React from 'react';
import {
  FaReact, FaNodeJs, FaPython, FaSwift, FaDocker, FaGitAlt, FaDatabase, FaCloud,
  FaProjectDiagram, FaClipboardList, FaExclamationTriangle, FaHandshake,
  FaCheckDouble, FaRocket, FaChartLine, FaTasks, FaCoins
} from 'react-icons/fa';
import {
  SiTypescript, SiNextdotjs, SiRedux, SiVite, SiExpress, SiKotlin,
  SiMicrosoftazure, SiOracle, SiPostgresql, SiMysql, SiMongodb,
  SiKubernetes, SiFirebase, SiJira, SiPostman, SiSwagger, SiSqlite
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const categories = [
    {
      id: 'delivery',
      label: 'Project & Delivery Management',
      color: '#b45309',
      skills: [
        { name: 'Project Planning & Roadmaps', icon: <FaProjectDiagram /> },
        { name: 'Requirements Definition', icon: <FaClipboardList /> },
        { name: 'RAID Logs & Risk Escalation', icon: <FaExclamationTriangle /> },
        { name: 'Vendor Management & SLAs', icon: <FaHandshake /> },
        { name: 'Quality Gates & Exit Criteria', icon: <FaCheckDouble /> },
        { name: 'UAT, Go-Live & Hypercare', icon: <FaRocket /> },
        { name: 'Stakeholder & Steering Reporting', icon: <FaChartLine /> },
        { name: 'Agile / Waterfall / Hybrid Delivery', icon: <FaTasks /> },
        { name: 'Budget & Effort vs Actual', icon: <FaCoins /> },
        { name: 'Jira / Confluence / MS Project', icon: <SiJira /> },
      ]
    },
    {
      id: 'insurance',
      label: 'Insurance Domain & Integrations',
      color: '#0f766e',
      skills: [
        { name: 'eBao Life Core System', icon: null },
        { name: 'FRA Regulatory APIs & Reporting', icon: null },
        { name: 'Life & Group / People Solutions', icon: null },
        { name: 'Valify (eKYC & Digital Signature)', icon: null },
        { name: 'Paymob Payment Gateway', icon: null },
        { name: 'Azure AD B2C / Entra ID', icon: null },
        { name: 'API Studio (Gateway Onboarding)', icon: null },
        { name: 'Data Migration & Reconciliation', icon: null },
        { name: 'Document Management & Delivery', icon: null },
      ]
    },
    {
      id: 'frontend',
      label: 'Frontend',
      color: '#1e40af',
      skills: [
        { name: 'React.js', icon: <FaReact /> },
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'JavaScript ES6+', icon: null },
        { name: 'Redux / Zustand', icon: <SiRedux /> },
        { name: 'Vite', icon: <SiVite /> },
      ]
    },
    {
      id: 'backend',
      label: 'Backend',
      color: '#065f46',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'Express.js', icon: <SiExpress /> },
        { name: 'Python', icon: <FaPython /> },
        { name: 'REST API Design', icon: null },
        { name: 'JWT / OAuth', icon: null },
      ]
    },
    {
      id: 'mobile',
      label: 'Mobile',
      color: '#7c2d12',
      skills: [
        { name: 'React Native', icon: <FaReact /> },
        { name: 'Swift / UIKit', icon: <FaSwift /> },
        { name: 'Objective-C', icon: null },
        { name: 'Kotlin (KMP)', icon: <SiKotlin /> },
        { name: 'iOS SDK', icon: null },
      ]
    },
    {
      id: 'cloud',
      label: 'Cloud & DevOps',
      color: '#1e3a5f',
      skills: [
        { name: 'Microsoft Azure', icon: <SiMicrosoftazure /> },
        { name: 'Oracle Cloud', icon: <SiOracle /> },
        { name: 'Docker', icon: <FaDocker /> },
        { name: 'Kubernetes', icon: <SiKubernetes /> },
        { name: 'CI/CD', icon: <FaCloud /> },
        { name: 'Git / GitHub', icon: <FaGitAlt /> },
      ]
    },
    {
      id: 'databases',
      label: 'Databases',
      color: '#4a1d96',
      skills: [
        { name: 'SQL Server', icon: <FaDatabase /> },
        { name: 'Oracle DB', icon: <SiOracle /> },
        { name: 'PostgreSQL', icon: <SiPostgresql /> },
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'SQLite / Core Data', icon: <SiSqlite /> },
      ]
    },
    {
      id: 'tools',
      label: 'Tools & Platforms',
      color: '#92400e',
      skills: [
        { name: 'Firebase', icon: <SiFirebase /> },
        { name: 'JIRA', icon: <SiJira /> },
        { name: 'Confluence', icon: null },
        { name: 'MS Project', icon: null },
        { name: 'Tableau / Power BI', icon: <FaChartLine /> },
        { name: 'Postman', icon: <SiPostman /> },
        { name: 'Swagger', icon: <SiSwagger /> },
        { name: 'GitLab', icon: <FaGitAlt /> },
      ]
    }
  ];

  const coreCompetencies = [
    'Project Management',
    'Digital Transformation',
    'Vendor-Driven Delivery',
    'Requirements Definition',
    'RAID & Risk Management',
    'Quality Gates & Go-Live Readiness',
    'Hypercare & Benefits Realization',
    'Steering & Executive Reporting',
    'Data Migration & Reconciliation',
    'Solution Architecture',
    'Full-Stack Development',
    'Cross-Platform Mobile',
    'Regulatory Compliance (FRA)',
    'System Integration & APIs',
    'Technical Leadership',
    'Database Design',
    'Agile Delivery',
    'Code Review & Mentoring',
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>

        <div className="skills-grid-categories">
          {categories.map((cat) => (
            <div key={cat.id} className="skill-category-card card">
              <div className="skill-category-header" style={{ borderColor: cat.color }}>
                <span className="skill-category-dot" style={{ background: cat.color }}></span>
                <h3 className="skill-category-title">{cat.label}</h3>
              </div>
              <div className="skill-tags">
                {cat.skills.map((skill, i) => (
                  <span key={i} className="skill-tag" style={{ '--cat-color': cat.color }}>
                    {skill.icon && <span className="skill-tag-icon">{skill.icon}</span>}
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-languages card">
          <h3 className="lang-heading">Languages</h3>
          <div className="lang-row">
            <span className="lang-item">Arabic <span className="lang-level">Native</span></span>
            <span className="lang-item">English <span className="lang-level">Fluent</span></span>
          </div>
        </div>

        <div className="skills-competencies card">
          <h3 className="competencies-heading">Core Competencies</h3>
          <div className="competency-tags">
            {coreCompetencies.map((c, i) => (
              <span key={i} className="tag">{c}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
