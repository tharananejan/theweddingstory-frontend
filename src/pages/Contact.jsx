import React from 'react';
import ContactForm from '../components/ContactForm';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-content">
        <h1 className="title">Get In Touch</h1>
        <p className="description">
          We would love to hear from you! Whether you have questions about our services, want to discuss your wedding plans, or just want to say hello, feel free to reach out to us.
        </p>
        <div className="contact-details">
          <div className="detail-item">
            <span className="icon">✉</span>
            <span>theweddingstorysl17@gmail.com</span>
          </div>
          <div className="detail-item">
            <span className="icon">☎</span>
            <span>(+94) 779928178</span>
          </div>
          <div className="detail-item">
            <span className="icon">☎</span>
            <span>(+94) 707000878</span>
          </div>
        </div>
      </div>
      <div className="contact-form-wrapper">
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact;