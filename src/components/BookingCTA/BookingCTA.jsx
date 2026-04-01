/* ══════════════════════════════════════════════════════════════════════════
   BOOKING CTA SECTION - High Conversion Call-to-Action
   ══════════════════════════════════════════════════════════════════════════ */

import React, { memo } from 'react';
import useInView from '../../hooks/useInView';
import useMagneticEffect from '../../hooks/useMagneticEffect';
import './BookingCTA.css';

const BookingCTA = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });
  const { ref: buttonRef, onMouseMove, onMouseLeave, style: magneticStyle } = useMagneticEffect(0.3);

  return (
    <section className="booking-cta" ref={ref}>
      {/* Background */}
      <div className="booking-cta__background">
        <img
          src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=1920&q=80"
          alt=""
          className="booking-cta__background-image"
          loading="lazy"
        />
        <div className="booking-cta__overlay" />
      </div>

      {/* Content */}
      <div className="booking-cta__container">
        <span className={`booking-cta__label reveal fade-up ${isInView ? 'is-visible' : ''}`}>
          Take The First Step
        </span>

        <h2 className={`booking-cta__title reveal fade-up ${isInView ? 'is-visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
          Ready to Redefine Your Beauty?
        </h2>

        <p className={`booking-cta__subtitle reveal fade-up ${isInView ? 'is-visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
          Book your complimentary consultation today and discover the treatments perfect for you.
        </p>

        <button
          ref={buttonRef}
          className={`booking-cta__button reveal fade-up ${isInView ? 'is-visible' : ''}`}
          style={{ ...magneticStyle, transitionDelay: '0.3s' }}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          aria-label="Book your free consultation"
        >
          Book Your Free Consultation
        </button>

        <a 
          href="tel:+447123456789" 
          className={`booking-cta__phone reveal fade-up ${isInView ? 'is-visible' : ''}`}
          style={{ transitionDelay: '0.4s' }}
        >
          Or call us: 07123 456789
        </a>

        {/* Social Icons */}
        <div className={`booking-cta__social reveal fade-up ${isInView ? 'is-visible' : ''}`} style={{ transitionDelay: '0.5s' }}>
          <a
            href="https://www.instagram.com/defineme_aesthetics/"
            target="_blank"
            rel="noopener noreferrer"
            className="booking-cta__social-link"
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
            className="booking-cta__social-link"
            aria-label="Follow us on Facebook"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default memo(BookingCTA);
