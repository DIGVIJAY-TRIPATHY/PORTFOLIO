import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Skills.css';

function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const gridRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Reset active slide when category changes
  useEffect(() => {
    setActiveSlide(0);
    if (gridRef.current) gridRef.current.scrollLeft = 0;
  }, [activeCategory]);

  // Track which card is centred while scrolling
  const handleScroll = useCallback(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const cards = Array.from(grid.querySelectorAll('.skill-card'));
    const gridCenter = grid.scrollLeft + grid.clientWidth / 2;
    let closest = 0;
    let minDist = Infinity;
    cards.forEach((card, i) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const dist = Math.abs(cardCenter - gridCenter);
      if (dist < minDist) { minDist = dist; closest = i; }
    });
    setActiveSlide(closest);
  }, []);

  // Scroll to a specific dot/slide
  const scrollToSlide = (index) => {
    const grid = gridRef.current;
    if (!grid) return;
    const card = grid.querySelectorAll('.skill-card')[index];
    if (card) {
      const offset = card.offsetLeft - (grid.clientWidth - card.offsetWidth) / 2;
      grid.scrollTo({ left: offset, behavior: 'smooth' });
    }
  };

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

        {/* Skills Grid / Carousel */}
        <div
          className="skills-grid"
          ref={gridRef}
          onScroll={isMobile ? handleScroll : undefined}
        >
          {skillsData[activeCategory].map((skill, index) => (
            <div
              key={skill.name}
              className={`skill-card${isMobile && activeSlide === index ? ' slide-active' : ''}`}
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
                      width: (hoveredSkill === skill.name || (isMobile && activeSlide === index))
                        ? `${skill.level}%`
                        : '0%',
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

        {/* Dot indicators + swipe hint — mobile only */}
        {isMobile && (
          <>
            <div className="slide-dots">
              {skillsData[activeCategory].map((_, index) => (
                <button
                  key={index}
                  className={`slide-dot${activeSlide === index ? ' dot-active' : ''}`}
                  onClick={() => scrollToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <div className="swipe-hint">
              <span className="swipe-hint-arrow">›</span> swipe to explore
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Skills;