import { useEffect, useState } from 'react';
import useMagneticEffect from '../../hooks/useMagneticEffect';
import './Hero.css';

/**
 * Hero Component
 * Elegant split-screen hero with light aesthetic
 */
const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const primaryButton = useMagneticEffect(0.25);
  const secondaryButton = useMagneticEffect(0.25);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 3300);

    return () => clearTimeout(timer);
  }, []);

  const handleNavClick = (e, targetId) => {
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
  };

  return (
    <section id="hero" className="hero">
      {/* Decorative Background Elements */}
      <div className="hero__bg-elements">
        <div className="hero__bg-circle hero__bg-circle--1"></div>
        <div className="hero__bg-circle hero__bg-circle--2"></div>
        <div className="hero__bg-gradient"></div>
      </div>

      <div className="hero__container">
        {/* Left Content */}
        <div className="hero__content">
          {/* Label */}
          <div className={`hero__label ${isLoaded ? 'hero__label--visible' : ''}`}>
            <span className="hero__label-dot"></span>
            <span className="hero__label-text">Premium Aesthetics</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero__headline">
            <span className="hero__headline-row">
              <span className={`hero__word ${isLoaded ? 'hero__word--visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
                Redefine
              </span>
            </span>
            <span className="hero__headline-row">
              <span className={`hero__word ${isLoaded ? 'hero__word--visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
                Your
              </span>
              <span className={`hero__word hero__word--outline ${isLoaded ? 'hero__word--visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
                Natural
              </span>
            </span>
            <span className="hero__headline-row">
              <span className={`hero__word hero__word--gold ${isLoaded ? 'hero__word--visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
                Beauty
              </span>
            </span>
          </h1>

          {/* Subheadline */}
          <p className={`hero__subheadline ${isLoaded ? 'hero__subheadline--visible' : ''}`}>
            Award-winning aesthetic treatments delivered with precision, 
            artistry, and care in the heart of the UK
          </p>

          {/* CTA Buttons */}
          <div className={`hero__cta-container ${isLoaded ? 'hero__cta-container--visible' : ''}`}>
            <a 
              href="#contact"
              className="hero__cta hero__cta--primary"
              ref={primaryButton.ref}
              {...primaryButton.handlers}
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              <span>Book Consultation</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a 
              href="#services"
              className="hero__cta hero__cta--secondary"
              ref={secondaryButton.ref}
              {...secondaryButton.handlers}
              onClick={(e) => handleNavClick(e, '#services')}
            >
              <span>View Treatments</span>
            </a>
          </div>

          {/* Stats */}
          <div className={`hero__stats ${isLoaded ? 'hero__stats--visible' : ''}`}>
            <div className="hero__stat">
              <span className="hero__stat-number">15+</span>
              <span className="hero__stat-label">Years Experience</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">10k+</span>
              <span className="hero__stat-label">Happy Clients</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">50+</span>
              <span className="hero__stat-label">Treatments</span>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className={`hero__visual ${isLoaded ? 'hero__visual--visible' : ''}`}>
          {/* Main Image */}
          <div className="hero__image-main">
            <div className="hero__image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80" 
                alt="Aesthetic treatment"
                className="hero__img"
              />
            </div>
            {/* Decorative Frame */}
            <div className="hero__image-frame"></div>
          </div>

          {/* Floating Card */}
          <div className={`hero__floating-card ${isLoaded ? 'hero__floating-card--visible' : ''}`}>
            <div className="hero__floating-card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="M9 12l2 2 4-4"/>
              </svg>
            </div>
            <div className="hero__floating-card-content">
              <span className="hero__floating-card-title">Certified Experts</span>
              <span className="hero__floating-card-text">GMC Registered Practitioners</span>
            </div>
          </div>

          {/* Secondary Image */}
          <div className={`hero__image-secondary ${isLoaded ? 'hero__image-secondary--visible' : ''}`}>
            <img 
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80" 
              alt="Professional consultation"
              className="hero__img"
            />
          </div>

          {/* Decorative Elements */}
          <div className="hero__decor-dots"></div>
          <div className="hero__decor-line"></div>
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="hero__bottom-line"></div>
    </section>
  );
};

export default Hero;