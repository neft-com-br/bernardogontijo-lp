import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, ExternalLink, Check, X, ChevronDown, ChevronUp, Star, Zap, Building2, Rocket, Heart, Code, Server, Users, DollarSign } from 'lucide-react';

interface ApiData {
  name: string;
  website: string;
  priceInitial: string;
  maxParticipants: string;
  platforms: string;
  recording: boolean;
  e2eEncryption: boolean;
  highlight: string;
  yearLaunched: string;
  positioning: string;
  maxQuality: string;
  protocols: string;
  latency: string;
  features: string[];
  sdks: string[];
  certifications: string[];
  pricing: { item: string; price: string }[];
  freeTier: string;
  strengths: string[];
  weaknesses: string[];
  useCases: string[];
  warning?: string;
}

const apis: ApiData[] = [
  {
    name: "Twilio Video",
    website: "https://www.twilio.com/video",
    priceInitial: "$0.004/min",
    maxParticipants: "50",
    platforms: "Web, iOS, Android",
    recording: true,
    e2eEncryption: true,
    highlight: "Infraestrutura robusta",
    yearLaunched: "2016",
    positioning: "Enterprise e Startups",
    maxQuality: "1080p HD",
    protocols: "WebRTC",
    latency: "Baixa (infraestrutura global)",
    features: ["Chamadas 1:1 e em grupo", "Compartilhamento de tela", "Gravação na nuvem", "Salas P2P e Group Rooms", "Fundos virtuais", "Network Quality API"],
    sdks: ["JavaScript", "iOS (Swift)", "Android (Kotlin)", "React", "React Native"],
    certifications: ["HIPAA", "SOC 2", "GDPR", "ISO 27001"],
    pricing: [
      { item: "P2P Rooms", price: "$0.0015/participante/minuto" },
      { item: "Group Rooms", price: "$0.004/participante/minuto" },
      { item: "Gravação", price: "$0.004/min + $0.01/min composição" }
    ],
    freeTier: "Não especificado",
    strengths: ["Infraestrutura global comprovada", "Documentação extensa", "Ecossistema completo (voz, SMS, vídeo)", "Suporte enterprise robusto"],
    weaknesses: ["Sunset anunciado do produto Video", "Preços podem escalar rapidamente", "Alta complexidade de integração", "Sem diferenciação de preço áudio/vídeo"],
    useCases: ["Telemedicina (HIPAA)", "Suporte ao cliente", "Aplicações enterprise existentes no ecossistema Twilio"],
    warning: "Twilio anunciou o sunset do Programmable Video em dezembro de 2024. Verifique o status atual antes de iniciar novos projetos."
  },
  {
    name: "Agora.io",
    website: "https://www.agora.io",
    priceInitial: "$0.99/1K min (áudio)",
    maxParticipants: "1M+",
    platforms: "Web, iOS, Android, Desktop",
    recording: true,
    e2eEncryption: true,
    highlight: "Baixa latência global",
    yearLaunched: "2014",
    positioning: "Enterprise, Gaming, Educação",
    maxQuality: "4K Ultra HD",
    protocols: "WebRTC, RTMP, proprietário",
    latency: "Ultra-baixa (~400ms global)",
    features: ["Chamadas 1:1 e em grupo", "Interactive Live Streaming", "Transmissão para milhões", "Transcrição em tempo real", "Tradução de voz", "Whiteboard interativo", "Cloud Recording", "Noise Suppression com IA"],
    sdks: ["Web", "iOS", "Android", "Windows", "macOS", "Linux", "Unity", "Flutter", "React Native", "Electron", "IoT SDK"],
    certifications: ["SOC 2", "GDPR", "HIPAA"],
    pricing: [
      { item: "Áudio", price: "$0.99/1000 minutos" },
      { item: "Vídeo HD", price: "$3.99/1000 minutos" },
      { item: "Vídeo Full HD", price: "$8.99/1000 minutos" },
      { item: "Pacote Premium", price: "$339.99/mês" }
    ],
    freeTier: "10.000 minutos/mês",
    strengths: ["Rede global otimizada (SD-RTN)", "Suporte a milhões de usuários simultâneos", "Recursos avançados de IA", "Programa para startups"],
    weaknesses: ["Documentação às vezes confusa", "Precificação baseada em resolução agregada (complexa)", "Curva de aprendizado íngreme", "Suporte pode ser lento para planos básicos"],
    useCases: ["Gaming e metaverso", "Educação online em escala", "Live streaming interativo", "Apps sociais com vídeo"]
  },
  {
    name: "Daily.co",
    website: "https://www.daily.co",
    priceInitial: "$0.004/min",
    maxParticipants: "100K",
    platforms: "Web, iOS, Android",
    recording: true,
    e2eEncryption: true,
    highlight: "Facilidade de integração",
    yearLaunched: "2016",
    positioning: "Startups, SMBs, Desenvolvedores",
    maxQuality: "1080p HD (sem custo extra)",
    protocols: "WebRTC",
    latency: "~13ms first hop (infraestrutura global)",
    features: ["Chamadas 1:1 e em grupo", "Daily Prebuilt (UI pronta)", "4 modos de gravação", "Screen sharing HD", "Breakout rooms", "Krisp noise cancellation", "Transcrição em tempo real", "Integração com OpenAI"],
    sdks: ["JavaScript", "React", "React Native", "iOS (Swift)", "Android (Kotlin)", "REST API", "Webhooks"],
    certifications: ["SOC 2 Type 2", "GDPR", "HIPAA"],
    pricing: [
      { item: "Vídeo/Áudio", price: "$0.004/participante/minuto" },
      { item: "Áudio apenas", price: "$0.00099/minuto" },
      { item: "Gravação", price: "$0.01/minuto + $0.003/min storage" }
    ],
    freeTier: "10.000 minutos/mês",
    strengths: ["Precificação simples e transparente", "Excelente experiência do desenvolvedor", "Daily Prebuilt para MVP rápido", "Documentação exemplar", "Suporte responsivo"],
    weaknesses: ["Menos recursos enterprise que concorrentes", "Menor reconhecimento de marca", "Limitações em alguns navegadores mobile", "Analytics avançado apenas para enterprise"],
    useCases: ["Telemedicina", "EdTech", "Startups precisando de time-to-market rápido", "Agentes de voz com IA (Pipecat)"]
  },
  {
    name: "Zoom Video SDK",
    website: "https://www.zoom.com/video-sdk",
    priceInitial: "$0.0035/min",
    maxParticipants: "1000",
    platforms: "Web, iOS, Android, Desktop",
    recording: true,
    e2eEncryption: true,
    highlight: "Reconhecimento de marca",
    yearLaunched: "2021",
    positioning: "Enterprise, uso geral",
    maxQuality: "1080p HD",
    protocols: "WebRTC, Zoom proprietário",
    latency: "Baixa (infraestrutura Zoom)",
    features: ["Vídeo e áudio HD", "Screen sharing", "Chat em tempo real", "Cloud recording", "Data streams", "Virtual backgrounds", "Noise suppression"],
    sdks: ["Web", "iOS", "Android", "Windows", "macOS", "Linux", "React Native", "Flutter", "Electron"],
    certifications: ["SOC 2", "HIPAA", "GDPR", "FedRAMP"],
    pricing: [
      { item: "Video SDK", price: "$0.0035/minuto por sessão" },
      { item: "Recording", price: "$0.015/min (pay-as-you-go)" },
      { item: "Universal Credit", price: "$1000/ano (30K min/mês inclusos)" }
    ],
    freeTier: "10.000 minutos/mês",
    strengths: ["Reconhecimento universal da marca Zoom", "Infraestrutura comprovada em escala global", "Qualidade de vídeo consistente", "Meeting SDK disponível sem custo adicional"],
    weaknesses: ["Whiteboard não disponível no SDK", "Plugins são cobrados separadamente", "Sem desconto por volume no pay-as-you-go", "Suporte premium caro ($1900/mês+)"],
    useCases: ["Aplicações enterprise", "Quando familiaridade com Zoom é importante", "Integrações com ecossistema Zoom existente"]
  },
  {
    name: "Amazon Chime SDK",
    website: "https://aws.amazon.com/chime/chime-sdk",
    priceInitial: "$0.0017/min",
    maxParticipants: "250 / 25 (HD)",
    platforms: "Web, iOS, Android, Windows",
    recording: true,
    e2eEncryption: true,
    highlight: "Integração AWS",
    yearLaunched: "2020",
    positioning: "Enterprise, desenvolvedores AWS",
    maxQuality: "1080p (HD sessions), 4K screen share",
    protocols: "WebRTC",
    latency: "Baixa (infraestrutura AWS global)",
    features: ["Vídeo e áudio em tempo real", "Simulcast e SVC", "Media capture para S3", "Live transcription", "PSTN audio integration", "Amazon Voice Focus (noise reduction)", "Echo reduction com ML", "Messaging SDK"],
    sdks: ["JavaScript", "iOS (Swift)", "Android (Kotlin)", "Windows (C++)", "React", "React Native"],
    certifications: ["HIPAA", "SOC", "ISO 27001", "FedRAMP", "GovCloud"],
    pricing: [
      { item: "WebRTC", price: "$0.0017/participante/minuto" },
      { item: "Media Capture 1080p", price: "$0.0125/minuto" },
      { item: "PSTN (EUA)", price: "$0.0022/min inbound" },
      { item: "Messaging", price: "$0.01/1000 mensagens" }
    ],
    freeTier: "Free tier AWS (12 meses)",
    strengths: ["Integração nativa com serviços AWS", "Pay-per-use sem compromisso", "Escalabilidade automática", "Compliance robusto (GovCloud)", "ML features (Voice Focus, Transcribe)"],
    weaknesses: ["Requer conhecimento de AWS", "UI não inclusa (build your own)", "Documentação fragmentada", "Limite de 25 participantes em HD"],
    useCases: ["Aplicações já hospedadas na AWS", "Contact centers", "Telemedicina com requisitos de compliance", "Aplicações governamentais (GovCloud)"]
  },
  {
    name: "100ms",
    website: "https://www.100ms.live",
    priceInitial: "$2.4/1K min",
    maxParticipants: "10K streaming",
    platforms: "Web, iOS, Android",
    recording: true,
    e2eEncryption: true,
    highlight: "Templates pré-construídos",
    yearLaunched: "2020",
    positioning: "Startups, EdTech, Gaming",
    maxQuality: "1080p HD",
    protocols: "WebRTC, HLS",
    latency: "Ultra-baixa",
    features: ["Video conferencing + Live streaming em um SDK", "Templates pré-construídos", "Custom roles no dashboard", "Breakout rooms", "Screen share HD", "Recording com layout custom", "Virtual backgrounds", "Noise cancellation (beta)", "Whiteboard"],
    sdks: ["Web", "iOS", "Android", "React", "React Native", "Flutter", "Server-side SDKs"],
    certifications: ["SOC 2", "GDPR", "HIPAA"],
    pricing: [
      { item: "Conferencing", price: "$2.4/1000 participante-minutos" },
      { item: "Recording", price: "$6/1000 minutos" },
      { item: "RTMP Out", price: "$7.2/1000 minutos" }
    ],
    freeTier: "10.000 minutos/mês",
    strengths: ["SDK único para conferência + streaming", "Templates aceleram desenvolvimento", "Dashboard no-code para roles", "Preço competitivo", "Excelente para EdTech"],
    weaknesses: ["Empresa mais nova (menos track record)", "Documentação em evolução", "Menos integrações enterprise", "Suporte pode demorar"],
    useCases: ["Salas de aula virtuais", "Eventos virtuais", "Audio rooms (Clubhouse-style)", "Gaming com vídeo"]
  },
  {
    name: "LiveKit",
    website: "https://livekit.io",
    priceInitial: "Gratuito (self-host)",
    maxParticipants: "100K+",
    platforms: "Multiplataforma",
    recording: true,
    e2eEncryption: true,
    highlight: "Open-source",
    yearLaunched: "2021",
    positioning: "Desenvolvedores, Enterprise, AI",
    maxQuality: "4K",
    protocols: "WebRTC",
    latency: "Ultra-baixa (SFU otimizado)",
    features: ["100% Open Source (server + SDKs)", "Self-hosting disponível", "LiveKit Cloud gerenciado", "Spatial audio", "Simulcast e SVC", "Recording e streaming", "AI Voice Agents (Pipecat)", "Integração com OpenAI", "Track-level controls"],
    sdks: ["JavaScript", "Swift", "Kotlin", "Flutter", "React Native", "Unity", "Node.js", "Go", "Rust", "Python"],
    certifications: ["SOC 2 (Cloud)"],
    pricing: [
      { item: "Starter", price: "Gratuito (5K min/mês)" },
      { item: "Growth", price: "$49/mês (50K min inclusos)" },
      { item: "Scale", price: "$399/mês (600K min inclusos)" },
      { item: "Self-hosted", price: "Gratuito (código aberto)" }
    ],
    freeTier: "5K min/mês (Cloud) ou ilimitado (self-host)",
    strengths: ["Totalmente open source", "Flexibilidade máxima (self-host ou cloud)", "Comunidade ativa (12K+ stars GitHub)", "Powering ChatGPT Voice Mode", "Foco em AI e voice agents"],
    weaknesses: ["Self-hosting requer expertise", "Empresa relativamente nova", "Menos recursos enterprise-ready out-of-box", "UI precisa ser construída"],
    useCases: ["Voice AI agents", "Aplicações customizadas", "Empresas com requisitos de data sovereignty", "Robotics e IoT"]
  },
  {
    name: "Jitsi Meet",
    website: "https://jitsi.org",
    priceInitial: "Gratuito",
    maxParticipants: "Ilimitado (self-host)",
    platforms: "Web, iOS, Android",
    recording: true,
    e2eEncryption: true,
    highlight: "100% Open-source",
    yearLaunched: "2003 (reescrito 2013)",
    positioning: "Open source, self-hosting",
    maxQuality: "HD",
    protocols: "WebRTC, SIP",
    latency: "Variável (depende de deployment)",
    features: ["100% Open Source", "Sem conta necessária", "meet.jit.si gratuito", "Screen sharing", "Recording (Jibri)", "Dial-in (Jigasi)", "Streaming para YouTube", "E2E encryption", "Lobby/waiting room"],
    sdks: ["Web (iFrame API)", "iOS", "Android (SDKs nativos)", "Electron", "React SDK"],
    certifications: ["Depende do deployment"],
    pricing: [
      { item: "Jitsi Meet", price: "100% Gratuito (open source)" },
      { item: "JaaS Dev", price: "Gratuito (25 MAU)" },
      { item: "JaaS Basic", price: "$99/mês (300 MAU)" }
    ],
    freeTier: "100% gratuito (open source)",
    strengths: ["Completamente gratuito e open source", "Sem vendor lock-in", "Comunidade enorme", "meet.jit.si para testes rápidos", "Privacidade total (self-host)"],
    weaknesses: ["Escalabilidade complexa", "Qualidade pode variar", "Self-hosting requer DevOps expertise", "Menos features enterprise", "UI menos polida"],
    useCases: ["Organizações com requisitos de privacidade", "Budget limitado", "Equipes com expertise DevOps", "Prototipagem rápida"]
  },
  {
    name: "Vonage Video API",
    website: "https://www.vonage.com/communications-apis/video",
    priceInitial: "$0.00395/min",
    maxParticipants: "3000",
    platforms: "Web, iOS, Android",
    recording: true,
    e2eEncryption: true,
    highlight: "Maturidade da plataforma",
    yearLaunched: "2012 (TokBox)",
    positioning: "Enterprise, Telemedicina",
    maxQuality: "1080p HD",
    protocols: "WebRTC",
    latency: "Baixa",
    features: ["Video e voz HD", "Screen sharing", "Recording (24h storage)", "Archiving", "Live streaming (HLS/RTMP)", "SIP interconnect", "AI transcription (novo)", "Scalable Video Coding (VP9 SVC)"],
    sdks: ["JavaScript", "iOS", "Android", "Windows", "Linux", "Node", "PHP", "Python", "Ruby", "Java", ".NET"],
    certifications: ["HIPAA (mediante contato)", "GDPR"],
    pricing: [
      { item: "Participante-minuto", price: "$0.00395/min" },
      { item: "Recording", price: "$0.01/min" },
      { item: "Streaming", price: "$0.00395/min" },
      { item: "Analytics", price: "$500 (add-on)" }
    ],
    freeTier: "Free trial",
    strengths: ["Plataforma madura e estável", "Alta capacidade (3000 participantes)", "Parte do ecossistema Vonage/Ericsson", "Bom suporte enterprise", "Features de AI em evolução"],
    weaknesses: ["Recordings armazenados apenas 24h", "Suporte caro ($3000+)", "Documentação pode ser confusa", "UI não inclusa", "Menos inovação recente"],
    useCases: ["Telemedicina", "Contact centers", "Aplicações enterprise estabelecidas", "Broadcasting em escala"]
  },
  {
    name: "Whereby Embedded",
    website: "https://whereby.com/embedded",
    priceInitial: "$0.004/min",
    maxParticipants: "200",
    platforms: "Web",
    recording: true,
    e2eEncryption: true,
    highlight: "Simplicidade extrema",
    yearLaunched: "2020",
    positioning: "SMBs, Telemedicina, EdTech",
    maxQuality: "720p (1080p em alguns planos)",
    protocols: "WebRTC",
    latency: "Baixa (mesh network global)",
    features: ["Integração com 3 linhas de código", "Pre-built UI inclusa", "SDK para customização", "Screen sharing", "Recording (cloud storage)", "Breakout groups", "Background effects", "Chat integrado", "Transcription com AI"],
    sdks: ["Web (iFrame, Web Component)", "React SDK", "REST API"],
    certifications: ["GDPR", "ISO 27001", "HIPAA (mediante BAA)"],
    pricing: [
      { item: "Free", price: "2000 minutos/mês" },
      { item: "Build", price: "$0.004/min após free tier" },
      { item: "Recording", price: "Custo adicional" }
    ],
    freeTier: "2000 minutos/mês",
    strengths: ["Extremamente fácil de integrar", "UI pronta e bonita", "Privacy by design (Europa)", "Sem downloads para usuários", "Excelente para não-técnicos"],
    weaknesses: ["Menos customização que concorrentes", "Limite de 200 participantes", "Android WebView com limitações", "Menos features avançadas", "Web-only (sem SDKs nativos mobile)"],
    useCases: ["Telemedicina (GDPR importante)", "Coaching e consultoria", "EdTech simples", "MVPs rápidos"]
  }
];

const videochamadaApi: ApiData = {
  name: "videochamada.com.br",
  website: "https://videochamada.com.br",
  priceInitial: "R$ 0,015/min",
  maxParticipants: "4",
  platforms: "Web, iOS, Android",
  recording: true,
  e2eEncryption: true,
  highlight: "API brasileira com integração Code, Low-Code e No-Code",
  yearLaunched: "2023",
  positioning: "Startups, PMEs, Telemedicina Brasil",
  maxQuality: "1080p HD",
  protocols: "WebRTC",
  latency: "Baixa (servidores no Brasil)",
  features: ["Chamadas 1:1 e em grupo (até 4)", "Gravação Composite e Individual", "Transcrição com IA", "Resumo Inteligente", "Compartilhamento de tela", "Integração Code (REST API, SDKs)", "Integração Low-Code (Zapier, Make, n8n)", "Integração No-Code (iFrame embed)", "Fundos virtuais", "Noise cancellation"],
  sdks: ["JavaScript", "React", "REST API", "Webhooks", "iFrame embed", "Zapier", "Make", "n8n"],
  certifications: ["LGPD", "ISO 27001"],
  pricing: [
    { item: "Videochamada", price: "R$ 0,015/participante/minuto" },
    { item: "Gravação Composite", price: "R$ 0,075/minuto" },
    { item: "Gravação Individual", price: "R$ 0,035/min/participante" },
    { item: "Transcrição", price: "R$ 0,0225/minuto" },
    { item: "Resumo IA", price: "R$ 0,020/minuto" },
    { item: "Armazenamento", price: "R$ 0,010/min/mês" }
  ],
  freeTier: "2.000 minutos/mês",
  strengths: ["Preços em Real (sem variação cambial)", "Suporte em português", "Documentação em português", "Servidores no Brasil (baixa latência)", "LGPD compliant", "Integração Code, Low-Code e No-Code", "Conectores nativos: Zapier, Make, n8n", "Sem necessidade de cartão de crédito para começar"],
  weaknesses: ["Limite de 4 participantes por sala", "Menor presença internacional", "Empresa mais nova no mercado"],
  useCases: ["Telemedicina no Brasil", "Startups brasileiras", "Plataformas SaaS nacionais", "Educação online 1:1", "Atendimento ao cliente", "Automações com Zapier/Make/n8n"]
};

const rankings = [
  { category: "Melhor Custo-Benefício", api: "Daily.co", icon: <DollarSign className="w-5 h-5" />, justification: "Precificação transparente, 10K min grátis, excelente DX" },
  { category: "Melhor para Enterprise", api: "Zoom Video SDK", icon: <Building2 className="w-5 h-5" />, justification: "Marca reconhecida, compliance robusto, infraestrutura global" },
  { category: "Melhor para Startups", api: "100ms", icon: <Rocket className="w-5 h-5" />, justification: "Templates prontos, preço competitivo, SDK único" },
  { category: "Mais Fácil de Integrar", api: "Whereby Embedded", icon: <Zap className="w-5 h-5" />, justification: "3 linhas de código, UI inclusa" },
  { category: "Melhor Qualidade de Vídeo", api: "Agora.io", icon: <Star className="w-5 h-5" />, justification: "Suporte 4K, rede SD-RTN otimizada" },
  { category: "Melhor para Healthcare", api: "Amazon Chime SDK", icon: <Heart className="w-5 h-5" />, justification: "FedRAMP, GovCloud, integração AWS" },
  { category: "Melhor Open Source", api: "LiveKit", icon: <Code className="w-5 h-5" />, justification: "Moderno, AI-ready, comunidade ativa" },
  { category: "Melhor para AI/Voice", api: "LiveKit", icon: <Zap className="w-5 h-5" />, justification: "Pipecat framework, usado pelo ChatGPT" },
  { category: "Melhor para Self-Hosting", api: "Jitsi Meet", icon: <Server className="w-5 h-5" />, justification: "100% gratuito, controle total" },
  { category: "Melhor para Escala Massiva", api: "Agora.io", icon: <Users className="w-5 h-5" />, justification: "Suporte a milhões de usuários" },
  { category: "Melhor para Brasil", api: "videochamada.com.br", icon: <Star className="w-5 h-5" />, justification: "Preços em Real, suporte local, LGPD compliant", highlight: true }
];

const ApiCard = ({ api, index }: { api: ApiData; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <motion.div
      className="bg-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800/50 hover:border-primary/30 transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-primary/20 text-primary text-sm font-bold px-3 py-1 rounded-full">
                #{index + 1}
              </span>
              <h3 className="text-2xl font-bold text-white">{api.name}</h3>
            </div>
            <a
              href={api.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 text-sm flex items-center gap-1"
            >
              {api.website.replace('https://', '')}
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-primary">{api.priceInitial}</p>
            <p className="text-sm text-gray-400">preço inicial</p>
          </div>
        </div>

        {api.warning && (
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-4">
            <p className="text-yellow-400 text-sm">⚠️ {api.warning}</p>
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <div className="bg-gray-800/50 rounded-lg p-3">
            <p className="text-xs text-gray-400 mb-1">Max Participantes</p>
            <p className="text-white font-semibold">{api.maxParticipants}</p>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-3">
            <p className="text-xs text-gray-400 mb-1">Qualidade</p>
            <p className="text-white font-semibold">{api.maxQuality}</p>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-3">
            <p className="text-xs text-gray-400 mb-1">Gravação</p>
            <p className="text-white font-semibold flex items-center gap-1">
              {api.recording ? <Check className="w-4 h-4 text-green-400" /> : <X className="w-4 h-4 text-red-400" />}
              {api.recording ? 'Sim' : 'Não'}
            </p>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-3">
            <p className="text-xs text-gray-400 mb-1">E2E Encryption</p>
            <p className="text-white font-semibold flex items-center gap-1">
              {api.e2eEncryption ? <Check className="w-4 h-4 text-green-400" /> : <X className="w-4 h-4 text-red-400" />}
              {api.e2eEncryption ? 'Sim' : 'Não'}
            </p>
          </div>
        </div>

        <p className="text-gray-300 mb-4">
          <span className="text-primary font-semibold">Destaque:</span> {api.highlight}
        </p>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-center gap-2 text-primary hover:text-primary/80 transition-colors py-2"
        >
          {isExpanded ? 'Ver menos' : 'Ver detalhes completos'}
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {isExpanded && (
        <div className="border-t border-gray-800 p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-bold text-white mb-3">Informações Gerais</h4>
              <ul className="space-y-2 text-gray-300">
                <li><span className="text-gray-400">Ano:</span> {api.yearLaunched}</li>
                <li><span className="text-gray-400">Posicionamento:</span> {api.positioning}</li>
                <li><span className="text-gray-400">Protocolos:</span> {api.protocols}</li>
                <li><span className="text-gray-400">Latência:</span> {api.latency}</li>
                <li><span className="text-gray-400">Plataformas:</span> {api.platforms}</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-3">Free Tier</h4>
              <p className="text-green-400 font-semibold">{api.freeTier}</p>

              <h4 className="text-lg font-bold text-white mt-4 mb-3">Certificações</h4>
              <div className="flex flex-wrap gap-2">
                {api.certifications.map((cert, i) => (
                  <span key={i} className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-3">Funcionalidades</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {api.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-3">Precificação</h4>
            <div className="bg-gray-800/50 rounded-lg overflow-hidden">
              {api.pricing.map((price, i) => (
                <div key={i} className={`flex justify-between p-3 ${i % 2 === 0 ? 'bg-gray-800/30' : ''}`}>
                  <span className="text-gray-300">{price.item}</span>
                  <span className="text-white font-semibold">{price.price}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-bold text-green-400 mb-3">Pontos Fortes</h4>
              <ul className="space-y-2">
                {api.strengths.map((strength, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                    {strength}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-red-400 mb-3">Pontos Fracos</h4>
              <ul className="space-y-2">
                {api.weaknesses.map((weakness, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300">
                    <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-1" />
                    {weakness}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-3">Casos de Uso Recomendados</h4>
            <div className="flex flex-wrap gap-2">
              {api.useCases.map((useCase, i) => (
                <span key={i} className="bg-primary/20 text-primary text-sm px-3 py-1 rounded-full">
                  {useCase}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-3">SDKs Disponíveis</h4>
            <div className="flex flex-wrap gap-2">
              {api.sdks.map((sdk, i) => (
                <span key={i} className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded">
                  {sdk}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

const ApisVideoconferencia2026 = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-dark-text flex flex-col">
      <Head>
        <title>As Principais APIs de Videoconferência de 2026 | videochamada.com.br</title>
        <meta name="description" content="Análise comparativa completa das 10 melhores APIs de videochamadas: Twilio, Agora, Daily, Zoom SDK, Amazon Chime, 100ms, LiveKit, Jitsi, Vonage e Whereby. Preços, funcionalidades e recomendações." />
        <link rel="canonical" href="https://videochamada.com.br/materiais/principais-apis-videoconferencia-2026/" />

        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://videochamada.com.br/materiais/principais-apis-videoconferencia-2026/" />
        <meta property="og:title" content="As Principais APIs de Videoconferência de 2026" />
        <meta property="og:description" content="Análise comparativa completa das 10 melhores APIs de videochamadas: Twilio, Agora, Daily, Zoom SDK, Amazon Chime, 100ms, LiveKit, Jitsi, Vonage e Whereby." />
        <meta property="og:image" content="https://videochamada.com.br/og-image.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://videochamada.com.br/materiais/principais-apis-videoconferencia-2026/" />
        <meta name="twitter:title" content="As Principais APIs de Videoconferência de 2026" />
        <meta name="twitter:description" content="Análise comparativa completa das 10 melhores APIs de videochamadas: Twilio, Agora, Daily, Zoom SDK, Amazon Chime, 100ms, LiveKit, Jitsi, Vonage e Whereby." />
        <meta name="twitter:image" content="https://videochamada.com.br/og-image.png" />

        <meta name="author" content="videochamada.com.br" />
        <meta property="article:published_time" content="2025-12-05" />
      </Head>

      <main className="flex-grow pt-18">
        <article>
          <header className="py-24 bg-gray-950">

            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Link
                  href="/materiais"
                  className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Voltar aos Materiais
                </Link>

                <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    05 de Dezembro de 2025
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    25 min de leitura
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                  As Principais APIs de Videoconferência de 2026
                </h1>
                <p className="text-xl text-gray-300 max-w-4xl">
                  Análise comparativa abrangente das 10 principais APIs de videochamadas disponíveis no mercado.
                  Preços, funcionalidades, pontos fortes e fracos, e recomendações por caso de uso.
                </p>
              </motion.div>
            </div>
          </header>

          <section className="py-16 bg-gray-950">
            <div className="container mx-auto px-6">
              <motion.div
                className="max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6 text-white">Sumário Executivo</h2>
                <p className="text-gray-300 text-lg mb-6">
                  Este relatório apresenta uma análise comparativa das 10 principais APIs de videochamadas
                  disponíveis no mercado em 2025/2026. A seleção foi baseada em critérios como presença
                  no mercado, documentação disponível, casos de uso comprovados e atualizações recentes.
                </p>
                <p className="text-gray-300 text-lg">
                  Cada API foi avaliada em termos de preços, funcionalidades, certificações de segurança,
                  SDKs disponíveis, pontos fortes e fracos, além de recomendações específicas por caso de uso.
                </p>
              </motion.div>
            </div>
          </section>

          <section className="py-16 bg-gray-950">
            <div className="container mx-auto px-6">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-4 text-white">Tabela Comparativa Resumida</h2>
                <p className="text-gray-300">Visão geral rápida das 10 APIs analisadas</p>
              </motion.div>

              <motion.div
                className="overflow-x-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <table className="w-full min-w-[800px] bg-gray-900/80 rounded-xl overflow-hidden">
                  <thead className="bg-primary/20">
                    <tr>
                      <th className="text-left p-4 text-white font-bold">API</th>
                      <th className="text-left p-4 text-white font-bold">Preço Inicial</th>
                      <th className="text-left p-4 text-white font-bold">Max Participantes</th>
                      <th className="text-left p-4 text-white font-bold">Plataformas</th>
                      <th className="text-center p-4 text-white font-bold">Gravação</th>
                      <th className="text-center p-4 text-white font-bold">E2E</th>
                      <th className="text-left p-4 text-white font-bold">Destaque</th>
                    </tr>
                  </thead>
                  <tbody>
                    {apis.map((api, index) => (
                      <tr key={api.name} className={index % 2 === 0 ? 'bg-gray-800/30' : ''}>
                        <td className="p-4 text-white font-semibold">{api.name}</td>
                        <td className="p-4 text-primary">{api.priceInitial}</td>
                        <td className="p-4 text-gray-300">{api.maxParticipants}</td>
                        <td className="p-4 text-gray-300">{api.platforms}</td>
                        <td className="p-4 text-center">
                          {api.recording ? <Check className="w-5 h-5 text-green-400 mx-auto" /> : <X className="w-5 h-5 text-red-400 mx-auto" />}
                        </td>
                        <td className="p-4 text-center">
                          {api.e2eEncryption ? <Check className="w-5 h-5 text-green-400 mx-auto" /> : <X className="w-5 h-5 text-red-400 mx-auto" />}
                        </td>
                        <td className="p-4 text-gray-300">{api.highlight}</td>
                      </tr>
                    ))}
                    <tr className="bg-primary/10 border-t-2 border-primary">
                      <td className="p-4 text-white font-bold flex items-center gap-2">
                        <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded">BRASIL</span>
                        {videochamadaApi.name}
                      </td>
                      <td className="p-4 text-green-400 font-bold">{videochamadaApi.priceInitial}</td>
                      <td className="p-4 text-gray-300">{videochamadaApi.maxParticipants}</td>
                      <td className="p-4 text-gray-300">{videochamadaApi.platforms}</td>
                      <td className="p-4 text-center">
                        <Check className="w-5 h-5 text-green-400 mx-auto" />
                      </td>
                      <td className="p-4 text-center">
                        <Check className="w-5 h-5 text-green-400 mx-auto" />
                      </td>
                      <td className="p-4 text-green-400 font-semibold">{videochamadaApi.highlight}</td>
                    </tr>
                  </tbody>
                </table>
              </motion.div>
            </div>
          </section>

          <section className="py-16 bg-gray-950">
            <div className="container mx-auto px-6">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-4 text-white">Fichas Detalhadas por API</h2>
                <p className="text-gray-300">Clique em cada card para ver informações completas</p>
              </motion.div>

              <div className="space-y-6 max-w-4xl mx-auto">
                {apis.map((api, index) => (
                  <ApiCard key={api.name} api={api} index={index} />
                ))}
              </div>
            </div>
          </section>

          {/* Seção Especial - videochamada.com.br */}
          <section className="py-20 bg-gray-950">
            <div className="container mx-auto px-6">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <span className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 text-sm font-bold px-4 py-2 rounded-full mb-6">
                  <Star className="w-4 h-4" />
                  DESTAQUE: API BRASILEIRA
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  videochamada.com.br
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  A API de videoconferência feita para o mercado brasileiro, com preços em Real e suporte local.
                </p>
              </motion.div>

              <motion.div
                className="max-w-4xl mx-auto bg-gray-900/90 backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-primary/50 shadow-2xl shadow-primary/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="bg-primary p-6 text-white">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">11. videochamada.com.br</h3>
                      <p className="text-white/80">API brasileira de videoconferência com WebRTC</p>
                    </div>
                    <div className="text-center md:text-right">
                      <p className="text-3xl font-bold">R$ 0,015</p>
                      <p className="text-white/80">por minuto/participante</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                      <p className="text-3xl font-bold text-green-400">2.000</p>
                      <p className="text-sm text-gray-400">minutos grátis/mês</p>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                      <p className="text-3xl font-bold text-primary">1080p</p>
                      <p className="text-sm text-gray-400">qualidade HD</p>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                      <p className="text-3xl font-bold text-white">4</p>
                      <p className="text-sm text-gray-400">participantes</p>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                      <p className="text-3xl font-bold text-green-400">3 em 1</p>
                      <p className="text-sm text-gray-400">Code + Low + No-Code</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-lg font-bold text-green-400 mb-4 flex items-center gap-2">
                        <Check className="w-5 h-5" />
                        Por que escolher?
                      </h4>
                      <ul className="space-y-3">
                        {videochamadaApi.strengths.map((strength, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-300">
                            <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                            {strength}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-white mb-4">Funcionalidades</h4>
                      <div className="flex flex-wrap gap-2">
                        {videochamadaApi.features.map((feature, i) => (
                          <span key={i} className="bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>

                      <h4 className="text-lg font-bold text-white mt-6 mb-4">Preços</h4>
                      <div className="space-y-2">
                        {videochamadaApi.pricing.slice(0, 4).map((price, i) => (
                          <div key={i} className="flex justify-between text-sm">
                            <span className="text-gray-400">{price.item}</span>
                            <span className="text-white font-semibold">{price.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 border-t border-gray-800">
                    <a
                      href="https://app.videochamada.com.br/cadastrar"
                      className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-full text-center transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                    >
                      Criar Conta Grátis - 2.000 min/mês
                    </a>
                    <a
                      href="https://documentacao.videochamada.com.br"
                      className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 px-8 rounded-full text-center transition-all duration-300"
                    >
                      Ver Documentação
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          <section className="py-16 bg-gray-950">
            <div className="container mx-auto px-6">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-4 text-white">Ranking por Categoria</h2>
                <p className="text-gray-300">As melhores APIs para cada caso de uso específico</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                {rankings.map((ranking, index) => (
                  <motion.div
                    key={ranking.category}
                    className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 hover:border-primary/30 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-primary/20 p-2 rounded-lg text-primary">
                        {ranking.icon}
                      </div>
                      <h3 className="text-lg font-bold text-white">{ranking.category}</h3>
                    </div>
                    <p className="text-2xl font-bold text-primary mb-2">{ranking.api}</p>
                    <p className="text-gray-400 text-sm">{ranking.justification}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-gray-950">
            <div className="container mx-auto px-6">
              <motion.div
                className="max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-8 text-white text-center">Recomendações Finais</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-900/80 rounded-xl p-6 border border-gray-800">
                    <h3 className="text-xl font-bold text-primary mb-4">Para Startups em Early Stage</h3>
                    <ol className="space-y-2 text-gray-300">
                      <li><span className="font-semibold text-white">1. Daily.co</span> - Melhor DX, precificação justa</li>
                      <li><span className="font-semibold text-white">2. 100ms</span> - Templates prontos aceleram go-to-market</li>
                      <li><span className="font-semibold text-white">3. Whereby</span> - MVP em horas</li>
                    </ol>
                  </div>

                  <div className="bg-gray-900/80 rounded-xl p-6 border border-gray-800">
                    <h3 className="text-xl font-bold text-primary mb-4">Para Enterprise</h3>
                    <ol className="space-y-2 text-gray-300">
                      <li><span className="font-semibold text-white">1. Zoom Video SDK</span> - Familiaridade, compliance, marca</li>
                      <li><span className="font-semibold text-white">2. Amazon Chime SDK</span> - Se já usa AWS</li>
                      <li><span className="font-semibold text-white">3. Vonage</span> - Aplicações estabelecidas</li>
                    </ol>
                  </div>

                  <div className="bg-gray-900/80 rounded-xl p-6 border border-gray-800">
                    <h3 className="text-xl font-bold text-primary mb-4">Para Telemedicina (HIPAA)</h3>
                    <ol className="space-y-2 text-gray-300">
                      <li><span className="font-semibold text-white">1. Daily.co</span> - HIPAA compliant, fácil integração</li>
                      <li><span className="font-semibold text-white">2. Amazon Chime SDK</span> - Se já usa AWS</li>
                      <li><span className="font-semibold text-white">3. Vonage</span> - Track record em healthcare</li>
                    </ol>
                  </div>

                  <div className="bg-gray-900/80 rounded-xl p-6 border border-gray-800">
                    <h3 className="text-xl font-bold text-primary mb-4">Para Educação</h3>
                    <ol className="space-y-2 text-gray-300">
                      <li><span className="font-semibold text-white">1. 100ms</span> - Templates de sala de aula</li>
                      <li><span className="font-semibold text-white">2. Agora.io</span> - Escala global, whiteboard</li>
                      <li><span className="font-semibold text-white">3. Daily.co</span> - Breakout rooms, simplicidade</li>
                    </ol>
                  </div>

                  <div className="bg-gray-900/80 rounded-xl p-6 border border-gray-800">
                    <h3 className="text-xl font-bold text-primary mb-4">Para Voice AI / Agentes</h3>
                    <ol className="space-y-2 text-gray-300">
                      <li><span className="font-semibold text-white">1. LiveKit</span> - Pipecat framework, OpenAI integration</li>
                      <li><span className="font-semibold text-white">2. Daily.co</span> - Também suporta Pipecat</li>
                      <li><span className="font-semibold text-white">3. Agora.io</span> - Speech-to-text nativo</li>
                    </ol>
                  </div>

                  <div className="bg-gray-900/80 rounded-xl p-6 border border-gray-800">
                    <h3 className="text-xl font-bold text-primary mb-4">Para Budget Zero / Open Source</h3>
                    <ol className="space-y-2 text-gray-300">
                      <li><span className="font-semibold text-white">1. Jitsi Meet</span> - Totalmente gratuito</li>
                      <li><span className="font-semibold text-white">2. LiveKit</span> - Self-host gratuito, mais moderno</li>
                    </ol>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          <section className="py-16 bg-gray-950">
            <div className="container mx-auto px-6">
              <motion.div
                className="max-w-4xl mx-auto bg-gray-900/80 rounded-xl p-8 border border-gray-800"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-4 text-white">Sobre Esta Pesquisa</h2>
                <p className="text-gray-300 mb-4">
                  Este relatório foi compilado em 05 de Dezembro de 2025 com base em documentação oficial,
                  páginas de pricing atualizadas, reviews de plataformas como G2, Capterra e TrustRadius,
                  repositórios GitHub e blogs técnicos.
                </p>
                <p className="text-gray-400 text-sm">
                  Preços e recursos estão sujeitos a alterações. Consulte sempre a documentação oficial
                  antes de tomar decisões.
                </p>
              </motion.div>
            </div>
          </section>
        </article>

        <section className="py-20 bg-gray-950">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Experimente a API videochamada.com.br
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                API de videoconferência brasileira com preços em Real, suporte local e
                documentação em português. 2.000 minutos grátis para começar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://app.videochamada.com.br/cadastrar"
                  className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-full inline-flex items-center justify-center transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                >
                  Criar Conta Grátis
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7-7 7"></path>
                  </svg>
                </a>
                <a
                  href="https://documentacao.videochamada.com.br"
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 font-bold py-4 px-8 rounded-full inline-flex items-center justify-center transition-all duration-300"
                >
                  Ver Documentação
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ApisVideoconferencia2026;
