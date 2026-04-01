// hooks/useCounter.js
import { useState, useEffect, useRef } from 'react';

/**
 * useCounter Hook
 * Animates a number from 0 to the target value
 * @param {number} end - Target number to count to
 * @param {number} duration - Animation duration in ms
 * @param {boolean} trigger - Whether to start the animation
 * @returns {[React.RefObject, number]} - Ref and current count value
 */
const useCounter = (end, duration = 2000, trigger = false) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Only run if triggered and hasn't animated yet
    if (!trigger || hasAnimated.current) return;
    
    hasAnimated.current = true;
    
    let startTime = null;
    let animationFrame = null;
    
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (ease-out-expo)
      const easeOutExpo = progress === 1 
        ? 1 
        : 1 - Math.pow(2, -10 * progress);
      
      const currentCount = Math.floor(easeOutExpo * end);
      setCount(currentCount);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end); // Ensure we end on exact number
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [trigger, end, duration]);

  return [ref, count];
};

export default useCounter;