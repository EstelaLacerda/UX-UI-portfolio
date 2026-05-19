export default function ExperienceSection() {
  const experiences = [
    { year: "2022" },
    { year: "2023" },
    { year: "2024" }
  ];

  return (
    <section id="experience" className="bg-bg-blueish text-white py-24 px-8 lg:px-24">
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-20 leading-tight">
        Professional<br />Experience
      </h2>
      
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-[#B0FF00] rounded text-[#1F2937] p-8 flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/4 font-bold text-[#26385D] flex flex-col items-center md:items-start">
              <h3 className="text-xl">Lorem Ipsum</h3>
              <p className="text-lg">{exp.year}</p>
            </div>
            <div className="md:w-3/4 text-sm text-[#4B5563] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
