import { InfoCard } from './InfoCard';

const styles = { container: 'flex gap-10 w-full h-[700px]' };

export const ProjectsAndTechSection = () => {
  return (
    <div className={styles.container}>
      <InfoCard fourOfFive title={'Projects'}></InfoCard>
      <InfoCard oneOfFive title={'Tech Stack'}></InfoCard>
    </div>
  );
};
