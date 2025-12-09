import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Video, BarChart3, Globe } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      name: "neft.com.br",
      description: "Empresa de tecnologia focada em solucoes de comunicacao em tempo real. Desenvolve APIs e plataformas de videochamada para o mercado brasileiro e internacional.",
      url: "https://neft.com.br",
      icon: <Globe className="w-8 h-8" />,
      tags: ["Empresa", "WebRTC", "SaaS"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "videochamada.com.br",
      description: "API de videochamadas profissional para desenvolvedores. Solucao brasileira com servidores locais, precos em real e 2.000 minutos gratis por mes.",
      url: "https://videochamada.com.br",
      icon: <Video className="w-8 h-8" />,
      tags: ["API", "Video", "Brasil"],
      color: "from-primary to-orange-500"
    },
    {
      name: "video-call.us",
      description: "Versao internacional da plataforma de videochamadas. API de video para desenvolvedores com infraestrutura global e precos competitivos em dolar.",
      url: "https://video-call.us",
      icon: <Video className="w-8 h-8" />,
      tags: ["API", "Video", "Global"],
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "minhasmetricas.com.br",
      description: "Plataforma de analytics e metricas para negocios. Dashboard intuitivo para acompanhar KPIs e tomar decisoes baseadas em dados.",
      url: "https://minhasmetricas.com.br",
      icon: <BarChart3 className="w-8 h-8" />,
      tags: ["Analytics", "Dashboard", "BI"],
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="produtos" className="py-24 bg-gray-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Produtos</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Produtos e plataformas que desenvolvi para resolver problemas reais de comunicacao e gestao.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-gray-900 rounded-2xl p-8 hover:bg-gray-800 transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`}></div>

              <div className="relative">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-white mb-6`}>
                  {project.icon}
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-primary transition-colors" />
                </div>

                <p className="text-gray-400 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full"
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
