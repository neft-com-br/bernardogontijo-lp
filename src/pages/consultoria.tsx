import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Check,
  X,
  Cpu,
  Target,
  Boxes,
  Wrench,
  TrendingUp,
  Clock,
  Users,
  ShieldCheck,
  MessageCircle,
  Gauge,
} from 'lucide-react';

const WHATSAPP =
  'https://api.whatsapp.com/send?phone=5531972156350&text=' +
  encodeURIComponent(
    'Olá Bernardo! Vim pela página de consultoria de IA e quero agendar uma conversa.'
  );

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

function SectionLabel({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <motion.div {...fadeUp} className="mb-14 max-w-3xl">
      <div className="flex items-center gap-4 mb-3">
        <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-gold">{eyebrow}</span>
        <div className="flex-1 h-px bg-noir-border" />
      </div>
      <h2 className="font-display text-4xl md:text-5xl font-light text-cream leading-tight">{title}</h2>
      {subtitle && <p className="font-body text-lg text-cream-muted mt-5 leading-relaxed">{subtitle}</p>}
    </motion.div>
  );
}

const btnPrimary =
  'group bg-gold hover:bg-gold-hover text-noir-deep font-body font-semibold text-sm py-3.5 px-8 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,160,76,0.25)] inline-flex items-center gap-2';

const pains = [
  { icon: <Users className="w-5 h-5" />, t: 'Folha crescendo mais que a receita', d: 'Você contrata gente pra tarefa repetitiva que a IA resolve — e o custo fixo sobe junto.' },
  { icon: <Clock className="w-5 h-5" />, t: 'Time lento no operacional', d: 'O que devia levar 1 dia leva 1 semana. O gargalo virou execução, não estratégia.' },
  { icon: <Cpu className="w-5 h-5" />, t: '"Usamos ChatGPT" — mas nada em produção', d: 'Ferramenta solta na mão de cada um não é processo. É gaveta cara que ninguém abre.' },
  { icon: <Gauge className="w-5 h-5" />, t: 'Sem medir onde a IA daria retorno', d: 'Todo mundo fala de IA; ninguém te mostra qual processo, em que ordem, e quanto vale em reais.' },
  { icon: <TrendingUp className="w-5 h-5" />, t: 'Medo de ficar pra trás', d: 'O concorrente já automatizou. Você sabe que precisa agir, mas não sabe por onde começar.' },
  { icon: <ShieldCheck className="w-5 h-5" />, t: 'Case de IA que é só teatro', d: 'Piloto de slide que nunca encostou num cliente real. Bonito na apresentação, zero no caixa.' },
];

const manifesto = [
  'Prova antes de opinião. Não falo de IA que eu não rodo em produção — tudo com cliente pagante do outro lado.',
  'IA não é ferramenta, é time. Ferramenta você usa quando lembra; time você lidera todo dia.',
  'Uma pessoa opera o que exigia trinta. O time é IA; o líder é humano.',
  'Case sem produção é teatro. Se não tem dado real passando por dentro, não conta.',
  'Orquestração vale mais que prompt. O valor está no sistema onde os agentes trabalham e se verificam.',
  'Verificação é o trabalho. A IA gera, o sistema confere, um humano decide.',
  'O gargalo mudou de mão de obra pra atenção. O custo escondido é a decisão parada na sua mesa.',
  'Você não precisa aprender IA. Precisa liderar um time novo — com alguém do seu lado que já paga essa conta.',
];

const tiers = [
  {
    name: 'Diagnóstico de Máquina',
    icon: <Target className="w-6 h-6" />,
    promise: 'Em uma sessão você sai sabendo quais processos a IA assume primeiro — e quanto vale em reais.',
    bullets: [
      'Imersão de 3h na sua operação com quem opera IA em produção todo dia, não com quem dá aula',
      'Mapa de oportunidades priorizado por ROI: o que automatizar, em que ordem e o que deixar quieto',
      'Roadmap de 90 dias pronto pra executar — comigo ou sem mim; o mapa é seu',
    ],
    featured: false,
  },
  {
    name: 'Instalação da Máquina',
    icon: <Wrench className="w-6 h-6" />,
    promise: '90 dias, 3 processos rodando em produção — construídos comigo, operados pelo seu time.',
    bullets: [
      'Construção no seu ambiente, com seus dados — nada de POC de laboratório que morre no slide',
      '2h por semana de trabalho lado a lado + canal direto comigo no assíncrono',
      'Seu ponto focal treinado pra operar, medir e evoluir cada processo — a máquina fica, e é sua',
    ],
    featured: true,
  },
  {
    name: 'Sala de Máquinas',
    icon: <Boxes className="w-6 h-6" />,
    promise: 'Depois de instalada, a máquina evolui com um engenheiro-operador de plantão do seu lado.',
    bullets: [
      'Ritual semanal de prioridade + assíncrono direto pra decisão que não pode esperar',
      'Um processo novo entrando na esteira a cada ciclo — a IA cobre cada vez mais da operação',
      'Revisão de tudo que seu time construir sozinho, antes que vire incêndio em produção',
    ],
    featured: false,
  },
  {
    name: 'AI Operator Partner',
    icon: <Cpu className="w-6 h-6" />,
    promise: 'Um CTO de IA no seu comitê — arquitetura, roadmap e formação de time, sem o custo de contratar um.',
    bullets: [
      'Arquitetura e roadmap de IA da empresa inteira, revisados quinzenalmente com a diretoria',
      'Decisões de comprar vs. construir tomadas com quem já pagou caro por esses erros',
      'Eu dentro do circuito das decisões críticas — no dia em que acontecem, não num relatório mensal',
    ],
    featured: false,
  },
];

const forYou = [
  'Você é founder ou diretor de uma empresa que já fatura — e a folha cresce mais rápido que a receita',
  'Tem processo repetitivo rodando em gente cara: atendimento, backoffice, financeiro, análise, operação',
  'Quer resultado em produção em 90 dias, não um comitê de inovação com apresentação trimestral',
  'Topa nomear um ponto focal interno pra ser treinado — eu construo com o seu time, não no lugar dele',
  'Aceita medir: todo processo entra com número de custo e sai com número de resultado',
];

const notForYou = [
  'Você quer inspiração e slides sem execução — eu instalo processo em produção, não faço teatro de palco',
  'Está procurando uma licença de ChatGPT corporativo — ferramenta sem processo é gaveta cara',
  'Sua operação não tem processo definido — IA acelera o que existe; caos automatizado é só caos mais rápido',
  'Liberar um acesso a sistema na sua empresa exige cinco comitês — em 90 dias não sobra tempo pra burocracia',
  'Seu plano é demitir metade do time — o ganho aqui é capacidade nova, não corte',
];

const faqs = [
  {
    q: 'Quanto custa?',
    a: 'Depende da cadência e do tamanho do desafio — e o número faz sentido depois que a gente mapeia o ROI real pra sua operação. Por isso o valor aparece na conversa, não numa tabela genérica. O que posso adiantar: é investimento de sênior, não de curso.',
  },
  {
    q: 'Você faz por mim ou me ensina?',
    a: 'Eu construo com você. Não é palestra nem execução terceirizada: a gente instala os processos juntos e seu ponto focal aprende a operar e evoluir. A máquina fica na sua casa.',
  },
  {
    q: 'Preciso saber programar?',
    a: 'Não. Você precisa de mais ou menos 1h por semana comigo e de um ponto focal interno dedicado. Quem lidera o time de IA sou eu; você lidera o negócio.',
  },
  {
    q: 'Em quanto tempo vejo resultado?',
    a: 'A meta é ter processo rodando em produção em 90 dias, com uma primeira vitória já nas primeiras semanas. Nada de jornada de transformação sem data.',
  },
  {
    q: 'Serve pra qualquer empresa?',
    a: 'Serve pra quem já tem operação com processo repetitivo e volume. Se a operação ainda é caos sem processo, IA só acelera o caos — nesse caso eu falo antes.',
  },
];

export default function Consultoria() {
  return (
    <div className="bg-noir-deep text-cream">
      <Head>
        <title>Consultoria de IA | Bernardo Gontijo — IA como Time</title>
        <meta
          name="description"
          content="Eu rodo vários produtos de software com IA como time de engenharia. Instalo essa capacidade na sua operação: 3 processos em produção em 90 dias, construídos com você."
        />
        <link rel="canonical" href="https://bernardogontijo.com/consultoria/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bernardogontijo.com/consultoria/" />
        <meta property="og:title" content="Consultoria de IA | Bernardo Gontijo — IA como Time" />
        <meta
          property="og:description"
          content="Não te ensino IA. Instalo a capacidade que faz o trabalho — a mesma que roda os meus negócios."
        />
      </Head>

      {/* HERO */}
      <section className="relative overflow-hidden bg-noir-deep pt-40 pb-28 md:pt-48 md:pb-36">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-gold/[0.04] rounded-full blur-[130px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <motion.div {...fadeUp}>
            <div className="flex items-center gap-4 mb-8 justify-center">
              <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-gold">Consultoria de IA aplicada</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-light text-cream leading-[1.02] mb-8 text-center">
              Eu rodo vários produtos de software{' '}
              <span className="italic font-normal text-gold">sem contratar um engenheiro.</span> O time é IA.
            </h1>
            <p className="font-body text-lg md:text-xl text-cream-muted max-w-2xl mx-auto mb-12 text-center leading-relaxed">
              Sou engenheiro e CEO. Minha empresa roda com IA como time de engenharia inteiro — deploys diários,
              clientes B2B de verdade, um único humano no comando. Não vendo teoria: construo, com você, os
              primeiros processos de IA da sua operação, começando pelo que mais dói e com o ROI na mesa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
                Agendar conversa de 30 minutos
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#como-funciona"
                className="border border-noir-border-hover hover:border-gold/40 text-cream hover:text-gold font-body text-sm py-3.5 px-8 rounded-full transition-all duration-300"
              >
                Ver como funciona
              </a>
            </div>
            <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-cream-faint mt-8 text-center">
              Sem pitch · leio cada pedido pessoalmente · resposta em até 48h
            </p>
          </motion.div>
        </div>
      </section>

      {/* PROVA VIVA / STATS */}
      <section className="py-20 bg-noir-surface border-y border-noir-border">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div {...fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {[
              { n: '6+', l: 'produtos de software em produção' },
              { n: '0', l: 'engenheiros de software contratados' },
              { n: '1', l: 'humano no comando — o time é IA' },
            ].map((s, i) => (
              <div key={i}>
                <div className="font-display text-6xl font-light text-gold mb-3">{s.n}</div>
                <div className="font-body text-cream-muted">{s.l}</div>
              </div>
            ))}
          </motion.div>
          <motion.p {...fadeUp} className="font-body text-center text-cream-faint mt-10 max-w-2xl mx-auto leading-relaxed">
            A prova não é um curso — é alavancagem operacional. Uma pessoa entrega o que exigia um time inteiro.
            É isso que eu instalo na sua empresa.
          </motion.p>
        </div>
      </section>

      {/* DORES */}
      <section className="py-24 md:py-32 bg-noir-deep">
        <div className="container mx-auto px-6 max-w-6xl">
          <SectionLabel eyebrow="Se você se reconhece aqui" title="As dores que a IA bem liderada resolve" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {pains.map((p, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-noir-card border border-noir-border rounded-2xl p-7 hover:border-gold/30 transition-colors duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-gold-muted text-gold flex items-center justify-center mb-5">
                  {p.icon}
                </div>
                <h3 className="font-display text-xl text-cream mb-2">{p.t}</h3>
                <p className="font-body text-cream-muted leading-relaxed">{p.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="py-24 md:py-32 bg-noir-surface">
        <div className="container mx-auto px-6 max-w-3xl">
          <SectionLabel eyebrow="Manifesto" title="IA como Time" subtitle="Os princípios que guiam todo trabalho que eu instalo." />
          <div className="space-y-4">
            {manifesto.map((m, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="flex gap-5 items-start border-b border-noir-border pb-4"
              >
                <span className="font-mono text-gold text-sm leading-7 shrink-0 pt-0.5">{String(i + 1).padStart(2, '0')}</span>
                <p className="font-body text-cream/80 leading-relaxed">{m}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE */}
      <section className="py-24 md:py-32 bg-noir-deep">
        <div className="container mx-auto px-6 max-w-3xl">
          <SectionLabel eyebrow="Prova, não promessa" title="Um exemplo real da minha operação" />
          <motion.div {...fadeUp} className="bg-noir-card border border-gold/20 rounded-2xl p-8 md:p-10">
            <div className="flex items-center gap-5 mb-6">
              <div className="font-display text-5xl font-light text-cream">29s</div>
              <ArrowRight className="w-7 h-7 text-gold" />
              <div className="font-display text-5xl font-light text-gold">&lt;1s</div>
            </div>
            <p className="font-body text-cream/80 text-lg leading-relaxed">
              Um relatório da minha plataforma levava <strong className="text-cream font-medium">29 segundos</strong> pra
              carregar — reclamação legítima de cliente grande. Meu time de engenharia (que é IA) investigou a causa,
              testou três abordagens, escreveu a correção e os testes, e o deploy saiu{' '}
              <strong className="text-cream font-medium">no mesmo dia</strong>. O único humano no processo fui eu: uns 40
              minutos entre direcionar a investigação e revisar a solução antes de aprovar.
            </p>
            <p className="font-body text-cream-muted mt-5 leading-relaxed">
              Custo da correção: centavos de processamento. Preço de mercado do mesmo trabalho: 2 a 3 dias de um dev
              sênior. Multiplique isso por seis produtos, todos os dias.
            </p>
          </motion.div>
        </div>
      </section>

      {/* COMO FUNCIONA / TIERS */}
      <section id="como-funciona" className="py-24 md:py-32 bg-noir-surface">
        <div className="container mx-auto px-6 max-w-5xl">
          <SectionLabel
            eyebrow="Como funciona"
            title="Do diagnóstico ao CTO de IA no seu comitê"
            subtitle="Quatro formas de trabalhar juntos. Começamos pela frente que mais dói na sua operação."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {tiers.map((t, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={
                  'rounded-2xl p-8 border transition-colors duration-300 ' +
                  (t.featured
                    ? 'bg-noir-card border-gold/40 shadow-[0_0_40px_rgba(200,160,76,0.06)]'
                    : 'bg-noir-card border-noir-border hover:border-gold/30')
                }
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gold-muted text-gold flex items-center justify-center">
                    {t.icon}
                  </div>
                  {t.featured && (
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-gold border border-gold/30 rounded-full px-3 py-1">
                      Mais procurado
                    </span>
                  )}
                </div>
                <h3 className="font-display text-2xl text-cream mb-3">{t.name}</h3>
                <p className="font-body text-cream-muted mb-6 leading-relaxed">{t.promise}</p>
                <ul className="space-y-3">
                  {t.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 font-body text-cream/70">
                      <Check className="w-4 h-4 text-gold shrink-0 mt-1" />
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <motion.p {...fadeUp} className="font-body text-center text-cream-faint mt-10">
            O valor de cada formato aparece na conversa, ancorado no ROI que a gente mapeia pra sua operação.
          </motion.p>
        </div>
      </section>

      {/* PRA QUEM É / NÃO É */}
      <section className="py-24 md:py-32 bg-noir-deep">
        <div className="container mx-auto px-6 max-w-5xl">
          <SectionLabel
            eyebrow="Honestidade antes da conversa"
            title="Pra quem é — e pra quem não é"
            subtitle="Prefiro ser honesto antes da conversa. Economiza o tempo dos dois."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <motion.div {...fadeUp} className="bg-noir-card border border-gold/25 rounded-2xl p-8">
              <h3 className="font-display text-xl text-cream mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gold-muted text-gold flex items-center justify-center">
                  <Check className="w-4 h-4" />
                </span>
                É pra você se
              </h3>
              <ul className="space-y-4">
                {forYou.map((f, i) => (
                  <li key={i} className="flex gap-3 font-body text-cream/80">
                    <Check className="w-4 h-4 text-gold shrink-0 mt-1" />
                    <span className="leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div {...fadeUp} className="bg-noir-card border border-noir-border rounded-2xl p-8">
              <h3 className="font-display text-xl text-cream-muted mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-noir-surface border border-noir-border-hover text-cream-muted flex items-center justify-center">
                  <X className="w-4 h-4" />
                </span>
                Não é pra você se
              </h3>
              <ul className="space-y-4">
                {notForYou.map((f, i) => (
                  <li key={i} className="flex gap-3 font-body text-cream-muted">
                    <X className="w-4 h-4 text-cream-faint shrink-0 mt-1" />
                    <span className="leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 bg-noir-surface">
        <div className="container mx-auto px-6 max-w-3xl">
          <SectionLabel eyebrow="Perguntas honestas" title="FAQ" />
          <div className="space-y-5">
            {faqs.map((f, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="bg-noir-card border border-noir-border rounded-xl p-6"
              >
                <h3 className="font-display text-lg text-cream mb-2">{f.q}</h3>
                <p className="font-body text-cream-muted leading-relaxed">{f.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 md:py-32 bg-noir-deep">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            {...fadeUp}
            className="relative overflow-hidden rounded-3xl border border-gold/25 bg-noir-card p-10 md:p-16 text-center"
          >
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-gold/[0.05] rounded-full blur-[120px] pointer-events-none" />
            <div className="relative">
              <h2 className="font-display text-4xl md:text-5xl font-light text-cream mb-5 leading-tight">
                Sua empresa não precisa de mais uma <span className="italic text-gold">palestra de IA.</span>
              </h2>
              <p className="font-body text-lg text-cream-muted mb-10 max-w-2xl mx-auto leading-relaxed">
                Precisa de um processo rodando em produção daqui a 90 dias. Vamos mapear o primeiro numa conversa de
                30 minutos.
              </p>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
                Agendar conversa de 30 minutos
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex flex-wrap gap-6 justify-center mt-8 font-body text-cream-muted">
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-gold transition-colors">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
                <a href="mailto:bernardo@neft.com.br" className="inline-flex items-center gap-2 hover:text-gold transition-colors">
                  bernardo@neft.com.br
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
