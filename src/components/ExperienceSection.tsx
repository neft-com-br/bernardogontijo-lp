import React from 'react';
import { motion } from 'framer-motion';

const ExperienceSection = () => {
  const experiences = [
    {
      period: "2019 - Presente",
      role: "Fundador & CEO",
      company: "Neft.com.br",
      description: "Fundacao e lideranca da empresa de tecnologia focada em solucoes de comunicacao em tempo real. Desenvolvimento de APIs de videochamada para os mercados brasileiro (videochamada.com.br) e internacional (video-call.us).",
      highlights: ["WebRTC", "APIs REST", "SaaS", "B2B"]
    },
    {
      period: "2015 - 2019",
      role: "Engenheiro de Software",
      company: "Startups de Tecnologia",
      description: "Atuacao em diversas startups inovadoras, desenvolvendo solucoes de software e participando de projetos de alto impacto em diferentes setores.",
      highlights: ["Full-stack", "Node.js", "React", "AWS"]
    },
    {
      period: "2012 - 2015",
      role: "Engenheiro",
      company: "Embraer",
      description: "Posicao como engenheiro em uma das maiores empresas aeroespaciais do mundo, trabalhando em projetos de alta complexidade e precisao.",
      highlights: ["Engenharia", "Processos", "Qualidade"]
    }
  ];

  return (
    <section id="experiencia" className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experiencia Profissional</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Uma trajetoria que combina engenharia, tecnologia e empreendedorismo.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-[11px] top-8 bottom-0 w-0.5 bg-gray-700"></div>
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 ml-4 hover:bg-gray-750 transition-colors">
                <span className="text-primary text-sm font-medium">{exp.period}</span>
                <h3 className="text-xl font-bold text-white mt-2">{exp.role}</h3>
                <p className="text-gray-400 font-medium mb-3">{exp.company}</p>
                <p className="text-gray-300 mb-4">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((highlight, hIndex) => (
                    <span
                      key={hIndex}
                      className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
