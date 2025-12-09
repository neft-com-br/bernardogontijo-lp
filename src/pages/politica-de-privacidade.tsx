import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Header from '../components/Header';

const PoliticaDePrivacidade = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-dark-text flex flex-col">
      <Head>
        <title>Política de Privacidade | videochamada.com.br</title>
        <meta name="description" content="Conheça nossa política de privacidade e como protegemos seus dados pessoais. Saiba como a videochamada.com.br coleta, usa e protege suas informações seguindo normas rigorosas de segurança como ISO27001, HIPAA e GDPR." />
        <link rel="canonical" href="https://videochamada.com.br/politica-de-privacidade/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://videochamada.com.br/politica-de-privacidade/" />
        <meta property="og:title" content="Política de Privacidade | videochamada.com.br" />
        <meta property="og:description" content="Conheça nossa política de privacidade e como protegemos seus dados pessoais. Saiba como a videochamada.com.br coleta, usa e protege suas informações seguindo normas rigorosas de segurança como ISO27001, HIPAA e GDPR." />
        <meta property="og:image" content="https://videochamada.com.br/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://videochamada.com.br/politica-de-privacidade/" />
        <meta name="twitter:title" content="Política de Privacidade | videochamada.com.br" />
        <meta name="twitter:description" content="Conheça nossa política de privacidade e como protegemos seus dados pessoais. Saiba como a videochamada.com.br coleta, usa e protege suas informações seguindo normas rigorosas de segurança como ISO27001, HIPAA e GDPR." />
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
              Política de Privacidade
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Última atualização: 6 de março de 2025
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
                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Introdução</h2>
                <p className="text-gray-300">
                  <strong>B M GONTIJO</strong>, inscrita no CNPJ sob o nº 35.211.047/0001-89, com sede na Praça da Matriz, 100, Bairro Centro, CEP 35600-000, Bom Despacho – MG (“B M GONTIJO”), é responsável pela manutenção do presente serviço de videochamadas (“videochamada.com.br”).
                </p>
                <p className="text-gray-300">
                  Ao aceitar esta Política de Privacidade, o Usuário concorda integralmente com os seus termos e também consente, livre e expressamente, que a <strong>videochamada.com.br</strong> colete, use, armazene e faça o tratamento de suas informações, que serão necessárias para que o serviço ofertado seja prestado em sua integralidade, reforçando que a <strong>videochamada.com.br</strong> segue normas internacionais rigorosas de segurança e proteção destas informações, como a Norma ISO27001 de Gestão de Segurança da Informação, conformidade com o Health Insurance Portability and Accountability Act (HIPAA) dos Estados Unidos, assim como os requisitos do Regulamento Geral de Proteção de Dados (GDPR) da Comunidade Europeia.
                </p>
                <p className="text-gray-300">
                  “Dados Pessoais” são informações que podem ser usadas para identificá-lo, direta ou indiretamente, sozinho ou em conjunto com outras informações. Isso inclui informações como seu nome completo, endereço de e-mail e número de telefone.
                </p>
                <p className="text-gray-300">
                  “Dados Pessoais Sensíveis” são dados que revelam a origem racial ou étnica, opiniões políticas, crenças religiosas ou filosóficas, filiação sindical, dados genéticos, dados biométricos para fins de identificação pessoal inequívoca, dados relativos ao estado de saúde ou à vida sexual e/ou orientação sexual de uma pessoa.
                </p>
                <p className="text-gray-300">
                  A <strong>videochamada.com.br</strong> coleta, usa, divulga e processa Dados Pessoais, conforme descrito nesta Política de Privacidade, inclusive para operar e melhorar os serviços e nossos negócios, conforme descrito mais detalhadamente nesta Política de Privacidade.
                </p>
                <p className="text-gray-300">
                  Podemos criar dados anônimos ou sem identificação a partir de dados pessoais excluindo componentes de dados (como seu nome, endereço de e-mail ou ID de rastreamento vinculável) que tornam os dados pessoalmente identificáveis a você, por ofuscação ou por outros meios. Nosso uso de dados anônimos e sem identificação não está sujeito a esta Política de Privacidade.
                </p>
                <p className="text-gray-300">
                  A <strong>videochamada.com.br</strong> não coleta diretamente Dados Pessoais Sensíveis, mas tem plena consciência de que estes dados podem ser coletados diretamente pelos Usuários no seu relacionamento com seus pacientes/clientes e armazenados para processamento no serviço. Desta forma, a <strong>videochamada.com.br</strong> mantém os mesmos processos de proteção e segurança a estes dados, mas alerta que os Usuários, controladores dos dados, devem seguir os mesmos critérios de proteção, não se responsabilizando a <strong>videochamada.com.br</strong> pelos atos praticados pelos Usuários, conforme descrito mais detalhadamente nesta Política de Privacidade.
                </p>
                <p className="text-gray-300">
                  Alertamos que todo o texto deve ser lido com atenção e, caso você não concorde com o conteúdo de nossa Política de Privacidade e/ou Termos e Condições de Uso, não dê prosseguimento à navegação ou à utilização de nossos serviços. Recomendamos, ainda, que caso seja aceito, que você armazene ou imprima uma cópia deste contrato, incluindo todas as políticas.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">1. Disponibilização</h2>
                <p className="text-gray-300">
                  O presente documento foi redigido e disponibilizado em 16/10/2019.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">2. Privacidade e Segurança do Usuário</h2>
                <p className="text-gray-300">
                  2.1. Proteger sua privacidade é muito importante para nós. Suas senhas são armazenadas nos servidores da <strong>videochamada.com.br</strong> de forma criptografada por meio do Sistema de Criptografia Avançado. A segurança das conexões também está garantida pelo protocolo HTTPS. Ao transmitir informações sensíveis, você deve sempre garantir que seu navegador seja capaz de validar os certificados adequados.
                </p>
                <p className="text-gray-300">
                  2.2. A <strong>videochamada.com.br</strong> preza pela proteção das informações confiadas a nós, bem como pela qualidade do sistema, mantendo uma conduta de alto respeito à intimidade de seus Usuários e dos pacientes/clientes dos nossos Usuários. Dessa forma, recomenda-se aos Usuários conduta semelhante e o máximo de cuidado no sentido de proteger a privacidade e confidencialidade de seus pacientes, nos termos do Código de Ética Profissional do Psicólogo, da Constituição Federal, do Código de Defesa do Consumidor, do Código Penal e todas as normas brasileiras e internacionais, como HIPAA e GDPR. Ressalta-se que os atos praticados pelos Usuários não são de responsabilidade da <strong>videochamada.com.br</strong>, incluindo os descumprimentos desta cláusula.
                </p>
                <p className="text-gray-300">
                  2.3. A <strong>videochamada.com.br</strong> recomenda fortemente que o Usuário formalize o consentimento de registro eletrônico de informações dos seus pacientes/clientes, em atendimento ao Regulamento Geral de Proteção de Dados e que, conforme cláusula 2.2, observe todos os requisitos de segurança e proteção.
                </p>
                <p className="text-gray-300">
                  2.4. Aceitando o presente documento, o Usuário reconhece e concorda que a <strong>videochamada.com.br</strong> divulgue as informações de sua conta, quando assim for exigido por autoridades públicas, sendo que os atos de preservação ou divulgação objetivam:
                </p>
                <ul className="text-gray-300 list-disc pl-6">
                  <li>a) Satisfazer qualquer legislação, regulamentação, processo judicial ou solicitação governamental aplicável;</li>
                  <li>b) Impor esta Política de Privacidade e os Termos e Condições de Uso, incluindo a investigação de suas possíveis violações;</li>
                  <li>c) Detectar, impedir ou abordar problemas técnicos, de fraude e de segurança;</li>
                  <li>d) Atender a solicitações de suporte do Usuário;</li>
                  <li>e) Proteger os direitos, a propriedade ou a segurança da <strong>videochamada.com.br</strong>, de seus Usuários e do público.</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">3. Coleta de Dados</h2>
                <p className="text-gray-300">
                  Em nossa plataforma, as informações são coletadas das seguintes formas:
                </p>
                <p className="text-gray-300">
                  3.1. <strong>Informações fornecidas pelo Usuário</strong>: São solicitadas informações de identificação para cadastro (nome completo, e-mail e senha) e dados de cartão de crédito, via preenchimento pelo próprio Usuário.
                </p>
                <p className="text-gray-300">
                  3.2. <strong>Informações fornecidas de forma indireta</strong>: Haverá o registro das operações realizadas pelo Usuário no serviço, como cadastro, alteração e exclusão de registros de pacientes/clientes.
                </p>
                <p className="text-gray-300">
                  3.3. A <strong>videochamada.com.br</strong> não coleta Dados Pessoais de crianças. Se você souber que uma criança nos forneceu Dados Pessoais, entre em contato conosco por meio do formulário de CONTATO no site ou diretamente pelo e-mail <strong>bernardo@neft.com.br</strong>. Se nós constatarmos que uma criança nos forneceu Dados Pessoais, tomaremos as devidas medidas para remover as informações e cancelar a conta da criança em questão.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">4. Uso de Informações Pessoais</h2>
                <p className="text-gray-300">
                  4.1. O presente termo permite que a <strong>videochamada.com.br</strong> use suas informações pessoais para diferentes finalidades:
                </p>
                <p className="text-gray-300">
                  4.1.1. <strong>Nome completo</strong>: Utilizado para cadastro e identificação dos Usuários no serviço, preenchimento dos contratos de prestação de serviço e licença de uso, conferência da legitimidade das partes para contratar, pesquisas em órgãos públicos e entidades fiscalizatórias e cobrança.
                </p>
                <p className="text-gray-300">
                  4.1.2. <strong>E-mail</strong>: É utilizado para login, identificação no sistema, envio de informações, materiais e comunicação em geral da <strong>videochamada.com.br</strong>.
                </p>
                <p className="text-gray-300">
                  4.1.3. <strong>Dados de cartão de crédito</strong>: São utilizados para realizar cobranças pelos serviços prestados, planos adquiridos pelos Usuários, assim como os serviços extras.
                </p>
                <p className="text-gray-300">
                  4.2. <strong>Compartilhamento das informações com parceiros</strong>: Seus dados poderão ser compartilhados com parceiros para melhoria na prestação de serviço, respeitando a inviolabilidade e sigilo das comunicações feitas na internet. Nenhuma informação pessoal poderá ser divulgada publicamente, apenas de forma genérica e não identificável. A única exceção está em casos em que essas informações forem exigidas por lei ou ordem judicial.
                </p>
                <p className="text-gray-300">
                  4.3. <strong>Autenticação e integração com o Google Calendar</strong>: Caso necessite de uma integração com o Google dos eventos da <strong>videochamada.com.br</strong>, o processo será realizado da seguinte maneira: Será enviado ao usuário uma permissão para autenticar em sua conta do Google para uma autorização e consequente integração. Essa autorização é diretamente enviada para o Google, que gera à <strong>videochamada.com.br</strong> uma autenticação em forma de “token”, permitindo que os dados sejam trafegados entre a <strong>videochamada.com.br</strong> e o Google. Quando o usuário criar um evento na <strong>videochamada.com.br</strong>, essa informação será enviada via ambiente seguro ao Google, que irá criar um calendário chamado “videochamada.com.br” no Google Calendar deste usuário. A <strong>videochamada.com.br</strong> armazenará somente o “identificador” desse calendário criado e dos eventos enviados para o Google. Não há nenhuma possibilidade de a <strong>videochamada.com.br</strong> acessar ou compartilhar as informações da conta do Google do usuário, apenas o próprio usuário que permitiu essa integração.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">5. Integração com Aplicativos de Terceiros e Seus Dados</h2>
                <p className="text-gray-300">
                  5.1. Ao instalar ou habilitar o uso de aplicativos de terceiros com os serviços da <strong>videochamada.com.br</strong>, o Usuário estará permitindo que os fornecedores desses aplicativos acessem determinados dados pessoais. Recomendamos a leitura atenta dos Termos de Uso e Políticas de Privacidade dessas aplicações antes de prosseguir com a utilização.
                </p>
                <p className="text-gray-300">
                  5.2. Isso exime a <strong>videochamada.com.br</strong> de se responsabilizar por qualquer divulgação, modificação ou eliminação dos dados compartilhados por meio da integração com aplicativos de terceiros, de sorte que apenas os serviços contidos no serviço são de responsabilidade da <strong>videochamada.com.br</strong>. A <strong>videochamada.com.br</strong> não se responsabiliza ou garante a disponibilidade dos serviços de terceiros.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">6. Cancelamento da Plataforma, de Contas de Acesso e Exclusão de Dados</h2>
                <p className="text-gray-300">
                  6.1. <strong>Cancelamento de contas de acesso</strong>: A <strong>videochamada.com.br</strong> poderá, a seu exclusivo critério, advertir, bloquear, restringir, desabilitar ou impedir o acesso de qualquer Usuário ao serviço sem qualquer aviso prévio, sempre que for detectada uma conduta inadequada, sem prejuízo das medidas que julgar convenientes.
                </p>
                <p className="text-gray-300">
                  6.2. <strong>Exclusão de contas de acesso pelo Usuário</strong>: O Usuário que não desejar continuar utilizando o serviço deverá optar pelo cancelamento do serviço, entrando em contato com a <strong>videochamada.com.br</strong> por seus canais de atendimento (WhatsApp e e-mail). Ressalta-se que mesmo com o cancelamento, o Usuário deverá respeitar e atender a todas as obrigações contratuais, legais e financeiras que tiver assumido até o momento.
                </p>
                <p className="text-gray-300">
                  6.2.1. Ao excluir a conta, o Usuário estará cessando definitivamente a utilização do serviço e deverá exportar os dados inseridos anteriormente, uma vez que as informações serão excluídas permanentemente da <strong>videochamada.com.br</strong> no prazo de 01 (um) ano, ou quando solicitado pelo Usuário, por meio dos CONTATOS fornecidos ao final desta Política.
                </p>
                <p className="text-gray-300">
                  6.3. <strong>Exclusão de dados</strong>: Os Usuários que solicitarem a exclusão de suas informações terão todos os seus dados pessoais deletados permanentemente da <strong>videochamada.com.br</strong>, exceto os registros de acesso (conjunto de informações referentes à data e hora de uso de uma determinada aplicação de internet a partir de um determinado endereço IP), que serão mantidos, sob sigilo, em ambiente controlado e de segurança, pelo prazo de 6 (seis) meses, nos termos da Lei nº 12.965/2014.
                </p>
                <p className="text-gray-300">
                  6.4. <strong>Cancelamento da videochamada.com.br</strong>: Caso a <strong>videochamada.com.br</strong> e seus serviços sejam cancelados, a <strong>B M GONTIJO</strong>, empresa responsável pela criação e administração do serviço, compromete-se a atender todos os requisitos legais, a excluir permanentemente os dados sigilosos dos Usuários e seus pacientes e a manter os registros de acesso sob sigilo, em ambiente controlado e de segurança, pelo prazo de 6 (seis) meses.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">7. Segurança</h2>
                <p className="text-gray-300">
                  7.1. Implementamos proteções técnicas e organizacionais adequadas para proteger contra o processamento não autorizado ou ilegal de Dados Pessoais e contra destruição acidental ou ilegal, perda, alteração, divulgação não autorizada ou acesso aos Dados Pessoais. Informamos, no entanto, que não podemos eliminar totalmente os riscos de segurança associados ao armazenamento e transmissão de Dados Pessoais.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">8. Disposições Gerais</h2>
                <p className="text-gray-300">
                  8.1. A <strong>videochamada.com.br</strong> dispõe de um texto específico para regular a licença de uso, os direitos, deveres, garantias e disposições gerais: os Termos e Condições de Uso. Estes termos podem ser acessados no site da <strong>videochamada.com.br</strong>, na área de Segurança da Informação.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">9. Contato</h2>
                <p className="text-gray-300">
                  9.1. A <strong>videochamada.com.br</strong> disponibiliza canais de atendimento para receber todas as comunicações que o Usuário desejar fazer. Por e-mail: para o endereço eletrônico <strong>bernardo@neft.com.br</strong>. Pelo endereço: Praça da Matriz, 100, Bairro Centro, Bom Despacho – MG.
                </p>
                <p className="text-gray-300">
                  9.2. Todas as solicitações devem sempre estar acompanhadas das informações de contato do Usuário, para que possamos finalizar o atendimento. Os Usuários receberão a confirmação de recebimento do contato e a <strong>videochamada.com.br</strong> terá até 3 (três) dias para retorná-los.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">10. Política de Uso Limitado do Google</h2>
                <p className="text-gray-300">
                  10.1. A <strong>videochamada.com.br</strong> utiliza as APIs do Google para criar uma agenda para o usuário, criar eventos na agenda criada para a <strong>videochamada.com.br</strong>, listar as agendas do usuário e listar os eventos de todas as agendas do usuário para oferecer a funcionalidade de marcação de horários sem interferência. O uso e a transferência de informações recebidas das APIs do Google pela <strong>videochamada.com.br</strong> aderem à Política de Uso de Dados do Usuário dos Serviços de API do Google, incluindo os requisitos de Uso Limitado.
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

export default PoliticaDePrivacidade;