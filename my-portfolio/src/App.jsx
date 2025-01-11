import './App.css';
import { InfoCard } from './components/InfoCard';
import { NameAndEduSection } from './components/NameAndEduSection';
import { ProjectsAndTechSection } from './components/ProjectsAndTechSection';

function App() {
  return (
    <div className="flex flex-col gap-10 min-h-screen w-full overflow-auto">
      <NameAndEduSection
        name={'Lkhagvadorj Sukhbat'}
        profession={'Full-Stack Developer'}
      />
      <ProjectsAndTechSection />
      <div className="flex gap-10 w-full h-[500px]">
        <InfoCard half title={''}></InfoCard>
        <InfoCard half title={''}></InfoCard>
      </div>
    </div>
  );
}

export default App;
