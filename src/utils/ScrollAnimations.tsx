'use client';

import { useEffect } from 'react';

export const useScrollAnimations = () => {
  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));
    
    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
};

export const useParallaxEffect = (selector: string, factor: number = 0.3) => {
  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    
    const elements = document.querySelectorAll(selector);
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      elements.forEach((element) => {
        const el = element as HTMLElement;
        const translateY = scrollPosition * factor;
        el.style.transform = `translateY(${translateY}px)`;
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selector, factor]);
};