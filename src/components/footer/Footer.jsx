import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div>
          <footer className="footer">
  <div className="footer-wrapper">

    <div className="footer-brand">
      <div className="footer-logo">
        <i className="fas fa-gem"></i>
        <span>DIGVIJAY TRIPATHY</span>
      </div>
      <p className="footer-desc">
        Curating luxury experiences with unmatched precision and excellence.
      </p>

      <div className="footer-social">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-linkedin-in"></i></a>
      </div>
    </div>

    <div className="footer-column">
      <h3>Explore</h3>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#about">About Us</a></li>
      </ul>
    </div>

    <div className="footer-column">
      <h3>Support</h3>
      <ul>
        <li><a href="#">Help Center</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms & Conditions</a></li>
        <li><a href="#">FAQs</a></li>
      </ul>
    </div>

    <div className="footer-column" >
      <h3 >Contact</h3>
      <ul className="contact-list">
        <li><i className="fas fa-envelope"></i> support@luxe.com</li>
        <li><i className="fas fa-phone"></i> +91 9876543210</li>
        <li><i className="fas fa-map-marker-alt"></i> Mumbai, India</li>
      </ul>
    </div>

  </div>

  <div className="footer-bottom">
    <p>© 2025 LUXE. All Rights Reserved.</p>
  </div>
</footer>

    </div>
  )
}

export default Footer
