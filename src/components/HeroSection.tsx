import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="w-full bg-gray-950 py-16 md:py-32">
      <div className="container mx-auto">
        <div className="flex gap-6 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-7xl max-w-3xl tracking-tighter text-center font-bold"
            >
              <span className="text-white block mb-4">Bernardo Gontijo</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl leading-relaxed tracking-tight text-gray-300 max-w-2xl text-center"
            >
              Site pessoal em construção.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
