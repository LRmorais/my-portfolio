export const profile = {
  name: 'Lucas Morais',
  role: 'Engenheiro de Software Full-Stack',
  email: 'lucas.morais23ti@gmail.com',
  github: 'https://github.com/LRmorais',
  linkedin: 'https://www.linkedin.com/in/lrmorais/',
  location: 'Florianópolis, SC — Brasil',
  cvUrl: '/cv-lucas-morais.pdf', // substituir pelo link do PDF quando disponível
  summary:
    'Engenheiro full-stack com 6+ anos entregando sistemas críticos para governo, fintech e grandes mídias. Especialista em Java 21, Angular 21 e React Native — com patente concedida pelo INPI e publicação no IEEE.',
}

export const stats = [
  { label: 'Anos de experiência', value: '6+' },
  { label: 'Projetos entregues', value: '20' },
  { label: 'Apps publicados nas lojas', value: '2' },
  { label: 'Patente concedida', value: '1' },
]

export const experiences = [
  {
    period: '2025 — atual',
    company: 'Previ · via Montreal Informática',
    title: 'Desenvolvedor Full-Stack',
    type: 'CLT',
    bullets: [
      'Atua na Previ — uma das maiores fundações de previdência complementar do Brasil — em três sistemas críticos: Autoatendimento Web (clientes), Backoffice (funcionários) e backend compartilhado.',
      'Frontend com Angular 21: componentes reutilizáveis, formulários reativos e integração com APIs RESTful.',
      'Backend com Java 21 + Quarkus: microsserviços de alta performance para processos financeiros críticos.',
    ],
  },
  {
    period: '2022 — 2025',
    company: 'Techlead IT Solutions',
    title: 'Analista de Sistemas Pleno',
    type: 'CLT',
    bullets: [
      'Desenvolveu sistemas governamentais para múltiplos clientes: SGP/SGC (SEFA-PA, 2025–2026), SISJURI/SISJUD/SIAP + App Móvel (IGEPPS, 2023–2024) e SICOM/SIED/SIGA/SISGAT (CBMPA, 2022–2023).',
      'No CBMPA (2022–2023): SICOM (Condecorações e Medalhas) e SIED (Ética e Disciplina) em Angular + Node.js; SIGA (Gestão Administrativa) e SISGAT (Atividades Técnicas) em PHP vanilla.',
      'Sistemas criados do zero com Angular 17, Java 17, microsserviços (Clean Architecture + DDD), Kafka, Keycloak (OpenID/OAuth2), Redis, SonarQube, Jenkins e OpenShift — stack completo Red Hat.',
      'Criou frameworks internos e bibliotecas reutilizáveis que aceleraram o desenvolvimento de novos serviços.',
      'Referência técnica do time: conduzia code reviews, mentoria de devs juniores e definição de padrões arquiteturais.',
    ],
  },
  {
    period: '2021 — 2025',
    company: 'Clube Gazeta do Povo',
    title: 'Analista de Sistemas Pleno',
    type: 'PJ',
    bullets: [
      'Manteve e evoluiu app iOS/Android (React Native + TypeScript) com dezenas de milhares de downloads.',
      'Construiu APIs serverless em AWS Lambda (Node.js + Serverless Framework) e GraphQL para comunicação eficiente.',
      'Automatizou o ciclo de release com GitLab CI/CD, eliminando deploys manuais para Google Play e App Store.',
    ],
  },
  {
    period: '2020 — 2023',
    company: 'CEAMAZON · UFPA',
    title: 'Pesquisador e Engenheiro de Software',
    type: 'Pesquisa',
    bullets: [
      'Desenvolveu sistemas IoT para automação médica e residencial em parceria multidisciplinar (engenharia elétrica, computação e biomédica).',
      'Coautor de patente concedida pelo INPI (SRM-V&A, 2021) e artigo publicado no IEEE INDUSCON 2021.',
    ],
  },
  {
    period: '2020 — 2021',
    company: 'Brainstorm Engenharia Jr',
    title: 'Tech Lead · Desenvolvedor Mobile',
    type: 'EJ',
    bullets: [
      'CTO e Tech Lead do primeiro projeto da empresa júnior — sistema de validação de usuários de marca-passo em detectores de metais.',
      'Liderou time de desenvolvimento com React Native, Node.js e MySQL, aplicando Scrum em ambiente universitário real.',
    ],
  },
]

export const skills: Record<string, string[]> = {
  Frontend: ['Angular 17', 'React', 'React Native', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  Backend: ['Java 17', 'Spring Boot 3', 'Quarkus', 'Node.js', 'Express', 'GraphQL', 'Kafka'],
  'Cloud & DevOps': ['AWS Lambda', 'AWS ECS/S3', 'AWS Bedrock', 'Docker', 'OpenShift', 'Jenkins', 'GitLab CI/CD', 'SonarQube'],
  'Banco & Segurança': ['Oracle', 'PostgreSQL', 'MySQL', 'Redis', 'Keycloak', 'OAuth2 / JWT'],
}

export const publications = [
  {
    type: 'Patente',
    icon: '🏛️',
    title: 'Sistema Refrigerador Monitorado para Vacinação e Amostras Biológicas (SRM-V&A)',
    meta: 'INPI · BRI32021060984 · Concedida em abril de 2021',
    description:
      'Sistema embarcado para monitoramento de temperatura em refrigeradores de vacinas, com alertas automáticos e registro histórico. Desenvolvido em parceria com a UFPA.',
    href: '#',
  },
  {
    type: 'Artigo IEEE',
    icon: '📄',
    title: 'Desenvolvimento de um Sistema Refrigerador Monitorado para Vacinação e Amostras Biológicas',
    meta: '14th IEEE International Conference on Industry Applications (INDUSCON) · setembro de 2021',
    description:
      'Artigo científico apresentando a arquitetura e os resultados do sistema SRM-V&A, publicado no principal congresso de aplicações industriais da IEEE no Brasil.',
    href: 'https://ieeexplore.ieee.org/document/9529879',
  },
]

export const projects = [
  // Previ — 2025–presente
  {
    title: 'Autoatendimento Web — Previ',
    href: '#',
    tags: ['Angular 21', 'Java 21', 'Quarkus', 'REST API'],
    badge: 'Previ',
    category: 'Web',
    blurb: 'Portal de autoatendimento para clientes da Previ — uma das maiores fundações de previdência complementar do Brasil. Frontend Angular 21 com backend Java 21 + Quarkus.',
  },
  {
    title: 'Backoffice — Previ',
    href: '#',
    tags: ['Angular 21', 'Java 21', 'Quarkus', 'REST API'],
    badge: 'Previ',
    category: 'Web',
    blurb: 'Sistema backoffice para funcionários da Previ — gestão operacional interna com Angular 21 e backend compartilhado em Java 21 + Quarkus.',
  },
  // SEFA-PA — 2025–2026
  {
    title: 'SGP — Gestão de Pessoas',
    href: '#',
    tags: ['Angular 17', 'Java 17', 'Keycloak', 'Kafka', 'Redis', 'OpenShift'],
    badge: 'SEFA-PA',
    category: 'Governo',
    blurb: 'Sistema de gestão de pessoas criado do zero para a Secretaria da Fazenda do Pará — microsserviços com Kafka, SSO via Keycloak, qualidade com SonarQube e deploy em OpenShift Red Hat.',
  },
  {
    title: 'SGC — Gestão de Contratos',
    href: '#',
    tags: ['Angular 17', 'Java 17', 'Keycloak', 'Kafka', 'SonarQube', 'Jenkins'],
    badge: 'SEFA-PA',
    category: 'Governo',
    blurb: 'Sistema de gestão de contratos criado do zero para a SEFA-PA — arquitetura de microsserviços, orquestração Jenkins, pipeline de qualidade com SonarQube e produtos Red Hat.',
  },
  // Freelance — 2025
  {
    title: 'API de Integração — Loocal Delivery',
    href: '#',
    tags: ['Node.js', 'Express', 'AWS', 'Open Delivery'],
    badge: 'Freelance',
    category: 'Web',
    blurb: 'API de abertura de plataforma para a Loocal Delivery seguindo o padrão Open Delivery — permite que sistemas externos integrem com os serviços da empresa via REST padronizado.',
  },
  {
    title: 'Rosi Educação Financeira',
    href: 'https://rosieducacaofinanceira.com.br/',
    tags: ['WordPress', 'Web Design', 'SEO'],
    badge: 'Freelance',
    category: 'Web',
    blurb: 'Site institucional para profissional de educação financeira — desenvolvimento completo em WordPress com foco em conversão e identidade visual.',
  },
  // Gazeta do Povo — 2021–presente
  {
    title: 'Clube Gazeta do Povo',
    href: 'https://play.google.com/store/apps/details?id=br.com.gazetadopovo.clubeapp',
    tags: ['React Native', 'AWS Lambda', 'GraphQL', 'GitLab CI/CD'],
    badge: 'Gazeta · App',
    category: 'Mobile',
    blurb: 'App iOS/Android com dezenas de milhares de downloads — em desenvolvimento ativo desde 2021. Evolução contínua de produto, performance e release automatizado nas duas lojas.',
  },
  {
    title: 'Empresas — Dashboard Corporativo',
    href: '#',
    tags: ['Next.js', 'GraphQL', 'TypeScript'],
    badge: 'Gazeta · Web',
    category: 'Web',
    blurb: 'Dashboard para empresas que compram assinaturas em grupo para seus funcionários — gestão de colaboradores, download de faturas e controle de pagamentos.',
  },
  {
    title: 'Painel de Controle — Clube Gazeta',
    href: '#',
    tags: ['React', 'AWS Lambda', 'Node.js'],
    badge: 'Gazeta · Web',
    category: 'Web',
    blurb: 'Dashboard interno para funcionários e parceiros do Clube Gazeta do Povo — visão consolidada de métricas, gestão de assinaturas e controle operacional.',
  },
  // Zet — 2023–2025
  {
    title: 'Zet Organizador',
    href: '#',
    tags: ['React Native', 'Node.js', 'QR Code', 'Offline-first'],
    badge: 'Zet · App',
    category: 'Mobile',
    blurb: 'Validação de ingressos com suporte offline e sincronização confiável para produtoras de eventos ao vivo. Desenvolvido de 2023 a 2025.',
  },
  {
    title: 'Painel de Controle — ZET',
    href: '#',
    tags: ['React', 'Node.js', 'AWS Lambda'],
    badge: 'Zet · Web',
    category: 'Web',
    blurb: 'Painel administrativo do ZET integrado ao ecossistema Clube Gazeta — gestão de eventos, ingressos e relatórios de validação.',
  },
  // IGEPPS — 2023–2024
  {
    title: 'Aplicativo Móvel IGEPPS',
    href: '#',
    tags: ['React Native', 'TypeScript'],
    badge: 'IGEPPS',
    category: 'Mobile',
    blurb: 'App mobile para servidores e segurados do IGEPPS — consulta de benefícios, demonstrativos e serviços previdenciários.',
  },
  {
    title: 'SISJUD — Sistema Judiciário',
    href: '#',
    tags: ['Angular', 'Spring Boot', 'Keycloak', 'SonarQube', 'Oracle'],
    badge: 'IGEPPS',
    category: 'Governo',
    blurb: 'Sistema judiciário com autenticação SSO via Keycloak, qualidade de código monitorada com SonarQube e deploy em cluster OpenShift + Jenkins.',
  },
  {
    title: 'SIAP — Acompanhamento Previdenciário',
    href: '#',
    tags: ['Angular', 'Spring Boot', 'Oracle', 'OpenShift'],
    badge: 'IGEPPS',
    category: 'Governo',
    blurb: 'Sistema de acompanhamento previdenciário para o Instituto de Gestão Previdenciária e Proteção Social do Estado do Pará.',
  },
  {
    title: 'SISJURI — Sistema Jurídico',
    href: '#',
    tags: ['Angular 7', 'Java 8', 'Oracle', 'OpenShift'],
    badge: 'IGEPPS',
    category: 'Governo',
    blurb: 'Sistema jurídico legado (Java 8 + Angular 7) mantido e evoluído em cluster OpenShift — migração incremental sem interrupção do serviço.',
  },
  // CBMPA — 2022–2023
  {
    title: 'SICOM — Condecorações e Medalhas',
    href: '#',
    tags: ['Angular', 'Node.js', 'PostgreSQL'],
    badge: 'CBMPA',
    category: 'Governo',
    blurb: 'Sistema de gestão de condecorações e medalhas dos Bombeiros Militares do Pará — controle de registros, cerimônias e histórico funcional.',
  },
  {
    title: 'SIED — Ética e Disciplina',
    href: '#',
    tags: ['Angular', 'Node.js', 'PostgreSQL'],
    badge: 'CBMPA',
    category: 'Governo',
    blurb: 'Sistema Integrado de Ética e Disciplina — gestão de processos administrativos disciplinares dos Bombeiros Militares do Pará.',
  },
  {
    title: 'SIGA — Gestão Administrativa',
    href: '#',
    tags: ['PHP', 'PostgreSQL'],
    badge: 'CBMPA',
    category: 'Governo',
    blurb: 'Sistema Integrado de Gestão Administrativa dos Bombeiros Militares do Pará — módulos operacionais e controle de recursos.',
  },
  {
    title: 'SISGAT — Atividades Técnicas',
    href: '#',
    tags: ['PHP', 'PostgreSQL'],
    badge: 'CBMPA',
    category: 'Governo',
    blurb: 'Sistema de Gerenciamento de Atividades Técnicas dos Bombeiros Militares do Pará — registro e acompanhamento de operações técnicas.',
  },
  // CEAMAZON / UFPA — 2020–2021
  {
    title: 'SRM-V&A',
    href: 'https://ieeexplore.ieee.org/document/9529879',
    tags: ['IoT', 'React Native', 'Node.js', 'IEEE'],
    badge: 'Patente INPI',
    category: 'Pesquisa',
    blurb: 'Sistema de monitoramento de temperatura para refrigeradores de vacinas. Resultou em patente concedida pelo INPI e publicação no IEEE INDUSCON 2021.',
  },
]

export const education = {
  degree: 'Bacharelado em Engenharia da Computação',
  institution: 'Universidade Federal do Pará (UFPA)',
  period: '2018 — 2024',
}

export const certifications = [
  { name: 'Formação Java e Spring Boot', issuer: 'Alura' },
  { name: 'Angular: Avançando com Testes Automatizados', issuer: 'Alura' },
  { name: 'Spring Boot 3: API Rest em Java', issuer: 'Alura' },
  { name: 'Ignite — React Native', issuer: 'Rocketseat' },
]
