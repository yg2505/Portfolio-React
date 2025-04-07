import React from 'react';
import './footer.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <h2 className="section-title">Let's Connect</h2>
      <p className="contact-subtitle">I'm always open to discussing projects, opportunities, or anything tech!</p>
      
      <div className="contact-card">
        <form
          className="contact-form"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="6" placeholder="Your Message" required />
          <button type="submit" className="glow-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
