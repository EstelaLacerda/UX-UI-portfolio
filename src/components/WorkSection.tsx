interface WorkSectionProps {
  onOpenModal: () => void;
}

export default function WorkSection({ onOpenModal }: WorkSectionProps) {
  const projects = [
    { title: "Catuccino", category: "Data Dashboard" },
    { title: "Hubt-Hub", category: "Web Development" },
    { title: "Endo.AI", category: "Machine Learning project" },
    { title: "IsCool GPT", category: "AI teacher for the subject Cloud" },
    { title: "Lorem Ipsum Project 2", category: "Web Development" },
    { title: "Lorem Ipsum Project 3", category: "Web Development" },
  ];

  return (
    <section id="work" className="bg-bg-black text-white py-24 px-8 lg:px-24">
      {/* Header Area */}
      <div className="flex flex-col md:flex-row justify-between mb-24 max-w-6xl mx-auto gap-12">
        {/* Left Side */}
        <div className="flex-1 max-w-xl">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">My work</h2>
          <p className="text-[#888888] text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </div>

        {/* Right Side - Featured App */}
        <div className="flex-1 flex flex-col items-center md:items-end">
          <h3 className="text-2xl font-bold mb-4 mr-0 md:mr-12">Lorem App</h3>
          <div className="w-48 h-80 bg-[#8892A0] rounded-[2rem] border-4 border-[#31313A] mb-4 mr-0 md:mr-12"></div>
          <button className="bg-accent-pink text-black px-6 py-2 text-sm font-medium mr-0 md:mr-12 hover:bg-pink-200 transition-colors">
            View project
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="cursor-pointer group"
            onClick={onOpenModal}
          >
            {/* Project Image Placeholder */}
            <div className="w-full aspect-[4/3] bg-bg-card-dark mb-4 group-hover:opacity-80 transition-opacity"></div>
            {/* Project Details */}
            <h4 className="text-lg font-bold mb-1">{project.title}</h4>
            <p className="text-sm text-[#888888]">{project.category}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
