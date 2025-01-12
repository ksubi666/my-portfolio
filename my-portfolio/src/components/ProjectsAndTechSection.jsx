import { dataWithImages } from '@/assets';
import { InfoCard } from './InfoCard';
import { ProjectCarousel } from './ProjectCarousel';
import { TechCard } from './TechCard';

const styles = { container: 'flex gap-10 w-full h-fit' };

export const ProjectsAndTechSection = () => {
  return (
    <div className={styles.container}>
      <InfoCard fourOfFive title={'Projects'}>
        <ProjectCarousel />
      </InfoCard>
      <InfoCard oneOfFive>
        <TechCard title={'Skills'} data={dataWithImages} />
      </InfoCard>
    </div>
  );
};
