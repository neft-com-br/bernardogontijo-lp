import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

const NeftPromotion = () => {
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Ferramenta para videoatendimento
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Procurando uma ferramenta mais completa para videoatendimento?
          </p>
        </motion.div>
        
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-800/50 hover:border-primary/30 group">
            <div className="prose prose-lg mx-auto text-gray-300">
              <p className="text-lg leading-relaxed">
                Gerencie equipes, receba agendamentos online, personalize horários de atendimento, 
                obtenha relatórios precisos com a realização de atendimentos seguros, eficientes e acessíveis.
              </p>
              
              <div className="mt-8 text-center">
                <div className="inline-flex items-center justify-center p-1 rounded-full bg-gradient-to-r from-primary/80 via-blue-500/80 to-primary/80">
                  <a
                    href="https://neft.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-950 text-white font-bold py-3 px-8 rounded-full inline-flex items-center transition-all duration-300 hover:bg-gray-900"
                  >
                    Conheça a Neft
                    <ExternalLink className="w-5 h-5 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NeftPromotion;
