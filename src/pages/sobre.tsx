import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import { Shield, Users, Award, Globe, Linkedin, Mail, MapPin, DollarSign, Clock, Languages, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const values = [
    {
      icon: <Shield className="w-10 h-10 text-primary" />,
      title: "Segurança",
      description: "Priorizamos a segurança e privacidade dos dados em todas as nossas soluções."
    },
    {
      icon: <Users className="w-10 h-10 text-primary" />,
      title: "Foco no Cliente",
      description: "Desenvolvemos nossas soluções pensando nas necessidades reais dos nossos clientes."
    },
    {
      icon: <Award className="w-10 h-10 text-primary" />,
      title: "Excelência",
      description: "Buscamos a excelência em cada detalhe, desde o código até o suporte ao cliente."
    },
    {
      icon: <Globe className="w-10 h-10 text-primary" />,
      title: "Inovação",
      description: "Estamos sempre inovando para oferecer as melhores soluções de videochamadas."
    },
    {
      icon: <Heart className="w-10 h-10 text-primary" />,
      title: "Acessibilidade",
      description: "Comprometidos em oferecer uma solução acessível com servidores no Brasil e preços em real, facilitando a adoção por empresas brasileiras."
    }
  ];

  const brazilianAdvantages = [
    {
      icon: <MapPin className="w-10 h-10 text-primary" />,
      title: "Servidores no Brasil",
      description: "Menor latência para clientes brasileiros e conformidade com a LGPD, diferente de soluções internacionais com servidores distantes."
    },
    {
      icon: <DollarSign className="w-10 h-10 text-primary" />,
      title: "Precificação em Real",
      description: "Preços justos em moeda nacional, bem mais acessíveis que o dólar, sem variações cambiais que afetam soluções como Twilio, Whereby e Vonage."
    },
    {
      icon: <Clock className="w-10 h-10 text-primary" />,
      title: "Suporte no Mesmo Fuso",
      description: "Atendimento em português durante o horário comercial brasileiro, sem atrasos de resposta de equipes internacionais."
    },
    {
      icon: <Languages className="w-10 h-10 text-primary" />,
      title: "Alcance Global",
      description: "Nossa infraestrutura é projetada para oferecer videochamadas de alta qualidade em qualquer lugar do mundo."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-dark-text flex flex-col">
      <Head>
        <title>Sobre Nós | videochamada.com.br</title>
        <meta name="description" content="Conheça a videochamada.com.br, empresa brasileira especializada em fornecer API de videochamadas profissionais com foco em qualidade, segurança e personalização. Servidores no Brasil, preços em Real e suporte local." />
        <link rel="canonical" href="https://videochamada.com.br/sobre/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://videochamada.com.br/sobre/" />
        <meta property="og:title" content="Sobre Nós | videochamada.com.br" />
        <meta property="og:description" content="Conheça a videochamada.com.br, empresa brasileira especializada em fornecer API de videochamadas profissionais com foco em qualidade, segurança e personalização. Servidores no Brasil, preços em Real e suporte local." />
        <meta property="og:image" content="https://videochamada.com.br/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://videochamada.com.br/sobre/" />
        <meta name="twitter:title" content="Sobre Nós | videochamada.com.br" />
        <meta name="twitter:description" content="Conheça a videochamada.com.br, empresa brasileira especializada em fornecer API de videochamadas profissionais com foco em qualidade, segurança e personalização. Servidores no Brasil, preços em Real e suporte local." />
        <meta name="twitter:image" content="https://videochamada.com.br/og-image.png" />
      </Head>
      {/* <Header /> */}
      <main className="flex-grow pt-18">
        {/* Hero Section */}
        <section className="py-24 bg-gray-950">
          <div className="container mx-auto px-6 text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Sobre Nós
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Somos uma empresa brasileira especializada em fornecer API de videochamadas 
              profissionais para desenvolvedores que buscam qualidade, segurança e personalização.
            </motion.p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-gray-950">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center">
              <motion.div 
                className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h2 className="text-3xl font-bold mb-6 text-white">Nossa Missão</h2>
                <p className="text-lg text-gray-300 mb-6">
                  Democratizar o acesso a API de videochamadas profissionais para desenvolvedores e empresas de todos os tamanhos, 
                  oferecendo uma solução segura, personalizável, com suporte local no Brasil e preço justo em real, 
                  mais acessível que o dólar para a realidade brasileira.
                </p>
                <h2 className="text-3xl font-bold mb-6 text-white">Nossa Visão</h2>
                <p className="text-lg text-gray-300">
                  Ser a principal API de videochamadas para desenvolvedores no Brasil, 
                  reconhecida pela qualidade, segurança e facilidade de integração.
                </p>
              </motion.div>
              <motion.div 
                className="md:w-1/2"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-primary/10 rounded-2xl blur opacity-30"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Equipe em reunião" 
                    className="relative rounded-lg shadow-lg"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-24 bg-gray-950">
          <div className="container mx-auto px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Nossos Valores</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Estes são os princípios que guiam nossas decisões e ações todos os dias.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gray-900 rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover-scale"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="mb-6 bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-white">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Brazilian Solution Advantages */}
        <section className="py-24 bg-gray-950">
          <div className="container mx-auto px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Orgulho de Ser uma Solução Brasileira</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Diferente das soluções internacionais como Twilio, Video SDK.live, Vonage e Whereby, 
                oferecemos vantagens únicas por sermos uma empresa 100% brasileira com alcance global, 
                incluindo servidores no Brasil e preços acessíveis em real.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {brazilianAdvantages.map((advantage, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gray-900 rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover-scale"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="mb-6 bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center">{advantage.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-white">{advantage.title}</h3>
                  <p className="text-gray-300">{advantage.description}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-6">
                Nossa infraestrutura é projetada para oferecer API de videochamadas de alta qualidade em qualquer lugar do mundo, 
                combinando o melhor do atendimento local com alcance internacional.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-24 bg-gray-950">
          <div className="container mx-auto px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Nossa Equipe</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Conheça o fundador da videochamada.com.br e neft.com.br.
              </p>
            </motion.div>

            <div className="flex flex-col md:flex-row items-center gap-12">
              <motion.div 
                className="md:w-1/3"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-primary/10 blur opacity-30"></div>
                  <img 
                    src="/images/IMG_4274.jpeg" 
                    alt="Bernardo Gontijo" 
                    className="relative shadow-lg w-full max-w-md mx-auto"
                  />
                </div>
              </motion.div>
              <motion.div 
                className="md:w-2/3"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h3 className="text-2xl font-bold mb-4 text-white">Bernardo Gontijo</h3>
                <p className="text-lg text-gray-300 mb-6">
                  Especialista em tecnologias de comunicação em tempo real, Bernardo fundou a Neft.com.br, 
                  empresa responsável pela videochamada.com.br, em 2019.
                </p>
                <p className="text-lg text-gray-300 mb-6">
                  Com uma sólida trajetória profissional, teve passagens em startups inovadoras e empresas 
                  tradicionais, incluindo uma posição como engenheiro na Embraer.
                </p>
                <p className="text-lg text-gray-300 mb-6">
                  Formado em Engenharia Mecânica e com MBA pelo IBMEC, Bernardo combina conhecimento técnico 
                  e visão de negócios para desenvolver soluções que realmente atendem às necessidades do mercado, 
                  com foco em suporte local e preços acessíveis em real para a realidade brasileira.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <a 
                    href="mailto:bernardo@neft.com.br" 
                    className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    bernardo@neft.com.br
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/bernardo-gontijo/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 bg-[#0A66C2] hover:bg-[#0A66C2]/90 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gray-950">
          <div className="container mx-auto px-6 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
                Junte-se a Nós
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Experimente nossa API de videochamadas e descubra como pode integrá-la em seu produto ou aplicação.
                2.000 minutos grátis para começar!
              </p>
              <a 
                href="https://app.videochamada.com.br/cadastrar" 
                className="group bg-primary hover:bg-primary/90 text-white font-bold py-5 px-12 rounded-full inline-flex items-center text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
              >
                Comece Agora
                <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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

export default AboutUs;