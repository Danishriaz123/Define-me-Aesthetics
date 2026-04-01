import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Custom hook for detecting when an element enters the viewport
 * Uses IntersectionObserver for performance
 * 
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Visibility threshold (0-1)
 * @param {boolean} options.triggerOnce - Only trigger once
 * @param {string} options.rootMargin - Root margin for observer
 * @returns {[React.RefObject, boolean]} - Ref and visibility state
 */
const useInView = (options = {}) => {
  const {
    threshold = 0.15,
    triggerOnce = true,
    rootMargin = '0px 0px -50px 0px'
  } = options;

  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);
  const observerRef = useRef(null);

  const callback = useCallback(
    (entries) => {
      const [entry] = entries;
      
      if (entry.isIntersecting) {
        setIsInView(true);
        
        // Add is-visible class to element
        if (ref.current) {
          ref.current.classList.add('is-visible');
        }
        
        // Unobserve if triggerOnce is true
        if (triggerOnce && observerRef.current && ref.current) {
          observerRef.current.unobserve(ref.current);
        }
      } else if (!triggerOnce) {
        setIsInView(false);
        if (ref.current) {
          ref.current.classList.remove('is-visible');
        }
      }
    },
    [triggerOnce]
  );

  useEffect(() => {
    const element = ref.current;
    
    if (!element) return;

    // Check for IntersectionObserver support
    if (!('IntersectionObserver' in window)) {
      setIsInView(true);
      element.classList.add('is-visible');
      return;
    }

    observerRef.current = new IntersectionObserver(callback, {
      threshold,
      rootMargin
    });

    observerRef.current.observe(element);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [callback, threshold, rootMargin]);

  return [ref, isInView];
};

export default useInView;
