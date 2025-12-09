"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Video,
  MessageSquare,
  Share2,
  Palette,
  FileText,
  BrainCircuit,
  Laptop,
  Shield,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

const KeyFeatures = () => {
  // Features with dedicated pages
  const featuresWithPages = [
    {
      icon: <Video className="w-10 h-10 text-primary" />,
      title: "Gravação de chamadas",
      description: "Grave suas videochamadas com um clique e armazene-as com segurança para referência futura.",
      link: "/funcionalidades/gravacao"
    },
    {
      icon: <FileText className="w-10 h-10 text-primary" />,
      title: "Transcrição com IA",
      description: "Converta automaticamente o áudio das suas chamadas em texto pesquisável com nossa tecnologia de IA.",
      link: "/funcionalidades/transcricao"
    },
    {
      icon: <BrainCircuit className="w-10 h-10 text-primary" />,
      title: "Resumo inteligente",
      description: "Obtenha resumos concisos das suas reuniões gerados por IA, destacando os pontos principais.",
      link: "/funcionalidades/resumo-inteligente"
    },
    {
      icon: <Shield className="w-10 h-10 text-primary" />,
      title: "Segurança avançada",
      description: "Proteja suas comunicações com criptografia de ponta a ponta e conformidade com LGPD e HIPAA.",
      link: "/funcionalidades/seguranca-avancada"
    }
  ];

  // Features without dedicated pages
  const additionalFeatures = [
    {
      icon: <MessageSquare className="w-10 h-10 text-primary" />,
      title: "Chat integrado",
      description: "Comunique-se por texto durante as chamadas com nosso chat integrado, com histórico completo."
    },
    {
      icon: <Laptop className="w-10 h-10 text-primary" />,
      title: "Pré-checagem de hardware",
      description: "Verifique câmera, microfone e conexão antes de iniciar a chamada para garantir qualidade."
    },
    {
      icon: <Palette className="w-10 h-10 text-primary" />,
      title: "Personalização completa",
      description: "Adapte a interface com as cores, logo e elementos da sua marca para uma experiência whitelabel."
    },
    {
      icon: <Share2 className="w-10 h-10 text-primary" />,
      title: "Compartilhamento de tela",
      description: "Compartilhe sua tela ou aplicativos específicos durante as chamadas para colaboração eficiente."
    }
  ];

  return (
    <section className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent -z-10"></div>
      
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Recursos poderosos</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nossa plataforma oferece uma ampla gama de funcionalidades projetadas para tornar suas videochamadas 
            mais produtivas, profissionais e personalizadas.
          </p>
        </motion.div>

        {/* Features with dedicated pages - displayed as cards with links */}
        <div className="mb-16">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {featuresWithPages.map((feature, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-800/50 hover:border-primary/30 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Link href={feature.link} className="flex items-start gap-4">
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{feature.title}</h3>
                      <ExternalLink className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-gray-300">{feature.description}</p>
                    <div className="mt-3 text-primary font-medium flex items-center group-hover:translate-x-1 transition-transform">
                      Saiba mais <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional features - displayed as a list */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">Recursos adicionais</h3>
        </motion.div>
        <div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 max-w-5xl mx-auto">
            {additionalFeatures.map((feature, index) => (
              <motion.div 
                key={index} 
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-900/30 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1 text-white">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="inline-flex items-center justify-center p-1 rounded-full bg-gradient-to-r from-primary/80 via-blue-500/80 to-primary/80">
            <a
              href="https://documentacao.videochamada.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-950 text-white font-bold py-3 px-8 rounded-full inline-flex items-center transition-all duration-300 hover:bg-gray-900"
            >
              Explorar Documentação Completa
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default KeyFeatures;