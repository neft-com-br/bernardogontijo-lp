import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import CaseStudies from './components/CaseStudies';
import KeyFeatures from './components/KeyFeatures';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Integrations from './components/Integrations';
import FAQ from './components/FAQ';
import NeftPromotion from './components/NeftPromotion';
import FinalCTA from './components/FinalCTA';

function App() {
  // Efeito para rolar para o topo ao carregar a página
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    // Only run in browser environment
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      // Intersection Observer for scroll animations
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animated');
            }
          });
        },
        { threshold: 0.1 }
      );
      
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach((el) => observer.observe(el));

      return () => {
        animatedElements.forEach((el) => observer.unobserve(el));
      };
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-dark-text flex flex-col">
      <Header />
      <main className="flex-grow pt-18">
        <HeroSection />
        <Features />
        <CaseStudies />
        <KeyFeatures />
        <HowItWorks />
        <Pricing />
        <Integrations />
        <FAQ />
        <NeftPromotion />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;