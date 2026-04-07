import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MessageCircle, Twitter } from 'lucide-react';

const ContactSection = () => {
  const links = [
    { icon: Mail, label: 'Email', value: 'bernardo@neft.com.br', href: 'mailto:bernardo@neft.com.br' },
    { icon: Linkedin, label: 'LinkedIn', value: '/in/bernardo-gontijo', href: 'https://www.linkedin.com/in/bernardo-gontijo/' },
    { icon: Github, label: 'GitHub', value: '@bernardogontijo', href: 'https://github.com/bernardogontijo' },
    { icon: Twitter, label: 'X', value: '@rtcbernardo', href: 'https://x.com/rtcbernardo' },
    { icon: MessageCircle, label: 'WhatsApp', value: '+55 31 97215-6350', href: 'https://api.whatsapp.com/send?phone=5531972156350&text=Ol%C3%A1%20Bernardo!' },
  ];

  return (
    <section id="contato" className="py-28 md:py-36 bg-noir-deep">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-gold block mb-3">
            Contato
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-cream mb-5">
            Vamos conversar
          </h2>
          <p className="font-body text-cream-muted max-w-lg mx-auto">
            Interessado em discutir um projeto, parceria ou trocar uma ideia?
          </p>
        </motion.div>

        {/* Contact links */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="space-y-3 mb-14"
        >
          {links.map(({ icon: Icon, label, value, href }, i) => (
            <a
              key={i}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group flex items-center gap-5 p-5 rounded-xl border border-noir-border hover:border-gold/30 bg-noir-card/30 hover:bg-noir-card transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-cream-faint block">
                  {label}
                </span>
                <span className="font-body text-sm text-cream group-hover:text-gold transition-colors truncate block">
                  {value}
                </span>
              </div>
            </a>
          ))}
        </motion.div>

        {/* WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="https://api.whatsapp.com/send?phone=5531972156350&text=Ol%C3%A1%20Bernardo!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white font-body font-semibold text-sm py-3.5 px-8 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,211,102,0.2)]"
          >
            <MessageCircle className="w-4 h-4" />
            Chamar no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
