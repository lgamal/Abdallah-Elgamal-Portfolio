import React from 'react';
import { FaHeart, FaReact, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      name: "GitHub",
      url: "https://github.com/lgamal"
    },
    {
      icon: <FaLinkedin />,
      name: "LinkedIn", 
      url: "https://linkedin.com/in/abdallahabdelaziiz"
    },
    {
      icon: <FaEnvelope />,
      name: "Email",
      url: "mailto:abdallahabdelaziiz@gmail.com"
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Abdallah Elgamal</h3>
            <p className="footer-description">
              Lead Software Engineer at Chubb Life Egypt, passionate about creating innovative 
              web and mobile solutions that drive business success and enhance user experiences.
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="footer-link"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Technical Expertise</h4>
            <div className="footer-tags">
              <span className="footer-tag">React</span>
              <span className="footer-tag">TypeScript</span>
              <span className="footer-tag">Node.js</span>
              <span className="footer-tag">Swift</span>
              <span className="footer-tag">iOS Development</span>
              <span className="footer-tag">Next.js</span>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Let's Collaborate</h4>
            <p className="footer-contact">
              Interested in working together or discussing innovative solutions? 
              I'd love to explore new opportunities and challenging projects!
            </p>
            <button
              onClick={() => scrollToSection('#contact')}
              className="btn btn-outline footer-cta"
            >
              Get In Touch
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>
              © {currentYear} Abdallah Elgamal. Made with{' '}
              <span className="heart-icon">
                <FaHeart />
              </span>{' '}
              and{' '}
              <span className="react-icon">
                <FaReact />
              </span>
            </p>
          </div>
          <div className="footer-note">
            <p>Built with React • Engineered for Excellence</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 