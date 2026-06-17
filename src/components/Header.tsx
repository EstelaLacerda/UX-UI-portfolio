import { User } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-bg-black min-h-screen flex flex-col pt-8 pb-16 px-8 lg:px-24">
      {/* Navigation */}
      <nav className="relative flex flex-col md:flex-row justify-center items-center mb-24 w-full">
        <div className="md:absolute left-0 flex items-center text-4xl font-bold italic mb-8 md:mb-0">
          <img src="/logo2.png" alt='logo' className='h-10 md:h-12' />
        </div>

        <ul className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          <li><a href="#home" className="hover:text-white transition-colors">01//home</a></li>
          <li><a href="#expertise" className="hover:text-white transition-colors">02//expertise</a></li>
          <li><a href="#work" className="hover:text-white transition-colors">03//my work</a></li>
          <li><a href="#experience" className="hover:text-white transition-colors">04//professional experience</a></li>
        </ul>
      </nav>

      {/* Hero Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        {/* Avatar */}
        <div className="bg-[#D9D9D9] w-48 h-48 rounded-[3rem] mb-8 flex items-center justify-center overflow-hidden">
          <User className="w-32 h-32 text-gray-400 mt-8" />
        </div>

        {/* Name & Subtitle */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">Estela Lacerda</h1>
        <p className="text-[#6B7280] text-sm md:text-base tracking-widest uppercase max-w-2xl mb-12">
          Dados · Desenvolvimento · UX/UI
        </p>

        {/* Featured In */}
        <div className="mb-12">
          <p className="text-[#4B5563] text-xs uppercase tracking-[0.2em]">As featured in</p>
        </div>

        {/* Buttons Grid */}
        <div className="flex flex-wrap justify-center gap-4 w-full max-w-4xl">
          <a
            href="https://github.com/EstelaLacerda"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#E5E7EB] text-black font-medium py-3 px-8 text-sm hover:bg-white transition-colors"
          >
            Github
          </a>
          <a
            href="/Estela Oliveira.pdf"
            download="Estela Oliveira.pdf"
            className="bg-[#E5E7EB] text-black font-medium py-3 px-8 text-sm hover:bg-white transition-colors text-center leading-tight"
          >
            Download<br />my resume
          </a>
          <a
            href="https://www.linkedin.com/in/estela-de-lacerda-oliveira/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#E5E7EB] text-black font-medium py-3 px-8 text-sm hover:bg-white transition-colors"
          >
            Linkedin
          </a>
          <a
            href="mailto:esteladelac.oli@gmail.com?subject=Contato%20via%20Portf%C3%B3lio&body=Ol%C3%A1%2C%20Estela!%20Vi%20o%20seu%20Portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20alguns%20projetos."
            className="bg-[#E5E7EB] text-black font-medium py-3 px-8 text-sm hover:bg-white transition-colors"
          >
            E-mail
          </a>
          <a
            href="https://wa.me/558189519503?text=Ol%C3%A1%2C%20Estela!%20Vi%20o%20seu%20Portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20alguns%20projetos."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#E5E7EB] text-black font-medium py-3 px-8 text-sm hover:bg-white transition-colors"
          >
            Contact me
          </a>
        </div>
      </div>
    </header>
  );
}
