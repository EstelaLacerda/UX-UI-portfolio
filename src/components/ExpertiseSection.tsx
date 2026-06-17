import { BarChart2, Code2, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function ExpertiseSection() {
  const { t } = useLanguage();

  return (
    <section id="expertise" className="bg-white text-[#1F1F24] py-24 px-8 lg:px-24">
      <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 text-[#1F1F24]">
        {t('expertise.title')}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Card 1 — Data Analysis */}
        <div className="border border-gray-200 p-10 flex flex-col items-start bg-white hover:shadow-lg transition-shadow">
          <BarChart2 className="w-10 h-10 mb-8 text-[#1F1F24]" strokeWidth={1.5} />
          <h3 className="text-2xl font-bold mb-2">{t('expertise.card1.title')}</h3>
          <h4 className="text-gray-500 mb-8 font-medium">{t('expertise.card1.subtitle')}</h4>
          <p className="text-gray-500 leading-relaxed text-sm">
            {t('expertise.card1.desc')}
          </p>
        </div>

        {/* Card 2 — Development */}
        <div className="border border-gray-200 p-10 flex flex-col items-start bg-white hover:shadow-lg transition-shadow">
          <Code2 className="w-10 h-10 mb-8 text-[#1F1F24]" strokeWidth={1.5} />
          <h3 className="text-2xl font-bold mb-2">{t('expertise.card2.title')}</h3>
          <h4 className="text-gray-500 mb-8 font-medium">{t('expertise.card2.subtitle')}</h4>
          <p className="text-gray-500 leading-relaxed text-sm">
            {t('expertise.card2.desc')}
          </p>
        </div>

        {/* Card 3 — Soft Skills */}
        <div className="border border-gray-200 p-10 flex flex-col items-start bg-white hover:shadow-lg transition-shadow">
          <Users className="w-10 h-10 mb-8 text-[#1F1F24]" strokeWidth={1.5} />
          <h3 className="text-2xl font-bold mb-2">{t('expertise.card3.title')}</h3>
          <h4 className="text-gray-500 mb-8 font-medium">{t('expertise.card3.subtitle')}</h4>
          <p className="text-gray-500 leading-relaxed text-sm">
            {t('expertise.card3.desc')}
          </p>
        </div>
      </div>
    </section>
  );
}
