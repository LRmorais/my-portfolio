export const profile = {
  name: 'Lucas Morais',
  role: 'Engenheiro de Software Full-Stack',
  email: 'lucas.morais23ti@gmail.com',
  github: 'https://github.com/LRmorais',
  linkedin: 'https://www.linkedin.com/in/lrmorais/',
  location: 'Florianópolis, SC — Brasil',
  cvUrl: '/cv-lucas-morais.pdf', // substituir pelo link do PDF quando disponível
  summary:
    'Engenheiro full-stack com 6+ anos entregando sistemas críticos para governo federal, fintech e grandes mídias. Especialista em Java, Angular e React Native — com patente concedida pelo INPI e publicação no IEEE.',
}

export const stats = [
  { label: 'Anos de experiência', value: '6+' },
  { label: 'Projetos entregues', value: '20+' },
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
      'Atua no módulo de financiamento imobiliário da Previ — uma das maiores fundações de previdência complementar do Brasil.',
      'Frontend com Angular 17: componentes reutilizáveis, formulários reativos e integração com APIs RESTful.',
      'Backend com Java 17 + Quarkus: microsserviços de alta performance para processos financeiros críticos.',
    ],
  },
  {
    period: '2022 — 2025',
    company: 'Techlead IT Solutions',
    title: 'Analista de Sistemas Pleno',
    type: 'CLT',
    bullets: [
      'Desenvolveu sistemas governamentais do zero para múltiplos clientes: SGP/SGC (SEFA-PA), SISJURI/SIAP (IGEPPS) e SICOM/SIED/SIGA/SISGAT (CBMPA — Bombeiros Militares do Pará).',
      'No CBMPA (2022–2023): SICOM (Condecorações e Medalhas) e SIED (Ética e Disciplina) em Angular + Node.js; SIGA (Gestão Administrativa) e SISGAT (Atividades Técnicas) em PHP vanilla.',
      'Microsserviços Java 17 + Spring Boot 3 com Clean Architecture, DDD, Kafka e Keycloak (OpenID/OAuth2), deploy no OpenShift.',
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
  'Cloud & DevOps': ['AWS Lambda', 'AWS ECS/S3', 'AWS Bedrock', 'Docker', 'OpenShift', 'Jenkins', 'GitLab CI/CD'],
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
    href: '#',
  },
]

export const projects = [
  {
    title: 'Clube Gazeta do Povo',
    href: 'https://play.google.com/store/apps/details?id=br.com.gazetadopovo.clubeapp',
    tags: ['React Native', 'AWS Lambda', 'GraphQL', 'GitLab CI/CD'],
    badge: 'Play Store',
    category: 'Mobile',
    blurb: 'App iOS/Android com dezenas de milhares de downloads. Responsável pela evolução do produto, performance e release automatizado nas duas lojas.',
  },
  {
    title: 'Zet Organizador',
    href: '#',
    tags: ['React Native', 'Node.js', 'QR Code', 'Offline-first'],
    badge: 'Produto',
    category: 'Mobile',
    blurb: 'Validação de ingressos com suporte offline e sincronização confiável para produtoras de eventos ao vivo.',
  },
  {
    title: 'SRM-V&A',
    href: '#',
    tags: ['IoT', 'React Native', 'Node.js', 'IEEE'],
    badge: 'Patente INPI',
    category: 'Pesquisa',
    blurb: 'Sistema de monitoramento de temperatura para refrigeradores de vacinas. Resultou em patente concedida pelo INPI e publicação no IEEE INDUSCON 2021.',
  },
  {
    title: 'SGP — Gestão de Pessoas',
    href: '#',
    tags: ['Angular 16', 'Spring Boot 3', 'Oracle', 'OpenShift'],
    badge: 'SEFA-PA',
    category: 'Governo',
    blurb: 'Sistema criado do zero para a Secretaria de Fazenda do Pará — contratos, gestão de pessoas e design system unificado.',
  },
  {
    title: 'SISJURI — Acompanhamento Processual',
    href: '#',
    tags: ['Angular', 'Spring Boot', 'Keycloak', 'Kafka'],
    badge: 'IGEPPS',
    category: 'Governo',
    blurb: 'Acompanhamento de processos jurídicos com autenticação SSO (Keycloak), integração com sistemas governamentais e trilha de auditoria completa.',
  },
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
