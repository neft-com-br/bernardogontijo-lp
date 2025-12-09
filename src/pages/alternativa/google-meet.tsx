import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { CheckCircle, X, ArrowRight } from 'lucide-react';
import Header from '../../components/Header';

const GoogleMeetAlternativa = () => {
  const videochamadaAdvantages = [
    "API especializada para integração em seus próprios produtos",
    "2.000 minutos grátis por mês sem cartão de crédito",
    "Personalização completa (whitelabel)",
    "Gravação, transcrição e resumo com IA integrados",
    "Suporte técnico dedicado em português",
    "Faturamento em reais (nota fiscal brasileira)"
  ];

  const googleMeetLimitations = [
    "Não oferece API para integração em produtos próprios",
    "Sem personalização whitelabel",
    "Limitações de recursos em contas gratuitas",
    "Dependência do ecossistema Google",
    "Sem suporte técnico dedicado para desenvolvedores",
    "Sem opção de faturamento em reais para empresas brasileiras"
  ];

  const comparisonTable = [
    { feature: "Foco principal", videochamada: "API para desenvolvedores", googleMeet: "Plataforma de reuniões" },
    { feature: "Integração em apps", videochamada: "API completa e documentada", googleMeet: "Não disponível" },
    { feature: "Personalização", videochamada: "Completa (whitelabel)", googleMeet: "Não disponível" },
    { feature: "Preço inicial", videochamada: "Grátis (2.000 min/mês)", googleMeet: "Gratuito com limitações" },
    { feature: "Modelo de cobrança", videochamada: "Pay-as-you-go em reais", googleMeet: "Assinatura Google Workspace" },
    { feature: "Gravação", videochamada: "Integrada (R$ 0,075/min)", googleMeet: "Disponível em planos pagos" },
    { feature: "Transcrição", videochamada: "Integrada (R$ 0,0225/min)", googleMeet: "Limitada" },
    { feature: "Resumo com IA", videochamada: "Integrado (R$ 0,020/min)", googleMeet: "Não disponível" },
    { feature: "Suporte técnico", videochamada: "Dedicado em português", googleMeet: "Geral do Google Workspace" }
  ];

  const faqs = [
    {
      question: "Como a Videochamada.com.br se diferencia do Google Meet para desenvolvedores?",
      answer: "O Google Meet é uma plataforma de reuniões pronta para uso, mas não oferece uma API para desenvolvedores integrarem videochamadas em seus próprios produtos. A Videochamada.com.br é uma API especializada que permite adicionar videochamadas personalizadas em suas aplicações, com sua própria marca e identidade visual."
    },
    {
      question: "Posso substituir o Google Meet pela Videochamada.com.br em minha aplicação?",
      answer: "São produtos com propósitos diferentes. Se você precisa de uma solução para integrar videochamadas em seu próprio produto ou aplicação, a Videochamada.com.br é a escolha ideal, pois o Google Meet não oferece essa possibilidade. Nossa API foi projetada especificamente para desenvolvedores, com foco em facilidade de integração e personalização completa."
    },
    {
      question: "A Videochamada.com.br é mais econômica que o Google Meet?",
      answer: "Para uso como plataforma de reuniões, o Google Meet oferece um plano gratuito com limitações. Porém, para desenvolvedores que precisam integrar videochamadas em seus produtos, a Videochamada.com.br é mais econômica, pois oferece 2.000 minutos grátis por mês e um modelo pay-as-you-go de apenas R$ 0,015 por minuto por participante após o limite gratuito."
    },
    {
      question: "Quais são as vantagens de usar a Videochamada.com.br para meu produto SaaS?",
      answer: "Para produtos SaaS, a Videochamada.com.br oferece personalização completa (sua marca, não a nossa), integração simples via API, preços acessíveis e escaláveis, além de recursos avançados como gravação, transcrição e resumo com IA integrados. Tudo isso com suporte em português e faturamento em reais."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-dark-text flex flex-col">
      <Head>
        <title>Alternativa ao Google Meet para Desenvolvedores | videochamada.com.br</title>
        <meta name="description" content="API de videochamadas como alternativa ao Google Meet para desenvolvedores. Integre videochamadas em seus produtos com sua própria marca, 2.000 minutos grátis e suporte em português." />
        <link rel="canonical" href="https://videochamada.com.br/alternativa/google-meet/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://videochamada.com.br/alternativa/google-meet/" />
        <meta property="og:title" content="Alternativa ao Google Meet para Desenvolvedores | videochamada.com.br" />
        <meta property="og:description" content="API de videochamadas como alternativa ao Google Meet para desenvolvedores. Integre videochamadas em seus produtos com sua própria marca, 2.000 minutos grátis e suporte em português." />
        <meta property="og:image" content="https://videochamada.com.br/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://videochamada.com.br/alternativa/google-meet/" />
        <meta name="twitter:title" content="Alternativa ao Google Meet para Desenvolvedores | videochamada.com.br" />
        <meta name="twitter:description" content="API de videochamadas como alternativa ao Google Meet para desenvolvedores. Integre videochamadas em seus produtos com sua própria marca, 2.000 minutos grátis e suporte em português." />
        <meta name="twitter:image" content="https://videochamada.com.br/og-image.png" />
      </Head>
      {/* <Header /> */}
      <main className="flex-grow pt-18">
        {/* Hero Section */}
        <section className="py-24 bg-gray-950 relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-blue-600/5 to-transparent -z-10"></div>
          
          <div className="container mx-auto px-6 text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Alternativa ao Google Meet para Desenvolvedores
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Uma API de videochamadas para integrar em seus produtos com sua própria marca.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xs sm:max-w-none mx-auto"
            >
              <a 
                href="https://app.videochamada.com.br/cadastrar" 
                className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-full flex items-center justify-center text-base transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto"
              >
                Teste Grátis
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a 
                href="/precos" 
                className="bg-transparent border-2 border-primary text-primary hover:bg-primary/10 font-bold py-3 px-6 rounded-full flex items-center justify-center text-base transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto"
              >
                Ver Preços
              </a>
            </motion.div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20 bg-gray-950">
          <div className="container mx-auto px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Por que escolher Videochamada.com.br em vez do Google Meet?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Compare as vantagens para desenvolvedores que precisam integrar videochamadas em seus produtos.
              </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-8 mb-16">
              {/* Videochamada.com.br Advantages */}
              <motion.div 
                className="lg:w-1/2 bg-gray-900 rounded-2xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="bg-primary p-6 text-white">
                  <h3 className="text-2xl font-bold">Vantagens da Videochamada.com.br</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
                    {videochamadaAdvantages.map((advantage, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{advantage}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Google Meet Limitations */}
              <motion.div 
                className="lg:w-1/2 bg-gray-900 rounded-2xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="bg-gray-800 p-6 text-white">
                  <h3 className="text-2xl font-bold">Limitações do Google Meet para Desenvolvedores</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
                    {googleMeetLimitations.map((limitation, index) => (
                      <li key={index} className="flex items-start">
                        <X className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{limitation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Feature Comparison Table */}
            <motion.div 
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="p-6 bg-gray-800">
                <h3 className="text-2xl font-bold text-white">Comparação para Desenvolvedores</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-800">
                      <th className="py-4 px-6 text-left text-white font-bold">Recurso</th>
                      <th className="py-4 px-6 text-left text-primary font-bold">Videochamada.com.br</th>
                      <th className="py-4 px-6 text-left text-gray-400 font-bold">Google Meet</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonTable.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-900' : 'bg-gray-800/50'}>
                        <td className="py-4 px-6 text-white">{row.feature}</td>
                        <td className="py-4 px-6 text-primary font-medium">{row.videochamada}</td>
                        <td className="py-4 px-6 text-gray-400">{row.googleMeet}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-950">
          <div className="container mx-auto px-6">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Perguntas Frequentes</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tire suas dúvidas sobre como a Videochamada.com.br se compara ao Google Meet para desenvolvedores.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gray-900 rounded-lg mb-4 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-white">{faq.question}</h3>
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-950 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-blue-600/10 to-blue-800/5 -z-10"></div>
          
          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
                Pronto para Integrar Videochamadas em seu Produto?
              </h2>
              <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
                Experimente a Videochamada.com.br gratuitamente com 2.000 minutos por mês. 
                Sem cartão de crédito, sem compromissos.
              </p>
              <a 
                href="https://app.videochamada.com.br/cadastrar" 
                className="bg-primary hover:bg-primary/90 text-white font-bold py-5 px-12 rounded-full inline-flex items-center text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
              >
                Começar Agora
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      {/* Footer é renderizado pelo layout principal */}
    </div>
  );
};

export default GoogleMeetAlternativa;
