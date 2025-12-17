import { useState } from "react";
import "./header.css";
import avatar from "../assets/logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Left: Avatar + Name */}
      <div className="mobile-brand">
        <img src={avatar} alt="Avatar" className="avatar" />
        <span className="brand-name">Digvijay</span>
      </div>

      {/* Hamburger */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menu */}
      <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <li>
          <a
            href="#home"
            className="nav-links"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="nav-links"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#experience"
            className="nav-links"
            onClick={() => setMenuOpen(false)}
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="nav-links"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="nav-links"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
