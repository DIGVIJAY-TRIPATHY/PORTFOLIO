import { useState } from "react";
import "./about.css";

function About() {
  const [activeTab, setActiveTab] = useState("about");
  
  return (
    <section className="section" id="about">
      <h2 className="section-title">About Me</h2>

      <div className="about-tabs">
        <button
          className={activeTab === "about" ? "tab-btn active" : "tab-btn"}
          onClick={() => setActiveTab("about")}
        >
          <span className="tab-icon">👤</span>
          <span className="tab-text">About</span>
        </button>
        <button
          className={activeTab === "education" ? "tab-btn active" : "tab-btn"}
          onClick={() => setActiveTab("education")}
        >
          <span className="tab-icon">🎓</span>
          <span className="tab-text">Education</span>
        </button>
        <button
          className={
            activeTab === "professional" ? "tab-btn active" : "tab-btn"
          }
          onClick={() => setActiveTab("professional")}
        >
          <span className="tab-icon">💼</span>
          <span className="tab-text">Professional</span>
        </button>
      </div>

      <div className="about-content">
        {activeTab === "about" && (
          <div className="glass-card" key="about">
            <div className="card-header">
              <h3>Who am I?</h3>
            </div>
            <p className="intro-text">
              I'm <strong className="highlight-name">Digvijay Tripathy</strong>, a passionate Frontend
              Developer focused on building minimal yet interactive user
              experiences. I enjoy turning ideas into digital products using
              React, CSS magic, and modern UI trends.
            </p>
            <div className="skills-badges">
              <span className="badge">React</span>
              <span className="badge">JavaScript</span>
              <span className="badge">CSS3</span>
              <span className="badge">UI/UX</span>
            </div>
          </div>
        )}

        {activeTab === "education" && (
          <div className="glass-card" key="education">
            <div className="card-header">
              <h3>Education Journey</h3>
            </div>
            <ul className="timeline">
              <li className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="year">2023 - Present</span>
                  <p>
                    <strong>B.Tech — NIT Bhubaneswar</strong>
                    <br />
                    <span className="subtitle">Computer Science & Engineering</span>
                  </p>
                </div>
              </li>
              <li className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="year">2021 - 2023</span>
                  <p>
                    <strong>Anandapur College</strong>
                    <br />
                    <span className="subtitle">12th completed with Science specialization</span>
                  </p>
                </div>
              </li>
              <li className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="year">2020</span>
                  <p>
                    <strong>High School</strong>
                    <br />
                    <span className="subtitle">10th</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        )}

        {activeTab === "professional" && (
          <div className="glass-card" key="professional">
            <div className="card-header">
              <h3>What I Do</h3>
            </div>
            <ul className="highlight-list">
              <li>
                <span className="icon">⚡</span>
                <span className="text">Craft responsive & animated UIs</span>
              </li>
              <li>
                <span className="icon">🚀</span>
                <span className="text">Build React-based interactive applications</span>
              </li>
              <li>
                <span className="icon">🎨</span>
                <span className="text">Design aesthetic front-end dashboards</span>
              </li>
              <li>
                <span className="icon">🧪</span>
                <span className="text">Optimize performance & UI/UX decisions</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

export default About;