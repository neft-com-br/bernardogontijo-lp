import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { BrainCircuit, Sparkles, Clock, FileText, Zap, CheckCircle } from 'lucide-react';
import Header from '../../components/Header';

const ResumoInteligente = () => {
  const faqs = [
    {
      question: "Quanto custa o recurso de resumo com IA?",
      answer: "O resumo com IA é cobrado a R$ 0,020 por minuto de conteúdo processado, independentemente do tamanho do resumo gerado."
    },
    {
      question: "É necessário ter a transcrição para gerar um resumo?",
      answer: "Sim, o resumo é gerado a partir da transcrição. Portanto, você precisará habilitar o recurso de transcrição antes de poder gerar um resumo. A transcrição funciona de forma independente e não requer gravação de vídeo."
    },
    {
      question: "Posso personalizar o tipo de resumo que quero?",
      answer: "Sim, você pode fornecer prompts específicos para direcionar o resumo. Por exemplo, você pode solicitar um resumo focado apenas nas decisões tomadas, nos próximos passos ou em pontos específicos discutidos."
    },
    {
      question: "Em quais formatos posso obter o resumo?",
      answer: "Oferecemos três formatos principais: parágrafo contínuo, tópicos com marcadores (bullets) e estruturado (com seções como Contexto, Pontos Principais, Decisões e Próximos Passos)."
    },
    {
      question: "Quanto tempo leva para gerar um resumo?",
      answer: "O tempo de processamento é geralmente de 1/10 do tempo da gravação. Por exemplo, uma gravação de 60 minutos levará cerca de 6 minutos para ter seu resumo gerado."
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Economia de Tempo",
      description: "Obtenha os pontos principais de uma reunião de uma hora em apenas alguns minutos de leitura."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: "Personalização",
      description: "Direcione o resumo com prompts específicos para focar no que realmente importa para você."
    },
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: "Múltiplos Formatos",
      description: "Escolha entre resumos em parágrafos, tópicos ou estruturados com seções predefinidas."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Processamento Rápido",
      description: "Resumos gerados automaticamente em uma fração do tempo da gravação original."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-dark-text flex flex-col">
      <Head>
        <title>Resumo Inteligente com IA para Videochamadas | videochamada.com.br</title>
        <meta name="description" content="Transforme longas reuniões em resumos concisos e acionáveis com nossa tecnologia de IA. Economize tempo e extraia os pontos mais importantes das suas videochamadas." />
        <link rel="canonical" href="https://videochamada.com.br/funcionalidades/resumo-inteligente/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://videochamada.com.br/funcionalidades/resumo-inteligente/" />
        <meta property="og:title" content="Resumo Inteligente com IA para Videochamadas | videochamada.com.br" />
        <meta property="og:description" content="Transforme longas reuniões em resumos concisos e acionáveis com nossa tecnologia de IA. Economize tempo e extraia os pontos mais importantes das suas videochamadas." />
        <meta property="og:image" content="https://videochamada.com.br/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://videochamada.com.br/funcionalidades/resumo-inteligente/" />
        <meta name="twitter:title" content="Resumo Inteligente com IA para Videochamadas | videochamada.com.br" />
        <meta name="twitter:description" content="Transforme longas reuniões em resumos concisos e acionáveis com nossa tecnologia de IA. Economize tempo e extraia os pontos mais importantes das suas videochamadas." />
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
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Resumo Inteligente com IA</h1>
                <p className="text-xl text-gray-300 mb-8">
                  Transforme longas reuniões em resumos concisos e acionáveis com nossa 
                  tecnologia avançada de IA que extrai os pontos mais importantes.
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
                    src="https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                    alt="Resumo inteligente com IA" 
                    className="w-full h-auto rounded-2xl"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-6">
                    <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-4 border border-gray-800">
                      <div className="flex items-center mb-2">
                        <BrainCircuit className="w-5 h-5 text-primary mr-2" />
                        <p className="text-primary font-semibold">Resumo da Reunião</p>
                      </div>
                      <ul className="text-white space-y-2 list-disc pl-5">
                        <li>Aprovado orçamento de marketing para Q3</li>
                        <li>Lançamento do produto adiado para 15/10</li>
                        <li>Equipe de desenvolvimento precisa de mais 2 devs</li>
                      </ul>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Benefícios do Resumo com IA</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Extraia o valor essencial de suas videochamadas sem precisar rever todo o conteúdo.
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
                Transforme transcrições em resumos acionáveis em três passos simples.
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
                <h3 className="text-2xl font-bold mb-6 text-white">Processo de Resumo Automático</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                      <span className="text-primary font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-white">Configuração do Projeto</h4>
                      <p className="text-gray-300">
                        Ative o recurso de resumo nas configurações do seu projeto. Quando habilitado, 
                        o resumo será gerado automaticamente após a transcrição da chamada.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                      <span className="text-primary font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-white">Personalização de Prompts</h4>
                      <p className="text-gray-300">
                        Defina prompts personalizados para direcionar o tipo de resumo que deseja. 
                        Por exemplo, "Extrair decisões e próximos passos" ou "Resumir pontos principais".
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                      <span className="text-primary font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-white">Acesso e Visualização</h4>
                      <p className="text-gray-300">
                        O resumo fica disponível junto com a transcrição no painel de controle.
                        Você pode visualizar ou editar conforme necessário.
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
                O resumo com IA tem aplicações valiosas em diversos contextos.
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
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Reuniões Executivas" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">Reuniões Executivas</h3>
                  <p className="text-gray-300">
                    Transforme longas reuniões de diretoria em resumos concisos com 
                    decisões-chave, responsabilidades atribuídas e prazos definidos.
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
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Consultas Médicas" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">Consultas Médicas</h3>
                  <p className="text-gray-300">
                    Médicos podem obter resumos estruturados de teleconsultas, 
                    destacando sintomas, diagnósticos e planos de tratamento.
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
                    src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Entrevistas de Clientes" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">Entrevistas de Clientes</h3>
                  <p className="text-gray-300">
                    Equipes de produto podem extrair insights valiosos de entrevistas 
                    com clientes, identificando necessidades e pontos de dor.
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
                <h3 className="text-2xl font-bold mb-2">Resumo Inteligente com IA</h3>
                <p className="text-xl">Preços simples e justos</p>
              </div>
              
              <div className="p-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-800 pb-6 mb-6">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Resumo Básico</h4>
                    <p className="text-gray-300">Geração de resumo a partir da transcrição</p>
                  </div>
                  <div className="text-right mt-4 md:mt-0">
                    <p className="text-3xl font-bold text-white">R$ 0,020</p>
                    <p className="text-gray-300">por minuto de conteúdo</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-800 pb-6 mb-6">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Personalização</h4>
                    <p className="text-gray-300">Prompts específicos e formatos variados</p>
                  </div>
                  <div className="text-right mt-4 md:mt-0">
                    <p className="text-3xl font-bold text-white">Incluído</p>
                    <p className="text-gray-300">sem custo adicional</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Visualização</h4>
                    <p className="text-gray-300">Acesso ao resumo no painel de controle</p>
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
                Tire suas dúvidas sobre o recurso de resumo com IA.
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
                Extraia o Valor Essencial das Suas Reuniões
              </h2>
              <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
                2.000 minutos grátis para experimentar todos os recursos, incluindo resumo com IA.
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

export default ResumoInteligente;
