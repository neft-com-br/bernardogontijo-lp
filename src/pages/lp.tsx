import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Code,
  Webhook,
  Package,
  BookOpen,
  Gift,
  DollarSign,
  XCircle,
  MapPin,
  Shield,
  MessageCircle,
  Video,
  Brain,
  Zap
} from 'lucide-react';
import { CodeBlock } from '../components/ui/code-block';
import FinalCTA from '../components/FinalCTA';

const SIGNUP_URL = "https://app.videochamada.com.br/cadastrar";
const DOCS_URL = "https://documentacao.videochamada.com.br";

// Code example for Hero
const codeExample = [{
  title: "quickstart.js",
  language: "javascript",
  code: `// Crie uma videochamada em segundos
const response = await fetch('https://api.videochamada.com.br/api/calls', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer {API_TOKEN}',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({})
});

const data = await response.json();
console.log('Chamada criada:', data);`
}];

// Hero Section
const HeroSection = () => (
  <section className="w-full bg-gray-950 py-20 md:py-28 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent"></div>

    <div className="container mx-auto px-6 relative z-10">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Gift className="w-4 h-4" />
            2.000 minutos grátis/mês
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter font-bold text-white mb-6">
            Integre videochamadas em <span className="text-primary">minutos</span>, não dias
          </h1>

          <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-8">
            API REST simples para adicionar videochamadas em qualquer aplicação.
            Documentação completa, SDKs oficiais, webhooks em tempo real.
            Servidores no Brasil, preço em reais.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={SIGNUP_URL}
              className="group bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-full text-center transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 transform hover:-translate-y-1 flex items-center justify-center"
            >
              Criar conta grátis
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href={DOCS_URL}
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 font-bold py-4 px-8 rounded-full text-center transition-all duration-300 flex items-center justify-center"
            >
              <BookOpen className="mr-2 w-5 h-5" />
              Ver documentação
            </a>
          </div>
        </motion.div>

        <motion.div
          className="lg:w-1/2 w-full"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <CodeBlock
            files={codeExample}
            className="bg-gray-900/80 border border-gray-800"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

// Problema Section
const ProblemaSection = () => {
  const problemas = [
    {
      icon: <Code className="w-8 h-8 text-red-400" />,
      title: "APIs complexas e confusas",
      description: "Documentação fragmentada, SDKs desatualizados, curva de aprendizado enorme."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-red-400" />,
      title: "Pricing em dólar",
      description: "Preços que variam com o câmbio, faturas imprevisíveis, difícil planejar custos."
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-red-400" />,
      title: "Suporte apenas em inglês",
      description: "Tickets demorados, timezone incompatível, barreiras de comunicação."
    }
  ];

  return (
    <section className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <XCircle className="w-4 h-4" />
            O problema
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            APIs de vídeo internacionais são complicadas
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Twilio, Vonage, Daily... todas têm os mesmos problemas para desenvolvedores brasileiros.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problemas.map((problema, index) => (
            <motion.div
              key={index}
              className="bg-gray-950 border border-red-500/20 rounded-2xl p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-6 bg-red-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto">
                {problema.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{problema.title}</h3>
              <p className="text-gray-400">{problema.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Solucao Section
const SolucaoSection = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "REST API simples",
      description: "Endpoints intuitivos, autenticação via Bearer token, respostas JSON padronizadas."
    },
    {
      icon: <Webhook className="w-8 h-8 text-primary" />,
      title: "Webhooks em tempo real",
      description: "Receba eventos instantâneos: room.created, participant.joined, recording.ready."
    },
    {
      icon: <Package className="w-8 h-8 text-primary" />,
      title: "SDKs oficiais",
      description: "JavaScript, Python, PHP, Ruby. Instalação via npm, pip, composer."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      title: "Documentação completa",
      description: "Guias passo a passo, exemplos de código, referência de API, tudo em português."
    },
    {
      icon: <Gift className="w-8 h-8 text-primary" />,
      title: "2.000 min grátis/mês",
      description: "Comece sem cartão de crédito. Escale quando precisar, pague só o que usar."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-primary" />,
      title: "Preço em reais",
      description: "R$ 0,015/minuto. Sem surpresas de câmbio, fatura previsível todo mês."
    }
  ];

  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            A solução
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            API feita para desenvolvedores brasileiros
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tudo que você precisa para integrar videochamadas em qualquer stack.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-6 bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a
            href={DOCS_URL}
            className="group text-primary hover:text-primary/80 font-semibold inline-flex items-center text-lg transition-colors"
          >
            Explorar documentação
            <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

// Diferenciais Section
const DiferenciaisSection = () => {
  const diferenciais = [
    {
      icon: <MapPin className="w-8 h-8 text-primary" />,
      title: "Servidores no Brasil",
      description: "Baixa latência para usuários brasileiros, dados em território nacional."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "LGPD e HIPAA",
      description: "Conformidade total com regulamentações brasileiras e internacionais de privacidade."
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-primary" />,
      title: "Suporte em português",
      description: "Time brasileiro, horário comercial BR, respostas rápidas via WhatsApp."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Preço transparente",
      description: "Sem taxas escondidas, sem mínimos mensais, pague exatamente o que usar."
    },
    {
      icon: <Video className="w-8 h-8 text-primary" />,
      title: "Gravação e transcrição",
      description: "Grave chamadas, transcreva automaticamente, armazene na nuvem."
    },
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "IA integrada",
      description: "Resumos automáticos, análise de sentimento, insights das conversas."
    }
  ];

  return (
    <section className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Por que escolher o videochamada.com.br?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A única API de vídeo construída do zero para o mercado brasileiro.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diferenciais.map((diferencial, index) => (
            <motion.div
              key={index}
              className="bg-gray-950 border border-primary/20 rounded-2xl p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-6 bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center">
                {diferencial.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{diferencial.title}</h3>
              <p className="text-gray-300">{diferencial.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Stats Section
const StatsSection = () => (
  <section className="py-16 bg-gray-950">
    <div className="container mx-auto px-6">
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div>
          <div className="text-4xl md:text-5xl font-bold text-primary mb-2">1M+</div>
          <div className="text-gray-400">Chamadas de API</div>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-bold text-primary mb-2">99.9%</div>
          <div className="text-gray-400">Uptime garantido</div>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-bold text-primary mb-2">&lt;100ms</div>
          <div className="text-gray-400">Latência média</div>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-bold text-primary mb-2">R$0,015</div>
          <div className="text-gray-400">Por minuto</div>
        </div>
      </motion.div>
    </div>
  </section>
);

// Main Page Component
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Head>
        <title>API de Videochamada para Desenvolvedores | videochamada.com.br</title>
        <meta name="description" content="Integre videochamadas em sua aplicação com API REST simples. 2.000 minutos grátis/mês. Servidores no Brasil, preço em R$, suporte em português." />
        <link rel="canonical" href="https://videochamada.com.br/lp/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://videochamada.com.br/lp/" />
        <meta property="og:title" content="API de Videochamada para Desenvolvedores | videochamada.com.br" />
        <meta property="og:description" content="Integre videochamadas em sua aplicação com API REST simples. 2.000 minutos grátis/mês. Servidores no Brasil, preço em R$, suporte em português." />
        <meta property="og:image" content="https://videochamada.com.br/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://videochamada.com.br/lp/" />
        <meta name="twitter:title" content="API de Videochamada para Desenvolvedores | videochamada.com.br" />
        <meta name="twitter:description" content="Integre videochamadas em sua aplicação com API REST simples. 2.000 minutos grátis/mês. Servidores no Brasil, preço em R$, suporte em português." />
        <meta name="twitter:image" content="https://videochamada.com.br/og-image.png" />
      </Head>

      <main className="pt-18">
        <HeroSection />
        <ProblemaSection />
        <SolucaoSection />
        <DiferenciaisSection />
        <StatsSection />
        <FinalCTA />
      </main>
    </div>
  );
}
