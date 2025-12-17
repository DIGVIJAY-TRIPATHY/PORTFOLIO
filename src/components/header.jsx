import { useState } from "react";
import "./header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Hamburger */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <li><a href="#home" onClick={() => setMenuOpen(false)} className="nav-links">Home</a></li>
        <li><a href="#about" onClick={() => setMenuOpen(false)} className="nav-links">About</a></li>
        <li><a href="#experience" onClick={() => setMenuOpen(false)} className="nav-links">Experience</a></li>
        <li><a href="#projects" onClick={() => setMenuOpen(false)} className="nav-links">Projects</a></li>
        <li><a href="#testimonial" onClick={() => setMenuOpen(false)} className="nav-links">Testimonial</a></li>
        <li><a href="#contact" onClick={() => setMenuOpen(false)} className="nav-links">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Header;
