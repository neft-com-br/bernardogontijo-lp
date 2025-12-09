import React from 'react';
import { Code, Zap, Server, GitBranch } from 'lucide-react';
import { motion } from 'framer-motion';
import { CodeBlock } from './ui/code-block';

const Integrations = () => {
  const nodeJsExample = {
    title: "node.js",
    code: `const axios = require('axios');

const url = 'https://api.videochamada.com.br/calls';
const headers = {
  Authorization: 'Bearer {API_TOKEN}',
  'Content-Type': 'application/json'
};
const data = {};

axios.post(url, data, { headers })
  .then(response => console.log(response.data))
  .catch(error => console.error(error));`,
    language: "javascript"
  };

  const pythonExample = {
    title: "python",
    code: `import requests

url = "https://api.videochamada.com.br/calls"
headers = {
    "Authorization": "Bearer {API_TOKEN}",
    "Content-Type": "application/json"
}
data = {}

response = requests.post(url, headers=headers, json=data)
print(response.json())`,
    language: "python"
  };

  const htmlExample = {
    title: "html",
    code: `<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Videochamada</title>
</head>
<body>

    <iframe
        src="https://SUAEMPRESA.videochamada.com.br/chamada/ID_DA_CHAMADA"
        allow="camera; microphone; fullscreen"
        style="width: 100%; height: 600px; border: none; border-radius: 8px;"
    ></iframe>

</body>
</html>`,
    language: "html"
  };

  const n8nExample = {
    title: "n8n workflow",
    code: `// Workflow: Google Calendar → Videochamada → Gmail
// Trigger: Novo evento no Google Calendar

// 1. Google Calendar Trigger
// Quando um novo evento é criado...

// 2. Node Videochamada - Criar Chamada
{
  "resource": "call",
  "operation": "create",
  "title": "{{ $json.summary }}",
  "expiresAt": "{{ $json.end.dateTime }}",
  "recording": true
}

// 3. Gmail - Enviar link da chamada
// Para: {{ $json.attendees[0].email }}
// Assunto: Link da videochamada: {{ $node.Videochamada.json.title }}
// Corpo: Acesse: {{ $node.Videochamada.json.url }}`,
    language: "javascript"
  };

  return (
    <section className="py-24 bg-gray-950">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Integrações flexíveis</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Múltiplas formas de integrar videochamadas ao seu produto ou serviço, 
            desde soluções no-code até nossa API completa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto">
          {/* Zapier Integration */}
          <motion.div
            className="bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="mb-4 bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-3 text-white">Zapier</h3>
            <p className="text-gray-300 text-sm mb-4">
              Conecte com mais de 5.000 aplicativos sem escrever código. Ideal para automações.
            </p>
            <a
              href="https://zapier.com/apps/videochamada/integrations"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:text-primary/80 transition-colors inline-flex items-center text-sm"
            >
              Explorar integrações
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </motion.div>

          {/* Make Integration */}
          <motion.div
            className="bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="mb-4 bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center">
              <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-3 text-white">Make (Integromat)</h3>
            <p className="text-gray-300 text-sm mb-4">
              Crie fluxos de trabalho visuais complexos com videochamadas e outras ferramentas.
            </p>
            <a
              href="https://www.make.com/en/integrations/videochamada"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:text-primary/80 transition-colors inline-flex items-center text-sm"
            >
              Criar cenários
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </motion.div>

          {/* n8n Integration */}
          <motion.div
            className="bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="mb-4 bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center">
              <GitBranch className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-3 text-white">n8n</h3>
            <p className="text-gray-300 text-sm mb-4">
              Automação open-source e self-hosted. Node oficial com suporte completo à API.
            </p>
            <a
              href="https://www.npmjs.com/package/n8n-nodes-videochamada"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:text-primary/80 transition-colors inline-flex items-center text-sm"
            >
              Instalar node
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </motion.div>

          {/* API Integration */}
          <motion.div
            className="bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="mb-4 bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center">
              <Server className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-3 text-white">API REST</h3>
            <p className="text-gray-300 text-sm mb-4">
              Integração direta via API REST para máxima flexibilidade e controle total.
            </p>
            <a
              href="https://documentacao.videochamada.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:text-primary/80 transition-colors inline-flex items-center text-sm"
            >
              Ver documentação
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Code Examples */}
        <motion.div 
          className="mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-2xl font-bold mb-6 text-white text-center">Exemplos de código</h3>
          
          <div className="mb-8">
            <CodeBlock files={[nodeJsExample, pythonExample, n8nExample]} defaultTitle="node.js" />
          </div>
        </motion.div>

        {/* Embed Example */}
        <motion.div 
          className="mb-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-2xl font-bold mb-6 text-white text-center">Embedar videochamada em seu produto</h3>
          
          <CodeBlock files={[htmlExample]} />
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <a
            href="https://documentacao.videochamada.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-10 rounded-full inline-block transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
          >
            Documentação Completa
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Integrations;