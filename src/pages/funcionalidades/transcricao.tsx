import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { FileText, Languages, Search, Clock, Download, CheckCircle } from 'lucide-react';
import Header from '../../components/Header';

const Transcricao = () => {
  const faqs = [
    {
      question: "Quanto custa o recurso de transcrição?",
      answer: "A transcrição é cobrada a R$ 0,0225 por minuto de áudio transcrito."
    },
    {
      question: "Quais idiomas são suportados?",
      answer: "Atualmente suportamos português brasileiro, inglês, espanhol, francês e alemão. Estamos constantemente adicionando novos idiomas."
    },
    {
      question: "Qual é a precisão da transcrição?",
      answer: "Nossa tecnologia de IA oferece uma precisão média de 95% para português brasileiro em condições ideais de áudio. A precisão pode variar dependendo da qualidade do áudio, sotaques e terminologia específica."
    },
    {
      question: "É possível editar a transcrição?",
      answer: "Sim, todas as transcrições podem ser editadas manualmente através do nosso editor de texto no painel de controle."
    },
    {
      question: "Quanto tempo leva para transcrever uma gravação?",
      answer: "O tempo de processamento é geralmente de 1/4 do tempo da gravação. Por exemplo, uma gravação de 60 minutos levará cerca de 15 minutos para ser transcrita."
    }
  ];

  const benefits = [
    {
      icon: <Search className="w-8 h-8 text-primary" />,
      title: "Pesquisável",
      description: "Encontre rapidamente momentos específicos nas gravações através de palavras-chave."
    },
    {
      icon: <Languages className="w-8 h-8 text-primary" />,
      title: "Multilíngue",
      description: "Suporte para português, inglês, espanhol e outros idiomas principais."
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Marcações de Tempo",
      description: "Cada trecho da transcrição inclui marcações precisas de tempo para fácil navegação."
    },
    {
      icon: <Download className="w-8 h-8 text-primary" />,
      title: "Exportação Flexível",
      description: "Exporte transcrições em formatos TXT, SRT, VTT ou JSON para uso em diferentes plataformas."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-dark-text flex flex-col">
      <Head>
        <title>Transcrição com IA para Videochamadas | videochamada.com.br</title>
        <meta name="description" content="Transforme o áudio das suas videochamadas em texto pesquisável com nossa tecnologia de transcrição baseada em IA. Sem robôs como participantes." />
        <link rel="canonical" href="https://videochamada.com.br/funcionalidades/transcricao/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://videochamada.com.br/funcionalidades/transcricao/" />
        <meta property="og:title" content="Transcrição com IA para Videochamadas | videochamada.com.br" />
        <meta property="og:description" content="Transforme o áudio das suas videochamadas em texto pesquisável com nossa tecnologia de transcrição baseada em IA. Sem robôs como participantes." />
        <meta property="og:image" content="https://videochamada.com.br/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://videochamada.com.br/funcionalidades/transcricao/" />
        <meta name="twitter:title" content="Transcrição com IA para Videochamadas | videochamada.com.br" />
        <meta name="twitter:description" content="Transforme o áudio das suas videochamadas em texto pesquisável com nossa tecnologia de transcrição baseada em IA. Sem robôs como participantes." />
        <meta name="twitter:image" content="https://videochamada.com.br/og-image.png" />
      </Head>
      {/* <Header /> */}
      <main className="flex-grow pt-18">
        {/* Hero Section */}
        <section className="py-24 bg-gray-950 relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-blue-600/5 to-transparent -z-10"></div>
          
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <motion.div 
                className="lg:w-1/2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Transcrição com IA</h1>
                <p className="text-xl text-gray-300 mb-8">
                  Transforme o áudio das suas videochamadas em texto pesquisável com nossa
                  tecnologia avançada de transcrição baseada em inteligência artificial.
                  Processa o áudio sem necessidade de gravar o vídeo, mantendo sua privacidade.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://app.videochamada.com.br/cadastrar" 
                    className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-full text-center transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                  >
                    Começar Gratuitamente
                  </a>
                  <a 
                    href="https://documentacao.videochamada.com.br" 
                    className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 font-bold py-4 px-8 rounded-full text-center transition-all duration-300 hover:shadow-lg"
                  >
                    Documentação
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="lg:w-1/2"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                    alt="Transcrição de videochamada" 
                    className="w-full h-auto rounded-2xl"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-6">
                    <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-4 border border-gray-800">
                      <p className="text-gray-400 text-sm mb-1">00:01:24</p>
                      <p className="text-white">
                        "Vamos implementar a integração com o sistema de pagamentos na próxima sprint."
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-20 bg-gray-950">
          <div className="container mx-auto px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Benefícios da Transcrição</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transforme suas videochamadas em conteúdo textual valioso e acessível.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-800/50 hover:border-primary/30"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="mb-4 bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center">{benefit.icon}</div>
                  <h3 className="text-lg font-bold mb-2 text-white">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-gray-950">
          <div className="container mx-auto px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Como Funciona</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transformar áudio em texto nunca foi tão fácil.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <motion.div 
                className="bg-gray-900/50 rounded-lg p-8 border border-gray-800"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h3 className="text-2xl font-bold mb-6 text-white">Transcrição Automática</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                      <span className="text-primary font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-white">Configuração do Projeto</h4>
                      <p className="text-gray-300">
                        A transcrição é configurada nas preferências do projeto da videochamada.
                        Quando ativada, ela processa o áudio da chamada de forma independente,
                        sem necessidade de habilitar a gravação de vídeo.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                      <span className="text-primary font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-white">Processamento Inteligente</h4>
                      <p className="text-gray-300">
                        Nossa IA analisa o áudio da chamada em tempo real e o converte em texto
                        com alta precisão, identificando diferentes falantes e adicionando
                        marcações de tempo, sem armazenar o vídeo.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                      <span className="text-primary font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-white">Acesso e Utilização</h4>
                      <p className="text-gray-300">
                        A transcrição fica disponível no painel de controle após o término da chamada.
                        Você pode visualizar, editar, pesquisar ou exportar o texto em diferentes formatos.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-gray-950">
          <div className="container mx-auto px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Casos de Uso</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A transcrição de videochamadas tem aplicações valiosas em diversos setores.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div 
                className="bg-gray-900 rounded-xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Psicologia" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">Psicologia</h3>
                  <p className="text-gray-300">
                    Psicólogos podem transcrever sessões para análise posterior, 
                    documentação e acompanhamento do progresso do paciente ao longo do tempo.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-gray-900 rounded-xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Reuniões de Negócios" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">Reuniões de Negócios</h3>
                  <p className="text-gray-300">
                    Transforme discussões importantes em documentos pesquisáveis, 
                    facilitando o acompanhamento de decisões e atribuições de tarefas.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-gray-900 rounded-xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Entrevistas e Pesquisas" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">Entrevistas e Pesquisas</h3>
                  <p className="text-gray-300">
                    Pesquisadores podem transcrever entrevistas para análise qualitativa, 
                    codificação e extração de insights sem o trabalho manual de transcrição.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 bg-gray-950">
          <div className="container mx-auto px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Preços Transparentes</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Pague apenas pelo que usar, sem surpresas.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto bg-gray-900 rounded-2xl overflow-hidden shadow-xl">
              <div className="bg-primary p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Transcrição com IA</h3>
                <p className="text-xl">Preços simples e justos</p>
              </div>
              
              <div className="p-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-800 pb-6 mb-6">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Transcrição Básica</h4>
                    <p className="text-gray-300">Conversão de áudio para texto com marcações de tempo</p>
                  </div>
                  <div className="text-right mt-4 md:mt-0">
                    <p className="text-3xl font-bold text-white">R$ 0,0225</p>
                    <p className="text-gray-300">por minuto</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-800 pb-6 mb-6">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Identificação de Falantes</h4>
                    <p className="text-gray-300">Diferenciação entre participantes da chamada</p>
                  </div>
                  <div className="text-right mt-4 md:mt-0">
                    <p className="text-3xl font-bold text-white">Incluído</p>
                    <p className="text-gray-300">sem custo adicional</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Exportação</h4>
                    <p className="text-gray-300">Formatos TXT, SRT, VTT e JSON</p>
                  </div>
                  <div className="text-right mt-4 md:mt-0">
                    <p className="text-3xl font-bold text-white">Grátis</p>
                    <p className="text-gray-300">sem custos adicionais</p>
                  </div>
                </div>
              </div>
            </div>
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
                Tire suas dúvidas sobre o recurso de transcrição.
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
                Transforme Áudio em Texto Valioso
              </h2>
              <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
                2.000 minutos grátis para experimentar todos os recursos, incluindo transcrição.
                Sem cartão de crédito, sem compromissos.
              </p>
              <a 
                href="https://app.videochamada.com.br/cadastrar" 
                className="bg-primary hover:bg-primary/90 text-white font-bold py-5 px-12 rounded-full inline-flex items-center text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
              >
                Criar Conta Grátis
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7-7 7"></path>
                </svg>
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      {/* Footer é renderizado pelo layout principal */}
    </div>
  );
};

export default Transcricao;
