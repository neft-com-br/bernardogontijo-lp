import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Shield, Lock, FileText, Server, Globe, CheckCircle, AlertTriangle } from 'lucide-react';
import Header from '../../components/Header';

const SegurancaAvancada = () => {
  const securityFeatures = [
    {
      icon: <Lock className="w-10 h-10 text-primary" />,
      title: "Criptografia de Ponta a Ponta",
      description: "Todas as videochamadas são protegidas com criptografia AES-256, garantindo que apenas os participantes autorizados possam acessar o conteúdo."
    },
    {
      icon: <Server className="w-10 h-10 text-primary" />,
      title: "Servidores no Brasil",
      description: "Infraestrutura hospedada em território nacional, garantindo menor latência e conformidade com a legislação brasileira de proteção de dados."
    },
    {
      icon: <Shield className="w-10 h-10 text-primary" />,
      title: "Conformidade Regulatória",
      description: "Plataforma em conformidade com LGPD, HIPAA, ISO 27001 e GDPR, atendendo aos mais rigorosos padrões internacionais de segurança."
    },
    {
      icon: <FileText className="w-10 h-10 text-primary" />,
      title: "Auditorias de Segurança",
      description: "Realizamos auditorias regulares de segurança e testes de penetração para identificar e corrigir vulnerabilidades antes que possam ser exploradas."
    }
  ];

  const complianceCertifications = [
    {
      title: "LGPD",
      description: "Lei Geral de Proteção de Dados Pessoais",
      icon: <Globe className="w-6 h-6 text-primary" />
    },
    {
      title: "HIPAA",
      description: "Health Insurance Portability and Accountability Act",
      icon: <FileText className="w-6 h-6 text-primary" />
    },
    {
      title: "ISO 27001",
      description: "Gestão de Segurança da Informação",
      icon: <Shield className="w-6 h-6 text-primary" />
    },
    {
      title: "GDPR",
      description: "General Data Protection Regulation",
      icon: <Lock className="w-6 h-6 text-primary" />
    }
  ];

  const securityFAQs = [
    {
      question: "Como a videochamada.com.br protege os dados dos usuários?",
      answer: "Utilizamos criptografia AES-256 para todas as comunicações, armazenamento seguro de dados em servidores no Brasil, autenticação de dois fatores, e seguimos as melhores práticas de segurança da indústria. Além disso, realizamos auditorias regulares e testes de penetração para garantir a integridade do nosso sistema."
    },
    {
      question: "As videochamadas são criptografadas?",
      answer: "Sim, todas as videochamadas são protegidas com criptografia AES-256 de ponta a ponta. Isso significa que apenas os participantes autorizados podem acessar o conteúdo da chamada, garantindo privacidade e confidencialidade."
    },
    {
      question: "Onde os dados são armazenados?",
      answer: "Todos os dados são armazenados em servidores localizados no Brasil, o que garante conformidade com a LGPD e menor latência para usuários brasileiros. Isso também facilita o cumprimento de requisitos legais específicos do país."
    },
    {
      question: "A plataforma é adequada para uso em contextos que exigem confidencialidade, como saúde ou jurídico?",
      answer: "Sim, nossa plataforma foi projetada para atender aos requisitos de segurança e privacidade de setores sensíveis como saúde e jurídico. Estamos em conformidade com HIPAA, LGPD e outras regulamentações relevantes, tornando nossa solução adequada para teleconsultas médicas, atendimento psicológico, reuniões jurídicas confidenciais e outros contextos que exigem alto nível de segurança."
    },
    {
      question: "Como vocês garantem a segurança das gravações e transcrições?",
      answer: "Todas as gravações e transcrições são criptografadas em repouso e em trânsito. O acesso a esses dados é estritamente controlado por permissões baseadas em funções, e implementamos políticas de retenção de dados configuráveis para garantir que as informações sejam mantidas apenas pelo tempo necessário."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-dark-text flex flex-col">
      <Head>
        <title>Segurança de Nível Empresarial para Videochamadas | videochamada.com.br</title>
        <meta name="description" content="Proteja suas videochamadas com criptografia AES-256, servidores no Brasil e conformidade com LGPD, HIPAA e GDPR. Segurança de nível empresarial para suas comunicações." />
        <link rel="canonical" href="https://videochamada.com.br/funcionalidades/seguranca-avancada/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://videochamada.com.br/funcionalidades/seguranca-avancada/" />
        <meta property="og:title" content="Segurança de Nível Empresarial para Videochamadas | videochamada.com.br" />
        <meta property="og:description" content="Proteja suas videochamadas com criptografia AES-256, servidores no Brasil e conformidade com LGPD, HIPAA e GDPR. Segurança de nível empresarial para suas comunicações." />
        <meta property="og:image" content="https://videochamada.com.br/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://videochamada.com.br/funcionalidades/seguranca-avancada/" />
        <meta name="twitter:title" content="Segurança de Nível Empresarial para Videochamadas | videochamada.com.br" />
        <meta name="twitter:description" content="Proteja suas videochamadas com criptografia AES-256, servidores no Brasil e conformidade com LGPD, HIPAA e GDPR. Segurança de nível empresarial para suas comunicações." />
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
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Segurança de Nível Empresarial</h1>
                <p className="text-xl text-gray-300 mb-8">
                  Protegemos suas videochamadas com os mais altos padrões de segurança e privacidade, 
                  garantindo confidencialidade para suas comunicações mais importantes.
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
                    Documentação de Segurança
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
                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                    alt="Segurança de videochamada" 
                    className="w-full h-auto rounded-2xl"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-6">
                    <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-4 border border-gray-800">
                      <div className="flex items-center mb-2">
                        <Shield className="w-5 h-5 text-primary mr-2" />
                        <p className="text-primary font-semibold">Proteção Avançada</p>
                      </div>
                      <p className="text-white">
                        Criptografia AES-256, servidores no Brasil e conformidade com LGPD, HIPAA e GDPR.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Security Features */}
        <section className="py-20 bg-gray-950">
          <div className="container mx-auto px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Recursos de Segurança</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Nossa plataforma foi projetada com segurança em mente desde o início, 
                incorporando as melhores práticas e tecnologias de proteção.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {securityFeatures.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-800/50 hover:border-primary/30"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="mb-6 bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Transparent Security */}
        <section className="py-20 bg-gray-950">
          <div className="container mx-auto px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Segurança Transparente</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Nossa abordagem única de segurança não interfere na experiência do usuário, 
                garantindo proteção sem comprometer a usabilidade.
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
                <h3 className="text-2xl font-bold mb-6 text-white">Diferencial de Segurança</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-white">Sem Participantes Adicionais</h4>
                      <p className="text-gray-300">
                        Diferente de outras plataformas que adicionam "robôs" ou participantes extras 
                        para realizar gravações, nossa solução é completamente transparente. Isso garante 
                        maior privacidade e conforto para discussões confidenciais.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-white">Infraestrutura Brasileira</h4>
                      <p className="text-gray-300">
                        Servidores localizados no Brasil garantem conformidade com a LGPD e menor latência, 
                        diferente de soluções internacionais que podem armazenar dados em jurisdições com 
                        leis de privacidade menos rigorosas.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-white">Controle Total de Acesso</h4>
                      <p className="text-gray-300">
                        Você tem controle completo sobre quem pode entrar nas chamadas, acessar gravações 
                        e transcrições, com permissões granulares que podem ser configuradas de acordo com 
                        as necessidades da sua organização.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Compliance Certifications */}
        <section className="py-20 bg-gray-950">
          <div className="container mx-auto px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Certificações e Conformidade</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Nossa plataforma atende aos mais rigorosos padrões regulatórios nacionais e internacionais.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {complianceCertifications.map((cert, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gray-900 rounded-xl p-6 shadow-lg text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="mx-auto mb-4 bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                    {cert.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{cert.title}</h3>
                  <p className="text-gray-300">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Comparison */}
        <section className="py-20 bg-gray-950">
          <div className="container mx-auto px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Comparativo de Segurança</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Veja como nossa solução se compara a outras plataformas de videochamadas em termos de segurança.
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-900">
                    <th className="p-4 text-left text-white border-b border-gray-800">Recurso de Segurança</th>
                    <th className="p-4 text-center text-white border-b border-gray-800">videochamada.com.br</th>
                    <th className="p-4 text-center text-white border-b border-gray-800">Plataformas Genéricas</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-900/50">
                    <td className="p-4 border-b border-gray-800 text-white">Servidores no Brasil</td>
                    <td className="p-4 border-b border-gray-800 text-center text-green-400">
                      <CheckCircle className="w-6 h-6 mx-auto" />
                    </td>
                    <td className="p-4 border-b border-gray-800 text-center text-red-400">
                      <AlertTriangle className="w-6 h-6 mx-auto" />
                    </td>
                  </tr>
                  <tr className="bg-gray-900/30">
                    <td className="p-4 border-b border-gray-800 text-white">Conformidade com LGPD</td>
                    <td className="p-4 border-b border-gray-800 text-center text-green-400">
                      <CheckCircle className="w-6 h-6 mx-auto" />
                    </td>
                    <td className="p-4 border-b border-gray-800 text-center text-red-400">
                      <AlertTriangle className="w-6 h-6 mx-auto" />
                    </td>
                  </tr>
                  <tr className="bg-gray-900/50">
                    <td className="p-4 border-b border-gray-800 text-white">Gravação sem participantes adicionais</td>
                    <td className="p-4 border-b border-gray-800 text-center text-green-400">
                      <CheckCircle className="w-6 h-6 mx-auto" />
                    </td>
                    <td className="p-4 border-b border-gray-800 text-center text-red-400">
                      <AlertTriangle className="w-6 h-6 mx-auto" />
                    </td>
                  </tr>
                  <tr className="bg-gray-900/30">
                    <td className="p-4 border-b border-gray-800 text-white">Criptografia AES-256</td>
                    <td className="p-4 border-b border-gray-800 text-center text-green-400">
                      <CheckCircle className="w-6 h-6 mx-auto" />
                    </td>
                    <td className="p-4 border-b border-gray-800 text-center text-gray-400">
                      Varia
                    </td>
                  </tr>
                  <tr className="bg-gray-900/50">
                    <td className="p-4 border-b border-gray-800 text-white">Suporte técnico em português</td>
                    <td className="p-4 border-b border-gray-800 text-center text-green-400">
                      <CheckCircle className="w-6 h-6 mx-auto" />
                    </td>
                    <td className="p-4 border-b border-gray-800 text-center text-red-400">
                      <AlertTriangle className="w-6 h-6 mx-auto" />
                    </td>
                  </tr>
                </tbody>
              </table>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Perguntas Frequentes sobre Segurança</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tire suas dúvidas sobre como protegemos suas videochamadas.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              {securityFAQs.map((faq, index) => (
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
                Comunicações Seguras para Seu Negócio
              </h2>
              <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
                Experimente nossa plataforma com 2.000 minutos grátis e descubra como podemos ajudar 
                a proteger suas comunicações mais importantes.
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

export default SegurancaAvancada;
