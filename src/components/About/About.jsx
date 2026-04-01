import { useEffect, useState } from 'react';
import useInView from '../../hooks/useInView';
import useCounter from '../../hooks/useCounter';
import './About.css';

/**
 * About Component
 * Elegant introduction section with asymmetric layout and sophisticated animations
 */
const About = () => {
  const [sectionRef, sectionInView] = useInView({ threshold: 0.1 });
  const [imageRef, imageInView] = useInView({ threshold: 0.2 });
  const [contentRef, contentInView] = useInView({ threshold: 0.2 });
  const [statsRef, statsInView] = useInView({ threshold: 0.5 });
  
  const [clientsRef, clientsCount] = useCounter(500, 2000, statsInView);
  const [treatmentsRef, treatmentsCount] = useCounter(1000, 2000, statsInView);
  const [experienceRef, experienceCount] = useCounter(5, 1500, statsInView);
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [imageLoaded, setImageLoaded] = useState(false);

  // Parallax effect for decorative elements
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      setMousePosition({
        x: (clientX - innerWidth / 2) / innerWidth,
        y: (clientY - innerHeight / 2) / innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    { icon: 'shield', text: 'Fully Qualified Practitioners' },
    { icon: 'heart', text: 'Personalized Treatment Plans' },
    { icon: 'sparkle', text: 'Premium Quality Products' },
  ];

  return (
    <section 
      id="about" 
      className={`about section-padding ${sectionInView ? 'about--visible' : ''}`} 
      ref={sectionRef}
    >
      {/* Animated Background Elements */}
      <div className="about__bg-elements">
        <div 
          className="about__bg-circle about__bg-circle--1"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
          }}
        />
        <div 
          className="about__bg-circle about__bg-circle--2"
          style={{
            transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)`
          }}
        />
        <div className="about__bg-gradient" />
      </div>

      <div className="about__container container">
        {/* Image Column */}
        <div 
          className={`about__image-wrapper ${imageInView ? 'is-visible' : ''}`}
          ref={imageRef}
        >
          {/* Decorative Frame */}
          <div className="about__image-frame">
            <svg className="about__frame-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
              <rect 
                x="2" y="2" 
                width="96" height="96" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="0.5"
                className="about__frame-rect"
              />
            </svg>
          </div>

          {/* Main Image */}
          <div className="about__image">
            <div className={`about__image-reveal ${imageLoaded ? 'is-loaded' : ''}`}>
              <img 
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80&auto=format&fit=crop"
                alt="Professional aesthetics treatment - client receiving luxury facial care"
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
              />
              {/* Image Shine Effect */}
              <div className="about__image-shine" />
            </div>
            
            {/* Floating Decorative Elements */}
            <div className="about__floating-elements">
              <div className="about__float about__float--1">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4"/>
                </svg>
              </div>
              <div className="about__float about__float--2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Experience Badge */}
          <div className="about__badge">
            <div className="about__badge-inner">
              <span className="about__badge-number" ref={experienceRef}>
                {experienceCount}+
              </span>
              <span className="about__badge-text">Years of<br/>Excellence</span>
            </div>
            <svg className="about__badge-ring" viewBox="0 0 100 100">
              <circle 
                cx="50" cy="50" r="48" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1"
                strokeDasharray="302"
                strokeDashoffset="302"
              />
            </svg>
          </div>

          {/* Accent Line */}
          <div className="about__accent-line" />
        </div>

        {/* Content Column */}
        <div 
          className={`about__content ${contentInView ? 'about__content--visible' : ''}`}
          ref={contentRef}
        >
          <div className="about__label">
            <span className="about__label-line" />
            <span className="about__label-text">About Us</span>
          </div>
          
          <h2 className="about__heading">
            <span className="about__heading-line">Where Science</span>
            <span className="about__heading-line about__heading-line--accent">
              Meets <em>Artistry</em>
            </span>
          </h2>

          <div className="about__text">
            <p className="about__text-intro">
              At Define Me Aesthetics, we believe that true beauty lies in enhancing 
              what makes you uniquely you.
            </p>
            <p>
              Our clinic offers a sanctuary where cutting-edge aesthetic science meets 
              artistic precision. Founded with a passion for helping clients feel confident 
              in their own skin, we provide bespoke treatments administered by fully qualified 
              practitioners in a safe, clinical environment.
            </p>
            <p>
              Every treatment begins with a thorough consultation to understand your 
              goals, concerns, and aspirations — because your journey to confidence 
              is as unique as you are.
            </p>
          </div>

          {/* Feature List */}
          <ul className="about__features">
            {features.map((feature, index) => (
              <li 
                key={feature.text} 
                className="about__feature"
                style={{ '--index': index }}
              >
                <span className="about__feature-icon">
                  {feature.icon === 'shield' && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      <path d="M9 12l2 2 4-4"/>
                    </svg>
                  )}
                  {feature.icon === 'heart' && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                  )}
                  {feature.icon === 'sparkle' && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 3v18M3 12h18M5.64 5.64l12.73 12.73M5.64 18.36L18.36 5.64"/>
                    </svg>
                  )}
                </span>
                <span className="about__feature-text">{feature.text}</span>
              </li>
            ))}
          </ul>

          {/* Stats Section */}
          <div className="about__stats" ref={statsRef}>
            <div className="about__stat" ref={clientsRef}>
              <span className="about__stat-number">
                <span className="about__stat-value">{clientsCount}</span>
                <span className="about__stat-plus">+</span>
              </span>
              <span className="about__stat-label">Happy Clients</span>
              <span className="about__stat-bar" />
            </div>
            <div className="about__stat-divider" />
            <div className="about__stat" ref={treatmentsRef}>
              <span className="about__stat-number">
                <span className="about__stat-value">{treatmentsCount}</span>
                <span className="about__stat-plus">+</span>
              </span>
              <span className="about__stat-label">Treatments Done</span>
              <span className="about__stat-bar" />
            </div>
          </div>

          {/* CTA Link */}
          {/* CTA Link */}
<div className="about__cta">
  <a href="#services" className="about__link">
    <span className="about__link-text">Discover Our Story</span>
    <span className="about__link-icon">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14"/>
        <path d="M12 5l7 7-7 7"/>
      </svg>
    </span>
    <span className="about__link-bg" aria-hidden="true"></span>
  </a>
</div>
        </div>
      </div>
    </section>
  );
};

export default About;