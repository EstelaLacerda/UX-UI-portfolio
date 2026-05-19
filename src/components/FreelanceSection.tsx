import { Quote } from 'lucide-react';

export default function FreelanceSection() {
  const testimonials = [
    { name: "Dolor Sit", role: "Sed do eiusmod tempor" },
    { name: "Dolor Sit", role: "Work at Sed do eiusmod tempor" },
    { name: "Dolor Sit", role: "Founder at Sed do eiusmod tempor" },
    { name: "Dolor Sit", role: "Sed do eiusmod tempor" }
  ];

  return (
    <section id="freelance" className="bg-[#1F1F24] text-white py-24 px-8 lg:px-24">
      <div className="text-center mb-20 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          Available for select<br />freelance opportunities
        </h2>
        <p className="text-[#888888] text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <div key={index} className="bg-white text-black p-8 relative flex flex-col">
            <Quote className="w-12 h-12 text-[#D1D5DB] mb-6 stroke-1" />
            <div className="absolute top-8 right-8 w-12 h-12 bg-[#D1D5DB] rounded-full"></div>
            
            <p className="text-sm text-[#4B5563] leading-relaxed mb-8 flex-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            
            <hr className="border-gray-200 mb-4" />
            
            <div>
              <h5 className="font-bold text-sm mb-1">{t.name}</h5>
              <p className="text-xs text-[#6B7280]">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
