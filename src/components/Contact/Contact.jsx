/* ══════════════════════════════════════════════════════════════════════════
   CONTACT SECTION - Professional Contact Form & Info
   ══════════════════════════════════════════════════════════════════════════ */

import React, { useState, memo } from 'react';
import useInView from '../../hooks/useInView';
import './Contact.css';

const services = [
  'Dermal Fillers',
  'Anti-Wrinkle Treatment',
  'Lip Enhancement',
  'Skin Rejuvenation',
  'Chemical Peels',
  'Vitamin Injections',
  'Microneedling',
  'PRP Therapy'
];

const Contact = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="contact__container">
        <div className="contact__grid">
          {/* Form Column */}
          <div className={`contact__form-column reveal fade-up ${isInView ? 'is-visible' : ''}`}>
            <header className="contact__header">
              <span className="contact__label">Get In Touch</span>
              <h2 className="contact__title">Contact Us</h2>
              <p className="contact__subtitle">
                Have a question or ready to book? We'd love to hear from you.
              </p>
            </header>

            {!isSubmitted ? (
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__form-row">
                  <div className="contact__field">
                    <input
                      type="text"
                      name="name"
                      className="contact__input"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="contact__field">
                    <input
                      type="email"
                      name="email"
                      className="contact__input"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="contact__form-row">
                  <div className="contact__field">
                    <input
                      type="tel"
                      name="phone"
                      className="contact__input"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="contact__field">
                    <select
                      name="service"
                      className="contact__select"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Treatment of Interest</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="contact__field">
                  <textarea
                    name="message"
                    className="contact__textarea"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                  />
                </div>

                <button type="submit" className="contact__submit">
                  Send Message
                </button>
              </form>
            ) : (
              <div className="contact__success">
                <div className="contact__success-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="contact__success-title">Thank You!</h3>
                <p className="contact__success-text">
                  Your message has been sent successfully. We'll be in touch shortly.
                </p>
              </div>
            )}
          </div>

          {/* Info Column */}
          <div className={`contact__info-column reveal fade-up ${isInView ? 'is-visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <div className="contact__info-card">
              <h3 className="contact__info-title">Contact Information</h3>
              
              <ul className="contact__info-list">
                <li className="contact__info-item">
                  <span className="contact__info-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <span className="contact__info-text">
                    123 High Street<br />
                    London, United Kingdom
                  </span>
                </li>
                <li className="contact__info-item">
                  <span className="contact__info-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <a href="tel:+447123456789" className="contact__info-text contact__info-link">
                    07123 456789
                  </a>
                </li>
                <li className="contact__info-item">
                  <span className="contact__info-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </span>
                  <a href="mailto:info@definemeaesthetics.co.uk" className="contact__info-text contact__info-link">
                    info@definemeaesthetics.co.uk
                  </a>
                </li>
                <li className="contact__info-item">
                  <span className="contact__info-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </span>
                  <span className="contact__info-text">
                    Mon - Sat: 9:00 AM - 7:00 PM<br />
                    Sunday: Closed
                  </span>
                </li>
              </ul>

              {/* Social Links */}
              <div className="contact__social">
                <a
                  href="https://www.instagram.com/defineme_aesthetics/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social-link"
                  aria-label="Follow us on Instagram"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/DefineMeAesthetics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social-link"
                  aria-label="Follow us on Facebook"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
              </div>

              {/* Map Placeholder */}
              <div className="contact__map">
                <div className="contact__map-placeholder">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>View on Google Maps</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Contact);
