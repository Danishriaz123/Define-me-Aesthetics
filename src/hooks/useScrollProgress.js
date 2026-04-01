import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook for tracking page scroll progress
 * Uses requestAnimationFrame for smooth 60fps tracking
 * 
 * @returns {number} - Scroll progress from 0 to 1
 */
const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const updateScrollProgress = useCallback(() => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    if (docHeight <= 0) {
      setScrollProgress(0);
      return;
    }

    const progress = Math.min(Math.max(scrollTop / docHeight, 0), 1);
    setScrollProgress(progress);
  }, []);

  useEffect(() => {
    let rafId = null;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        rafId = requestAnimationFrame(() => {
          updateScrollProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial calculation
    updateScrollProgress();

    // Add passive scroll listener for performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [updateScrollProgress]);

  return scrollProgress;
};

export default useScrollProgress;
