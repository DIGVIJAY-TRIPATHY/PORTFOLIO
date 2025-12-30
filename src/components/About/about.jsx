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
          About
        </button>
        <button
          className={activeTab === "education" ? "tab-btn active" : "tab-btn"}
          onClick={() => setActiveTab("education")}
        >
          Education
        </button>
        <button
          className={
            activeTab === "professional" ? "tab-btn active" : "tab-btn"
          }
          onClick={() => setActiveTab("professional")}
        >
          Profession
        </button>
      </div>

      <div className="about-content">
        {activeTab === "about" && (
          <div className="glass-card fade">
            <h3>Who am I?</h3>
            <p>
              I'm <strong>Digvijay Tripathy</strong>, a passionate Frontend
              Developer focused on building minimal yet interactive user
              experiences. I enjoy turning ideas into digital products using
              React, CSS magic, and modern UI trends.
            </p>
          </div>
        )}

        {activeTab === "education" && (
          <div className="glass-card fade">
            <h3>Education Journey</h3>
            <ul className="timeline">
              <li>
                <span className="year">2023 - Present</span>
                <p>
                  <strong>B.Tech — NIT Bhubaneswar</strong>
                  <br />
                  Computer Science & Engineering
                </p>
              </li>
              <li>
                <span className="year">2021 - 2023</span>
                <p>
                  <strong>Allen Career Institute</strong>
                  <br />
                  JEE Preparation
                </p>
              </li>
              <li>
                <span className="year">2020</span>
                <p>
                  <strong>High School</strong>
                  <br />
                  Graduated with Science specialization
                </p>
              </li>
            </ul>
          </div>
        )}

        {activeTab === "professional" && (
          <div className="glass-card fade">
            <h3>What I Do</h3>
            <ul className="highlight-list">
              <li>⚡ Craft responsive & animated UIs</li>
              <li>🚀 Build React-based interactive applications</li>
              <li>🎨 Design aesthetic front-end dashboards</li>
              <li>🧪 Optimize performance & UI/UX decisions</li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

export default About;
