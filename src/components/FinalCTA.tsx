import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const FinalCTA = () => {
  const ctaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          entries[0].target.classList.add('animated');
        }
      },
      { threshold: 0.3 }
    );
    
    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }
    
    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);

  return (
    <section className="py-24 relative overflow-hidden bg-gray-950">
      {/* Background gradient - updated to match pricing section */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-blue-600/10 to-blue-800/5 -z-10"></div>
      
      <motion.div 
        className="container mx-auto px-6 text-center relative z-10"
        ref={ctaRef}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
          Crie Sua Conta Agora Mesmo e Comece a Usar!
        </h2>
        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
          2.000 minutos grátis para transformar suas comunicações. 
          Sem cartão de crédito, sem compromissos.
        </p>
        <a 
          href="https://app.videochamada.com.br/cadastrar" 
          className="group bg-primary/90 hover:bg-primary text-white font-bold py-5 px-12 rounded-full inline-flex items-center text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
        >
          Teste Grátis
          <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
        <p className="mt-8 text-blue-200">
          Junte-se a centenas de empresas que já transformaram suas videochamadas.
        </p>
      </motion.div>
    </section>
  );
};

export default FinalCTA;