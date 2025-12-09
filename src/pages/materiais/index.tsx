import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const articles = [
  {
    slug: 'principais-apis-videoconferencia-2026',
    title: 'As Principais APIs de Videoconferência de 2026',
    description: 'Análise comparativa completa das 10 melhores APIs de videochamadas do mercado: Twilio, Agora, Daily, Zoom SDK, Amazon Chime, 100ms, LiveKit, Jitsi, Vonage e Whereby.',
    date: '05 de Dezembro de 2025',
    readTime: '25 min de leitura',
    image: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

const MateriaisIndex = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-dark-text flex flex-col">
      <Head>
        <title>Materiais | videochamada.com.br</title>
        <meta name="description" content="Artigos técnicos sobre APIs de videoconferência, WebRTC, integração de vídeo e as melhores práticas para desenvolvedores." />
        <link rel="canonical" href="https://videochamada.com.br/materiais/" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://videochamada.com.br/materiais/" />
        <meta property="og:title" content="Materiais | videochamada.com.br" />
        <meta property="og:description" content="Artigos técnicos sobre APIs de videoconferência, WebRTC, integração de vídeo e as melhores práticas para desenvolvedores." />
        <meta property="og:image" content="https://videochamada.com.br/og-image.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://videochamada.com.br/materiais/" />
        <meta name="twitter:title" content="Materiais | videochamada.com.br" />
        <meta name="twitter:description" content="Artigos técnicos sobre APIs de videoconferência, WebRTC, integração de vídeo e as melhores práticas para desenvolvedores." />
        <meta name="twitter:image" content="https://videochamada.com.br/og-image.png" />
      </Head>

      <main className="flex-grow pt-18">
        <section className="py-24 bg-gray-950 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-blue-600/5 to-transparent -z-10"></div>

          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Materiais</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Artigos técnicos sobre APIs de videoconferência, WebRTC e as melhores práticas para integrar vídeo em suas aplicações.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {articles.map((article, index) => (
                <motion.article
                  key={article.slug}
                  className="bg-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-gray-800/50 hover:border-primary/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <div className="h-48 md:h-full overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3 p-6 md:p-8">
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {article.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {article.readTime}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold mb-4 text-white hover:text-primary transition-colors">
                        <Link href={`/materiais/${article.slug}`}>
                          {article.title}
                        </Link>
                      </h2>
                      <p className="text-gray-300 mb-6">
                        {article.description}
                      </p>
                      <Link
                        href={`/materiais/${article.slug}`}
                        className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors"
                      >
                        Ler artigo completo
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-950 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-blue-600/10 to-blue-800/5 -z-10"></div>

          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Pronto para Integrar Videoconferência?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Comece gratuitamente com 2.000 minutos por mês. Sem cartão de crédito.
              </p>
              <a
                href="https://app.videochamada.com.br/cadastrar"
                className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-full inline-flex items-center transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
              >
                Criar Conta Grátis
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MateriaisIndex;
