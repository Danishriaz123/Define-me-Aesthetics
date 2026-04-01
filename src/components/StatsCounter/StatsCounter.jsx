import { useEffect, useState } from 'react';
import useInView from '../../hooks/useInView';
import useCounter from '../../hooks/useCounter';
import './StatsCounter.css';

/**
 * StatsCounter Component
 * Full-width impact section with animated counters and elegant effects
 */
const StatsCounter = () => {
  const [sectionRef, sectionInView] = useInView({ threshold: 0.3 });
  const [hasAnimated, setHasAnimated] = useState(false);

  // Track if animation has been triggered (only animate once)
  useEffect(() => {
    if (sectionInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [sectionInView, hasAnimated]);

  // Pass hasAnimated to counters so they only run once
  const [stat1Ref, stat1Count] = useCounter(500, 2000, hasAnimated);
  const [stat2Ref, stat2Count] = useCounter(1200, 2200, hasAnimated);
  const [stat3Ref, stat3Count] = useCounter(5, 1500, hasAnimated);
  const [stat4Ref, stat4Count] = useCounter(100, 1800, hasAnimated);

  const stats = [
    { 
      ref: stat1Ref, 
      count: stat1Count, 
      suffix: '+', 
      label: 'Happy Clients',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      )
    },
    { 
      ref: stat2Ref, 
      count: stat2Count, 
      suffix: '+', 
      label: 'Treatments Completed',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>
      )
    },
    { 
      ref: stat3Ref, 
      count: stat3Count, 
      suffix: '+', 
      label: 'Years Experience',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      )
    },
    { 
      ref: stat4Ref, 
      count: stat4Count, 
      suffix: '%', 
      label: 'Satisfaction Rate',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
        </svg>
      )
    }
  ];

  return (
    <section 
      className={`stats section-padding ${sectionInView ? 'stats--visible' : ''}`}
      ref={sectionRef}
      aria-label="Our achievements in numbers"
    >
      {/* Background Elements */}
      <div className="stats__bg">
        <div className="stats__glow stats__glow--1"></div>
        <div className="stats__glow stats__glow--2"></div>
        <div className="stats__pattern"></div>
        <div className="stats__lines">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="stats__line" style={{ '--line-index': i }}></span>
          ))}
        </div>
      </div>

      <div className="stats__container container">
        {/* Optional Header */}
        <div className="stats__header">
          <span className="stats__subtitle">Our Impact</span>
          <h2 className="stats__title">Numbers That Speak</h2>
        </div>

        {/* Stats Grid */}
        <div className="stats__grid">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="stats__item"
              style={{ '--item-index': index }}
              ref={stat.ref}
            >
              {/* Icon */}
              <div className="stats__icon">
                {stat.icon}
              </div>

              {/* Number with animation */}
              <div className="stats__number-wrapper">
                <span className="stats__number">
                  {stat.count.toLocaleString()}
                </span>
                <span className="stats__suffix">{stat.suffix}</span>
              </div>

              {/* Label */}
              <span className="stats__label">{stat.label}</span>

              {/* Decorative underline */}
              <span className="stats__underline"></span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom accent */}
      <div className="stats__accent"></div>
    </section>
  );
};

export default StatsCounter;