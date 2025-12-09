import React from 'react';
import { motion } from 'framer-motion';
import { TestimonialsSection } from './blocks/testimonials-with-marquee';

const CaseStudies = () => {
  const testimonials = [
    {
      author: {
        name: "Companhia Riograndense de Saneamento",
        handle: "Atendimento ao cidadão com videochamada",
        avatar: "https://videochamada.com.br/images/corsan_logo.avif"
      },
      text: "A videochamada recebeu destaque nacional no Prêmio Nacional da Qualidade em Saneamento (PNQS). “O case da videochamada foi classificado como prática inovadora em gestão do saneamento pela Associação Brasileira de Engenharia Sanitária e Ambiental (Abes), e fomos selecionados para apresentar o projeto no Seminário anual do PNQS, que ocorreu no final de 2022. Além dos feedbacks positivos dos usuários, esse tipo de reconhecimento nos dá confiança para continuarmos a buscar soluções que melhorem ainda mais a experiência dos nossos clientes.”",
    },
    {
      author: {
        name: "Psicomanager",
        handle: "Sistema para psicólogos",
        avatar: "https://videochamada.com.br/images/psico_demo.png"
      },
      text: "O Psicomanager utiliza nossa tecnologia de videochamadas para disponibilizar aos seus assinantes uma sala virtual segura, integrada ao seu sistema de gestão para psicólogos, assegurando profissionalismo e comodidade para os pacientes.",
    },
    {
      author: {
        name: "Cadclin",
        handle: "Sistema para clínicas médicas",
        avatar: "https://videochamada.com.br/images/cadclin_demo.png"
      },
      text: "Há mais de 35 anos fornecendo soluções para clínicas médicas, o Cadclin adotou a solução de videochamadas para integrá-la ao seu sistema, possibilitando que os médicos atendam seus pacientes com total segurança.",
    },
    // {
    //   author: {
    //     name: "Terapia Interativa",
    //     handle: "Plataforma Terapêutica",
    //     avatar: "https://videochamada.com.br/images/terapia_demo.svg"
    //   },
    //   text: "Utilizando a tecnologia de videochamadas, a Terapia Interativa oferece uma plataforma com jogos digitais e recursos terapêuticos interativos nos atendimentos on-line.",
    // },
    {
      author: {
        name: "Fábrica de Provas",
        handle: "Monitoramento de Exames",
        avatar: "https://videochamada.com.br/images/fabrica_demo.png"
      },
      text: "Nossa empresa desenvolveu uma ferramenta de proctoring avançada, desenhada para integrar-se perfeitamente com a plataforma da Fábrica de Provas. Esta solução inovadora permite que os aplicadores monitorem os alunos em tempo real durante as provas, utilizando tecnologia de ponta para detectar e prevenir tentativas de fraude.",
    }
  ];

  return (
    <section className="py-16 bg-gray-950">
      <motion.div 
        className="text-center mb-8 px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Cases de sucesso</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Conheça como nossos clientes estão utilizando nossas tecnologias.
        </p>
      </motion.div>

      <div className="w-full">
        <TestimonialsSection
          title=""
          description=""
          testimonials={testimonials}
          className="bg-transparent py-0 w-full"
        />
      </div>

      <motion.div 
        className="mt-8 text-center px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
      </motion.div>
    </section>
  );
};

export default CaseStudies;