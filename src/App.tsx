import { useState } from 'react';
import Header from './components/Header';
import ExpertiseSection from './components/ExpertiseSection';
import WorkSection from './components/WorkSection';
import ExperienceSection from './components/ExperienceSection';

import ProjectModal from './components/ProjectModal';
import type { Project } from './types/project';

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="w-full bg-bg-primary text-text-primary">
      <Header />
      <ExpertiseSection />
      <WorkSection onOpenModal={setSelectedProject} />
      <ExperienceSection />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}

export default App;
