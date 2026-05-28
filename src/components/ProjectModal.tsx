import { ArrowLeft, GitBranch, ExternalLink, X } from 'lucide-react';
import type { Project } from '../types/project';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

function ImgPlaceholder({ className }: { className?: string }) {
  return (
    <div className={`bg-[#C4C4C4] flex items-center justify-center ${className ?? ''}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 text-[#9CA3AF]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1}
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    </div>
  );
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto"
      style={{ background: 'rgba(0,0,0,0.82)', backdropFilter: 'blur(4px)' }}
    >
      {/* Invisible backdrop — click outside modal to close */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative min-h-screen flex items-start justify-center px-4 py-8 sm:px-8">
        <div className="relative bg-[#F2F2F2] w-full max-w-5xl text-[#1F1F24] shadow-2xl">

          {/* ── Sticky top bar ── */}
          <div className="sticky top-0 z-20 bg-[#F2F2F2] border-b border-gray-300 px-6 sm:px-8 py-3 flex items-center justify-between">
            <button
              onClick={onClose}
              className="flex items-center gap-1.5 text-sm font-semibold text-gray-500 hover:text-black transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Work
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded hover:bg-gray-200 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* ── Main content ── */}
          <div className="px-6 sm:px-8 py-8">

            {/* Title + Tags */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold leading-tight">{project.title}</h2>
                <p className="text-gray-500 mt-1 text-sm">{project.category}</p>
              </div>
              <div className="flex flex-wrap gap-2 sm:justify-end sm:pt-1 shrink-0">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#1F1F24] text-[#B0FF00] text-[10px] font-bold uppercase tracking-widest px-3 py-1.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Client Brand card */}
            <div className="flex items-center gap-4 mb-8 p-4 bg-white border border-gray-200">
              <ImgPlaceholder className="w-16 h-16 rounded shrink-0" />
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-0.5">Marca do Cliente</p>
                <p className="font-bold text-xl leading-tight">{project.clientBrand}</p>
                <p className="text-sm text-gray-500">{project.enterprise}</p>
              </div>
            </div>

            {/* Hero image */}
            <ImgPlaceholder className="w-full aspect-video mb-3 rounded" />

            {/* Screenshot gallery */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
              {Array.from({ length: project.screenshotCount }).map((_, i) => (
                <ImgPlaceholder key={i} className="aspect-video rounded" />
              ))}
            </div>

            {/* ── Details grid ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-10">

              {/* Left column */}
              <div className="flex flex-col gap-7">
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">Minha Atuação</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">{project.myRole}</p>
                </div>

                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">Duração</h4>
                  <p className="text-gray-700 text-sm">{project.duration}</p>
                </div>

                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">Empresa / Cliente</h4>
                  <p className="text-gray-700 text-sm">{project.enterprise}</p>
                </div>

                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">GitHub</h4>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#1F1F24] text-[#B0FF00] text-sm font-semibold px-4 py-2 hover:bg-black transition-colors"
                  >
                    <GitBranch className="w-4 h-4" />
                    Ver no GitHub
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Right column */}
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">Processo do Projeto</h4>
                <p className="text-gray-700 text-sm leading-relaxed">{project.process}</p>
              </div>
            </div>

            {/* Divider */}
            <hr className="border-gray-300 mb-8" />

            {/* Tools + Languages */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">Ferramentas Utilizadas</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="bg-[#1F1F24] text-white text-xs font-medium px-3 py-1.5 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">Linguagens / Tecnologias</h4>
                <div className="flex flex-wrap gap-2">
                  {project.languages.map((lang) => (
                    <span
                      key={lang}
                      className="border-2 border-[#1F1F24] text-[#1F1F24] text-xs font-bold px-3 py-1.5 rounded-full"
                      style={{ fontFamily: 'monospace' }}
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Back button */}
            <button
              onClick={onClose}
              className="bg-[#FDE8F1] text-black font-bold py-2 px-8 hover:bg-pink-200 transition-colors"
            >
              ← Back
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
