import { useState, useEffect } from 'react';
import './Preloader.css';

/**
 * Preloader Component
 * Luxury brand-style loading animation with staggered letter reveal
 */
const Preloader = ({ onComplete }) => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Lock scroll during preloader
    document.body.classList.add('loading');

    // Start exit animation after text animations complete
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 2400);

    // Complete and unmount preloader
    const completeTimer = setTimeout(() => {
      setIsAnimating(false);
      document.body.classList.remove('loading');
      if (onComplete) onComplete();
    }, 3200);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
      document.body.classList.remove('loading');
    };
  }, [onComplete]);

  if (!isAnimating) return null;

  const defineLetters = 'DEFINE'.split('');
  const meLetters = 'ME'.split('');

  return (
    <div className={`preloader ${isExiting ? 'preloader--exit' : ''}`}>
      <div className="preloader__content">
        <div className="preloader__brand">
          <div className="preloader__title">
            <span className="preloader__word">
              {defineLetters.map((letter, index) => (
                <span
                  key={`define-${index}`}
                  className="preloader__letter"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  {letter}
                </span>
              ))}
            </span>
            <span className="preloader__word preloader__word--gold">
              {meLetters.map((letter, index) => (
                <span
                  key={`me-${index}`}
                  className="preloader__letter"
                  style={{ animationDelay: `${(defineLetters.length + index) * 0.08}s` }}
                >
                  {letter}
                </span>
              ))}
            </span>
          </div>
          
          <div className="preloader__subtitle">
            <span className="preloader__subtitle-text">AESTHETICS</span>
          </div>
          
          <div className="preloader__line"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
