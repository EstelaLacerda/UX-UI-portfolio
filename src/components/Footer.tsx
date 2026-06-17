import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-bg-black py-12 px-8 lg:px-24 border-t border-gray-800 flex justify-center items-center">
      <a 
        href="https://github.com/EstelaLacerda" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity flex flex-col items-center gap-4"
      >
        <img src="/logo2.png" alt="Estela Lacerda Logo" className="h-10 md:h-12" />
        <span className="text-gray-500 text-sm tracking-widest uppercase hover:text-white transition-colors text-center">
          {t('footer.developedBy')}
        </span>
      </a>
    </footer>
  );
}
