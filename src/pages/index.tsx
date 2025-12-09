import React from 'react';
import Head from 'next/head';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ExperienceSection from '../components/ExperienceSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-dark-text flex flex-col">
      <Head>
        <title>Bernardo Gontijo | Empreendedor & Engenheiro de Software</title>
        <meta name="description" content="Fundador da Neft.com.br. Especialista em tecnologias de comunicação em tempo real e soluções WebRTC. Criador da videochamada.com.br e video-call.us." />
        <link rel="canonical" href="https://bernardogontijo.com/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bernardogontijo.com/" />
        <meta property="og:title" content="Bernardo Gontijo | Empreendedor & Engenheiro de Software" />
        <meta property="og:description" content="Fundador da Neft.com.br. Especialista em tecnologias de comunicação em tempo real e soluções WebRTC." />
        <meta property="og:image" content="https://bernardogontijo.com/images/IMG_4274.jpeg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://bernardogontijo.com/" />
        <meta name="twitter:title" content="Bernardo Gontijo | Empreendedor & Engenheiro de Software" />
        <meta name="twitter:description" content="Fundador da Neft.com.br. Especialista em tecnologias de comunicação em tempo real e soluções WebRTC." />
        <meta name="twitter:image" content="https://bernardogontijo.com/images/IMG_4274.jpeg" />
      </Head>
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </div>
  );
}
