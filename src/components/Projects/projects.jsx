import "./projects.css";

function Projects() {
  return (
    <section className="section" id="projects">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        <div className="project-card">
          <h3>Resume Builder</h3>
          <p>Interactive resume builder using React.</p>
        </div>

        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>Personal portfolio with modern UI.</p>
        </div>

        <div className="project-card">
          <h3>Travel Booking System</h3>
          <p>MySQL-based booking platform.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
