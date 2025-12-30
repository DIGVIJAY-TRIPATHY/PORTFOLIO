import "./testimonial.css";

function Testimonial() {
  return (
    <section className="section" id="testimonial">
      <h2 className="section-title">Testimonials</h2>

      <div className="testimonial-container">
        <div className="testimonial-card">
          <p>
            “Digvijay is a highly skilled developer with great attention to
            detail.”
          </p>
          <h4>— Mentor</h4>
        </div>

        <div className="testimonial-card">
          <p>
            “Clean code, beautiful UI, and always delivers on time.”
          </p>
          <h4>— Client</h4>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
