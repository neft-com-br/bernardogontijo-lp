import React, { useEffect, useRef } from 'react';
import { Clock, Server, Palette, Video, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const elements = entries[0].target.querySelectorAll('.step-item');
          elements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('animated');
            }, index * 200);
          });
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const steps = [
    {
      icon: <Clock className="w-10 h-10 text-white" />,
      title: "Criação de Conta Grátis",
      description: "Clique em 'Crie Minha Conta' e use 2.000 minutos sem custo."
    },
    {
      icon: <Server className="w-10 h-10 text-white" />,
      title: "Integração Fácil",
      description: "Conecte via Zapier/Make ou API com exemplos práticos."
    },
    {
      icon: <Palette className="w-10 h-10 text-white" />,
      title: "Personalize",
      description: "Adapte à sua marca com recursos como chat e gravação."
    },
    {
      icon: <Video className="w-10 h-10 text-white" />,
      title: "Ofereça Qualidade",
      description: "Até 4 participantes com pré-checagem de hardware."
    },
    {
      icon: <DollarSign className="w-10 h-10 text-white" />,
      title: "Pague Pelo Uso",
      description: "R$ 0,015/minuto após os grátis, sem surpresas."
    }
  ];

  return (
    <section className="py-24 bg-gray-950" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Como funciona?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Implementar videochamadas profissionais nunca foi tão simples.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary/20 transform -translate-x-1/2"></div>
          
          <div className="space-y-8 md:space-y-2">
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                className="relative step-item opacity-0 translate-y-8" 
                style={{ transition: 'all 0.6s ease-out' }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-primary rounded-full p-4 shadow-lg">
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <div className="bg-gray-900/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover-scale">
                      <div className="md:hidden flex items-center mb-4">
                        <div className="bg-primary rounded-full p-3 mr-3">
                          {step.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white">{step.title}</h3>
                      </div>
                      <h3 className="hidden md:block text-2xl font-bold mb-3 text-white">{step.title}</h3>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Empty div for spacing on alternate sides */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <a 
            href="https://app.videochamada.com.br/cadastrar" 
            className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-10 rounded-full inline-block text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
          >
            Teste Agora
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;