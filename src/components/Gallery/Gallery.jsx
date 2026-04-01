import useInView from '../../hooks/useInView';
import './Gallery.css';

/**
 * Gallery Component
 * Visual portfolio with masonry-style grid
 */
const Gallery = () => {
  const [headerRef, headerInView] = useInView({ threshold: 0.2 });
  const [gridRef, gridInView] = useInView({ threshold: 0.1 });

  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80',
      alt: 'Facial treatment result',
      category: 'Skin Rejuvenation',
      span: 'tall'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80',
      alt: 'Lip enhancement result',
      category: 'Lip Enhancement',
      span: 'normal'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&q=80',
      alt: 'Professional aesthetics treatment',
      category: 'Dermal Fillers',
      span: 'normal'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80',
      alt: 'Beautiful skin results',
      category: 'Chemical Peel',
      span: 'tall'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&q=80',
      alt: 'Anti-wrinkle treatment result',
      category: 'Anti-Wrinkle',
      span: 'normal'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
      alt: 'Radiant skin transformation',
      category: 'Microneedling',
      span: 'normal'
    }
  ];

  return (
    <section id="gallery" className="gallery section-padding">
      <div className="gallery__container container">
        {/* Header */}
        <div 
          className={`gallery__header ${headerInView ? 'gallery__header--visible' : ''}`}
          ref={headerRef}
        >
          <span className="section-label centered reveal fade-up">Portfolio</span>
          <h2 className="section-heading reveal fade-up" style={{ textAlign: 'center' }}>
            Our Transformations
          </h2>
          <p className="section-subtitle centered reveal fade-up">
            Real results from real clients — see the Define Me difference
          </p>
        </div>

        {/* Gallery Grid */}
        <div 
          className={`gallery__grid ${gridInView ? 'gallery__grid--visible' : ''}`}
          ref={gridRef}
        >
          {images.map((image, index) => (
            <div 
              key={image.id}
              className={`gallery__item gallery__item--${image.span} reveal scale-up`}
              style={{ transitionDelay: `${index * 0.1}s` }}
              data-cursor-view
            >
              <img 
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="gallery__image"
              />
              <div className="gallery__overlay">
                <span className="gallery__category">{image.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
