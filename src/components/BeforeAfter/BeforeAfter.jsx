import { useState, useRef, useCallback, useEffect } from 'react';
import useInView from '../../hooks/useInView';
import './BeforeAfter.css';

/**
 * BeforeAfter Component
 * Premium interactive comparison slider with multiple cases
 */
const BeforeAfter = () => {
  const [activeCase, setActiveCase] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef(null);
  const [sectionRef, sectionInView] = useInView({ threshold: 0.2 });

  // Treatment cases data
  const cases = [
    {
      id: 1,
      title: 'Facial Rejuvenation',
      category: 'Anti-Aging',
      description: 'Natural-looking results with dermal fillers and skin treatments',
      before: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&q=80',
      after: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80',
    },
    {
      id: 2,
      title: 'Skin Clarity',
      category: 'Skin Care',
      description: 'Advanced treatments for clearer, more radiant skin',
      before: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80',
      after: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80',
    },
    {
      id: 3,
      title: 'Lip Enhancement',
      category: 'Contouring',
      description: 'Subtle lip augmentation for natural fullness',
      before: 'https://images.unsplash.com/photo-1588006173527-6fa08efebb4e?w=800&q=80',
      after: 'https://images.unsplash.com/photo-1594744803329-e58b31239f85?w=800&q=80',
    },
  ];

  // Reset slider position when changing cases
  useEffect(() => {
    setIsAnimating(true);
    setSliderPosition(50);
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [activeCase]);

  const updateSliderPosition = useCallback((clientX) => {
    if (!containerRef.current || isAnimating) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 5), 95);
    setSliderPosition(percentage);
  }, [isAnimating]);

  const handleMouseDown = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
    updateSliderPosition(e.clientX);
  }, [updateSliderPosition]);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    updateSliderPosition(e.clientX);
  }, [isDragging, updateSliderPosition]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleTouchStart = useCallback((e) => {
    setIsDragging(true);
    updateSliderPosition(e.touches[0].clientX);
  }, [updateSliderPosition]);

  const handleTouchMove = useCallback((e) => {
    if (!isDragging) return;
    e.preventDefault();
    updateSliderPosition(e.touches[0].clientX);
  }, [isDragging, updateSliderPosition]);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Keyboard navigation
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowLeft') {
      setSliderPosition(prev => Math.max(prev - 5, 5));
    } else if (e.key === 'ArrowRight') {
      setSliderPosition(prev => Math.min(prev + 5, 95));
    }
  }, []);

  const currentCase = cases[activeCase];

  return (
    <section 
      id="before-after" 
      className="before-after section-padding"
      ref={sectionRef}
    >
      {/* Background Decoration */}
      <div className="before-after__bg">
        <div className="before-after__bg-pattern"></div>
        <div className="before-after__bg-gradient"></div>
      </div>

      <div className="before-after__container container">
        {/* Header */}
        <div className={`before-after__header ${sectionInView ? 'is-visible' : ''}`}>
          <span className="before-after__label-tag">
            <span className="before-after__label-dot"></span>
            Real Results
          </span>
          <h2 className="before-after__title">
            Transformations That
            <span className="before-after__title-accent"> Speak</span>
          </h2>
          <p className="before-after__subtitle">
            Witness the remarkable transformations achieved through our expert treatments. 
            Every result reflects our commitment to natural-looking enhancement.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className={`before-after__content ${sectionInView ? 'is-visible' : ''}`}>
          {/* Left Side - Case Selection */}
          <div className="before-after__cases">
            <div className="before-after__cases-header">
              <span className="before-after__cases-label">Select Treatment</span>
              <span className="before-after__cases-count">
                {String(activeCase + 1).padStart(2, '0')} / {String(cases.length).padStart(2, '0')}
              </span>
            </div>

            <div className="before-after__cases-list">
              {cases.map((caseItem, index) => (
                <button
                  key={caseItem.id}
                  className={`before-after__case-btn ${activeCase === index ? 'is-active' : ''}`}
                  onClick={() => setActiveCase(index)}
                  aria-label={`View ${caseItem.title} results`}
                >
                  <span className="before-after__case-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="before-after__case-info">
                    <span className="before-after__case-category">{caseItem.category}</span>
                    <span className="before-after__case-title">{caseItem.title}</span>
                  </div>
                  <span className="before-after__case-arrow">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                </button>
              ))}
            </div>

            {/* Case Description */}
            <div className="before-after__case-description">
              <p>{currentCase.description}</p>
            </div>

            {/* CTA */}
            <a href="#contact" className="before-after__cta">
              <span>Book This Treatment</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          {/* Right Side - Slider */}
          <div className="before-after__slider-wrapper">
            {/* Slider */}
            <div 
              className={`before-after__slider ${isDragging ? 'is-dragging' : ''} ${isAnimating ? 'is-animating' : ''}`}
              ref={containerRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onKeyDown={handleKeyDown}
              role="slider"
              aria-label="Before and after comparison slider"
              aria-valuenow={Math.round(sliderPosition)}
              aria-valuemin={0}
              aria-valuemax={100}
              tabIndex={0}
            >
              {/* Before Image */}
              <div className="before-after__image before-after__image--before">
                <img 
                  src={currentCase.before}
                  alt={`Before ${currentCase.title} treatment`}
                  loading="lazy"
                  draggable="false"
                />
                <div className="before-after__image-overlay"></div>
              </div>

              {/* After Image */}
              <div 
                className="before-after__image before-after__image--after"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img 
                  src={currentCase.after}
                  alt={`After ${currentCase.title} treatment`}
                  loading="lazy"
                  draggable="false"
                />
                <div className="before-after__image-overlay"></div>
              </div>

              {/* Labels */}
              <div className="before-after__labels">
                <span 
                  className="before-after__label before-after__label--before"
                  style={{ opacity: sliderPosition > 20 ? 1 : 0 }}
                >
                  Before
                </span>
                <span 
                  className="before-after__label before-after__label--after"
                  style={{ opacity: sliderPosition < 80 ? 1 : 0 }}
                >
                  After
                </span>
              </div>

              {/* Slider Handle */}
              <div 
                className="before-after__handle"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="before-after__handle-line">
                  <span className="before-after__handle-glow"></span>
                </div>
                <div className="before-after__handle-button">
                  <div className="before-after__handle-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M15 18l-6-6 6-6"/>
                    </svg>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M9 18l6-6-6-6"/>
                    </svg>
                  </div>
                  <div className="before-after__handle-ring"></div>
                </div>
              </div>

              {/* Corner Decorations */}
              <div className="before-after__corner before-after__corner--tl"></div>
              <div className="before-after__corner before-after__corner--tr"></div>
              <div className="before-after__corner before-after__corner--bl"></div>
              <div className="before-after__corner before-after__corner--br"></div>
            </div>

            {/* Instruction */}
            <div className="before-after__instruction">
              <div className="before-after__instruction-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M14 8l-4 4 4 4"/>
                  <path d="M10 8l4 4-4 4"/>
                </svg>
              </div>
              <span>Drag to compare results</span>
            </div>

            {/* Progress Dots */}
            <div className="before-after__dots">
              {cases.map((_, index) => (
                <button
                  key={index}
                  className={`before-after__dot ${activeCase === index ? 'is-active' : ''}`}
                  onClick={() => setActiveCase(index)}
                  aria-label={`View case ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className={`before-after__stats ${sectionInView ? 'is-visible' : ''}`}>
          <div className="before-after__stat">
            <span className="before-after__stat-number">98%</span>
            <span className="before-after__stat-label">Client Satisfaction</span>
          </div>
          <div className="before-after__stat-divider"></div>
          <div className="before-after__stat">
            <span className="before-after__stat-number">5000+</span>
            <span className="before-after__stat-label">Successful Treatments</span>
          </div>
          <div className="before-after__stat-divider"></div>
          <div className="before-after__stat">
            <span className="before-after__stat-number">100%</span>
            <span className="before-after__stat-label">Natural Results</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;