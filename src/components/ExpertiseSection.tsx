import { Monitor, Code2, Smartphone } from 'lucide-react';

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="bg-white text-[#1F1F24] py-24 px-8 lg:px-24">
      <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 text-[#1F1F24]">
        Expertise
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="border border-gray-200 p-10 flex flex-col items-start bg-white hover:shadow-lg transition-shadow">
          <Monitor className="w-10 h-10 mb-8 text-[#1F1F24]" strokeWidth={1.5} />
          <h3 className="text-2xl font-bold mb-2">Lorem Ipsum</h3>
          <h4 className="text-gray-500 mb-8 font-medium">Dolor Sit Amet</h4>
          <p className="text-gray-500 leading-relaxed text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Card 2 */}
        <div className="border border-gray-200 p-10 flex flex-col items-start bg-white hover:shadow-lg transition-shadow">
          <Code2 className="w-10 h-10 mb-8 text-[#1F1F24]" strokeWidth={1.5} />
          <h3 className="text-2xl font-bold mb-2">Consectetur Elit</h3>
          <h4 className="text-gray-500 mb-8 font-medium">React, Next.JS</h4>
          <p className="text-gray-500 leading-relaxed text-sm">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Card 3 */}
        <div className="border border-gray-200 p-10 flex flex-col items-start bg-white hover:shadow-lg transition-shadow">
          <Smartphone className="w-10 h-10 mb-8 text-[#1F1F24]" strokeWidth={1.5} />
          <h3 className="text-2xl font-bold mb-2">Sed Tempor</h3>
          <h4 className="text-gray-500 mb-8 font-medium">Android, iOS</h4>
          <p className="text-gray-500 leading-relaxed text-sm">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </div>
    </section>
  );
}
