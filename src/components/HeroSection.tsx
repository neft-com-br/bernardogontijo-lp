import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Linkedin, Mail, Github } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="w-full bg-gray-950 min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 text-center md:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-primary text-lg mb-4"
            >
              Empreendedor & Engenheiro de Software
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              Bernardo Gontijo
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8 max-w-lg"
            >
              Fundador da Neft.com.br, Videochamada.com.br, Video-call.us e Minhasmetricas.com.br. Especialista em tecnologias de comunicação em tempo real e soluções WebRTC.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <a
                href="#contato"
                className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
              >
                Vamos Conversar
              </a>
              <a
                href="#projetos"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 font-bold py-4 px-8 rounded-full transition-all duration-300"
              >
                Ver Projetos
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-4 mt-8 justify-center md:justify-start"
            >
              <a
                href="https://www.linkedin.com/in/bernardo-gontijo/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-800 hover:bg-[#0A66C2] flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://github.com/bernardogontijo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
              <a
                href="mailto:bernardo@neft.com.br"
                className="w-12 h-12 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Mail className="w-5 h-5 text-white" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-primary/10 rounded-full blur-xl opacity-50"></div>
              <img
                src="/images/IMG_4274.jpeg"
                alt="Bernardo Gontijo"
                className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-full shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#sobre"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-primary transition-colors cursor-pointer"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-8 h-8" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default HeroSection;
