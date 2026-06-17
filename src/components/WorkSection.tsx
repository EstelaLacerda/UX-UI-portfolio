import type { Project } from '../types/project';

interface WorkSectionProps {
  onOpenModal: (project: Project) => void;
}

const projects: Project[] = [
  {
    title: "Cattuccino Dashboard",
    category: "Data Dashboard",
    clientBrand: "Cattuccino",
    enterprise: "CESAR School",
    tags: ["Web", "Dashboard", "Data Analytics"],
    duration: "1 semestre",
    myRole: "Atuei como Data Analytics. Fui responsável pelo levantamento, análise e estruturação dos dados de desempenho financeiro dos produtos e marketing digital, garantindo que os gestores tivessem acesso a métricas relevantes para tomada de decisão.",
    process: "O projeto é uma plataforma dashboard desenvolvida para a startup Cattuccino. O objetivo foi disponibilizar aos gerentes e analistas de negócios informações cruciais sobre a performance de vendas no estabelecimento e o desempenho em diferentes redes sociais, utilizando uma stack baseada em React, Node.js e Python.",
    tools: ["Python", "MySQL", "Docker", "Figma", "Notion"],
    languages: ["React", "Node.js", "Python", "Flask"],
    githubUrl: "https://github.com/MatheusGom/Cattuccino_P5",
    screenshotCount: 5,
  },
  {
    title: "Hunt-hub",
    category: "Plataforma Web",
    clientBrand: "Hunt-hub",
    enterprise: "CESAR School",
    tags: ["Web", "Fullstack", "Marketplace"],
    duration: "1 semestre",
    myRole: "Atuei como desenvolvedora Fullstack, trabalhando de ponta a ponta na aplicação. No backend, atuei na construção de serviços e regras de negócio com Java e Spring Boot. No frontend, desenvolvi as interfaces e a integração usando Next.js.",
    process: "O Hunt-hub é uma plataforma focada em conectar 'hunters' (profissionais) a Product Owners (POs) que buscam talentos para realizar tarefas específicas. A aplicação conta com um sistema de pagamentos, gamificação por níveis e troféus, e uma arquitetura robusta baseada nos padrões Observer e Builder.",
    tools: ["Docker", "PostgreSQL", "Figma", "Notion"],
    languages: ["Java", "Spring Boot", "Next.js", "TypeScript"],
    githubUrl: "https://github.com/CarlosAugustoP/hunt-hub",
    screenshotCount: 6,
  },
  {
    title: "EndoAI",
    category: "Machine Learning / Saúde",
    clientBrand: "EndoAI",
    enterprise: "CESAR School",
    tags: ["Web", "AI", "Health"],
    duration: "1 semestre",
    myRole: "Atuei na equipe de desenvolvimento, colaborando na construção da interface e na integração do modelo de Machine Learning, focando em entregar uma experiência que auxilia na prevenção de casos de diabetes.",
    process: "O EndoAI é uma aplicação voltada para a prevenção de diabetes através de um modelo de machine learning. O objetivo do sistema é analisar dados do usuário e incentivá-lo a buscar diagnóstico de um profissional da saúde. A solução integra um modelo KNN via Flask no back-end e uma interface React no front-end.",
    tools: ["Scikit-Learn", "Figma", "Notion"],
    languages: ["Python", "Flask", "React", "Node.js"],
    githubUrl: "https://github.com/paulo-campos-57/EndoAI",
    screenshotCount: 4,
  },
  {
    title: "IsCool GPT",
    category: "Cloud Native AI Tutor",
    clientBrand: "IsCool GPT",
    enterprise: "CESAR School",
    tags: ["Web", "AI", "Cloud", "DevOps"],
    duration: "1 semestre",
    myRole: "Desenvolvi a aplicação de ponta a ponta como Projeto Final da Disciplina de Cloud Computing. Fui responsável pela arquitetura Cloud-Native, pela implementação da API com Flask, pela Engenharia de Prompt para a persona do professor, e por toda a esteira de CI/CD com GitHub Actions e deploy no Render.",
    process: "O IsCoolGPT é uma API RESTful que utiliza Inteligência Artificial para atuar como um assistente universitário virtual. Diferente de um chat comum, o sistema aplica Engenharia de Prompt avançada no backend para assumir a 'persona' de um Professor Sênior, devolvendo respostas estruturadas com definições simples, analogias do mundo real, exemplos práticos na nuvem, casos de uso de negócio e diferenciais técnicos.",
    tools: ["Docker", "Docker Compose", "GitHub Actions", "Render", "Google Gemini API", "Gunicorn", "Pytest", "Flake8"],
    languages: ["Python", "Flask"],
    githubUrl: "https://github.com/EstelaLacerda/IsCoolGPT---Cloud-Project",
    screenshotCount: 3,
    highlights: [
      {
        title: "Arquitetura Cloud-Native",
        description: "Aplicação totalmente containerizada com Docker, garantindo portabilidade entre ambientes de desenvolvimento e produção.",
      },
      {
        title: "LLM Agnostic",
        description: "Arquitetura desacoplada no módulo services, permitindo troca fácil entre modelos de IA (atualmente utilizando Google Gemini).",
      },
      {
        title: "DevOps Culture",
        description: "Pipeline de CI/CD robusto com testes automatizados, verificação de estilo (linting) e promoção automática de código entre ambientes.",
      },
      {
        title: "High Availability",
        description: "Deploy com estratégia Zero Downtime no Render (PaaS), garantindo que o serviço nunca saia do ar durante atualizações.",
      },
    ],
    devopsFlow: [
      {
        branch: "development",
        label: "1. Development",
        purpose: "Ambiente de desenvolvimento ativo.",
        details: [
          "A cada push, o pipeline pipeline.yml é acionado automaticamente.",
          "Executa testes unitários (pytest) e linter (flake8).",
          "O build do Docker só ocorre se todos os testes passarem.",
        ],
      },
      {
        branch: "staging",
        label: "2. Staging",
        purpose: "Ambiente de pré-produção (Gatekeeper).",
        details: [
          "Recebe Pull Requests da branch development.",
          "Se os testes passarem, o pipeline deploy.yml faz o deploy na URL de Staging do Render.",
          "Se o deploy em Staging for bem-sucedido, o sistema abre e mergeia automaticamente um PR para a main, sem intervenção humana.",
        ],
      },
      {
        branch: "main",
        label: "3. Main / Production",
        purpose: "Ambiente de Produção (Live).",
        details: [
          "Recebe apenas código validado vindo de staging.",
          "Hotfix Strategy: se um commit for feito diretamente na main, o pipeline pula as etapas de Staging e realiza o deploy imediato em Produção.",
        ],
      },
    ],
    localSetup: [
      "Clone o repositório: git clone https://github.com/EstelaLacerda/IsCoolGPT---Cloud-Project.git",
      "Crie um arquivo .env na raiz com sua chave: GOOGLE_API_KEY=\"Sua_Chave_Aqui\"",
      "Execute com Docker (recomendado): docker-compose up --build",
      "O servidor iniciará em http://localhost:5000",
    ],
  },
  {
    title: "Upcycle-Crew",
    category: "Computer Vision · Hackathon",
    clientBrand: "Upcycle-Crew",
    enterprise: "Hackathon BB — Rec'n Play 2024",
    tags: ["Web", "AI", "Sustentabilidade"],
    duration: "Hackathon (Rec'n Play 2024)",
    myRole: "Atuei como desenvolvedora Fullstack, contribuindo tanto no backend com Python/Django quanto no frontend com React. Participei da integração com a API do Google Vision para a análise de resíduos e no fluxo de notificação por e-mail via SMTP.",
    process: "O Upcycle-Crew é um MVP de um totem de ponto de descarte de resíduo eletrônico. A aplicação utiliza visão computacional (Google Vision API) para analisar o item apresentado pelo usuário. Se for um resíduo eletrônico válido, a lixeira é aberta e o usuário recebe um e-mail de agradecimento. Caso contrário, a porta permanece fechada e o sistema informa ao usuário que o item não é aceito.",
    tools: ["Google Vision API", "SMTP / Django Email", "Django", "Notion"],
    languages: ["Python", "React", "JavaScript"],
    githubUrl: "https://github.com/paulo-campos-57/Upcycle-Crew",
    screenshotCount: 3,
    highlights: [
      {
        title: "Visão Computacional",
        description: "Integração com a Google Vision API para classificação automática do resíduo apresentado pelo usuário em tempo real.",
      },
      {
        title: "Resposta Inteligente",
        description: "Se o item for um resíduo eletrônico válido, a lixeira é aberta. Caso contrário, o sistema bloqueia a porta e orienta o usuário.",
      },
      {
        title: "Notificação por E-mail",
        description: "Após um descarte bem-sucedido, o sistema envia automaticamente um e-mail de agradecimento ao usuário via SMTP.",
      },
      {
        title: "Fullstack MVP",
        description: "Backend em Python/Django com frontend React, desenvolvido em tempo de hackathon com foco em funcionalidade e entrega.",
      },
    ],
    localSetup: [
      "Clone o repositório: git clone https://github.com/paulo-campos-57/Upcycle-Crew.git",
      "Navegue para o diretório upcycleproject (onde está o manage.py)",
      "Instale as dependências: pip install -r requirements.txt",
      "Crie um arquivo .env com sua chave da Google Vision API, credenciais SMTP e usuário de e-mail",
      "Execute: python manage.py makemigrations && python manage.py migrate && python manage.py runserver",
      "Em outro terminal, navegue até upcyclefront e execute: npm install && npm start",
      "O frontend estará disponível em http://localhost:3000",
    ],
  },
  {
    title: "Graphs Project",
    category: "Teoria dos Grafos · Web",
    clientBrand: "GraphProject",
    enterprise: "CESAR School — 5° Período",
    tags: ["Web", "Algoritmos", "React"],
    duration: "1 semestre",
    myRole: "Atuei como desenvolvedora frontend e na implementação dos algoritmos de grafos. Fui responsável pela construção de funcionalidades como a verificação de grafo euleriano, o cálculo do menor caminho entre vértices e a visualização da matriz e lista de adjacências.",
    process: "O Graphs Project é um website desenvolvido em React para a construção e visualização de grafos, criado para a disciplina de Teoria dos Grafos. A aplicação permite inserir grafos direcionados, não direcionados, com e sem peso, além de importar grafos via arquivo CSV. O sistema oferece análise visual e algorítmica completa da estrutura do grafo.",
    tools: ["React", "Notion"],
    languages: ["React", "JavaScript", "CSS"],
    githubUrl: "https://github.com/EstelaLacerda/GraphProject",
    screenshotCount: 3,
    highlights: [
      {
        title: "Tipos de Grafo",
        description: "Suporte a grafos direcionados, não direcionados, com peso e sem peso, além de importação por arquivo CSV.",
      },
      {
        title: "Visualização Estrutural",
        description: "Exibição da ordem e tamanho do grafo, grau de cada vértice, matriz de adjacências e lista de adjacências.",
      },
      {
        title: "Análise Algorítmica",
        description: "Verificação de adjacência entre vértices, detecção de grafo euleriano e cálculo do menor caminho entre dois vértices.",
      },
      {
        title: "Interface Interativa",
        description: "Construção visual de grafos diretamente no browser, com atualizações em tempo real conforme o usuário insere dados.",
      },
    ],
    localSetup: [
      "Clone o repositório: git clone https://github.com/EstelaLacerda/GraphProject.git",
      "Navegue até a pasta GraphProject/graph-project",
      "Instale as dependências: npm install",
      "Inicie o projeto: npm start",
      "Acesse no navegador: http://localhost:3000",
    ],
  },
];

export default function WorkSection({ onOpenModal }: WorkSectionProps) {
  return (
    <section id="work" className="bg-bg-black text-white py-24 px-8 lg:px-24">
      {/* Header Area */}
      <div className="mb-20 max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold mb-6">My work</h2>
        <p className="text-[#888888] text-lg leading-relaxed max-w-2xl">
          Aqui você encontra uma seleção dos projetos que desenvolvi ao longo da minha trajetória,
          desde dashboards de dados e plataformas web até soluções com Machine Learning.
          Cada projeto representa um desafio real, trabalhado em equipe e com propósito.
          Explore, conheça o processo e veja como transformo ideias em produto.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="cursor-pointer group"
            onClick={() => onOpenModal(project)}
          >
            {/* Project Image Placeholder */}
            <div className="w-full aspect-[4/3] bg-bg-card-dark mb-4 group-hover:opacity-80 transition-opacity flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#555]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </div>
            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-2">
              {project.tags.map((tag) => (
                <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-[#31313A] text-[#B0FF00] px-2 py-0.5">
                  {tag}
                </span>
              ))}
            </div>
            {/* Project Details */}
            <h4 className="text-lg font-bold mb-1">{project.title}</h4>
            <p className="text-sm text-[#888888]">{project.category}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
