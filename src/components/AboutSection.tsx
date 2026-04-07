import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Code, Rocket } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: <Rocket className="w-5 h-5" />,
      title: 'Fundador',
      detail: 'Neft.com.br desde 2019',
    },
    {
      icon: <Code className="w-5 h-5" />,
      title: 'Especialidade',
      detail: 'WebRTC & tempo real',
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: 'Formação',
      detail: 'Eng. Mecânica + MBA IBMEC',
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: 'Trajetória',
      detail: 'Startups, Embraer, SaaS',
    },
  ];

  return (
    <section id="sobre" className="py-28 md:py-36 bg-noir-surface">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-3">
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-gold">Sobre</span>
            <div className="flex-1 h-px bg-noir-border" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-light text-cream">
            Quem sou eu
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">
          {/* Bio text - 3 cols */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-6"
          >
            <p className="text-lg text-cream/80 leading-relaxed">
              Especialista em tecnologias de comunicação em tempo real, fundei a{' '}
              <strong className="text-gold font-medium">Neft.com.br</strong> em 2019 —
              empresa por trás da videochamada.com.br e da{' '}
              <strong className="text-gold font-medium">Vix.so</strong>.
            </p>
            <p className="text-lg text-cream/80 leading-relaxed">
              Com passagens em startups e na <strong className="text-cream font-medium">Embraer</strong>,
              combino formação em engenharia com visão de negócios para criar soluções que resolvem
              problemas reais de comunicação.
            </p>
            <p className="text-lg text-cream/80 leading-relaxed">
              Formado em Engenharia Mecânica e com MBA pelo IBMEC, minha missão é democratizar
              o acesso a ferramentas profissionais de vídeo, com infraestrutura local e preços acessíveis.
            </p>
          </motion.div>

          {/* Highlights - 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            {highlights.map((item, i) => (
              <div
                key={i}
                className="group flex items-start gap-4 p-5 rounded-xl border border-noir-border hover:border-gold/30 bg-noir-card/50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-body text-sm font-semibold text-cream mb-0.5">{item.title}</h3>
                  <p className="font-body text-sm text-cream-muted">{item.detail}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
