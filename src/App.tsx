import { useState } from 'react';
import Header from './components/Header';
import ExpertiseSection from './components/ExpertiseSection';
import WorkSection from './components/WorkSection';
import ExperienceSection from './components/ExperienceSection';
import FreelanceSection from './components/FreelanceSection';
import ProjectModal from './components/ProjectModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="w-full bg-bg-primary text-text-primary">
      <Header />
      <ExpertiseSection />
      <WorkSection onOpenModal={openModal} />
      <ExperienceSection />
      <FreelanceSection />
      
      <ProjectModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
