import React from 'react';
import Head from 'next/head';
import HeroSection from '../components/HeroSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-dark-text flex flex-col">
      <Head>
        <title>Bernardo Gontijo | Site Pessoal</title>
        <meta name="description" content="Site pessoal de Bernardo Gontijo." />
        <link rel="canonical" href="https://bernardogontijo.com/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bernardogontijo.com/" />
        <meta property="og:title" content="Bernardo Gontijo | Site Pessoal" />
        <meta property="og:description" content="Site pessoal de Bernardo Gontijo." />
        <meta property="og:image" content="https://bernardogontijo.com/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://bernardogontijo.com/" />
        <meta name="twitter:title" content="Bernardo Gontijo | Site Pessoal" />
        <meta name="twitter:description" content="Site pessoal de Bernardo Gontijo." />
        <meta name="twitter:image" content="https://bernardogontijo.com/og-image.png" />
      </Head>
      <main className="flex-grow pt-18">
        <HeroSection />
      </main>
    </div>
  );
}
