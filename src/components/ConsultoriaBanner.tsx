import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ConsultoriaBanner = () => {
  return (
    <section id="consultoria" className="py-24 md:py-28 bg-noir-deep">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-gold/25 bg-noir-card p-10 md:p-14"
        >
          <div className="absolute -top-24 -right-16 w-[500px] h-[400px] bg-gold/[0.05] rounded-full blur-[120px] pointer-events-none" />
          <div className="relative flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-5">
                <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-gold">Novo · Consultoria de IA</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-light text-cream mb-4 leading-tight">
                Instalo IA que roda o negócio — <span className="italic text-gold">a mesma que roda os meus.</span>
              </h2>
              <p className="font-body text-lg text-cream-muted max-w-2xl leading-relaxed">
                Rodo vários produtos de software com IA como time de engenharia. Ajudo founders e executivos a
                colocar os primeiros processos de IA em produção — construídos com você, em 90 dias.
              </p>
            </div>
            <a
              href="/consultoria/"
              className="group shrink-0 bg-gold hover:bg-gold-hover text-noir-deep font-body font-semibold text-sm py-3.5 px-8 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,160,76,0.25)] inline-flex items-center gap-2"
            >
              Conhecer a consultoria
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultoriaBanner;
