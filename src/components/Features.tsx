import React, { useEffect, useRef } from 'react';
import { DollarSign, Flag, Zap, Palette, Shield, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animated');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }
    
    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: <DollarSign className="w-10 h-10 text-primary" />,
      title: "Preços Justos",
      description: "2.000 minutos grátis/mês, depois R$ 0,015/minuto, sem contratos ou assinaturas obrigatórias."
    },
    {
      icon: <Flag className="w-10 h-10 text-primary" />,
      title: "Tecnologia Brasileira",
      description: "WebRTC próprio, servidores no Brasil, suporte em português via WhatsApp."
    },
    {
      icon: <Zap className="w-10 h-10 text-primary" />,
      title: "Integração Flexível",
      description: "API simples ou integração no-code com Zapier/Make para implementação rápida."
    },
    {
      icon: <Palette className="w-10 h-10 text-primary" />,
      title: "Personalização Whitelabel",
      description: "Cores, logos e recursos sob medida para manter a identidade da sua marca."
    },
    {
      icon: <Shield className="w-10 h-10 text-primary" />,
      title: "Segurança de Alto Nível",
      description: "Criptografia AES-256, conformidade com LGPD, HIPAA, ISO e GDPR."
    },
    {
      icon: <Search className="w-10 h-10 text-primary" />,
      title: "Transparência Total",
      description: "Saiba exatamente quem acessou cada link, quando entrou e por quanto tempo ficou. Histórico completo e exportável de todas as chamadas."
    }
  ];

  return (
    <section id="features" className="py-24 bg-gray-950" ref={featuresRef}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-20 animate-on-scroll"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Por que escolher a nossa ferramenta?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nossa plataforma é projetada especificamente para atender seus clientes por videochamada, 
            oferecendo uma solução completa e personalizada que vai além das ferramentas genéricas de videoconferência.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-900/50 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-on-scroll hover-scale"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="mb-6 bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center animate-on-scroll"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="text-gray-300 mb-6">
            <span className="font-semibold">Importante:</span> Suporte para até 4 participantes por chamada, ideal para atendimentos empresa-cliente.
          </p>
          <a 
            href="https://app.videochamada.com.br/cadastrar" 
            className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors"
          >
            Comece agora com 2.000 minutos grátis
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;