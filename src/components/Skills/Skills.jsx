import React, { useState, useEffect } from 'react';
import './Skills.css';

function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skillsData = {
    frontend: [
      { name: 'React', level: 90, icon: '⚛️', color: '#61DAFB' },
      { name: 'JavaScript', level: 85, icon: '🟨', color: '#F7DF1E' },
      { name: 'CSS3', level: 88, icon: '🎨', color: '#1572B6' },
      { name: 'HTML5', level: 92, icon: '📄', color: '#E34F26' },
      { name: 'Tailwind', level: 80, icon: '💨', color: '#06B6D4' },
      { name: 'Redux', level: 75, icon: '🔄', color: '#764ABC' },
    ],
    backend: [
      { name: 'Node.js', level: 78, icon: '🟢', color: '#339933' },
      { name: 'Express', level: 75, icon: '⚡', color: '#000000' },
      { name: 'MongoDB', level: 72, icon: '🍃', color: '#47A248' },
      { name: 'PostgreSQL', level: 70, icon: '🐘', color: '#4169E1' },
      { name: 'REST API', level: 80, icon: '🔌', color: '#FF6C37' },
      { name: 'Firebase', level: 68, icon: '🔥', color: '#FFCA28' },
    ],
    tools: [
      { name: 'Git', level: 85, icon: '📦', color: '#F05032' },
      { name: 'VS Code', level: 90, icon: '💻', color: '#007ACC' },
      { name: 'Figma', level: 75, icon: '🎯', color: '#F24E1E' },
      { name: 'npm', level: 82, icon: '📮', color: '#CB3837' },
      { name: 'Webpack', level: 70, icon: '📦', color: '#8DD6F9' },
      { name: 'Postman', level: 78, icon: '📬', color: '#FF6C37' },
    ],
    other: [
      { name: 'UI/UX Design', level: 80, icon: '✨', color: '#FF6B9D' },
      { name: 'Responsive Design', level: 88, icon: '📱', color: '#4CAF50' },
      { name: 'Performance', level: 75, icon: '🚀', color: '#FFC107' },
      { name: 'Debugging', level: 83, icon: '🐛', color: '#E91E63' },
      { name: 'Problem Solving', level: 87, icon: '🧩', color: '#9C27B0' },
      { name: 'Team Work', level: 85, icon: '🤝', color: '#00BCD4' },
    ],
  };

  const categories = [
    { id: 'frontend', label: 'Frontend', icon: '💻' },
    { id: 'backend', label: 'Backend', icon: '⚙️' },
    { id: 'tools', label: 'Tools', icon: '🛠️' },
    { id: 'other', label: 'Other', icon: '✨' },
  ];

  return (
    <section className={`skills-section ${isVisible ? 'skills-visible' : ''}`} id="skills">
      <div className="skills-container">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">Technologies and tools I work with</p>

        {/* Category Tabs */}
        <div className="skills-tabs">
          {categories.map((category, index) => (
            <button
              key={category.id}
              className={`skills-tab ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="tab-icon">{category.icon}</span>
              <span className="tab-label">{category.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skillsData[activeCategory].map((skill, index) => (
            <div
              key={skill.name}
              className="skill-card"
              style={{ animationDelay: `${index * 0.05}s` }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="skill-header">
                <div className="skill-icon-wrapper">
                  <span className="skill-icon">{skill.icon}</span>
                </div>
                <h3 className="skill-name">{skill.name}</h3>
              </div>

              <div className="skill-progress-container">
                <div className="skill-progress-bg">
                  <div
                    className="skill-progress-fill"
                    style={{
                      width: hoveredSkill === skill.name ? `${skill.level}%` : '0%',
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)`,
                    }}
                  >
                    <span className="progress-glow" style={{ boxShadow: `0 0 20px ${skill.color}` }}></span>
                  </div>
                </div>
                <span className="skill-level">{skill.level}%</span>
              </div>

              <div className="skill-particles">
                <span className="particle" style={{ background: skill.color }}></span>
                <span className="particle" style={{ background: skill.color }}></span>
                <span className="particle" style={{ background: skill.color }}></span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="skills-stats">
          <div className="stat-card">
            <div className="stat-icon">🎯</div>
            <h4 className="stat-number">24+</h4>
            <p className="stat-label">Technologies</p>
          </div>
          <div className="stat-card">
            <div className="stat-icon">💼</div>
            <h4 className="stat-number">15+</h4>
            <p className="stat-label">Projects</p>
          </div>
          <div className="stat-card">
            <div className="stat-icon">⭐</div>
            <h4 className="stat-number">3+</h4>
            <p className="stat-label">Years Learning</p>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🚀</div>
            <h4 className="stat-number">100%</h4>
            <p className="stat-label">Dedication</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;