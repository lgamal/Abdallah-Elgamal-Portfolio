import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane, FaBuilding } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/mgvzovkv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Thank you for your message! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  const contactInfo = [
    {
      icon: <FaBuilding />,
      title: "Current Position",
      value: "Lead Software Engineer at Chubb Life Egypt",
      link: null
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Cairo, Egypt",
      link: null
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "Available via contact form",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/abdallahabdelaziiz"
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
      url: "https://github.com/lgamal"
    },
    {
      icon: <FaEnvelope />,
      name: "Email",
      url: "mailto:abdallahabdelaziiz@gmail.com"
    }
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          I'm always open to discussing new opportunities, innovative projects, or technical collaborations. 
          Let's connect and explore how we can work together!
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-subtitle">Let's Connect</h3>
            <p className="contact-description">
              As a Lead Software Engineer with expertise in full-stack development and iOS applications, 
              I'm passionate about creating impactful solutions. Whether you have a challenging project, 
              want to discuss technology, or explore collaboration opportunities, I'd love to hear from you.
            </p>

            <div className="contact-methods">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-method">
                  <div className="method-icon">
                    {info.icon}
                  </div>
                  <div className="method-info">
                    <h4 className="method-title">{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} className="method-value">{info.value}</a>
                    ) : (
                      <span className="method-value">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="social-section">
              <h4 className="social-title">Connect With Me</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form card" onSubmit={handleSubmit}>
              <h3 className="form-title">Send Me a Message</h3>
              
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Tell me about your project, collaboration opportunity, or just say hello!"
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary form-submit">
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;