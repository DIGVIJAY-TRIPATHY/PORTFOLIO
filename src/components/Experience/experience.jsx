import "./experience.css";

function Experience() {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "TechVision Inc.",
      logo: "🚀",
      period: "2024 — Present",
      location: "Remote",
      type: "Full-time",
      description: "Leading frontend development initiatives for enterprise-level web applications, mentoring junior developers, and architecting scalable React solutions.",
      highlights: [
        "Architected and implemented a micro-frontend system serving 100K+ daily active users",
        "Improved application performance by 45% through code splitting and lazy loading",
        "Led a team of 5 developers in migrating legacy codebase to modern React architecture",
        "Established component library and design system used across 8 product teams"
      ],
      skills: ["React", "TypeScript", "Next.js", "GraphQL", "Jest", "AWS", "CI/CD"]
    },
    {
      title: "Frontend Developer",
      company: "Digital Solutions Co.",
      logo: "💼",
      period: "2023 — 2024",
      location: "Hybrid",
      type: "Full-time",
      description: "Developed responsive web applications and collaborated with cross-functional teams to deliver high-quality user experiences and optimize frontend performance.",
      highlights: [
        "Built 15+ responsive landing pages with 98% mobile performance scores",
        "Reduced page load time by 60% through image optimization and caching strategies",
        "Implemented real-time features using WebSockets for collaborative tools",
        "Collaborated with UX team to improve user engagement by 35%"
      ],
      skills: ["React", "CSS3", "JavaScript", "REST API", "Git", "Figma"]
    },
    {
      title: "Web Development Intern",
      company: "StartupHub",
      logo: "🎯",
      period: "2022 — 2023",
      location: "On-site",
      type: "Internship",
      description: "Gained hands-on experience in full-stack web development, worked on real-world projects, and contributed to improving UI/UX and application performance.",
      highlights: [
        "Developed and deployed 5 client projects from concept to production",
        "Optimized database queries resulting in 40% faster data retrieval",
        "Implemented responsive designs ensuring cross-browser compatibility",
        "Participated in agile development process and daily stand-ups"
      ],
      skills: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL", "Bootstrap"]
    },
    {
      title: "Freelance Web Developer",
      company: "Self-Employed",
      logo: "✨",
      period: "2021 — 2022",
      location: "Remote",
      type: "Freelance",
      description: "Delivered custom web solutions for small businesses and startups, managing projects end-to-end from client consultation to deployment and maintenance.",
      highlights: [
        "Completed 12+ projects for clients across various industries",
        "Maintained 100% client satisfaction rate with on-time deliveries",
        "Created e-commerce solutions generating $50K+ in client revenue",
        "Built long-term relationships with 8 repeat clients"
      ],
      skills: ["WordPress", "PHP", "jQuery", "Shopify", "SEO", "UI/UX"]
    }
  ];

  return (
    <section className="section" id="experience">
      <h2 className="section-title">Professional Experience</h2>
      <p className="section-subtitle">
        My journey in web development, building impactful solutions and growing with every challenge
      </p>

      <div className="experience-container">
        <div className="timeline-line"></div>
        
        {experiences.map((exp, index) => (
          <div className="experience-item" key={index}>
            <div className="experience-empty"></div>
            
            <div className="timeline-dot">
              <div className="dot-wrapper"></div>
            </div>
            
            <div className="experience-card">
              <div className="company-header">
                <div className="company-logo">{exp.logo}</div>
                <div className="company-info">
                  <h3>{exp.title}</h3>
                  <div className="company-name">{exp.company}</div>
                </div>
              </div>

              <div className="experience-meta">
                <div className="meta-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  {exp.period}
                </div>
                <div className="meta-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  {exp.location}
                </div>
                <div className="meta-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                  </svg>
                  {exp.type}
                </div>
              </div>

              <p className="experience-description">{exp.description}</p>

              <ul className="experience-highlights">
                {exp.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>

              <div className="skills-list">
                {exp.skills.map((skill, i) => (
                  <span className="skill-tag" key={i}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;