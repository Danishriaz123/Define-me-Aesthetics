import { useRef, useCallback, useEffect, useState } from 'react';

/**
 * Custom hook for creating a magnetic cursor effect on elements
 * Element subtly follows cursor when hovered (desktop only)
 * 
 * @param {number} strength - Effect strength (0-1)
 * @returns {Object} - Ref and event handlers
 */
const useMagneticEffect = (strength = 0.3) => {
  const ref = useRef(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Detect touch device
  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice(
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches
      );
    };
    
    checkTouch();
    window.addEventListener('resize', checkTouch);
    
    return () => window.removeEventListener('resize', checkTouch);
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      if (isTouchDevice || !ref.current) return;

      const element = ref.current;
      const rect = element.getBoundingClientRect();
      
      // Calculate center of element
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate offset from center
      const offsetX = (e.clientX - centerX) * strength;
      const offsetY = (e.clientY - centerY) * strength;
      
      // Apply transform
      element.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      element.style.transition = 'transform 0.15s ease-out';
    },
    [strength, isTouchDevice]
  );

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;
    
    // Reset transform
    ref.current.style.transform = 'translate(0, 0)';
    ref.current.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (!ref.current) return;
    
    ref.current.style.transition = 'transform 0.15s ease-out';
  }, []);

  return {
    ref,
    handlers: isTouchDevice ? {} : {
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
      onMouseEnter: handleMouseEnter
    }
  };
};

export default useMagneticEffect;
