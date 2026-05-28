import "./projects.css";

function Projects() {
  const projects = [
    
    {
      title: "Portfolio Website",
      description: "Modern, minimalist portfolio featuring smooth animations, dark mode support, and dynamic project showcasing. Optimized for performance and accessibility.",
      icon: "🎨",
      tech: ["React", "CSS3", "Framer Motion", "Vite"],
      liveLink: "https://digvijay-tripathy.netlify.app/",
      githubLink: "https://github.com/DIGVIJAY-TRIPATHY/PORTFOLIO",
      status: "Live"
    },
    {
      title: "Resume Builder",
      description: "Interactive, AI-powered resume builder with real-time preview, customizable templates, and PDF export functionality. Built with modern React patterns and responsive design.",
      icon: "📄",
      tech: ["React", "TypeScript", "TailwindCSS", "PDF.js"],
      liveLink: "#",
      githubLink: "#",
      status: "In Progress"
    },
    // {
    //   title: "Travel Booking System",
    //   description: "Full-stack travel booking platform with real-time availability, secure payment processing, and comprehensive admin dashboard for managing bookings and analytics.",
    //   icon: "✈️",
    //   tech: ["React", "Node.js", "MySQL", "Express", "Stripe"],
    //   liveLink: "#",
    //   githubLink: "#",
    //   status: "In Progress"
    // },
    // {
    //   title: "Task Management App",
    //   description: "Collaborative task manager with drag-and-drop interface, team workspaces, real-time updates, and productivity analytics dashboard.",
    //   icon: "✓",
    //   tech: ["React", "Firebase", "Material-UI", "DnD Kit"],
    //   liveLink: "#",
    //   githubLink: "#",
    //   status: "Live"
    // },
    // {
    //   title: "E-Commerce Dashboard",
    //   description: "Analytics dashboard for online stores featuring sales tracking, inventory management, customer insights, and interactive data visualizations.",
    //   icon: "📊",
    //   tech: ["React", "Chart.js", "PostgreSQL", "REST API"],
    //   liveLink: "#",
    //   githubLink: "#",
    //   status: "Live"
    // },
    // {
    //   title: "Weather Forecast App",
    //   description: "Real-time weather application with 7-day forecasts, location detection, severe weather alerts, and beautiful animated weather backgrounds.",
    //   icon: "🌤️",
    //   tech: ["React", "OpenWeather API", "Geolocation", "CSS3"],
    //   liveLink: "#",
    //   githubLink: "#",
    //   status: "Live"
    // }
  ];

  return (
    <section className="section" id="projects">
      <h2 className="section-title">Featured Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <span className={`project-status ${project.status === 'In Progress' ? 'in-progress' : ''}`}>
              {project.status}
            </span>
            
            <div className="project-icon">
              {project.icon}
            </div>
            
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            
            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span className="tech-tag" key={i}>{tech}</span>
              ))}
            </div>
            
            <div className="project-links">
              <a href={project.liveLink} className="project-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
                Live Demo
              </a>
              <a href={project.githubLink} className="project-link">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;