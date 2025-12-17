import "./experience.css";

function Experience() {
  return (
    <section className="section" id="experience">
      <h2 className="section-title">Experience</h2>

      <div className="experience-container">
        <div className="experience-card">
          <h3>Frontend Developer</h3>
          <span>2024 – Present</span>
          <p>
            Building responsive web applications using React, CSS, and modern
            UI practices.
          </p>
        </div>

        <div className="experience-card">
          <h3>Web Development Intern</h3>
          <span>2023 – 2024</span>
          <p>
            Worked on real-world projects, improved UI/UX, and optimized
            performance.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;
