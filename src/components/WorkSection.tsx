import type { Project } from '../types/project';
import { useLanguage } from '../contexts/LanguageContext';

interface WorkSectionProps {
  onOpenModal: (project: Project) => void;
}

export default function WorkSection({ onOpenModal }: WorkSectionProps) {
  const { t } = useLanguage();
  const projects: Project[] = t('projects');

  return (
    <section id="work" className="bg-bg-black text-white py-24 px-8 lg:px-24">
      {/* Header Area */}
      <div className="mb-20 max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold mb-6">{t('work.title')}</h2>
        <p className="text-[#888888] text-lg leading-relaxed max-w-2xl">
          {t('work.desc')}
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
            <div className="w-full aspect-[4/3] bg-bg-card-dark mb-4 group-hover:opacity-80 transition-opacity flex items-center justify-center overflow-hidden">
              {project.coverImage ? (
                <img src={project.coverImage} alt={project.title} className="w-full h-full object-cover" />
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#555]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              )}
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
