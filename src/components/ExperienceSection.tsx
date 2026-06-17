import { useLanguage } from '../contexts/LanguageContext';

export default function ExperienceSection() {
  const { t } = useLanguage();
  const experiences = t('experience.jobs');

  return (
    <section id="experience" className="bg-bg-blueish text-white py-24 px-8 lg:px-24">
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-20 leading-tight whitespace-pre-line">
        {t('experience.title')}
      </h2>

      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        {experiences.map((exp: any, index: number) => (
          <div
            key={index}
            className="bg-[#B0FF00] rounded text-[#1F2937] p-8 flex flex-col md:flex-row gap-8 items-start"
          >
            <div className="md:w-1/4 font-bold text-[#26385D] flex flex-col items-start gap-1">
              <h3 className="text-lg leading-snug">{exp.company}</h3>
              <p className="text-sm font-semibold text-[#3a5580]">{exp.role}</p>
              <span className="text-2xl font-extrabold mt-1">{exp.year}</span>
            </div>
            <div className="md:w-3/4 text-sm text-[#4B5563] leading-relaxed">
              {exp.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
