import React, { useState, useEffect } from 'react';
import './Footer.css';

function Footer() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className={`footer ${isVisible ? 'footer-visible' : ''}`}
      onMouseMove={handleMouseMove}
    >
      <div 
        className="footer-glow" 
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />
      
      <div className="footer-wrapper">
        {/* Brand / About */}
        <div className="footer-brand animate-slide-up">
          <div className="footer-logo">
            <div className="logo-icon">
              <i className="fas fa-code"></i>
            </div>
            <span>Digvijay Tripathy</span>
          </div>
          <p className="footer-desc">
            Passionate Full-Stack Developer crafting seamless digital experiences.
            Turning ideas into scalable, elegant solutions.
          </p>

          <div className="footer-social">
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-link">
              <i className="fab fa-github"></i>
              <span className="social-tooltip">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">
              <i className="fab fa-linkedin-in"></i>
              <span className="social-tooltip">LinkedIn</span>
            </a>
            <a href="mailto:yourmail@gmail.com" aria-label="Mail" className="social-link">
              <i className="fas fa-envelope"></i>
              <span className="social-tooltip">Email</span>
            </a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-link">
              <i className="fab fa-twitter"></i>
              <span className="social-tooltip">Twitter</span>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <h3>
            <span className="section-icon">🚀</span>
            Quick Links
          </h3>
          <ul>
            <li><a href="#home"><span className="link-arrow">→</span> Home</a></li>
            <li><a href="#projects"><span className="link-arrow">→</span> Projects</a></li>
            <li><a href="#skills"><span className="link-arrow">→</span> Skills</a></li>
            <li><a href="#contact"><span className="link-arrow">→</span> Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-column animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <h3>
            <span className="section-icon">📚</span>
            Resources
          </h3>
          <ul>
            <li><a href="/Resume.pdf" download><span className="link-arrow">→</span> Download CV</a></li>
            <li><a href="#testimonials"><span className="link-arrow">→</span> Testimonials</a></li>
            <li><a href="#blogs"><span className="link-arrow">→</span> Blogs</a></li>
            <li><a href="#experience"><span className="link-arrow">→</span> Experience</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-column animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <h3>
            <span className="section-icon">💬</span>
            Contact
          </h3>
          <ul className="contact-list">
            <li className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <span>yourmail@gmail.com</span>
            </li>
            <li className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <span>+91 XXXXXXXXXX</span>
            </li>
            <li className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <span>Bhubaneswar, India</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom animate-fade-in">
        <p>
          <span className="footer-heart">Made with</span>
          <span className="heart-icon">❤️</span>
          <span className="footer-heart">by Digvijay Tripathy</span>
        </p>
        <p className="footer-copyright">
          © {currentYear} All Rights Reserved.
        </p>
      </div>

      <div className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <i className="fas fa-arrow-up"></i>
      </div>
    </footer>
  );
}

export default Footer;