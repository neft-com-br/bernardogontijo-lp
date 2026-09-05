import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Globe, Video, Sparkles, Stethoscope, Sprout } from 'lucide-react';

const ProjectsSection = () => {
  const featured = {
    name: 'dayandnight.ai',
    tagline: 'Atendimento com IA que resolve sozinho',
    description:
      'Agentes de IA que atendem por WhatsApp, chat, voz e e-mail — resolvem sozinhos, com respostas verificadas na base da empresa e trilha de auditoria completa. Disponível 24/7, por cerca de um terço do custo de um time humano.',
    url: 'https://dayandnight.ai',
    icon: <Sparkles className="w-7 h-7" />,
    tags: ['IA', 'Atendimento', 'SaaS'],
  };

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
      tags: ['API', 'Vídeo', 'Brasil'],
    },
    {
      name: 'olasus.com.br',
      description:
        'Comunicação com o cidadão para a saúde pública. Confirmação e lembrete de consultas do SUS por WhatsApp, reduzindo faltas nas unidades de saúde municipais.',
      url: 'https://olasus.com.br',
      icon: <Stethoscope className="w-6 h-6" />,
      tags: ['Saúde', 'SUS', 'WhatsApp'],
    },
    {
      name: 'qualminhaorigem.com.br',
      description:
        'Rastreabilidade da lavoura à mesa. Transparência da origem dos alimentos, conectando produtor e consumidor ao longo de toda a cadeia.',
      url: 'https://qualminhaorigem.com.br',
      icon: <Sprout className="w-6 h-6" />,
      tags: ['Rastreabilidade', 'Agro', 'QR'],
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

        {/* Featured product — DayAndNight.ai */}
        <motion.a
          href={featured.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="group relative block rounded-2xl border border-gold/30 hover:border-gold/60 bg-noir-card/60 p-8 md:p-10 mb-6 overflow-hidden transition-all duration-500 hover:bg-noir-card"
        >
          {/* Glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-gold/[0.06] rounded-full blur-[100px] pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-70" />

          <div className="relative flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-14 h-14 rounded-xl bg-gold/15 flex items-center justify-center text-gold group-hover:bg-gold/25 transition-colors duration-300">
                  {featured.icon}
                </div>
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase px-3 py-1.5 border border-gold/30 rounded-full text-gold">
                  Destaque
                </span>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-display text-3xl md:text-4xl font-medium text-cream group-hover:text-gold transition-colors duration-300">
                  {featured.name}
                </h3>
                <ArrowUpRight className="w-5 h-5 text-cream-faint group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </div>

              <p className="font-body text-base text-gold/90 mb-4">{featured.tagline}</p>

              <p className="font-body text-sm md:text-base text-cream-muted mb-6 leading-relaxed max-w-2xl">
                {featured.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {featured.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="font-mono text-[10px] tracking-wider uppercase px-3 py-1.5 border border-gold/20 rounded-full text-cream-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.a>

        {/* Other products */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
