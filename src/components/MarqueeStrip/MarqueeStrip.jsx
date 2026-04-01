import './MarqueeStrip.css';

/**
 * MarqueeStrip Component
 * Infinite horizontal scrolling text strip
 */
const MarqueeStrip = () => {
  const items = [
    'DERMAL FILLERS',
    'LIP ENHANCEMENT',
    'ANTI-WRINKLE',
    'SKIN REJUVENATION',
    'CHEMICAL PEELS',
    'MICRONEEDLING',
    'VITAMIN THERAPY',
    'PRP TREATMENT'
  ];

  // Duplicate items for seamless loop
  const marqueeContent = [...items, ...items, ...items, ...items];

  return (
    <section className="marquee-strip" aria-hidden="true">
      <div className="marquee-strip__track">
        <div className="marquee-strip__content">
          {marqueeContent.map((item, index) => (
            <span key={index} className="marquee-strip__item">
              <span className="marquee-strip__text">{item}</span>
              <span className="marquee-strip__diamond">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeStrip;
