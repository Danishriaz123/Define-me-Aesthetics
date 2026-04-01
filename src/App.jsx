/* ══════════════════════════════════════════════════════════════════════════
   DEFINE ME AESTHETICS - Premium Aesthetics Clinic Landing Page
   ══════════════════════════════════════════════════════════════════════════ */

import React, { useState, useEffect } from 'react';
import './App.css';

// Components
import Preloader from './components/Preloader/Preloader';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import MarqueeStrip from './components/MarqueeStrip/MarqueeStrip';
import About from './components/About/About';
import Services from './components/Services/Services';
import StatsCounter from './components/StatsCounter/StatsCounter';
import Gallery from './components/Gallery/Gallery';
import BeforeAfter from './components/BeforeAfter/BeforeAfter';
import Testimonials from './components/Testimonials/Testimonials';
import Process from './components/Process/Process';
import BookingCTA from './components/BookingCTA/BookingCTA';
import FAQ from './components/FAQ/FAQ';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Handle preloader completion
  const handlePreloaderComplete = () => {
    setIsLoading(false);
    document.body.style.overflow = '';
  };

  // Lock scroll during preloader
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    }
  }, [isLoading]);

  return (
    <div className={`app ${isLoading ? 'app--loading' : ''}`}>
      {/* Preloader */}
      <Preloader onComplete={handlePreloaderComplete} />

      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="app__main">
        <Hero />
        <MarqueeStrip />
        <About />
        <Services />
        <StatsCounter />
        <Gallery />
        <BeforeAfter />
        <Testimonials />
        <Process />
        <BookingCTA />
        <FAQ />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}