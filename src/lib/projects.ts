export interface Project {
  id: string;
  title: string;
  role: string;
  year: string;
  excerpt: string;
  description: string;
  tags: string[];
  gradient: string;
  emoji: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: "ctt-digital-channel-redesign",
    title: "CTT Digital Channel Redesign",
    role: "UX Design",
    year: "2024",
    excerpt:
      "Redesenho da experiencia digital dos canais comerciais dos CTT, modernizando a interacao dos clientes com servicos postais.",
    description:
      "Liderei o redesenho completo da experiencia digital dos canais comerciais dos CTT. O projecto envolveu pesquisa com utilizadores, definicao de arquitetura de informacao, wireframing, prototipagem e testes de usabilidade para garantir uma transicao suave entre os canais fisicos e digitais.",
    tags: ["UX Research", "Wireframing", "Prototyping", "Usability Testing"],
    gradient: "from-blue-500/20 to-purple-500/10",
    emoji: "📮",
    category: "UX Design",
  },
  {
    id: "thestarter-elearning-platform",
    title: "TheStarter E-Learning Platform",
    role: "Lead Product Designer",
    year: "2022-2024",
    excerpt:
      "Plataforma de aprendizagem online com foco em UX, desenhada para maximizar a retencao e o envolvimento dos alunos.",
    description:
      "Como Lead Product Designer, fui responsavel por toda a experiencia de produto da plataforma TheStarter. Trabalhei em estreita colaboracao com engenheiros e stakeholders para criar uma experiencia de aprendizagem intuitiva, gamificada e acessivel. Conduzi pesquisas com utilizadores, criei o design system e supervisei a implementacao.",
    tags: ["UI Design", "Design System", "Agile", "Gamification"],
    gradient: "from-emerald-500/20 to-teal-500/10",
    emoji: "🎓",
    category: "Product Design",
  },
  {
    id: "asistobe-transport-interface",
    title: "Asistobe Transport Interface",
    role: "UX Design",
    year: "2022-2023",
    excerpt:
      "Interfaces para transporte de passageiros, focadas em usabilidade e acessibilidade para diversos perfis de utilizadores.",
    description:
      "Desenhei as interfaces de utilizador para o sistema de transporte de passageiros da Asistobe. O desafio principal foi criar uma experiencia coesa para diferentes tipos de utilizadores, desde operadores ate passageiros finais. Realizei testes de usabilidade iterativos e colaborei com a equipa de desenvolvimento para garantir a fidelidade da implementacao.",
    tags: ["User Research", "Usability Testing", "Mobile", "Accessibility"],
    gradient: "from-orange-500/20 to-yellow-500/10",
    emoji: "🚌",
    category: "UX Design",
  },
  {
    id: "outsystems-design-system",
    title: "OutSystems Design System",
    role: "UX Design",
    year: "2023-2024",
    excerpt:
      "Criacao de um design system enterprise para a plataforma low-code da OutSystems, promovendo consistencia e escalabilidade.",
    description:
      "Contribui para a criacao e manutencao do design system enterprise da OutSystems. O trabalho incluiu a definicao de componentes reutilizaveis, documentacao de padroes de UX, auditorias de acessibilidade e colaboracao com equipas de produto para garantir a adocao consistente do sistema em toda a organizacao.",
    tags: ["Design Systems", "Accessibility", "Enterprise", "Component Library"],
    gradient: "from-pink-500/20 to-rose-500/10",
    emoji: "🧩",
    category: "Design Systems",
  },
  {
    id: "tangivel-ux-projects",
    title: "Tangivel UX Projects",
    role: "UX Designer",
    year: "2019-2021",
    excerpt:
      "Projetos de consultoria UX para diversos clientes, abrangendo pesquisa, estrategia e design de interacao.",
    description:
      "Na Tangivel, trabalhei em multiplos projectos de consultoria UX para clientes de diferentes setores. As minhas responsabilidades incluiam pesquisa etnografica, entrevistas com utilizadores, definicao de personas, jornadas de utilizador, prototipagem e testes de usabilidade. Cada projecto exigiu adaptacao rapida a diferentes contextos de negocio.",
    tags: ["UX Research", "Consulting", "Prototyping", "Strategy"],
    gradient: "from-violet-500/20 to-indigo-500/10",
    emoji: "💡",
    category: "UX Consulting",
  },
];

export const allCategories = Array.from(
  new Set(projects.map((p) => p.category))
);

export const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));
