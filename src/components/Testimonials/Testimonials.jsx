import { useState, useEffect, useCallback, useRef } from 'react';
import useInView from '../../hooks/useInView';
import './Testimonials.css';

/**
 * Testimonials Component
 * Client reviews carousel with elegant animations
 */
const Testimonials = () => {
  const [sectionRef, sectionInView] = useInView({ threshold: 0.1 });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState('next');
  const [isAnimating, setIsAnimating] = useState(false);
  const autoPlayRef = useRef(null);
  const touchStartRef = useRef(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      role: 'Regular Client',
      location: 'Manchester, UK',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: "I've been coming to Define Me Aesthetics for over a year now, and the results have been absolutely transformative. The team takes the time to understand exactly what you want and delivers beyond expectations.",
      treatment: 'Dermal Fillers'
    },
    {
      id: 2,
      name: 'Emma Thompson',
      role: 'First Time Client',
      location: 'Liverpool, UK',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: "As someone who was nervous about getting treatments, the staff made me feel completely at ease. The consultation was thorough, and they explained every step of the process. Couldn't be happier with my results!",
      treatment: 'Anti-Wrinkle Treatment'
    },
    {
      id: 3,
      name: 'Jessica Brown',
      role: 'VIP Member',
      location: 'Leeds, UK',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: "The attention to detail and personalised care at Define Me is unmatched. Every treatment feels luxurious, and the results speak for themselves. This is the only place I trust with my skincare.",
      treatment: 'Skin Rejuvenation'
    },
    {
      id: 4,
      name: 'Charlotte Davies',
      role: 'Regular Client',
      location: 'Birmingham, UK',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: "Professional, friendly, and incredibly skilled. The clinic is beautiful and calming, making every visit a treat. I always leave feeling confident and refreshed. Highly recommend to anyone considering treatments!",
      treatment: 'Lip Enhancement'
    },
    {
      id: 5,
      name: 'Olivia Wilson',
      role: 'New Client',
      location: 'Sheffield, UK',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: "From the moment I walked in, I felt welcomed and cared for. The results of my treatment were natural and exactly what I was looking for. The team truly understands the art of subtle enhancement.",
      treatment: 'Facial Contouring'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && sectionInView) {
      autoPlayRef.current = setInterval(() => {
        handleNext();
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, sectionInView, activeIndex]);

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection('next');
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating, testimonials.length]);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection('prev');
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating, testimonials.length]);

  const handleDotClick = useCallback((index) => {
    if (isAnimating || index === activeIndex) return;
    setIsAnimating(true);
    setDirection(index > activeIndex ? 'next' : 'prev');
    setActiveIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating, activeIndex]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartRef.current = e.touches[0].clientX;
    setIsAutoPlaying(false);
  };

  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStartRef.current - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  // Render stars
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`testimonials__star ${index < rating ? 'testimonials__star--filled' : ''}`}
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill={index < rating ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ));
  };

  return (
    <section
      id="testimonials"
      className={`testimonials section-padding ${sectionInView ? 'testimonials--visible' : ''}`}
      ref={sectionRef}
      aria-label="Client testimonials"
    >
      {/* Background Elements */}
      <div className="testimonials__bg">
        <div className="testimonials__bg-gradient"></div>
        <div className="testimonials__bg-pattern"></div>
        <div className="testimonials__bg-glow"></div>
      </div>

      <div className="testimonials__container container">
        {/* Header */}
        <div className="testimonials__header">
          <span className="testimonials__label">
            <span className="testimonials__label-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </span>
            Client Reviews
          </span>
          <h2 className="testimonials__title">
            What Our <em>Clients</em> Say
          </h2>
          <p className="testimonials__subtitle">
            Real experiences from real people who trusted us with their aesthetic journey
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div 
          className="testimonials__carousel"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Quote Icon */}
          <div className="testimonials__quote-icon">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          {/* Cards Container */}
          <div className="testimonials__cards">
            {testimonials.map((testimonial, index) => {
              const isActive = index === activeIndex;
              const isPrev = index === (activeIndex - 1 + testimonials.length) % testimonials.length;
              const isNext = index === (activeIndex + 1) % testimonials.length;

              return (
                <div
                  key={testimonial.id}
                  className={`testimonials__card ${isActive ? 'testimonials__card--active' : ''} ${isPrev ? 'testimonials__card--prev' : ''} ${isNext ? 'testimonials__card--next' : ''}`}
                  aria-hidden={!isActive}
                >
                  <div className="testimonials__card-inner">
                    {/* Rating */}
                    <div className="testimonials__rating">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Text */}
                    <blockquote className="testimonials__text">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Treatment Tag */}
                    <span className="testimonials__treatment">
                      {testimonial.treatment}
                    </span>

                    {/* Author */}
                    <div className="testimonials__author">
                      <div className="testimonials__avatar">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          loading="lazy"
                        />
                        <span className="testimonials__avatar-ring"></span>
                      </div>
                      <div className="testimonials__author-info">
                        <span className="testimonials__name">{testimonial.name}</span>
                        <span className="testimonials__role">
                          {testimonial.role} • {testimonial.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="testimonials__nav">
            <button
              className="testimonials__nav-btn testimonials__nav-btn--prev"
              onClick={handlePrev}
              aria-label="Previous testimonial"
              disabled={isAnimating}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </button>

            {/* Dots */}
            <div className="testimonials__dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`testimonials__dot ${index === activeIndex ? 'testimonials__dot--active' : ''}`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={index === activeIndex}
                >
                  <span className="testimonials__dot-inner"></span>
                  <svg className="testimonials__dot-progress" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="16" />
                  </svg>
                </button>
              ))}
            </div>

            <button
              className="testimonials__nav-btn testimonials__nav-btn--next"
              onClick={handleNext}
              aria-label="Next testimonial"
              disabled={isAnimating}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="testimonials__trust">
          <div className="testimonials__trust-item">
            <span className="testimonials__trust-number">500+</span>
            <span className="testimonials__trust-label">Happy Clients</span>
          </div>
          <div className="testimonials__trust-divider"></div>
          <div className="testimonials__trust-item">
            <span className="testimonials__trust-number">4.9</span>
            <span className="testimonials__trust-label">Average Rating</span>
          </div>
          <div className="testimonials__trust-divider"></div>
          <div className="testimonials__trust-item">
            <span className="testimonials__trust-number">100%</span>
            <span className="testimonials__trust-label">Satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;