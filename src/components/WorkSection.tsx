import { useRef } from 'react';
import type { Project } from '../types/project';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface WorkSectionProps {
  onOpenModal: (project: Project) => void;
}

export default function WorkSection({ onOpenModal }: WorkSectionProps) {
  const { t } = useLanguage();
  const projects: Project[] = t('projects');
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section id="work" className="bg-bg-black text-white py-24 px-8 lg:px-24">
      {/* Header Area */}
      <div className="mb-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">{t('work.title')}</h2>
          <p className="text-[#888888] text-lg leading-relaxed max-w-2xl">
            {t('work.desc')}
          </p>
        </div>
        {/* Navigation Buttons */}
        <div className="flex gap-4">
          <button 
            onClick={scrollLeft}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1F1F24] text-white hover:bg-[#B0FF00] hover:text-black transition-colors"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={scrollRight}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1F1F24] text-white hover:bg-[#B0FF00] hover:text-black transition-colors"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Projects Carousel */}
      <div 
        ref={carouselRef}
        className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-8 max-w-7xl mx-auto [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="cursor-pointer group flex-none w-[85vw] md:w-[45vw] lg:w-[350px] snap-center md:snap-start"
            onClick={() => onOpenModal(project)}
          >
            {/* Project Image Placeholder */}
            <div className="w-full aspect-[4/3] bg-bg-card-dark mb-4 group-hover:opacity-80 transition-opacity flex items-center justify-center overflow-hidden rounded">
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
                <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-[#31313A] text-[#B0FF00] px-2 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </div>
            {/* Project Details */}
            <h4 className="text-lg font-bold mb-1 group-hover:text-[#B0FF00] transition-colors">{project.title}</h4>
            <p className="text-sm text-[#888888] line-clamp-2">{project.category}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
