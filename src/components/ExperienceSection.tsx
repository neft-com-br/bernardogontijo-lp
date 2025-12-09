import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Users, GraduationCap } from 'lucide-react';

const ExperienceSection = () => {
  const activities = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Neft.com.br",
      subtitle: "Fundador & CEO",
      description: "Lidero uma empresa de tecnologia focada em comunicação em tempo real. Desenvolvemos APIs de videochamada para os mercados brasileiro e internacional, atendendo desde startups até grandes empresas.",
      color: "from-primary to-orange-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "CDL Jovem BH",
      subtitle: "Vice-Presidência de Capacitação (2025-2026)",
      description: "Coordeno a área de capacitação da CDL Jovem BH, desenvolvendo programas e iniciativas para fortalecer o empreendedorismo jovem em Belo Horizonte.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Formação",
      subtitle: "Engenharia Mecânica + MBA IBMEC",
      description: "Base em engenharia pela formação técnica, complementada por visão de negócios pelo MBA. Antes de empreender, passei por startups e pela Embraer.",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="experiencia" className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">O que faço hoje</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Divido meu tempo entre empreender, desenvolver produtos e contribuir com a comunidade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${activity.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                {activity.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-1">{activity.title}</h3>
              <p className="text-primary text-sm font-medium mb-4">{activity.subtitle}</p>
              <p className="text-gray-400">{activity.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
