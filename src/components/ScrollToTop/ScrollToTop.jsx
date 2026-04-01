/* ══════════════════════════════════════════════════════════════════════════
   SCROLL TO TOP BUTTON
   ══════════════════════════════════════════════════════════════════════════ */

import React, { useState, useEffect, useCallback, memo } from 'react';
import './ScrollToTop.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll visibility
  useEffect(() => {
    let rafId = null;
    let lastScrollY = 0;

    const handleScroll = () => {
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        
        // Only update state if crossing threshold
        if (scrollY > 500 && !isVisible) {
          setIsVisible(true);
        } else if (scrollY <= 500 && isVisible) {
          setIsVisible(false);
        }
        
        lastScrollY = scrollY;
        rafId = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isVisible]);

  // Scroll to top function
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div className={`scroll-to-top ${isVisible ? 'scroll-to-top--visible' : ''}`}>
      <button
        className="scroll-to-top__button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </div>
  );
};

export default memo(ScrollToTop);
