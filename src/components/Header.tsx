import { useLanguage } from '../contexts/LanguageContext';

export default function Header() {
  const { t, language, setLanguage } = useLanguage();

  return (
    <header className="bg-bg-black min-h-screen flex flex-col pt-8 pb-16 px-8 lg:px-24">
      {/* Navigation */}
      <nav className="relative flex flex-col md:flex-row justify-center items-center mb-24 w-full">
        <div className="md:absolute left-0 flex items-center text-4xl font-bold italic mb-8 md:mb-0">
          <img src="/logo2.png" alt='logo' className='h-10 md:h-12' />
        </div>

        <ul className="flex flex-wrap justify-center items-center gap-8 text-base md:text-lg text-gray-400">
          <li><a href="#home" className="hover:text-white transition-colors">{t('header.home')}</a></li>
          <li><a href="#expertise" className="hover:text-white transition-colors">{t('header.expertise')}</a></li>
          <li><a href="#work" className="hover:text-white transition-colors">{t('header.work')}</a></li>
          <li><a href="#experience" className="hover:text-white transition-colors">{t('header.experience')}</a></li>
          <li>
            <button
              onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
              className="ml-4 px-3 py-1 bg-[#1F1F24] text-[#B0FF00] font-bold text-sm rounded hover:bg-white hover:text-black transition-colors"
            >
              {language === 'pt' ? 'EN' : 'PT'}
            </button>
          </li>
        </ul>
      </nav>

      {/* Hero Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        {/* Avatar */}
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-[4rem] mb-8 flex items-center justify-center overflow-hidden bg-[#D9D9D9]">
          <img src="/profile.jpg" alt="Estela Lacerda" className="w-full h-full object-cover scale-[1.25]" />
        </div>

        {/* Name & Subtitle */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">Estela Lacerda</h1>
        <p className="text-[#6B7280] text-sm md:text-base tracking-widest uppercase max-w-2xl mb-12">
          {t('header.subtitle')}
        </p>

        {/* Featured In */}
        <div className="mb-12">
          <p className="text-[#4B5563] text-xs uppercase tracking-[0.2em]">{t('header.featuredIn')}</p>
        </div>

        {/* Buttons Grid */}
        <div className="flex flex-wrap justify-center gap-4 w-full max-w-4xl">
          <a
            href="https://github.com/EstelaLacerda"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#E5E7EB] text-black font-medium py-3 px-8 text-sm rounded-full hover:bg-white transition-colors flex items-center justify-center text-center"
          >
            {t('header.github')}
          </a>
          <a
            href="/Estela Oliveira.pdf"
            download="Estela Oliveira.pdf"
            className="bg-[#E5E7EB] text-black font-medium py-3 px-8 text-sm rounded-full hover:bg-white transition-colors flex items-center justify-center text-center leading-tight whitespace-pre-line"
          >
            {t('header.downloadResume')}
          </a>
          <a
            href="https://www.linkedin.com/in/estela-de-lacerda-oliveira/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#E5E7EB] text-black font-medium py-3 px-8 text-sm rounded-full hover:bg-white transition-colors flex items-center justify-center text-center"
          >
            {t('header.linkedin')}
          </a>
          <a
            href="mailto:esteladelac.oli@gmail.com?subject=Contato%20via%20Portf%C3%B3lio&body=Ol%C3%A1%2C%20Estela!%20Vi%20o%20seu%20Portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20alguns%20projetos."
            className="bg-[#E5E7EB] text-black font-medium py-3 px-8 text-sm rounded-full hover:bg-white transition-colors flex items-center justify-center text-center"
          >
            {t('header.email')}
          </a>
          <a
            href="https://wa.me/558189519503?text=Ol%C3%A1%2C%20Estela!%20Vi%20o%20seu%20Portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20alguns%20projetos."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#E5E7EB] text-black font-medium py-3 px-8 text-sm rounded-full hover:bg-white transition-colors flex items-center justify-center text-center"
          >
            {t('header.contactMe')}
          </a>
        </div>
      </div>
    </header>
  );
}
