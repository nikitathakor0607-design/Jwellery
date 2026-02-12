
import "../styles/services.css";

const Services = () => {
  return (
    <div className="services">

      {/* HERO */}
      <section className="services-hero">
        <div className="services-hero-overlay"></div>
        <div className="services-hero-content">
          <span className="tagline">Crafted With Precision</span>
          <h1>Exceptional Jewelry Services</h1>
          <p>
            We blend artistry, craftsmanship, and luxury to deliver jewelry
            services that last a lifetime.
          </p>
          <button className="primary-btn">Book a Consultation</button>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-list">
        <h2>Our Signature Services</h2>
        <p className="section-subtitle">
          From concept to care, we handle every detail with excellence.
        </p>

        <div className="services-grid">
          <div className="service-card">
            <span className="icon">💍</span>
            <h3>Custom Jewelry Design</h3>
            <p>
              One-of-a-kind pieces designed exclusively for you, reflecting your
              personality and story.
            </p>
            <ul>
              <li>✔ Personal consultation</li>
              <li>✔ 3D design preview</li>
              <li>✔ Certified gemstones</li>
            </ul>
          </div>

          <div className="service-card">
            <span className="icon">🛠</span>
            <h3>Repair & Restoration</h3>
            <p>
              Precision repairs that restore brilliance while preserving
              sentimental value.
            </p>
            <ul>
              <li>✔ Ring resizing</li>
              <li>✔ Stone replacement</li>
              <li>✔ Polishing & refinishing</li>
            </ul>
          </div>

          <div className="service-card">
            <span className="icon">📜</span>
            <h3>Certification & Appraisal</h3>
            <p>
              Trusted appraisals for insurance, resale, and peace of mind.
            </p>
            <ul>
              <li>✔ Diamond grading</li>
              <li>✔ Gemstone evaluation</li>
              <li>✔ Official documentation</li>
            </ul>
          </div>

          <div className="service-card">
            <span className="icon">🎁</span>
            <h3>Luxury Packaging</h3>
            <p>
              Presentation that matches the beauty inside — perfect for gifting.
            </p>
            <ul>
              <li>✔ Premium boxes</li>
              <li>✔ Custom engraving</li>
              <li>✔ Secure delivery</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process">
        <h2>Our Crafting Process</h2>

        <div className="process-steps">
          <div className="step">
            <span>01</span>
            <h4>Consult</h4>
            <p>We listen to your ideas, needs, and inspiration.</p>
          </div>

          <div className="step">
            <span>02</span>
            <h4>Design</h4>
            <p>Detailed sketches & 3D previews for approval.</p>
          </div>

          <div className="step">
            <span>03</span>
            <h4>Create</h4>
            <p>Master artisans craft each piece by hand.</p>
          </div>

          <div className="step">
            <span>04</span>
            <h4>Deliver</h4>
            <p>Final inspection, packaging & secure delivery.</p>
          </div>
        </div>
      </section>

      {/* CARE */}
      <section className="care">
        <h2>Lifetime Care Promise</h2>
        <p>
          Complimentary cleaning, polishing, and annual inspections — because
          luxury deserves lifelong care.
        </p>
        <button className="secondary-btn">Learn More</button>
      </section>

    </div>
  );
};

export default Services;
