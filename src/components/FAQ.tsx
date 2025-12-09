import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Preciso pagar assinatura para usar a API de videochamadas?",
      answer: "Não, oferecemos 2.000 minutos grátis por mês e depois disso você paga apenas pelo que usar (R$ 0,015/minuto/participante). Não há assinaturas obrigatórias ou contratos de longo prazo."
    },
    {
      question: "Quantos participantes podem estar em uma videochamada?",
      answer: "Nossa plataforma suporta até 4 participantes por chamada, sendo ideal para atendimentos empresa-cliente, consultas médicas, terapias e outros cenários de atendimento personalizado."
    },
    {
      question: "Como posso integrar as videochamadas ao meu sistema?",
      answer: "Oferecemos múltiplas opções de integração: via API REST (api.videochamada.com.br/calls) com exemplos em Node.js e Python, ou através de ferramentas no-code como Zapier e Make (Integromat)."
    },
    {
      question: "É possível personalizar a interface da videochamada com minha marca?",
      answer: "Sim, oferecemos personalização whitelabel completa. Você pode adicionar seu logo, cores da sua marca e personalizar recursos como chat e gravação para manter a identidade visual da sua empresa."
    },
    {
      question: "A plataforma é segura para uso em contextos que exigem confidencialidade?",
      answer: "Sim, nossa plataforma utiliza criptografia AES-256 e está em conformidade com LGPD, HIPAA, ISO e GDPR. Nossos servidores estão localizados no Brasil, o que garante maior segurança e menor latência."
    },
    {
      question: "Como funciona a cobrança pelos recursos adicionais como gravação?",
      answer: "Os recursos adicionais são cobrados separadamente: Gravação (R$ 0,075/minuto), Armazenamento (R$ 0,015/minuto), Transcrição (R$ 0,0225/minuto) e Resumo baseado em prompt (R$ 0,020/minuto)."
    },
    {
      question: "Vocês oferecem suporte técnico?",
      answer: "Sim, oferecemos suporte técnico em português via WhatsApp. Clientes do plano pay-as-you-go têm acesso a suporte prioritário e um gerente de contas dedicado."
    },
    {
      question: "Posso testar a plataforma antes de decidir?",
      answer: "Sim, você pode criar uma conta gratuita e utilizar os 2.000 minutos mensais sem nenhum custo ou compromisso. Não é necessário fornecer dados de cartão de crédito para começar."
    }
  ];

  return (
    <section className="py-24 bg-gray-950">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Perguntas frequentes</h2>
          
        </motion.div>

        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              className="border-b border-gray-800 py-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <button 
                className="flex justify-between items-center w-full text-left font-semibold text-lg py-2 text-white"
                onClick={() => toggleFaq(index)}
              >
                {faq.question}
                {openFaq === index ? 
                  <ChevronUp className="w-5 h-5 text-primary" /> : 
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                }
              </button>
              {openFaq === index && (
                <div className="mt-2 text-gray-300 pb-2">
                  {faq.answer}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;