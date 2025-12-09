import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Check, CheckCircle, ArrowRight, Calculator } from 'lucide-react';
import Header from '../components/Header';

const Precos = () => {
  const freeFeatures = [
    "2.000 minutos grátis por mês",
    "Pré-checagem de hardware",
    "Até 4 participantes por chamada",
    "Integração Zapier/Make/API",
    "Personalização whitelabel"
  ];

  const paidFeatures = [
    "Todos os recursos do plano Free",
    "R$ 0,015/minuto/participante após os grátis",
    "Suporte prioritário",
    "Gerente de contas dedicado"
  ];

  const additionalServices = [
    { name: "Gravação", price: "R$ 0,075/minuto" },
    { name: "Armazenamento", price: "R$ 0,015/minuto" },
    { name: "Transcrição", price: "R$ 0,0225/minuto" },
    { name: "Resumo baseado em prompt", price: "R$ 0,020/minuto" }
  ];

  const faqs = [
    {
      question: "Preciso pagar assinatura para usar a API de videochamadas?",
      answer: "Não, oferecemos 2.000 minutos grátis por mês e depois disso você paga apenas pelo que usar (R$ 0,015/minuto/participante). Não há assinaturas obrigatórias ou contratos de longo prazo."
    },
    {
      question: "Como funciona a cobrança pelos recursos adicionais como gravação?",
      answer: "Os recursos adicionais são cobrados separadamente: Gravação (R$ 0,075/minuto), Armazenamento (R$ 0,015/minuto), Transcrição (R$ 0,0225/minuto - não requer gravação) e Resumo baseado em prompt (R$ 0,020/minuto - requer transcrição)."
    },
    {
      question: "Posso testar a plataforma antes de decidir?",
      answer: "Sim, você pode criar uma conta gratuita e utilizar os 2.000 minutos mensais sem nenhum custo ou compromisso. Não é necessário fornecer dados de cartão de crédito para começar."
    },
    {
      question: "Existe algum limite de participantes por chamada?",
      answer: "Nossa plataforma suporta até 4 participantes por chamada, sendo ideal para atendimentos empresa-cliente, consultas médicas, terapias e outros cenários de atendimento personalizado."
    }
  ];

  // Pricing Calculator State
  const [callDuration, setCallDuration] = useState(45);
  const [participants, setParticipants] = useState(2);
  const [callsPerMonth, setCallsPerMonth] = useState(20);
  const [enableRecording, setEnableRecording] = useState(false);
  const [enableTranscription, setEnableTranscription] = useState(false);
  const [enableSummary, setEnableSummary] = useState(false);
  
  // Calculated values
  const [totalMinutes, setTotalMinutes] = useState(0);
  const [freeMinutesUsed, setFreeMinutesUsed] = useState(0);
  const [paidMinutes, setPaidMinutes] = useState(0);
  const [videocallCost, setVideocallCost] = useState(0);
  const [recordingCost, setRecordingCost] = useState(0);
  const [transcriptionCost, setTranscriptionCost] = useState(0);
  const [summaryCost, setSummaryCost] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  // Handle recording checkbox change
  const handleRecordingChange = (checked: boolean) => {
    setEnableRecording(checked);
    
    // If recording is disabled, also disable transcription and summary
    if (!checked) {
      setEnableTranscription(false);
      setEnableSummary(false);
    }
  };

  // Handle transcription checkbox change
  const handleTranscriptionChange = (checked: boolean) => {
    setEnableTranscription(checked);
    
    // If transcription is disabled, also disable summary
    if (!checked) {
      setEnableSummary(false);
    }
  };

  // Calculate costs whenever inputs change
  useEffect(() => {
    // Calculate total minutes of videocalls
    const totalMins = callDuration * callsPerMonth;
    setTotalMinutes(totalMins);
    
    // Calculate how many free minutes are used
    const freeMins = Math.min(totalMins * participants, 2000);
    setFreeMinutesUsed(freeMins);
    
    // Calculate paid minutes (if any)
    const paidMins = Math.max(0, (totalMins * participants) - 2000);
    setPaidMinutes(paidMins);
    
    // Calculate videocall cost
    const videoCost = paidMins * 0.015;
    setVideocallCost(videoCost);
    
    // Calculate recording cost (if enabled)
    const recCost = enableRecording ? totalMins * 0.075 : 0;
    setRecordingCost(recCost);
    
    // Calculate transcription cost (if enabled)
    const transCost = enableTranscription ? totalMins * 0.0225 : 0;
    setTranscriptionCost(transCost);
    
    // Calculate summary cost (if enabled)
    const sumCost = enableSummary ? totalMins * 0.020 : 0;
    setSummaryCost(sumCost);
    
    // Calculate total cost
    setTotalCost(videoCost + recCost + transCost + sumCost);
  }, [callDuration, participants, callsPerMonth, enableRecording, enableTranscription, enableSummary]);

  return (
    <div className="min-h-screen bg-gray-950 text-dark-text flex flex-col">
      <Head>
        <title>Preços | videochamada.com.br</title>
        <meta name="description" content="Conheça nossos preços transparentes sem assinaturas obrigatórias. 2.000 minutos grátis por mês e pague apenas pelo que usar. Calcule seus custos com nossa ferramenta interativa." />
        <link rel="canonical" href="https://videochamada.com.br/precos/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://videochamada.com.br/precos/" />
        <meta property="og:title" content="Preços | videochamada.com.br" />
        <meta property="og:description" content="Conheça nossos preços transparentes sem assinaturas obrigatórias. 2.000 minutos grátis por mês e pague apenas pelo que usar. Calcule seus custos com nossa ferramenta interativa." />
        <meta property="og:image" content="https://videochamada.com.br/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://videochamada.com.br/precos/" />
        <meta name="twitter:title" content="Preços | videochamada.com.br" />
        <meta name="twitter:description" content="Conheça nossos preços transparentes sem assinaturas obrigatórias. 2.000 minutos grátis por mês e pague apenas pelo que usar. Calcule seus custos com nossa ferramenta interativa." />
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
              Preços Transparentes
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Aqui, você sabe exatamente o que está pagando. Sem assinaturas obrigatórias, sem taxas ocultas.
              Pague apenas pelo que usar.
            </motion.p>
          </div>
        </section>

        {/* Main Pricing Plans */}
        <section className="py-20 bg-gray-950">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-8 mb-16 max-w-5xl mx-auto">
              {/* Free Plan */}
              <motion.div 
                className="lg:w-1/2 bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="bg-primary p-8 text-white relative overflow-hidden">
                  <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full"></div>
                  <h3 className="text-2xl font-bold mb-2 relative z-10">Free</h3>
                  <p className="text-blue-100 relative z-10">Comece sem custos</p>
                </div>
                <div className="p-8">
                  <div className="mb-8">
                    <p className="text-5xl font-bold mb-2 text-white">2.000 minutos</p>
                    <p className="text-gray-300">grátis por mês</p>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {freeFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="https://app.videochamada.com.br/cadastrar" 
                    className="group block w-full bg-primary hover:bg-primary/90 text-white text-center font-bold py-4 px-4 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center"
                  >
                    Teste Grátis
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.div>

              {/* Pay-as-you-go Plan */}
              <motion.div 
                className="lg:w-1/2 bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="bg-blue-400 p-8 text-white relative overflow-hidden">
                  <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full"></div>
                  <h3 className="text-2xl font-bold mb-2 relative z-10">Pay-as-you-go</h3>
                  <p className="text-white/90 relative z-10">Pague apenas pelo que usar</p>
                </div>
                <div className="p-8">
                  <div className="mb-8">
                    <p className="text-5xl font-bold mb-2 text-white">R$ 0,015</p>
                    <p className="text-gray-300">por minuto por participante</p>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {paidFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://api.whatsapp.com/send?phone=5531972156350&text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20plano%20pay-as-you-go" 
                    className="group block w-full bg-blue-400 hover:bg-blue-500 text-white text-center font-bold py-4 px-4 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center"
                  >
                    Saiba Mais
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Additional Services */}
            <motion.div 
              className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden mb-16 max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-8 text-white">Recursos Adicionais</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {additionalServices.map((service, index) => (
                    <div key={index} className="border border-gray-800 rounded-xl p-6 hover:border-primary transition-colors hover-scale">
                      <h4 className="font-bold mb-3 text-white">{service.name}</h4>
                      <p className="text-primary font-semibold">{service.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Pricing Calculator */}
            <motion.div 
              className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden mb-16 max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <Calculator className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold text-white">Calculadora de Preços</h3>
                </div>
                <p className="text-gray-300 mb-8">
                  Estime o custo mensal com base no seu uso esperado. Ajuste os parâmetros abaixo para calcular.
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Input Section */}
                  <div className="space-y-6">
                    <div>
                      <label className="block text-white font-medium mb-2">
                        Duração média de cada videochamada (minutos)
                      </label>
                      <input 
                        type="range" 
                        min="5" 
                        max="120" 
                        step="5" 
                        value={callDuration} 
                        onChange={(e) => setCallDuration(parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between mt-1">
                        <span className="text-gray-400 text-sm">5 min</span>
                        <span className="text-white font-medium">{callDuration} min</span>
                        <span className="text-gray-400 text-sm">120 min</span>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-white font-medium mb-2">
                        Número de participantes por chamada
                      </label>
                      <div className="flex space-x-4">
                        {[2, 3, 4].map((num) => (
                          <button 
                            key={num}
                            onClick={() => setParticipants(num)}
                            className={`flex-1 py-3 rounded-lg border ${
                              participants === num 
                                ? 'bg-primary text-white border-primary' 
                                : 'bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700'
                            } transition-colors`}
                          >
                            {num}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-white font-medium mb-2">
                        Número de chamadas por mês
                      </label>
                      <input 
                        type="range" 
                        min="0" 
                        max="1000" 
                        step="10" 
                        value={callsPerMonth} 
                        onChange={(e) => setCallsPerMonth(parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between mt-1">
                        <span className="text-gray-400 text-sm">0</span>
                        <span className="text-white font-medium">{callsPerMonth} chamadas</span>
                        <span className="text-gray-400 text-sm">1000</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <label className="block text-white font-medium mb-2">
                        Recursos adicionais
                      </label>
                      
                      <div className="flex items-center">
                        <input 
                          type="checkbox" 
                          id="recording" 
                          checked={enableRecording}
                          onChange={(e) => handleRecordingChange(e.target.checked)}
                          className="w-5 h-5 rounded border-gray-700 text-primary focus:ring-primary bg-gray-800"
                        />
                        <label htmlFor="recording" className="ml-2 text-gray-300">
                          Gravação (R$ 0,075/minuto)
                        </label>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="transcription"
                          checked={enableTranscription}
                          onChange={(e) => handleTranscriptionChange(e.target.checked)}
                          className="w-5 h-5 rounded border-gray-700 text-primary focus:ring-primary bg-gray-800"
                        />
                        <label
                          htmlFor="transcription"
                          className="ml-2 text-gray-300"
                        >
                          Transcrição (R$ 0,0225/minuto)
                        </label>
                      </div>
                      
                      <div className="flex items-center">
                        <input 
                          type="checkbox" 
                          id="summary" 
                          checked={enableSummary}
                          onChange={(e) => setEnableSummary(e.target.checked)}
                          disabled={!enableTranscription}
                          className={`w-5 h-5 rounded border-gray-700 text-primary focus:ring-primary ${!enableTranscription ? 'opacity-50 cursor-not-allowed bg-gray-700' : 'bg-gray-800'}`}
                        />
                        <label 
                          htmlFor="summary" 
                          className={`ml-2 ${!enableTranscription ? 'text-gray-500 cursor-not-allowed' : 'text-gray-300'}`}
                        >
                          Resumo com IA (R$ 0,020/minuto)
                          {!enableTranscription && (
                            <span className="ml-2 text-xs text-gray-500 italic">(requer transcrição)</span>
                          )}
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  {/* Results Section */}
                  <div className="bg-gray-800 rounded-xl p-6">
                    <h4 className="text-xl font-bold mb-4 text-white">Estimativa de Custo Mensal</h4>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between text-gray-300">
                        <span>Total de minutos:</span>
                        <span className="font-medium text-white">{totalMinutes} min</span>
                      </div>
                      
                      <div className="flex justify-between text-gray-300">
                        <span>Minutos grátis utilizados:</span>
                        <span className="font-medium text-white">{freeMinutesUsed} min</span>
                      </div>
                      
                      <div className="flex justify-between text-gray-300">
                        <span>Minutos pagos:</span>
                        <span className="font-medium text-white">{paidMinutes} min</span>
                      </div>
                      
                      <div className="border-t border-gray-700 pt-4 space-y-2">
                        <div className="flex justify-between text-gray-300">
                          <span>Custo de videochamadas:</span>
                          <span className="font-medium text-white">R$ {videocallCost.toFixed(2)}</span>
                        </div>
                        
                        {enableRecording && (
                          <div className="flex justify-between text-gray-300">
                            <span>Custo de gravação:</span>
                            <span className="font-medium text-white">R$ {recordingCost.toFixed(2)}</span>
                          </div>
                        )}
                        
                        {enableTranscription && (
                          <div className="flex justify-between text-gray-300">
                            <span>Custo de transcrição:</span>
                            <span className="font-medium text-white">R$ {transcriptionCost.toFixed(2)}</span>
                          </div>
                        )}
                        
                        {enableSummary && (
                          <div className="flex justify-between text-gray-300">
                            <span>Custo de resumo com IA:</span>
                            <span className="font-medium text-white">R$ {summaryCost.toFixed(2)}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-700 pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-white">Total estimado:</span>
                        <span className="text-2xl font-bold text-primary">R$ {totalCost.toFixed(2)}</span>
                      </div>
                      <p className="text-gray-400 text-sm mt-2">
                        Esta é uma estimativa baseada nos parâmetros informados. O custo real pode variar de acordo com o uso efetivo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Custom Plans */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-2xl font-bold mb-4 text-white">Precisa de um Plano Customizado?</h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Para empresas com necessidades específicas, oferecemos planos personalizados. 
                Entre em contato conosco para discutir suas necessidades.
              </p>
              <a
                href="https://api.whatsapp.com/send?phone=5531972156350&text=Olá!%20Gostaria%20de%20conhecer%20melhor%20as%20soluções" 
                className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-10 rounded-full inline-block transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
              >
                Fale Conosco
              </a>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Perguntas Frequentes sobre Preços</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tire suas dúvidas sobre nossa política de preços e cobrança.
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
                Comece Agora com 2.000 Minutos Grátis
              </h2>
              <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
                Sem cartão de crédito, sem compromissos. Experimente nossa plataforma de videochamadas 
                profissional e pague apenas pelo que usar além do plano gratuito.
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

export default Precos;
