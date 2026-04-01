import { useState, useEffect, useCallback, useRef } from 'react';
import './CustomCursor.css';

/**
 * CustomCursor Component
 * Premium custom cursor with hover states (desktop only)
 */
const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const rafRef = useRef(null);
  const targetPosition = useRef({ x: 0, y: 0 });

  // Detect touch device
  useEffect(() => {
    const checkTouch = () => {
      const isTouch = 
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches;
      
      setIsTouchDevice(isTouch);
      
      if (!isTouch) {
        document.body.classList.add('cursor-none');
      } else {
        document.body.classList.remove('cursor-none');
      }
    };
    
    checkTouch();
    window.addEventListener('resize', checkTouch);
    
    return () => {
      window.removeEventListener('resize', checkTouch);
      document.body.classList.remove('cursor-none');
    };
  }, []);

  // Smooth cursor animation
  const animateCursor = useCallback(() => {
    if (cursorRef.current && dotRef.current) {
      const { x, y } = targetPosition.current;
      
      // Outer ring follows with smooth interpolation
      const currentX = parseFloat(cursorRef.current.style.left) || x;
      const currentY = parseFloat(cursorRef.current.style.top) || y;
      
      const newX = currentX + (x - currentX) * 0.15;
      const newY = currentY + (y - currentY) * 0.15;
      
      cursorRef.current.style.left = `${newX}px`;
      cursorRef.current.style.top = `${newY}px`;
      
      // Inner dot follows immediately
      dotRef.current.style.left = `${x}px`;
      dotRef.current.style.top = `${y}px`;
    }
    
    rafRef.current = requestAnimationFrame(animateCursor);
  }, []);

  // Mouse move handler
  const handleMouseMove = useCallback((e) => {
    targetPosition.current = { x: e.clientX, y: e.clientY };
    
    if (!isVisible) {
      setIsVisible(true);
    }
  }, [isVisible]);

  // Mouse leave handler
  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  // Mouse enter handler
  const handleMouseEnter = useCallback(() => {
    setIsVisible(true);
  }, []);

  // Set up event listeners
  useEffect(() => {
    if (isTouchDevice) return;

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    
    rafRef.current = requestAnimationFrame(animateCursor);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isTouchDevice, handleMouseMove, handleMouseLeave, handleMouseEnter, animateCursor]);

  // Handle hover states for links and buttons
  useEffect(() => {
    if (isTouchDevice) return;

    const handleElementEnter = (e) => {
      const target = e.target;
      
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.hasAttribute('data-cursor-hover')
      ) {
        setIsHovering(true);
      }
      
      if (
        target.tagName === 'IMG' ||
        target.closest('.gallery__item') ||
        target.hasAttribute('data-cursor-view')
      ) {
        setIsHoveringImage(true);
      }
    };

    const handleElementLeave = () => {
      setIsHovering(false);
      setIsHoveringImage(false);
    };

    document.addEventListener('mouseover', handleElementEnter);
    document.addEventListener('mouseout', handleElementLeave);

    return () => {
      document.removeEventListener('mouseover', handleElementEnter);
      document.removeEventListener('mouseout', handleElementLeave);
    };
  }, [isTouchDevice]);

  // Don't render on touch devices
  if (isTouchDevice) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className={`custom-cursor custom-cursor--ring ${
          isVisible ? 'custom-cursor--visible' : ''
        } ${isHovering ? 'custom-cursor--hover' : ''} ${
          isHoveringImage ? 'custom-cursor--view' : ''
        }`}
        aria-hidden="true"
      >
        {isHoveringImage && <span className="custom-cursor__text">View</span>}
      </div>
      <div
        ref={dotRef}
        className={`custom-cursor custom-cursor--dot ${
          isVisible ? 'custom-cursor--visible' : ''
        } ${isHovering ? 'custom-cursor--hover' : ''}`}
        aria-hidden="true"
      />
    </>
  );
};

export default CustomCursor;
