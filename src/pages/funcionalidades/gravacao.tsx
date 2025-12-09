import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Shield, Lock, Clock, Download, CheckCircle } from 'lucide-react';
import Header from '../../components/Header';

const Gravacao = () => {
  const faqs = [
    {
      question: "Quanto custa o recurso de gravação?",
      answer: "Oferecemos dois tipos: Gravação Composite (todos em 1 vídeo) a R$ 0,075/minuto, e Gravação Individual (1 vídeo por participante) a R$ 0,035/minuto por participante. O armazenamento é cobrado separadamente a R$ 0,010/minuto/mês, e você escolhe o período (1 a 48 meses)."
    },
    {
      question: "Por quanto tempo as gravações ficam disponíveis?",
      answer: "Você escolhe o período de armazenamento no momento da configuração, podendo optar por 1, 3, 6, 12, 24, 36 ou 48 meses. O padrão é 1 mês caso não especifique. Após o período escolhido, as gravações são automaticamente excluídas, ou você pode renová-las."
    },
    {
      question: "É possível baixar as gravações?",
      answer: "Sim, todas as gravações podem ser baixadas em formato MP4 diretamente do painel de controle ou via API."
    },
    {
      question: "As gravações são seguras?",
      answer: "Sim, todas as gravações são criptografadas em repouso usando AES-256 e transmitidas com segurança via HTTPS. Estamos em conformidade com LGPD, HIPAA e outras regulamentações de privacidade."
    },
    {
      question: "É necessário notificar os participantes sobre a gravação?",
      answer: "Sim, por padrão, todos os participantes são notificados quando a gravação é iniciada. Isso está em conformidade com as leis de privacidade e consentimento."
    },
    {
      question: "Qual a diferença entre Gravação Composite e Individual?",
      answer: "A Gravação Composite gera um único arquivo de vídeo com todos os participantes em layout de grade, ideal para arquivamento simples e mais econômica (R$ 0,075/min total). A Gravação Individual gera um arquivo separado para cada participante, útil para edição posterior, legendagem individual ou quando você precisa dos vídeos separados (R$ 0,035/min por participante)."
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Segurança Total",
      description: "Gravações criptografadas e armazenadas com segurança em conformidade com LGPD e HIPAA."
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Controle de Retenção",
      description: "Defina por quanto tempo as gravações ficam disponíveis, de acordo com suas políticas."
    },
    {
      icon: <Download className="w-8 h-8 text-primary" />,
      title: "Download Fácil",
      description: "Baixe as gravações em formato MP4 para armazenamento local ou compartilhamento."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "Gravação Transparente",
      description: "Sem participantes adicionais ou robôs na chamada, garantindo privacidade e conforto para assuntos sigilosos."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-dark-text flex flex-col">
      <Head>
        <title>Gravação de Videochamadas | videochamada.com.br</title>
        <meta name="description" content="Capture momentos importantes com nossa solução de gravação de videochamadas segura e confiável. Gravações criptografadas, controle de retenção e download fácil." />
        <link rel="canonical" href="https://videochamada.com.br/funcionalidades/gravacao/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://videochamada.com.br/funcionalidades/gravacao/" />
        <meta property="og:title" content="Gravação de Videochamadas | videochamada.com.br" />
        <meta property="og:description" content="Capture momentos importantes com nossa solução de gravação de videochamadas segura e confiável. Gravações criptografadas, controle de retenção e download fácil." />
        <meta property="og:image" content="https://videochamada.com.br/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://videochamada.com.br/funcionalidades/gravacao/" />
        <meta name="twitter:title" content="Gravação de Videochamadas | videochamada.com.br" />
        <meta name="twitter:description" content="Capture momentos importantes com nossa solução de gravação de videochamadas segura e confiável. Gravações criptografadas, controle de retenção e download fácil." />
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
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Gravação de Videochamadas</h1>
                <p className="text-xl text-gray-300 mb-8">
                  Capture momentos importantes com dois tipos de gravação: Composite (todos em um vídeo)
                  ou Individual (um vídeo por participante). Escolha o período de armazenamento ideal
                  para suas necessidades, de 1 a 48 meses.
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
                    src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                    alt="Gravação de videochamada" 
                    className="w-full h-auto rounded-2xl"
                  />
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Benefícios da Gravação</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Nossa solução de gravação oferece muito mais do que simplesmente capturar vídeo.
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
                Gravar suas videochamadas é simples e totalmente transparente.
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
                <h3 className="text-2xl font-bold mb-6 text-white">Gravação Automática e Transparente</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                      <span className="text-primary font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-white">Configuração Simples</h4>
                      <p className="text-gray-300">
                        A gravação é configurada nas preferências do projeto da videochamada. 
                        Quando ativada, ela ocorre automaticamente quando a chamada é iniciada.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                      <span className="text-primary font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-white">Sem Participantes Adicionais</h4>
                      <p className="text-gray-300">
                        Diferente de outras ferramentas que adicionam "robôs" ou participantes extras 
                        para realizar a gravação, nossa solução é completamente transparente e não 
                        interfere na experiência da chamada.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                      <span className="text-primary font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-white">Acesso Seguro às Gravações</h4>
                      <p className="text-gray-300">
                        Após a chamada, as gravações ficam disponíveis no painel de controle para 
                        visualização, download ou compartilhamento seguro, com controle total sobre 
                        quem pode acessá-las.
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
                A gravação de videochamadas é essencial em diversos cenários.
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
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Telemedicina" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">Telemedicina</h3>
                  <p className="text-gray-300">
                    Médicos podem gravar consultas para referência futura, documentação 
                    e para compartilhar com outros profissionais de saúde quando necessário.
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
                    src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Reuniões Corporativas" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">Reuniões Corporativas</h3>
                  <p className="text-gray-300">
                    Capture decisões importantes, brainstormings e apresentações para que todos 
                    os membros da equipe possam revisitar o conteúdo posteriormente.
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
                    src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Educação Online" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">Educação Online</h3>
                  <p className="text-gray-300">
                    Professores podem gravar aulas para disponibilizar aos alunos que não puderam 
                    participar ao vivo ou para revisão antes de provas.
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
                <h3 className="text-2xl font-bold mb-2">Gravação de Videochamadas</h3>
                <p className="text-xl">Preços simples e justos</p>
              </div>
              
              <div className="p-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-800 pb-6 mb-6">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Gravação Composite</h4>
                    <p className="text-gray-300">Todos participantes em um único vídeo</p>
                  </div>
                  <div className="text-right mt-4 md:mt-0">
                    <p className="text-3xl font-bold text-white">R$ 0,075</p>
                    <p className="text-gray-300">por minuto</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-800 pb-6 mb-6">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Gravação Individual</h4>
                    <p className="text-gray-300">Um vídeo separado por participante</p>
                  </div>
                  <div className="text-right mt-4 md:mt-0">
                    <p className="text-3xl font-bold text-white">R$ 0,035</p>
                    <p className="text-gray-300">por minuto por participante</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-800 pb-6 mb-6">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Armazenamento</h4>
                    <p className="text-gray-300">Escolha de 1 a 48 meses</p>
                  </div>
                  <div className="text-right mt-4 md:mt-0">
                    <p className="text-3xl font-bold text-white">R$ 0,010</p>
                    <p className="text-gray-300">por minuto/mês</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Download</h4>
                    <p className="text-gray-300">Baixar gravações em formato MP4</p>
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
                Tire suas dúvidas sobre o recurso de gravação.
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
                Comece a Gravar Suas Videochamadas Hoje
              </h2>
              <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
                2.000 minutos grátis para experimentar todos os recursos, incluindo gravação.
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

export default Gravacao;
