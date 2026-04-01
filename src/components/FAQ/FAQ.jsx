/* ══════════════════════════════════════════════════════════════════════════
   FAQ SECTION - Accordion Style
   ══════════════════════════════════════════════════════════════════════════ */

import React, { useState, memo } from 'react';
import useInView from '../../hooks/useInView';
import './FAQ.css';

const faqs = [
  {
    id: 1,
    question: "Is the consultation really free?",
    answer: "Absolutely. We offer a complimentary, no-obligation consultation where we discuss your goals, assess your suitability, and create a tailored treatment plan — all at no cost."
  },
  {
    id: 2,
    question: "Are the treatments painful?",
    answer: "Most treatments involve minimal discomfort. We use premium topical anaesthetics and the finest-gauge needles to ensure your comfort throughout. Many clients describe the sensation as a slight pinch."
  },
  {
    id: 3,
    question: "How long do results last?",
    answer: "Results vary by treatment. Dermal fillers typically last 6-18 months, anti-wrinkle treatments 3-4 months, and skin treatments show progressive improvement. We'll discuss expected longevity during your consultation."
  },
  {
    id: 4,
    question: "What products do you use?",
    answer: "We exclusively use premium, CE-marked, medical-grade products from leading pharmaceutical brands. Your safety and results are our top priorities."
  },
  {
    id: 5,
    question: "Is there any downtime?",
    answer: "Most of our treatments have minimal to no downtime. You may experience slight redness or swelling, which typically subsides within 24-48 hours. We provide comprehensive aftercare guidance."
  },
  {
    id: 6,
    question: "Are your practitioners qualified?",
    answer: "All our practitioners are fully qualified, insured, and hold relevant medical certifications. They undergo continuous professional development to stay at the forefront of aesthetic medicine."
  }
];

const FAQItem = memo(({ faq, isOpen, onToggle }) => (
  <div className={`faq__item ${isOpen ? 'faq__item--open' : ''}`}>
    <button
      className="faq__question"
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-controls={`faq-answer-${faq.id}`}
    >
      <span className="faq__question-text">{faq.question}</span>
      <span className="faq__icon" aria-hidden="true" />
    </button>
    <div 
      id={`faq-answer-${faq.id}`}
      className="faq__answer-wrapper"
      role="region"
      aria-labelledby={`faq-question-${faq.id}`}
    >
      <p className="faq__answer">{faq.answer}</p>
    </div>
  </div>
));

FAQItem.displayName = 'FAQItem';

const FAQ = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section className="faq" ref={ref}>
      <div className="faq__container">
        {/* Header */}
        <header className={`faq__header reveal fade-up ${isInView ? 'is-visible' : ''}`}>
          <span className="faq__label">FAQ</span>
          <h2 className="faq__title">Frequently Asked Questions</h2>
        </header>

        {/* Accordion */}
        <div className={`faq__list reveal fade-up ${isInView ? 'is-visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
          {faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => toggleFAQ(faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(FAQ);
