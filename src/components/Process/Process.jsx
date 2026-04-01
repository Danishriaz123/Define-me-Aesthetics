/* ══════════════════════════════════════════════════════════════════════════
   PROCESS SECTION - Treatment Journey Timeline
   ══════════════════════════════════════════════════════════════════════════ */

import React, { memo } from 'react';
import useInView from '../../hooks/useInView';
import './Process.css';

const steps = [
  {
    id: 1,
    title: 'Consultation',
    description: 'Begin with a complimentary in-depth consultation to discuss your goals and create your personalised treatment plan.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <line x1="9" y1="10" x2="15" y2="10" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Customised Plan',
    description: 'Receive a bespoke treatment plan tailored to your unique facial anatomy, skin type, and desired outcomes.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Treatment',
    description: 'Experience your treatment in our state-of-the-art clinic, administered with precision by our expert practitioners.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Aftercare',
    description: 'Enjoy dedicated aftercare support and follow-up to ensure optimal results and your complete satisfaction.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    )
  }
];

const Process = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section className="process" ref={ref}>
      <div className="process__container">
        {/* Header */}
        <header className={`process__header reveal fade-up ${isInView ? 'is-visible' : ''}`}>
          <span className="process__label">Your Journey</span>
          <h2 className="process__title">How It Works</h2>
          <p className="process__subtitle">
            Your path to confidence in four simple steps
          </p>
        </header>

        {/* Timeline */}
        <div className="process__timeline">
          {steps.map((step) => (
            <article 
              key={step.id} 
              className={`process__step ${isInView ? 'is-visible' : ''}`}
            >
              <div className="process__step-number">{step.id}</div>
              <div className="process__step-content">
                <div className="process__step-icon">{step.icon}</div>
                <h3 className="process__step-title">{step.title}</h3>
                <p className="process__step-description">{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Process);
