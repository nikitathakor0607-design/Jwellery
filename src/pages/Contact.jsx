import { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [feedback, setFeedback] = useState({ error: "", success: "" });

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setFeedback({ error: "All fields are required.", success: "" });
      return;
    }
    if (!validateEmail(form.email)) {
      setFeedback({ error: "Please enter a valid email address.", success: "" });
      return;
    }

    // Send email via EmailJS
    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form, "YOUR_PUBLIC_KEY")
      .then(
        () => {
          setFeedback({ error: "", success: "Message sent successfully! 💌" });
          setForm({ name: "", email: "", message: "" });
        },
        () => {
          setFeedback({ error: "Failed to send message. Try again later.", success: "" });
        }
      );
  };

  return (
    <div className="contact">

      {/* HERO */}
      <section className="contact-hero">
        <h1>Contact JewelLux</h1>
        <p>Reach out for custom jewelry designs or inquiries ✨</p>
      </section>

      {/* MULTIPLE LOCATIONS */}
      <section className="contact-info">
        <div className="info-card">
          <h3>📍 Mumbai Boutique</h3>
          <p>123 Jewel Street, Mumbai, India</p>
        </div>
        <div className="info-card">
          <h3>📍 Delhi Store</h3>
          <p>456 Gem Avenue, Delhi, India</p>
        </div>
        <div className="info-card">
          <h3>📍 Bengaluru Outlet</h3>
          <p>789 Diamond Road, Bengaluru, India</p>
        </div>
      </section>

      {/* FORM + MAP */}
      <section className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send Us a Message</h2>
          {feedback.error && <p className="error">{feedback.error}</p>}
          {feedback.success && <p className="success">{feedback.success}</p>}

          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-map">
          <iframe
            title="Jewelry Store Locations"
            src="https://www.google.com/maps?q=mumbai&output=embed"
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
