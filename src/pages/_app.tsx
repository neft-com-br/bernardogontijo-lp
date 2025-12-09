import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../index.css'; // Adjust this path if your CSS is located elsewhere

function MyApp({ Component, pageProps }: AppProps) {
  // Efeito para rolar para o topo ao carregar a página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
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
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-dark-text flex flex-col">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Bernardo Gontijo</title>
      </Head>
      <Header />
      <main className="flex-grow pt-18">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
