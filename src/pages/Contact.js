import React from 'react';
import './styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-header">Get in Touch</h1>

      <div className="contact-buttons">
        <a
          href="https://www.linkedin.com/in/alondra-rosas158/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button linkedin-button"
        >
          Connect on LinkedIn
        </a>
        
      </div>

      <form className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Your name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Your email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" placeholder="Write your message here..." required />

        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
