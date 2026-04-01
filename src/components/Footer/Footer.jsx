/* ══════════════════════════════════════════════════════════════════════════
   FOOTER - Elegant Comprehensive Footer
   ══════════════════════════════════════════════════════════════════════════ */

import React, { memo, useCallback } from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Smooth scroll handler for internal links
  const handleNavClick = useCallback((e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      const offset = 80;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  // Navigation links - matching actual section IDs
  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Results', href: '#gallery' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Contact', href: '#contact' }
  ];

  // Treatment links
  const treatmentLinks = [
    { label: 'Dermal Fillers', href: '#services' },
    { label: 'Anti-Wrinkle', href: '#services' },
    { label: 'Lip Enhancement', href: '#services' },
    { label: 'Skin Rejuvenation', href: '#services' },
    { label: 'Chemical Peels', href: '#services' },
    { label: 'Microneedling', href: '#services' }
  ];

  // Contact info
  const contactInfo = {
    address: {
      line1: '123 High Street',
      line2: 'London, UK'
    },
    phone: '+447123456789',
    phoneDisplay: '07123 456789',
    email: 'info@definemeaesthetics.co.uk',
    hours: 'Mon - Sat: 9AM - 7PM'
  };

  // Social links
  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/defineme_aesthetics/',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      )
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/DefineMeAesthetics',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      )
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@defineme_aesthetics',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
        </svg>
      )
    }
  ];

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Footer Grid */}
        <div className="footer__grid">
          {/* Brand Column */}
          <div className="footer__brand">
            <a 
              href="#hero" 
              className="footer__logo"
              onClick={(e) => handleNavClick(e, '#hero')}
            >
              <span className="footer__logo-text">
                DEFINE <span>ME</span>
              </span>
              <span className="footer__logo-sub">Aesthetics</span>
            </a>
            <p className="footer__description">
              Premium aesthetic treatments delivered with precision, artistry, and care. 
              Your journey to confidence begins here.
            </p>
            <div className="footer__social">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label={`Follow us on ${social.name}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div className="footer__column">
            <h4 className="footer__column-title">Navigation</h4>
            <ul className="footer__links">
              {navLinks.map((link) => (
                <li key={link.label} className="footer__link">
                  <a 
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments Column */}
          <div className="footer__column">
            <h4 className="footer__column-title">Treatments</h4>
            <ul className="footer__links">
              {treatmentLinks.map((link) => (
                <li key={link.label} className="footer__link">
                  <a 
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer__column">
            <h4 className="footer__column-title">Contact Us</h4>
            
            {/* Address */}
            <div className="footer__contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <a 
                href="https://maps.google.com/?q=123+High+Street+London+UK" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer__contact-link"
              >
                {contactInfo.address.line1}<br />{contactInfo.address.line2}
              </a>
            </div>

            {/* Phone */}
            <div className="footer__contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <a 
                href={`tel:${contactInfo.phone}`}
                className="footer__contact-link"
              >
                {contactInfo.phoneDisplay}
              </a>
            </div>

            {/* Email */}
            <div className="footer__contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="footer__contact-link"
              >
                {contactInfo.email}
              </a>
            </div>

            {/* Hours */}
            <div className="footer__contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>{contactInfo.hours}</span>
            </div>

            {/* Book Now CTA */}
            <a 
              href="#contact" 
              className="footer__book-btn"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              Book Appointment
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Define Me Aesthetics. All Rights Reserved.
          </p>
          <div className="footer__legal">
            <a 
              href="#contact" 
              className="footer__legal-link"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              Privacy Policy
            </a>
            <span className="footer__legal-divider">|</span>
            <a 
              href="#contact" 
              className="footer__legal-link"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);