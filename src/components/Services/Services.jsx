import useInView from '../../hooks/useInView';
import './Services.css';

/**
 * Services Component
 * Premium service cards grid with hover effects
 */
const Services = () => {
  const [headerRef, headerInView] = useInView({ threshold: 0.2 });
  const [gridRef, gridInView] = useInView({ threshold: 0.1 });

  const services = [
    {
      id: 1,
      title: 'Dermal Fillers',
      description: 'Restore volume and contour with precision-placed dermal fillers for a naturally refreshed appearance.',
      icon: (
        <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20 4v32M12 12l8-8 8 8M16 20h8M14 28h12"/>
          <circle cx="20" cy="36" r="2"/>
        </svg>
      )
    },
    {
      id: 2,
      title: 'Anti-Wrinkle Treatment',
      description: 'Smooth fine lines and wrinkles with our advanced anti-wrinkle injections for a youthful glow.',
      icon: (
        <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M8 20c4-8 12-8 12 0s8 8 12 0"/>
          <path d="M8 14c4-6 12-6 12 0s8 6 12 0"/>
          <path d="M8 26c4 6 12 6 12 0s8-6 12 0"/>
        </svg>
      )
    },
    {
      id: 3,
      title: 'Lip Enhancement',
      description: 'Achieve beautifully defined, natural-looking lips tailored to your facial proportions.',
      icon: (
        <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 20c6-6 12-2 16 0s10 6 16 0"/>
          <path d="M4 20c6 6 12 2 16 0s10-6 16 0"/>
          <path d="M20 20v4"/>
        </svg>
      )
    },
    {
      id: 4,
      title: 'Skin Rejuvenation',
      description: 'Revitalize your complexion with advanced skin renewal treatments for radiant, healthy skin.',
      icon: (
        <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="20" cy="20" r="12"/>
          <path d="M20 8v4M20 28v4M8 20h4M28 20h4"/>
          <circle cx="20" cy="20" r="4"/>
        </svg>
      )
    },
    {
      id: 5,
      title: 'Chemical Peels',
      description: 'Reveal fresh, luminous skin with medical-grade chemical peels customized for your skin type.',
      icon: (
        <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 8h16v24c0 2-2 4-4 4H16c-2 0-4-2-4-4V8z"/>
          <path d="M12 18h16"/>
          <path d="M16 4v4M24 4v4"/>
          <circle cx="18" cy="26" r="2"/>
          <circle cx="24" cy="30" r="1.5"/>
        </svg>
      )
    },
    {
      id: 6,
      title: 'Vitamin Injections',
      description: 'Boost your wellness from within with targeted vitamin and nutrient injection therapy.',
      icon: (
        <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20 4l3 6h6l-5 4 2 6-6-4-6 4 2-6-5-4h6z"/>
          <path d="M20 20v16"/>
          <path d="M14 28h12"/>
          <path d="M16 32h8"/>
        </svg>
      )
    },
    {
      id: 7,
      title: 'Microneedling',
      description: 'Stimulate natural collagen production for improved texture, tone, and skin vitality.',
      icon: (
        <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M10 36l6-12M20 36v-14M30 36l-6-12"/>
          <path d="M10 24v-8M20 22v-10M30 24v-8"/>
          <circle cx="10" cy="12" r="3"/>
          <circle cx="20" cy="8" r="3"/>
          <circle cx="30" cy="12" r="3"/>
        </svg>
      )
    },
    {
      id: 8,
      title: 'PRP Therapy',
      description: 'Harness your body\'s own healing power with Platelet-Rich Plasma therapy for ultimate rejuvenation.',
      icon: (
        <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20 4c-8 8-12 14-12 20 0 6.627 5.373 12 12 12s12-5.373 12-12c0-6-4-12-12-20z"/>
          <path d="M20 12v8"/>
          <path d="M16 16h8"/>
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="services section-padding">
      <div className="services__container container">
        {/* Header */}
        <div 
          className={`services__header ${headerInView ? 'services__header--visible' : ''}`}
          ref={headerRef}
        >
          <span className="section-label centered reveal fade-up">Our Treatments</span>
          <h2 className="section-heading reveal fade-up" style={{ textAlign: 'center' }}>
            Aesthetic Services
          </h2>
          <p className="section-subtitle centered reveal fade-up">
            Expertly administered treatments designed to enhance your natural beauty
          </p>
        </div>

        {/* Services Grid */}
        <div 
          className={`services__grid stagger-children ${gridInView ? 'services__grid--visible' : ''}`}
          ref={gridRef}
        >
          {services.map((service, index) => (
            <article 
              key={service.id}
              className="services__card reveal fade-up"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <span className="services__card-number">
                {String(service.id).padStart(2, '0')}
              </span>
              <div className="services__card-icon">
                {service.icon}
              </div>
              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-description">{service.description}</p>
              <span className="services__card-link">
                Learn More
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
              <div className="services__card-border"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
