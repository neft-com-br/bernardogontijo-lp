import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Zap, Puzzle, Workflow, Layers, CheckCircle, GitBranch } from 'lucide-react';
import Header from '../../components/Header';

const IntegracaoNoCode = () => {
  const integrationPlatforms = [
    {
      name: "Zapier",
      logo: "https://videochamada.com.br/wp-content/uploads/2025/02/zapier.avif",
      description: "Conecte a videochamada.com.br com mais de 5.000 aplicativos sem escrever uma linha de código.",
      features: [
        "Crie chamadas automaticamente quando um evento ocorrer em outro aplicativo",
        "Envie notificações quando uma chamada for agendada ou concluída",
        "Atualize CRMs e sistemas de gestão com informações das chamadas",
        "Integre com Google Calendar, Outlook, Slack, e muito mais"
      ],
      link: "https://zapier.com/apps/videochamada/integrations"
    },
    {
      name: "Make (Integromat)",
      logo: "https://videochamada.com.br/wp-content/uploads/2025/02/Captura-de-Tela-2025-02-03-a%CC%80s-17.50.43.png",
      description: "Crie fluxos de trabalho visuais complexos com videochamadas e outras ferramentas.",
      features: [
        "Construa cenários avançados com lógica condicional",
        "Processe dados antes e depois das chamadas",
        "Integre com sistemas internos e APIs personalizadas",
        "Automatize fluxos de trabalho completos de atendimento"
      ],
      link: "https://www.make.com/en/integrations/videochamada"
    },
    {
      name: "n8n",
      logo: "https://n8n.io/favicon.ico",
      isIcon: true,
      icon: GitBranch,
      description: "Plataforma de automação open-source e self-hosted. Instale o node oficial para criar workflows avançados com controle total dos seus dados.",
      features: [
        "Criar chamadas automaticamente via workflows visuais",
        "Listar e monitorar status de chamadas em tempo real",
        "Processar gravações e transcrições automaticamente",
        "Self-hosted: seus dados ficam na sua infraestrutura",
        "Node oficial publicado no n8n Community Nodes"
      ],
      link: "https://www.npmjs.com/package/n8n-nodes-videochamada"
    }
  ];

  const useCases = [
    {
      title: "Agendamento Automático",
      description: "Quando um cliente agenda uma consulta através do Calendly, crie automaticamente uma sala de videochamada e envie o link por e-mail.",
      image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Atendimento ao Cliente",
      description: "Integre com seu sistema de tickets para iniciar videochamadas diretamente a partir de solicitações de suporte complexas.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Consultas Médicas",
      description: "Conecte com seu sistema de prontuário eletrônico para agendar teleconsultas e registrar informações automaticamente após o atendimento.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Automação Self-Hosted",
      description: "Use n8n para processar gravações automaticamente, extrair transcrições e enviar para seu sistema interno - tudo na sua própria infraestrutura.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const faqs = [
    {
      question: "Preciso saber programar para usar as integrações no-code?",
      answer: "Não, as plataformas no-code como Zapier e Make são projetadas para serem usadas sem conhecimento de programação. Elas oferecem interfaces visuais intuitivas para criar automações."
    },
    {
      question: "Quais aplicativos posso integrar com a videochamada.com.br?",
      answer: "Através do Zapier e Make, você pode integrar com milhares de aplicativos, incluindo Google Calendar, Outlook, Slack, Trello, Salesforce, HubSpot, Mailchimp, e muitos outros."
    },
    {
      question: "As integrações no-code são seguras?",
      answer: "Sim, tanto o Zapier quanto o Make são plataformas seguras que utilizam criptografia e seguem as melhores práticas de segurança. Além disso, você pode configurar permissões específicas para cada integração."
    },
    {
      question: "Existe algum custo adicional para usar as integrações no-code?",
      answer: "O uso básico do Zapier e Make é gratuito, mas planos pagos oferecem mais recursos e maior volume de automações. A videochamada.com.br não cobra taxas adicionais pelo uso dessas integrações."
    },
    {
      question: "Posso criar integrações personalizadas para meu caso específico?",
      answer: "Sim, tanto o Zapier quanto o Make permitem criar fluxos de trabalho personalizados para atender às necessidades específicas do seu negócio, mesmo sem conhecimento técnico."
    },
    {
      question: "O que é o n8n e por que devo considerar usá-lo?",
      answer: "O n8n é uma plataforma de automação open-source que pode ser hospedada em sua própria infraestrutura (self-hosted). Isso significa que seus dados nunca saem dos seus servidores, ideal para empresas com requisitos rigorosos de compliance e segurança. O node oficial da videochamada.com.br está disponível no n8n Community Nodes."
    },
    {
      question: "Como instalo o node da videochamada.com.br no n8n?",
      answer: "Basta acessar Settings → Community Nodes no seu n8n, clicar em Install e digitar 'n8n-nodes-videochamada'. O node será instalado automaticamente e você poderá começar a usar imediatamente."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-dark-text flex flex-col">
      <Head>
        <title>Integração No-Code para Videochamadas | videochamada.com.br</title>
        <meta name="description" content="Conecte videochamadas ao seu fluxo de trabalho sem escrever código. Integre com Zapier, Make e outras plataformas para automatizar processos e melhorar a experiência do cliente." />
        <link rel="canonical" href="https://videochamada.com.br/funcionalidades/integracao-no-code/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://videochamada.com.br/funcionalidades/integracao-no-code/" />
        <meta property="og:title" content="Integração No-Code para Videochamadas | videochamada.com.br" />
        <meta property="og:description" content="Conecte videochamadas ao seu fluxo de trabalho sem escrever código. Integre com Zapier, Make e outras plataformas para automatizar processos e melhorar a experiência do cliente." />
        <meta property="og:image" content="https://videochamada.com.br/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://videochamada.com.br/funcionalidades/integracao-no-code/" />
        <meta name="twitter:title" content="Integração No-Code para Videochamadas | videochamada.com.br" />
        <meta name="twitter:description" content="Conecte videochamadas ao seu fluxo de trabalho sem escrever código. Integre com Zapier, Make e outras plataformas para automatizar processos e melhorar a experiência do cliente." />
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
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Integração No-Code</h1>
                <p className="text-xl text-gray-300 mb-8">
                  Conecte videochamadas ao seu fluxo de trabalho sem escrever uma linha de código. 
                  Automatize processos e melhore a experiência do cliente com nossas integrações fáceis de usar.
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
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                    alt="Integração No-Code" 
                    className="w-full h-auto rounded-2xl"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-6">
                    <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-4 border border-gray-800">
                      <div className="flex items-center mb-2">
                        <Zap className="w-5 h-5 text-primary mr-2" />
                        <p className="text-primary font-semibold">Integração Simplificada</p>
                      </div>
                      <p className="text-white">
                        Conecte com Zapier, Make ou qualquer plataforma no-code em minutos.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Benefícios da Integração No-Code</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Conecte videochamadas profissionais aos seus sistemas existentes sem precisar de desenvolvedores.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div 
                className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-800/50 hover:border-primary/30"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="mb-6 bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center">
                  <Zap className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Implementação Rápida</h3>
                <p className="text-gray-300">
                  Integre videochamadas ao seu sistema em minutos, sem precisar escrever código ou 
                  contratar desenvolvedores. Use ferramentas como Zapier ou Make para conectar tudo.
                </p>
              </motion.div>

              <motion.div 
                className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-800/50 hover:border-primary/30"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="mb-6 bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center">
                  <Puzzle className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Personalização Whitelabel</h3>
                <p className="text-gray-300">
                  Mantenha sua identidade visual em todas as videochamadas. Adicione seu logo, 
                  cores da marca e personalize a experiência para seus clientes.
                </p>
              </motion.div>

              <motion.div 
                className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-800/50 hover:border-primary/30"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="mb-6 bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center">
                  <Workflow className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Flexibilidade Total</h3>
                <p className="text-gray-300">
                  Crie fluxos de trabalho personalizados que se adaptam ao seu negócio. 
                  Automatize desde o agendamento até o pós-atendimento com facilidade.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* No-Code Platforms */}
        <section className="py-20 bg-gray-950">
          <div className="container mx-auto px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Plataformas de Integração</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Conecte videochamadas profissionais com suas ferramentas favoritas através destas plataformas.
              </p>
            </motion.div>

            <div className="space-y-12 max-w-5xl mx-auto">
              {integrationPlatforms.map((platform, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gray-900 rounded-xl overflow-hidden shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
                      {platform.isIcon ? (
                        <div className="bg-primary/10 p-4 rounded-lg h-16 w-16 flex items-center justify-center">
                          {platform.icon && <platform.icon className="w-10 h-10 text-primary" />}
                        </div>
                      ) : (
                        <div className="bg-white p-4 rounded-lg h-16 w-40 flex items-center justify-center">
                          <img
                            src={platform.logo}
                            alt={platform.name}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                      )}
                      <div>
                        <h3 className="text-2xl font-bold text-white">{platform.name}</h3>
                        {platform.name === "n8n" && (
                          <span className="inline-block bg-green-500/20 text-green-400 text-xs font-semibold px-2 py-1 rounded ml-2">
                            Open Source
                          </span>
                        )}
                        <p className="text-gray-300 mt-2">{platform.description}</p>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <h4 className="text-xl font-semibold mb-4 text-white">Recursos Principais</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {platform.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" />
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-8">
                      <a 
                        href={platform.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg inline-block transition-colors"
                      >
                        Explorar Integrações com {platform.name}
                      </a>
                    </div>
                  </div>
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
                Criar integrações no-code é simples e não requer conhecimentos técnicos.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="hidden md:block absolute left-[50px] top-0 bottom-0 w-1 bg-primary/20"></div>
                
                <div className="space-y-12">
                  <motion.div 
                    className="flex items-start gap-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <div className="bg-primary rounded-full p-4 z-10 flex-shrink-0">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <div className="bg-gray-900 rounded-xl p-6 shadow-lg flex-grow">
                      <h3 className="text-xl font-bold mb-3 text-white">1. Conecte Suas Contas</h3>
                      <p className="text-gray-300">
                        Crie uma conta no Zapier ou Make e conecte sua conta da videochamada.com.br 
                        junto com os outros aplicativos que deseja integrar.
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start gap-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <div className="bg-primary rounded-full p-4 z-10 flex-shrink-0">
                      <Puzzle className="w-8 h-8 text-white" />
                    </div>
                    <div className="bg-gray-900 rounded-xl p-6 shadow-lg flex-grow">
                      <h3 className="text-xl font-bold mb-3 text-white">2. Escolha um Gatilho</h3>
                      <p className="text-gray-300">
                        Selecione o evento que iniciará sua automação. Por exemplo, "Quando um novo 
                        agendamento for criado no Calendly" ou "Quando um novo ticket for aberto no Zendesk".
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start gap-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <div className="bg-primary rounded-full p-4 z-10 flex-shrink-0">
                      <Workflow className="w-8 h-8 text-white" />
                    </div>
                    <div className="bg-gray-900 rounded-xl p-6 shadow-lg flex-grow">
                      <h3 className="text-xl font-bold mb-3 text-white">3. Configure a Ação</h3>
                      <p className="text-gray-300">
                        Defina o que deve acontecer quando o gatilho for acionado. Por exemplo, 
                        "Criar uma nova sala de videochamada" e "Enviar o link por e-mail para o cliente".
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start gap-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <div className="bg-primary rounded-full p-4 z-10 flex-shrink-0">
                      <Layers className="w-8 h-8 text-white" />
                    </div>
                    <div className="bg-gray-900 rounded-xl p-6 shadow-lg flex-grow">
                      <h3 className="text-xl font-bold mb-3 text-white">4. Teste e Ative</h3>
                      <p className="text-gray-300">
                        Teste sua integração para garantir que tudo funcione como esperado e, 
                        em seguida, ative-a. A partir desse momento, sua automação funcionará 
                        sempre que o gatilho for acionado.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
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
                Veja como diferentes setores estão utilizando integrações no-code com videochamadas.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {useCases.map((useCase, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gray-900 rounded-xl overflow-hidden shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={useCase.image} 
                      alt={useCase.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-white">{useCase.title}</h3>
                    <p className="text-gray-300">{useCase.description}</p>
                  </div>
                </motion.div>
              ))}
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
                Tire suas dúvidas sobre integrações no-code.
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
                Comece a Integrar Hoje Mesmo
              </h2>
              <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
                2.000 minutos grátis por mês, sem cartão de crédito, sem compromissos.
                Integre videochamadas profissionais ao seu sistema em minutos.
              </p>
              <a 
                href="https://app.videochamada.com.br/cadastrar" 
                className="group bg-primary hover:bg-primary/90 text-white font-bold py-5 px-12 rounded-full inline-flex items-center text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
              >
                Criar Conta Grátis
                <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7-7 7"></path>
                </svg>
              </a>
              <p className="mt-8 text-blue-200">
                Precisa de ajuda com a integração? Entre em contato com nosso suporte técnico.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      {/* Footer é renderizado pelo layout principal */}
    </div>
  );
};

export default IntegracaoNoCode;
