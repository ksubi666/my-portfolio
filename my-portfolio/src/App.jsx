import './App.css';
import { LinksAndInterestSection } from './components/LinksAndInterestSection';
import { NameAndEduSection } from './components/NameAndEduSection';
import { ProjectsAndTechSection } from './components/ProjectsAndTechSection';

const styles = {
  container: 'flex flex-col gap-10 min-h-screen w-full overflow-auto',
};

function App() {
  return (
    <div className={styles.container}>
      <NameAndEduSection
        name={'Lkhagvadorj Sukhbat'}
        profession={'Full-Stack Developer'}
      />
      <ProjectsAndTechSection />
      <LinksAndInterestSection />
    </div>
  );
}

export default App;
