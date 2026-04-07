import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Github, Twitter } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="w-full bg-noir-deep min-h-screen flex items-center relative overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20">
          {/* Text */}
          <div className="lg:w-3/5 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-mono text-[11px] tracking-[0.3em] uppercase text-gold mb-8"
            >
              Empreendedor &middot; Engenheiro de Software
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-cream leading-[0.9] mb-8"
            >
              Bernardo
              <br />
              <span className="italic font-normal text-gold">Gontijo</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="font-body text-lg text-cream-muted max-w-lg mb-10 mx-auto lg:mx-0 leading-relaxed"
            >
              Fundador da Neft.com.br e Vix.so. Especialista em tecnologias de comunicação em tempo real e soluções WebRTC.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
            >
              <a
                href="#contato"
                className="bg-gold hover:bg-gold-hover text-noir-deep font-body font-semibold text-sm py-3.5 px-8 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,160,76,0.25)]"
              >
                Vamos Conversar
              </a>
              <a
                href="#produtos"
                className="border border-noir-border-hover hover:border-gold/40 text-cream font-body text-sm py-3.5 px-8 rounded-full transition-all duration-300 hover:text-gold"
              >
                Ver Produtos
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex gap-5 justify-center lg:justify-start"
            >
              {[
                { icon: Linkedin, href: 'https://www.linkedin.com/in/bernardo-gontijo/', label: 'LinkedIn' },
                { icon: Github, href: 'https://github.com/bernardogontijo', label: 'GitHub' },
                { icon: Twitter, href: 'https://x.com/rtcbernardo', label: 'X' },
                { icon: Mail, href: 'mailto:bernardo@neft.com.br', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="w-11 h-11 rounded-full border border-noir-border hover:border-gold/50 flex items-center justify-center text-cream-muted hover:text-gold transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-2/5 flex justify-center"
          >
            <div className="relative">
              {/* Gold corner accent */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-gold/40 rounded-tl-2xl" />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-gold/40 rounded-br-2xl" />
              <img
                src="/images/IMG_4274.jpeg"
                alt="Bernardo Gontijo"
                className="w-72 md:w-80 lg:w-[340px] h-auto object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[1px] h-10 bg-gradient-to-b from-gold/60 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
