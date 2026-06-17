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
    category: "AI Teacher — Cloud Subject",
    clientBrand: "IsCool GPT",
    enterprise: "Lorem Ipsum University",
    tags: ["Web", "AI", "Education"],
    duration: "2 meses",
    myRole: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fui responsável pelo design da interface conversacional, fluxo de onboarding e testes com usuários estudantes.",
    process: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    tools: ["Figma", "FigJam", "ChatGPT API", "Notion"],
    languages: ["React", "TypeScript", "Node.js", "OpenAI API"],
    githubUrl: "https://github.com",
    screenshotCount: 4,
  },
  {
    title: "Lorem Ipsum Project 2",
    category: "Web Development",
    clientBrand: "Lorem Client",
    enterprise: "Lorem Ipsum Enterprise",
    tags: ["Web", "iOS"],
    duration: "1 mês",
    myRole: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    process: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    tools: ["Figma", "Notion", "Miro"],
    languages: ["React", "CSS", "JavaScript"],
    githubUrl: "https://github.com",
    screenshotCount: 4,
  },
  {
    title: "Lorem Ipsum Project 3",
    category: "Web Development",
    clientBrand: "Lorem Client 3",
    enterprise: "Lorem Ipsum Corp",
    tags: ["Android", "App"],
    duration: "3 meses",
    myRole: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    process: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    tools: ["Figma", "Android Studio", "Miro", "Notion"],
    languages: ["Kotlin", "Java", "XML"],
    githubUrl: "https://github.com",
    screenshotCount: 5,
  },
];

export default function WorkSection({ onOpenModal }: WorkSectionProps) {
  return (
    <section id="work" className="bg-bg-black text-white py-24 px-8 lg:px-24">
      {/* Header Area */}
      <div className="flex flex-col md:flex-row justify-between mb-24 max-w-6xl mx-auto gap-12">
        {/* Left Side */}
        <div className="flex-1 max-w-xl">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">My work</h2>
          <p className="text-[#888888] text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </div>

        {/* Right Side - Featured App */}
        <div className="flex-1 flex flex-col items-center md:items-end">
          <h3 className="text-2xl font-bold mb-4 mr-0 md:mr-12">Lorem App</h3>
          <div className="w-48 h-80 bg-[#8892A0] rounded-[2rem] border-4 border-[#31313A] mb-4 mr-0 md:mr-12"></div>
          <button className="bg-accent-pink text-black px-6 py-2 text-sm font-medium mr-0 md:mr-12 hover:bg-pink-200 transition-colors">
            View project
          </button>
        </div>
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
