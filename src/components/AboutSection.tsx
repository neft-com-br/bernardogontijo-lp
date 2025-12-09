import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Code, Rocket } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Formacao",
      description: "Engenharia Mecanica + MBA pelo IBMEC"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Experiencia",
      description: "Startups, Embraer e empreendedorismo"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Especialidade",
      description: "WebRTC e comunicacao em tempo real"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Fundador",
      description: "Neft.com.br desde 2019"
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Sobre Mim</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <p className="text-lg text-gray-300 mb-6">
              Especialista em tecnologias de comunicacao em tempo real, fundei a <strong className="text-primary">Neft.com.br</strong> em 2019,
              empresa responsavel pela videochamada.com.br e video-call.us.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              Com uma solida trajetoria profissional, tive passagens em startups inovadoras e empresas
              tradicionais, incluindo uma posicao como engenheiro na <strong className="text-white">Embraer</strong>.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              Formado em Engenharia Mecanica e com MBA pelo IBMEC, combino conhecimento tecnico
              e visao de negocios para desenvolver solucoes que realmente atendem as necessidades do mercado.
            </p>
            <p className="text-lg text-gray-300">
              Minha missao e democratizar o acesso a APIs de videochamadas profissionais, oferecendo
              solucoes com suporte local no Brasil e precos acessiveis.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
