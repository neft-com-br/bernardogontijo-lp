import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Globe, Video, MonitorPlay } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      name: 'neft.com.br',
      description:
        'Empresa de tecnologia focada em soluções de comunicação em tempo real. APIs e plataformas de videochamada para o mercado brasileiro e internacional.',
      url: 'https://neft.com.br',
      icon: <Globe className="w-6 h-6" />,
      tags: ['Empresa', 'WebRTC', 'SaaS'],
    },
    {
      name: 'videochamada.com.br',
      description:
        'API de videochamadas profissional para desenvolvedores. Servidores locais no Brasil, preços em real e 2.000 minutos grátis por mês.',
      url: 'https://videochamada.com.br',
      icon: <Video className="w-6 h-6" />,
      tags: ['API', 'Video', 'Brasil'],
    },
    {
      name: 'vix.so',
      description:
        'Plataforma SaaS de video experience para empresas. Agendamento, videochamadas, gravação e resumos inteligentes em uma solução completa.',
      url: 'https://vix.so',
      icon: <MonitorPlay className="w-6 h-6" />,
      tags: ['SaaS', 'Video', 'Experience'],
    },
  ];

  return (
    <section id="produtos" className="py-28 md:py-36 bg-noir-deep">
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
              Produtos
            </span>
            <div className="flex-1 h-px bg-noir-border" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-light text-cream">
            O que construí
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl border border-noir-border hover:border-gold/40 bg-noir-card/40 p-8 transition-all duration-500 hover:bg-noir-card"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gold/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold mb-7 group-hover:bg-gold/20 transition-colors duration-300">
                  {project.icon}
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <h3 className="font-display text-2xl font-medium text-cream group-hover:text-gold transition-colors duration-300">
                    {project.name}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-cream-faint group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>

                <p className="font-body text-sm text-cream-muted mb-7 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="font-mono text-[10px] tracking-wider uppercase px-3 py-1.5 border border-noir-border rounded-full text-cream-muted group-hover:border-gold/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
