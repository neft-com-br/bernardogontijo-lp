import React, { useState, useEffect, useRef } from 'react';
import { Check, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Pricing = () => {
  const pricingRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const elements = entries[0].target.querySelectorAll('.animate-on-scroll');
          elements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('animated');
            }, index * 100);
          });
        }
      },
      { threshold: 0.1 }
    );
    
    if (pricingRef.current) {
      observer.observe(pricingRef.current);
    }
    
    return () => {
      if (pricingRef.current) {
        observer.unobserve(pricingRef.current);
      }
    };
  }, []);

  const freeFeatures = [
    "2.000 minutos grátis por mês",
    "Pré-checagem de hardware",
    "Até 4 participantes por chamada",
    "Integração Zapier/Make/API",
    "Personalização whitelabel"
  ];

  const paidFeatures = [
    "Todos os recursos do plano Free",
    "R$ 0,015/minuto/participante após os grátis",
    "Suporte prioritário",
    "Gerente de contas dedicado"
  ];

  const additionalServices = [
    { name: "Gravação", price: "R$ 0,075/minuto" },
    { name: "Armazenamento", price: "R$ 0,015/minuto" },
    { name: "Transcrição", price: "R$ 0,0225/minuto" },
    { name: "Resumo baseado em prompt", price: "R$ 0,020/minuto" }
  ];

  return (
    <section className="py-24 bg-gray-950" ref={pricingRef}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Conheça nossos planos</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Aqui, você sabe exatamente o que está pagando. Sem assinaturas obrigatórias, sem taxas ocultas.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 mb-16 max-w-5xl mx-auto">
          {/* Free Plan */}
          <motion.div 
            className="lg:w-1/2 bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="bg-primary p-8 text-white relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full"></div>
              <h3 className="text-2xl font-bold mb-2 relative z-10">Free</h3>
              <p className="text-blue-100 relative z-10">Comece sem custos</p>
            </div>
            <div className="p-8">
              <div className="mb-8">
                <p className="text-5xl font-bold mb-2 text-white">2.000 minutos</p>
                <p className="text-gray-300">grátis por mês</p>
              </div>
              <ul className="space-y-4 mb-8">
                {freeFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="https://app.videochamada.com.br/cadastrar" 
                className="group block w-full bg-primary hover:bg-primary/90 text-white text-center font-bold py-4 px-4 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center"
              >
                Teste Grátis
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

          {/* Pay-as-you-go Plan */}
          <motion.div 
            className="lg:w-1/2 bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="bg-blue-400 p-8 text-white relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full"></div>
              <h3 className="text-2xl font-bold mb-2 relative z-10">Pay-as-you-go</h3>
              <p className="text-white/90 relative z-10">Pague apenas pelo que usar</p>
            </div>
            <div className="p-8">
              <div className="mb-8">
                <p className="text-5xl font-bold mb-2 text-white">R$ 0,015</p>
                <p className="text-gray-300">por minuto por participante</p>
              </div>
              <ul className="space-y-4 mb-8">
                {paidFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://api.whatsapp.com/send?phone=5531972156350&text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20plano%20pay-as-you-go" 
                className="group block w-full bg-blue-400 hover:bg-blue-500 text-white text-center font-bold py-4 px-4 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center"
              >
                Saiba Mais
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Additional Services */}
        <motion.div 
          className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden mb-16 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-8 text-white">Recursos adicionais</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service, index) => (
                <div key={index} className="border border-gray-800 rounded-xl p-6 hover:border-primary transition-colors hover-scale">
                  <h4 className="font-bold mb-3 text-white">{service.name}</h4>
                  <p className="text-primary font-semibold">{service.price}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Custom Plans */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-2xl font-bold mb-4 text-white">Precisa de um plano customizado?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Para empresas com necessidades específicas, oferecemos planos personalizados. 
            Entre em contato conosco para discutir suas necessidades.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=5531972156350&text=Olá!%20Gostaria%20de%20conhecer%20melhor%20as%20soluções" 
            className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-10 rounded-full inline-block transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
          >
            Fale Conosco
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;