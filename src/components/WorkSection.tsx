import type { Project } from '../types/project';

interface WorkSectionProps {
  onOpenModal: (project: Project) => void;
}

const projects: Project[] = [
  {
    title: "Catuccino",
    category: "Data Dashboard",
    clientBrand: "Catuccino",
    enterprise: "Lorem Ipsum Corp",
    tags: ["Web", "Dashboard"],
    duration: "3 meses",
    myRole: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fui responsável pelo design do sistema de visualização de dados, criação do design system e prototipação das telas.",
    process: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    tools: ["Figma", "Adobe XD", "Notion", "Miro", "Zeplin"],
    languages: ["React", "TypeScript", "CSS", "Node.js"],
    githubUrl: "https://github.com",
    screenshotCount: 5,
  },
  {
    title: "Hubt-Hub",
    category: "Web Development",
    clientBrand: "Hubt-Hub",
    enterprise: "Lorem Ipsum Agency",
    tags: ["Web", "App"],
    duration: "2 meses",
    myRole: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fui responsável pelo UX research, wireframes e handoff para o time de desenvolvimento.",
    process: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    tools: ["Figma", "FigJam", "Hotjar", "Notion"],
    languages: ["Next.js", "JavaScript", "Tailwind CSS"],
    githubUrl: "https://github.com",
    screenshotCount: 6,
  },
  {
    title: "Endo.AI",
    category: "Machine Learning Project",
    clientBrand: "Endo.AI",
    enterprise: "Lorem Ipsum Startup",
    tags: ["Web", "AI"],
    duration: "4 meses",
    myRole: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore. Fui responsável por toda a interface do produto, design de fluxos de IA e testes de usabilidade.",
    process: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    tools: ["Figma", "Maze", "Notion", "Miro", "Adobe Illustrator"],
    languages: ["Python", "React", "TypeScript", "FastAPI"],
    githubUrl: "https://github.com",
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
