import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Header from '../components/Header';

const TermosDeUso = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-dark-text flex flex-col">
      <Head>
        <title>Termos de Uso | videochamada.com.br</title>
        <meta name="description" content="Leia os termos de uso da API de videochamadas da videochamada.com.br. Conheça as condições, restrições e responsabilidades para utilizar nossa plataforma de videochamadas profissionais de forma adequada." />
        <link rel="canonical" href="https://videochamada.com.br/termos-de-uso/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://videochamada.com.br/termos-de-uso/" />
        <meta property="og:title" content="Termos de Uso | videochamada.com.br" />
        <meta property="og:description" content="Leia os termos de uso da API de videochamadas da videochamada.com.br. Conheça as condições, restrições e responsabilidades para utilizar nossa plataforma de videochamadas profissionais de forma adequada." />
        <meta property="og:image" content="https://videochamada.com.br/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://videochamada.com.br/termos-de-uso/" />
        <meta name="twitter:title" content="Termos de Uso | videochamada.com.br" />
        <meta name="twitter:description" content="Leia os termos de uso da API de videochamadas da videochamada.com.br. Conheça as condições, restrições e responsabilidades para utilizar nossa plataforma de videochamadas profissionais de forma adequada." />
        <meta name="twitter:image" content="https://videochamada.com.br/og-image.png" />
      </Head>
      {/* <Header /> */}
      <main className="flex-grow pt-18">
        {/* Hero Section */}
        <section className="py-24 bg-gray-950">
          <div className="container mx-auto px-6">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6 text-white text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Termos de Uso
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Última atualização: 06 de Março de 2025
            </motion.p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 bg-gray-950">
          <div className="container mx-auto px-6">
            <motion.div 
              className="max-w-4xl mx-auto bg-gray-900 rounded-xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-gray-300">
                  Termos de Uso da API de Videochamadas da videochamada.com.br<br/>
                  Estes Termos de Uso ("Termos") regem o uso da API de videochamadas ("API") fornecida pela B M GONTIJO, pessoa jurídica constituída na forma de Sociedade Limitada, inscrita no CNPJ sob o nº 35.211.047/0001-89, estabelecida na Praça da Matriz, nº 100, Centro, na Cidade de Bom Despacho, Estado de Minas Gerais – MG, CEP: 35600-000 ("Empresa"), proprietária, mantenedora e operadora da plataforma videochamada.com.br. Ao acessar ou utilizar a API, você ("Usuário") concorda em ficar vinculado a estes Termos. Se você não concordar com estes Termos, não utilize a API.
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">1. Definições</h2>
                <p className="text-gray-300">
                  Para maior clareza, os seguintes termos possuem os significados abaixo:<br/><br/>
                  API: A interface de programação de aplicações fornecida pela Empresa, baseada em WebRTC, que permite a integração de funcionalidades de videochamadas em aplicativos ou sites de terceiros.<br/>
                  Usuário: Qualquer pessoa física ou jurídica que acessa ou utiliza a API.<br/>
                  Serviço: O serviço de videochamadas disponibilizado por meio da API.
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">2. Licença de Uso</h2>
                <p className="text-gray-300">
                  A Empresa concede ao Usuário uma licença não exclusiva, intransferível e revogável para utilizar a API exclusivamente de acordo com estes Termos. O Usuário não tem permissão para sublicenciar, vender, distribuir ou transferir a API, no todo ou em parte, a terceiros sem autorização expressa da Empresa.
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">3. Restrições de Uso</h2>
                <p className="text-gray-300">
                  O Usuário compromete-se a não:<br/><br/>
                  Modificar, adaptar, realizar engenharia reversa ou criar obras derivadas da API.<br/>
                  Utilizar a API para fins ilegais, imorais ou não autorizados, o que abrange explicitamente o conteúdo adulto.<br/>
                  Sobrecarregar, interferir ou tentar sobrecarregar a infraestrutura da API, incluindo ataques de negação de serviço (DDoS) ou ações similares.<br/>
                  Tentar obter acesso não autorizado a sistemas, dados ou informações da Empresa ou de outros usuários.<br/><br/>
                  Qualquer uso da API em desacordo com estas restrições constitui violação destes Termos e pode resultar na rescisão imediata do acesso do Usuário.
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">4. Conteúdo Proibido</h2>
                <p className="text-gray-300">
                  Nós enfatizamos que é estritamente proibido o uso da API para qualquer atividade relacionada a conteúdo adulto. Isso inclui, mas não se limita a:<br/><br/>
                  Pornografia ou qualquer material sexualmente explícito.<br/>
                  Promoção ou facilitação de prostituição, tráfico sexual ou exploração sexual de qualquer tipo.<br/><br/>
                  Essa proibição é fundamental para garantir que o uso da API esteja alinhado com os valores da Empresa e com a legislação aplicável. Qualquer violação desta regra resultará em consequências graves, como:<br/><br/>
                  Rescisão imediata do acesso à API.<br/>
                  Possíveis ações legais, incluindo responsabilidade civil e criminal, dependendo da gravidade da infração.
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">5. Propriedade Intelectual</h2>
                <p className="text-gray-300">
                  A API, incluindo seu código-fonte, documentação, design e quaisquer materiais relacionados, é de propriedade exclusiva da Empresa e está protegida pelas leis de direitos autorais, marcas registradas e outras leis de propriedade intelectual aplicáveis no Brasil e no exterior. O Usuário não adquire nenhum direito de propriedade sobre a API, exceto a licença limitada de uso prevista neste documento.
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">6. Confidencialidade</h2>
                <p className="text-gray-300">
                  O Usuário concorda em manter em sigilo todas as informações não públicas fornecidas pela Empresa relacionadas à API, incluindo, mas não se limitando a, especificações técnicas, chaves de acesso e dados operacionais. Essas informações não poderão ser divulgadas a terceiros sem o consentimento prévio e por escrito da Empresa.
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">7. Garantias e Isenções de Responsabilidade</h2>
                <p className="text-gray-300">
                  A API é fornecida "como está" e "conforme disponível", sem garantias de qualquer tipo, sejam expressas ou implícitas, incluindo garantias de funcionamento ininterrupto, ausência de erros ou adequação a um propósito específico. A Empresa não se responsabiliza por:<br/><br/>
                  Interrupções, falhas ou indisponibilidade da API.<br/>
                  Danos diretos, indiretos, incidentais, especiais, consequenciais ou punitivos decorrentes do uso ou da incapacidade de usar a API, mesmo que a Empresa tenha sido informada da possibilidade de tais danos.<br/><br/>
                  O Usuário assume todos os riscos associados ao uso da API.
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">8. Indenização</h2>
                <p className="text-gray-300">
                  O Usuário concorda em indenizar, defender e isentar a Empresa, bem como seus sócios, diretores, funcionários, agentes e afiliados, de quaisquer reivindicações, responsabilidades, danos, perdas ou despesas (incluindo honorários advocatícios razoáveis) decorrentes ou relacionados ao:<br/><br/>
                  Uso indevido da API pelo Usuário.<br/>
                  Violação destes Termos, incluindo a utilização de conteúdo adulto ou qualquer outro conteúdo proibido.<br/>
                  Infrações a direitos de terceiros resultantes do uso da API pelo Usuário.
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">9. Modificações nos Termos</h2>
                <p className="text-gray-300">
                  A Empresa reserva-se o direito de modificar estes Termos a qualquer momento, a seu exclusivo critério. As alterações entrarão em vigor imediatamente após a publicação da versão revisada no site videochamada.com.br. O uso contínuo da API pelo Usuário após tais modificações constitui aceitação dos Termos atualizados.
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">10. Rescisão</h2>
                <p className="text-gray-300">
                  A Empresa pode, a seu exclusivo critério, suspender ou rescindir o acesso do Usuário à API a qualquer momento, sem aviso prévio, por qualquer motivo, incluindo, mas não se limitando a:<br/><br/>
                  Violação destes Termos, especialmente o uso de conteúdo adulto.<br/>
                  Uso da API de forma que prejudique a Empresa ou terceiros.<br/>
                  Necessidades operacionais ou legais da Empresa.<br/><br/>
                  Após a rescisão, o Usuário deve cessar imediatamente o uso da API e destruir quaisquer materiais relacionados obtidos por meio dela.
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">11. Lei Aplicável e Jurisdição</h2>
                <p className="text-gray-300">
                  Estes Termos serão regidos e interpretados exclusivamente de acordo com as leis da República Federativa do Brasil. Qualquer disputa, controvérsia ou reclamação decorrente ou relacionada a estes Termos será submetida à jurisdição exclusiva dos tribunais da Comarca de Bom Despacho, Minas Gerais, com renúncia a qualquer outro foro, por mais privilegiado que seja.
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">12. Disposições Gerais</h2>
                <p className="text-gray-300">
                  Invalidade: Se qualquer disposição destes Termos for considerada inválida ou inexequível por um tribunal competente, tal disposição será eliminada, e as demais permanecerão em pleno vigor e efeito.<br/>
                  Não Renúncia: A falha da Empresa em exercer ou fazer cumprir qualquer direito ou disposição destes Termos não constitui renúncia a tal direito ou disposição.<br/>
                  Integralidade: Estes Termos representam o acordo completo entre a Empresa e o Usuário em relação ao uso da API, substituindo quaisquer acordos anteriores.
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">13. Contato</h2>
                <p className="text-gray-300">
                  Para quaisquer dúvidas, esclarecimentos ou preocupações relacionadas a estes Termos ou ao uso da API, o Usuário pode entrar em contato com a Empresa pelo e-mail: bernardo@neft.com.br.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      {/* Footer é renderizado pelo layout principal */}
    </div>
  );
};

export default TermosDeUso;
