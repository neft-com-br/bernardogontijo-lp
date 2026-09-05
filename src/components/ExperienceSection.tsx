import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Users, GraduationCap } from 'lucide-react';

const ExperienceSection = () => {
  const activities = [
    {
      icon: <Rocket className="w-5 h-5" />,
      title: 'Neft.com.br',
      subtitle: 'Fundador & CEO',
      description:
        'Lidero uma empresa de tecnologia focada em comunicação em tempo real e IA aplicada. Desenvolvemos APIs de videochamada e produtos como o DayAndNight.ai para os mercados brasileiro e internacional.',
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: 'CDL Jovem BH',
      subtitle: 'VP de Capacitação (2025–2026)',
      description:
        'Coordeno a área de capacitação da CDL Jovem BH, desenvolvendo programas para fortalecer o empreendedorismo jovem em Belo Horizonte.',
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: 'Formação',
      subtitle: 'Eng. Mecânica + MBA IBMEC',
      description:
        'Base em engenharia pela formação técnica, complementada por visão de negócios pelo MBA. Antes de empreender, passei por startups e pela Embraer.',
    },
  ];

  return (
    <section id="experiencia" className="py-28 md:py-36 bg-noir-surface">
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
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-gold">
              Trajetória
            </span>
            <div className="flex-1 h-px bg-noir-border" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-light text-cream">
            O que faço hoje
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl border border-noir-border hover:border-gold/30 bg-noir-card/40 p-8 transition-all duration-500"
            >
              <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center text-gold mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                {activity.icon}
              </div>

              <h3 className="font-display text-2xl font-medium text-cream mb-1">
                {activity.title}
              </h3>
              <p className="font-mono text-[11px] tracking-wider uppercase text-gold mb-5">
                {activity.subtitle}
              </p>
              <p className="font-body text-sm text-cream-muted leading-relaxed">
                {activity.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
