import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "bernardo@neft.com.br",
      href: "mailto:bernardo@neft.com.br",
      color: "hover:bg-primary"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "/in/bernardo-gontijo",
      href: "https://www.linkedin.com/in/bernardo-gontijo/",
      color: "hover:bg-[#0A66C2]"
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      value: "@bernardogontijo",
      href: "https://github.com/bernardogontijo",
      color: "hover:bg-gray-700"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      value: "+55 31 97215-6350",
      href: "https://api.whatsapp.com/send?phone=5531972156350&text=Ol%C3%A1%20Bernardo!",
      color: "hover:bg-green-600"
    }
  ];

  return (
    <section id="contato" className="py-24 bg-gray-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Vamos Conversar</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Interessado em discutir um projeto, parceria ou apenas trocar uma ideia?
            Entre em contato por qualquer um dos canais abaixo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group bg-gray-900 rounded-xl p-6 text-center transition-all duration-300 ${method.color}`}
            >
              <div className="w-14 h-14 bg-gray-800 group-hover:bg-white/10 rounded-full flex items-center justify-center text-white mx-auto mb-4 transition-colors">
                {method.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{method.title}</h3>
              <p className="text-gray-400 text-sm group-hover:text-white transition-colors">
                {method.value}
              </p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 mb-6">
            Prefere uma conversa mais direta?
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=5531972156350&text=Ol%C3%A1%20Bernardo!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
          >
            <MessageCircle className="w-5 h-5" />
            Chamar no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
