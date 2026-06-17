import { BarChart2, Code2, Users } from 'lucide-react';

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="bg-white text-[#1F1F24] py-24 px-8 lg:px-24">
      <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 text-[#1F1F24]">
        Expertise
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Card 1 — Data Analysis */}
        <div className="border border-gray-200 p-10 flex flex-col items-start bg-white hover:shadow-lg transition-shadow">
          <BarChart2 className="w-10 h-10 mb-8 text-[#1F1F24]" strokeWidth={1.5} />
          <h3 className="text-2xl font-bold mb-2">Análise de Dados</h3>
          <h4 className="text-gray-500 mb-8 font-medium">Colab · Jupyter · Pandas · Scikit-learn</h4>
          <p className="text-gray-500 leading-relaxed text-sm">
            Experiência com análise e tratamento de dados utilizando Google Colab e Jupyter Notebook. 
            Domínio de bibliotecas como Pandas, NumPy e Matplotlib para exploração de dados, 
            além de Scikit-learn e TensorFlow para criação e treinamento de modelos de Machine Learning.
          </p>
        </div>

        {/* Card 2 — Development */}
        <div className="border border-gray-200 p-10 flex flex-col items-start bg-white hover:shadow-lg transition-shadow">
          <Code2 className="w-10 h-10 mb-8 text-[#1F1F24]" strokeWidth={1.5} />
          <h3 className="text-2xl font-bold mb-2">Desenvolvimento</h3>
          <h4 className="text-gray-500 mb-8 font-medium">Python · React · TypeScript</h4>
          <p className="text-gray-500 leading-relaxed text-sm">
            Desenvolvimento de aplicações com foco em Python para automação e back-end, 
            e React com TypeScript para construção de interfaces modernas e responsivas. 
            Experiência em projetos que integram front-end e lógica de dados de forma eficiente.
          </p>
        </div>

        {/* Card 3 — Soft Skills */}
        <div className="border border-gray-200 p-10 flex flex-col items-start bg-white hover:shadow-lg transition-shadow">
          <Users className="w-10 h-10 mb-8 text-[#1F1F24]" strokeWidth={1.5} />
          <h3 className="text-2xl font-bold mb-2">Liderança & Equipe</h3>
          <h4 className="text-gray-500 mb-8 font-medium">Organização · Comunicação · Gestão</h4>
          <p className="text-gray-500 leading-relaxed text-sm">
            Habilidade para organizar equipes, distribuir tarefas com clareza e manter o alinhamento 
            entre os membros do grupo. Perfil comunicativo e colaborativo, com experiência prática 
            em monitoria e projetos acadêmicos que exigem coordenação e entrega coletiva.
          </p>
        </div>
      </div>
    </section>
  );
}
