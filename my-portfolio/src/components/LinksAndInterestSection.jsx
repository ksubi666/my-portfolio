import { linksData } from '@/assets';
import { InfoCard } from './InfoCard';
import TechCard from './TechCard';

const styles = { container: 'flex gap-10 w-full min-h-[320px]' };

export const LinksAndInterestSection = () => {
  return (
    <div className={styles.container}>
      <InfoCard twoOfFour>
        <TechCard title={'Links'} data={linksData} links />
      </InfoCard>
      <InfoCard half title={'Interests'}></InfoCard>
    </div>
  );
};
