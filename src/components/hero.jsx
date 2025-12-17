import "./hero.css";
import heroImg from "../assets/digvijay.jpg";

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        {/* Profile Image */}
        <div className="hero-image">
          <img src={heroImg} alt="Digvijay Tripathy" />
        </div>

        {/* Text */}
        <h1>Hi, I'm Digvijay Tripathy</h1>
        <p className="hero-title">Frontend Developer</p>
        <p className="hero-description">
          I build modern, responsive interfaces and seamless user experiences.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary-btn">
            View Projects
          </a>
          <a href="#contact" className="btn outline-btn">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
