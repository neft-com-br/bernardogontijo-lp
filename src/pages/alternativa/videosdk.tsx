import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { CheckCircle, X, ArrowRight, DollarSign, TrendingDown, Percent } from 'lucide-react';
import Header from '../../components/Header';

const VideoSDKAlternativa = () => {
  // Estado para armazenar a taxa de câmbio
  const [exchangeRate, setExchangeRate] = useState(5.0); // Valor padrão
  const [isLoading, setIsLoading] = useState(true);

  // Buscar a taxa de câmbio atual
  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch('https://economia.awesomeapi.com.br/json/USD-BRL');
        const data = await response.json();
        setExchangeRate(parseFloat(data[0].bid));
        setIsLoading(false);
      } catch (error) {
        console.error('Erro ao buscar taxa de câmbio:', error);
        setIsLoading(false);
      }
    };

    fetchExchangeRate();
  }, []);

  // Função para converter USD para BRL
  const convertToBRL = (usdValue: number): string => {
    const brlValue = usdValue * exchangeRate;
    return brlValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 3, maximumFractionDigits: 3 });
  };

  // Cálculo da diferença percentual de preço
  const videosdkMinutePrice = 0.003; // Preço por minuto do VideoSDK em USD
  const videochamadaMinutePrice = 0.015 / exchangeRate; // Preço por minuto da Videochamada.com.br convertido para USD
  const priceDifferencePercent = ((videosdkMinutePrice - videochamadaMinutePrice) / videosdkMinutePrice) * 100;
  const isVideochamadaCheaper = priceDifferencePercent > 0;
  
  // Formatar a diferença de preço para exibição
  const formattedPriceDifference = Math.abs(priceDifferencePercent).toFixed(1) + '%';
  const priceComparisonText = isVideochamadaCheaper 
    ? `Videochamada.com.br é ${formattedPriceDifference} mais barata que o VideoSDK.live` 
    : `VideoSDK.live é ${formattedPriceDifference} mais barato que a Videochamada.com.br`;

  const videochamadaAdvantages = [
    "2.000 minutos grátis por mês sem cartão de crédito",
    "Preços transparentes e acessíveis (R$ 0,015/minuto/participante)",
    "API simples e fácil de integrar",
    "Suporte em português",
    "Gravação, transcrição e resumo com IA integrados",
    "Foco no mercado brasileiro"
  ];

  const videosdkLimitations = [
    "Preços em dólar (sujeitos a variação cambial)",
    "Suporte limitado para o mercado brasileiro",
    "Documentação apenas em inglês",
    "Faturamento internacional (impostos adicionais)",
    "Latência potencialmente maior para usuários brasileiros",
    "Sem recursos avançados de IA integrados nativamente"
  ];

  const comparisonTable = [
    { feature: "Preço inicial", videochamada: "Grátis (2.000 min/mês)", videosdk: "Plano gratuito limitado" },
    { feature: "Preço por minuto", videochamada: "R$ 0,015/min/participante", videosdk: `$0,003/min/participante (${convertToBRL(0.003)})` },
    { feature: "Modelo de cobrança", videochamada: "Pay-as-you-go em reais", videosdk: "Planos em dólar" },
    { feature: "Participantes por sala", videochamada: "Até 4", videosdk: "Variável conforme plano" },
    { feature: "Gravação", videochamada: "Integrada (R$ 0,075/min)", videosdk: `$0.015/min (${convertToBRL(0.015)})` },
    { feature: "Transcrição", videochamada: "Integrada (R$ 0,0225/min)", videosdk: `$0.0045/min (${convertToBRL(0.0045)})` },
    { feature: "Resumo com IA", videochamada: "Integrado (R$ 0,020/min)", videosdk: `$0.004/min (${convertToBRL(0.004)})` },
    { feature: "Personalização", videochamada: "Completa (whitelabel)", videosdk: "Disponível em planos premium" },
    { feature: "Suporte", videochamada: "Em português, dedicado", videosdk: "Em inglês" },
    { feature: "Faturamento", videochamada: "Em reais (nota fiscal)", videosdk: "Em dólar (internacional)" }
  ];

  const faqs = [
    {
      question: "Por que escolher Videochamada.com.br em vez do VideoSDK.live?",
      answer: "A Videochamada.com.br oferece uma solução mais adaptada ao mercado brasileiro, com preços em reais, 2.000 minutos grátis mensais sem necessidade de cartão de crédito, suporte em português e faturamento nacional, evitando custos adicionais com impostos de remessa internacional."
    },
    {
      question: "A Videochamada.com.br tem os mesmos recursos do VideoSDK.live?",
      answer: "Sim, oferecemos os recursos essenciais de videochamada e vamos além com funcionalidades integradas como gravação, transcrição e resumo com IA, tudo com preços transparentes em reais e suporte local."
    },
    {
      question: "É fácil migrar do VideoSDK.live para a Videochamada.com.br?",
      answer: "Sim! Nossa API é simples e intuitiva, com documentação em português. Além disso, oferecemos suporte técnico dedicado para ajudar no processo de migração, garantindo uma transição suave para sua aplicação."
    },
    {
      question: "A Videochamada.com.br é mais econômica que o VideoSDK.live?",
      answer: "Para empresas brasileiras, geralmente sim. Além de evitar a variação cambial e impostos de remessa internacional, oferecemos 2.000 minutos grátis por mês e um modelo pay-as-you-go de apenas R$ 0,015 por minuto por participante após o limite gratuito, com faturamento em reais."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-dark-text flex flex-col">
      <Head>
        <title>Alternativa mais barata ao VideoSDK.live | videochamada.com.br</title>
        <meta name="description" content="Conheça nossa alternativa brasileira ao VideoSDK.live com preços em reais, 2.000 minutos grátis por mês, suporte em português e recursos avançados de IA integrados." />
        <link rel="canonical" href="https://videochamada.com.br/alternativa/videosdk/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://videochamada.com.br/alternativa/videosdk/" />
        <meta property="og:title" content="Alternativa mais barata ao VideoSDK.live | videochamada.com.br" />
        <meta property="og:description" content="Conheça nossa alternativa brasileira ao VideoSDK.live com preços em reais, 2.000 minutos grátis por mês, suporte em português e recursos avançados de IA integrados." />
        <meta property="og:image" content="https://videochamada.com.br/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://videochamada.com.br/alternativa/videosdk/" />
        <meta name="twitter:title" content="Alternativa mais barata ao VideoSDK.live | videochamada.com.br" />
        <meta name="twitter:description" content="Conheça nossa alternativa brasileira ao VideoSDK.live com preços em reais, 2.000 minutos grátis por mês, suporte em português e recursos avançados de IA integrados." />
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
              Alternativa ao VideoSDK.live
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Uma solução de videochamadas brasileira, com preços em reais e suporte local.
            </motion.p>
            
            {/* Destaque da diferença de preço */}
            {!isLoading && (
              <motion.div
                className={`mb-6 p-4 rounded-lg ${isVideochamadaCheaper ? 'bg-green-900/30' : 'bg-red-900/30'} border ${isVideochamadaCheaper ? 'border-green-500' : 'border-red-500'} max-w-2xl mx-auto`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              >
                <div className="flex items-center justify-center">
                  <div className="text-2xl font-bold text-white">
                    {isVideochamadaCheaper ? (
                      <>
                        <TrendingDown className="inline-block w-6 h-6 text-green-400 mr-1" />
                        <span className="text-green-400">{formattedPriceDifference}</span>
                      </>
                    ) : (
                      <>
                        <Percent className="inline-block w-6 h-6 text-red-400 mr-1" />
                        <span className="text-red-400">{formattedPriceDifference}</span>
                      </>
                    )}
                    <span className="mx-2">{isVideochamadaCheaper ? 'mais barato' : 'mais caro'}</span>
                    <span className="text-gray-300">que o VideoSDK.live</span>
                  </div>
                </div>
                <p className="text-center text-gray-300 mt-2">
                  {isVideochamadaCheaper 
                    ? `Economize com a Videochamada.com.br: R$ 0,015/min vs ${convertToBRL(videosdkMinutePrice)}/min do VideoSDK.live` 
                    : `O VideoSDK.live custa ${convertToBRL(videosdkMinutePrice)}/min vs R$ 0,015/min da Videochamada.com.br`}
                </p>
              </motion.div>
            )}
            
            {isLoading ? (
              <p className="text-sm text-gray-400 mb-4">Carregando taxas de câmbio...</p>
            ) : (
              <p className="text-sm text-gray-400 mb-4">Taxa de câmbio atual: US$ 1 = {exchangeRate.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
            )}
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
                Por que escolher Videochamada.com.br em vez do VideoSDK.live?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Compare as vantagens e entenda por que somos a melhor alternativa para o mercado brasileiro.
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

              {/* VideoSDK Limitations */}
              <motion.div 
                className="lg:w-1/2 bg-gray-900 rounded-2xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="bg-gray-800 p-6 text-white">
                  <h3 className="text-2xl font-bold">Limitações do VideoSDK.live</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
                    {videosdkLimitations.map((limitation, index) => (
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
                <h3 className="text-2xl font-bold text-white">Comparação de Recursos</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-800">
                      <th className="py-4 px-6 text-left text-white font-bold">Recurso</th>
                      <th className="py-4 px-6 text-left text-primary font-bold">Videochamada.com.br</th>
                      <th className="py-4 px-6 text-left text-gray-400 font-bold">VideoSDK.live</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonTable.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-900' : 'bg-gray-800/50'}>
                        <td className="py-4 px-6 text-white">{row.feature}</td>
                        <td className="py-4 px-6 text-primary font-medium">{row.videochamada}</td>
                        <td className="py-4 px-6 text-gray-400">{row.videosdk}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-6">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Comparação de Preços</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Compare os preços do VideoSDK.live com nossa solução mais econômica
              </p>
            </motion.div>
            
            <div className="flex flex-col md:flex-row gap-8 mb-16">
              {/* VideoSDK.live Pricing */}
              <motion.div 
                className="md:w-1/2 bg-gray-800 rounded-2xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="p-8 border-b border-gray-700">
                  <h3 className="text-2xl font-bold text-white mb-2">VideoSDK.live</h3>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-white">Pay-as-you-go</span>
                  </div>
                  <p className="text-gray-400 mt-1">Plano gratuito limitado</p>
                  
                  {!isLoading && !isVideochamadaCheaper && (
                    <div className="mt-2 inline-block px-3 py-1 bg-green-900/30 border border-green-500 rounded-full">
                      <TrendingDown className="inline-block w-4 h-4 text-green-400 mr-1" />
                      <span className="text-green-400 font-bold">{formattedPriceDifference}</span>
                      <span className="text-green-400"> mais barato</span>
                    </div>
                  )}
                </div>
                <div className="p-8">
                  <p className="text-gray-300 mb-6">Estrutura de preços:</p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-gray-300">Video Call: $0.003 por minuto por participante</span>
                        <p className="text-gray-400 text-sm">{convertToBRL(0.003)} por minuto por participante</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-gray-300">Meeting Recording (Composite): $0.015 por minuto gravado</span>
                        <p className="text-gray-400 text-sm">{convertToBRL(0.015)} por minuto gravado</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-gray-300">Post-Call Transcription: $0.0045 por minuto de transcrição</span>
                        <p className="text-gray-400 text-sm">{convertToBRL(0.0045)} por minuto de transcrição</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-gray-300">Prompt Based Summary: $0.004 por minuto de gravação</span>
                        <p className="text-gray-400 text-sm">{convertToBRL(0.004)} por minuto de gravação</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </motion.div>
              
              {/* Videochamada.com.br Pricing */}
              <motion.div 
                className="md:w-1/2 bg-gray-800 rounded-2xl overflow-hidden shadow-lg border-2 border-primary"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="p-8 border-b border-gray-700 bg-primary/10">
                  <h3 className="text-2xl font-bold text-white mb-2">Videochamada.com.br</h3>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-white">Grátis</span>
                    <span className="text-gray-300 ml-2">para começar</span>
                  </div>
                  <p className="text-gray-300 mt-1">2.000 minutos grátis por mês</p>
                  
                  {!isLoading && isVideochamadaCheaper && (
                    <div className="mt-2 inline-block px-3 py-1 bg-green-900/30 border border-green-500 rounded-full">
                      <TrendingDown className="inline-block w-4 h-4 text-green-400 mr-1" />
                      <span className="text-green-400 font-bold">{formattedPriceDifference}</span>
                      <span className="text-green-400"> mais barato</span>
                    </div>
                  )}
                </div>
                <div className="p-8">
                  <p className="text-gray-300 mb-6">Estrutura de preços simples:</p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">2.000 minutos grátis por mês sem cartão de crédito</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">R$ 0,015 por minuto por participante após o limite grátis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Gravação: R$ 0,075 por minuto</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Transcrição: R$ 0,0225 por minuto</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Resumo com IA: R$ 0,020 por minuto</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
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
                Tire suas dúvidas sobre a migração do VideoSDK.live para a Videochamada.com.br.
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
                Pronto para uma Alternativa Brasileira?
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

export default VideoSDKAlternativa;
